// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { FormData } from 'formdata-node';
import { ChangeEvent, useState } from 'react';

import { TextField } from '@mui/material';
import { UsersPermissionsUser } from 'generated/graphql';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ActionButton,
  CoverPictureUploaderWrapper,
  CoverPictureWrapper,
  EditButton,
  EditProfileTab,
  FormGroup,
  FormItem,
  HeaderLine,
  Image,
  ImageActions,
  Label,
  NoCoverPictureWrapper,
  PersonalInformationForm,
  SelectCoverPictureButton,
  SubmitButton,
} from './editProfile.styles';

import Spinner from 'components/utilities/Spinner';
import { Edit } from 'public/assets/icons/Edit';
import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { toBase64 } from 'src/utils/base64';

type Props = {
  user: UsersPermissionsUser;
};

export type FileType = {
  lastModified: any;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const MyProfile = ({ user }: Props) => {
  const [backgroundImg, setBackgroundImg] = useState<FileType | string>(
    (user?.backgroundImg as string) || ''
  );
  const [uploadImg, setUploadImg] = useState<FileType | null>(null);

  const [profile, setProfile] = useState({
    fullName: user.fullName || '',
    username: user.username || '',
    pronoun: user.pronoun || '',
    gender: user.gender || '',
    bio: user.bio || 'lake',
  });
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);

  const handleImgChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const base64 = await toBase64(event.target.files[0]);
    setBackgroundImg(base64);
    setUploadImg(event.target.files[0] as any);
    // console.log(event)
  };
  // console.log(user)

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    // console.log(uploadImg)
    if (uploadImg !== null) {
      setLoading(true);
      let form = new FormData();
      form.append('file', uploadImg, uploadImg?.name);
      try {
        const res = await axios(`/api/upload`, {
          method: 'post',
          headers: {
            Accept: 'multipart/form-data',
          },
          data: form as any,
        });
        // console.log(res)

        if (res?.data?.content?.url) {
          const data = {
            fullName: profile?.fullName,
            username: profile?.username,
            pronoun: profile?.pronoun,
            bio: profile?.bio,
            gender: profile?.gender,
            backgroundImg: res?.data?.content?.url,
          };
          console.log(data);

          const dta = await axios.post('/api/user/update', {
            data,
          });
          console.log(dta);
          if (dta.status === 200) {
            setUploadImg(null);
            setLoading(false);
            toast.success(dta?.data?.message, { position: 'top-center' });
          } else {
            setLoading(false);
            await axios.post('/api/upload/delete', {
              data: { id: res?.data?.content?.id },
            });
            toast.error('Issue updating details', { position: 'top-center' });
          }
        } else {
          setLoading(false);
          toast.error('Issue uploading image', { position: 'top-center' });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error('issues from mars come back later', {
          position: 'top-center',
        });
      }
    } else {
      const data = {
        fullName: profile?.fullName,
        username: profile?.username,
        pronoun: profile?.pronoun,
        bio: profile?.bio,
        gender: profile?.gender,
        backgroundImg,
      };
      try {
        const dta = await axios.post('/api/user/update', {
          data,
        });

        if (dta.status === 200) {
          setUploadImg(null);
          setLoading(false);
          toast.success(dta?.data?.message, { position: 'top-center' });
        } else {
          setLoading(false);
          toast.error('Issue updating details', { position: 'top-center' });
        }
      } catch (err) {
        setLoading(false);
        toast.error('Something went wrong please try again later', {
          position: 'top-center',
        });
      }
    }
  };

  return (
    <>
      <EditProfileTab>
        <h3>Personal Information</h3>
        <HeaderLine />
        <PersonalInformationForm onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            name="fullName"
            value={profile?.fullName}
            onChange={handleChange}
          />
          <FormGroup>
            <FormItem>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                value={profile?.username}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem>
              {/* <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  value={gender}
                  label="Gender"
                  onChange={(e) =>
                    setGender(e.target.value as SetStateAction<string>)
                  }
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'Rather not say'}>Rather not say</MenuItem>
                </Select>
              </FormControl> */}
              <TextField
                fullWidth
                label="Gender"
                variant="outlined"
                name="gender"
                value={profile?.gender}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem>
              <TextField
                fullWidth
                label="Gender"
                variant="outlined"
                name="pronoun"
                value={profile?.pronoun}
                onChange={handleChange}
              />
            </FormItem>
          </FormGroup>
          <CoverPictureUploaderWrapper>
            <Label>Cover Picture</Label>
            <TextField style={{ display: 'none' }} fullWidth type="file" />
            {backgroundImg ? (
              <>
                <CoverPictureWrapper>
                  <div className="overlay"></div>
                  <Image
                    src={backgroundImg as string}
                    alt="User cover picture"
                  />
                  <ImageActions>
                    <ActionButton>
                      <EditButton htmlFor="upload-bg-photo">
                        <input
                          style={{ display: 'none' }}
                          id="upload-bg-photo"
                          name="upload-bg-photo"
                          type="file"
                          onChange={(e) => handleImgChange(e)}
                        />
                        <Edit />
                      </EditButton>
                    </ActionButton>
                    <ActionButton onClick={() => setBackgroundImg('')}>
                      <BsTrash />
                    </ActionButton>
                  </ImageActions>
                </CoverPictureWrapper>
              </>
            ) : (
              <NoCoverPictureWrapper>
                <EditButton htmlFor="upload-bg-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-bg-photo"
                    name="upload-bg-photo"
                    type="file"
                    onChange={(e) => handleImgChange(e)}
                  />
                  <SelectCoverPictureButton>
                    <BsCloudArrowUp />
                    Select a cover picture
                  </SelectCoverPictureButton>
                </EditButton>
              </NoCoverPictureWrapper>
            )}
          </CoverPictureUploaderWrapper>
          <TextField
            label="Bio"
            multiline
            fullWidth
            rows={4}
            value={user.bio}
            onChange={handleChange}
          />
          <SubmitButton type="button" onClick={() => handleSubmit()}>
            {loading ? 'Saving...' : 'Save Changes'}
            {loading && (
              <Spinner
                style={{
                  position: 'relative',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                }}
              />
            )}
          </SubmitButton>
        </PersonalInformationForm>
      </EditProfileTab>
      <ToastContainer />
    </>
  );
};

export default MyProfile;
