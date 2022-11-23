// eslint-disable-next-line no-unused-vars
import React, { useState, BaseSyntheticEvent, SetStateAction, ChangeEvent } from 'react';
import { FormData } from "formdata-node";
import axios from "axios";

import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { UsersPermissionsUser } from 'generated/graphql';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  EditProfileTab,
  HeaderLine,
  PersonalInformationForm,
  FormItem,
  FormGroup,
  SubmitButton,
  CoverPictureUploaderWrapper,
  Image,
  Label,
  CoverPictureWrapper,
  ImageActions,
  ActionButton,
  NoCoverPictureWrapper,
  SelectCoverPictureButton,
  EditButton
} from './editProfile.styles';

import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { Edit } from '../../../../public/assets/icons/Edit';
import { toBase64 } from '../../../utils/base64';

type Props = {
  user: UsersPermissionsUser
}

export type FileType = {
  lastModified: any;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

const MyProfile = ({ user }: Props) => {
  const [fullName, setFullName] = useState<string>(user.fullName || '');
  const [username, setUsername] = useState<string>(user.username || '');
  const [pronoun, setPronoun] = useState<string>(user.pronoun || 'test');
  const [gender, setGender] = useState<string>(user.gender || '');
  const [bio, setBio] = useState<string>(user.bio || 'lake');
  const [backgroundImg, setBackgroundImg] = useState<FileType | string>(user?.backgroundImg as string || '');
  const [uploadImg, setUploadImg] = useState<FileType | null>(null);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState<boolean>(false);

  const handleImgChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const base64 = await toBase64(event.target.files[0]);
    setBackgroundImg(base64);
    setUploadImg(event.target.files[0] as any);
    // console.log(event)
  }
  // console.log(user)

  const handleSubmit = async () => {

    // console.log(uploadImg)

    if (uploadImg !== null) {
      setLoading(true)
      let form = new FormData()
      form.append('file', uploadImg, uploadImg?.name)
      try {
        const res = await axios(`/api/upload`, {
          method: "post",
          headers: {
            Accept: 'multipart/form-data',
          },
          data: form as any,
        });
        // console.log(res)

        if (res?.data?.content?.url) {
          const data = {
            fullName,
            username,
            pronoun,
            bio,
            gender,
            backgroundImg: res?.data?.content?.url,
          }
          console.log(data)

          const dta = await axios.post('/api/user/update', {
            data
          })
          console.log(dta)
          if (dta.status === 200) {
            setUploadImg(null);
            setLoading(false)
            toast.success(dta?.data?.message, { position: "top-center", })
          } else {
            setLoading(false)
            await axios.post('/api/upload/delete', {
              data: { id: res?.data?.content?.id }
            })
            toast.error('Issue updating details', { position: "top-center", })
          }

        } else {
          setLoading(false)
          toast.error('Issue uploading image', { position: "top-center", })
        }

      } catch (err) {
        console.log(err);
        setLoading(false)
        toast.error('issues from mars come back later', { position: "top-center", })
      }
    } else {
      const data = {
        fullName,
        username,
        pronoun,
        bio,
        gender,
        backgroundImg
      }
      try {
        const dta = await axios.post('/api/user/update', {
          data
        })

        if (dta.status === 200) {
          setUploadImg(null);
          setLoading(false)
          toast.success(dta?.data?.message, { position: "top-center", })
        } else {
          setLoading(false)
          toast.error('Issue updating details', { position: "top-center", })
        }

      } catch (err) {
        setLoading(false)
        toast.error('Something went wrong please try again later', { position: "top-center", })
      }
    }
  }

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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <FormGroup>
            <FormItem>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormItem>
            <FormItem>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  value={gender}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value as SetStateAction<string>)}
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'Rather not say'}>Rather not say</MenuItem>
                </Select>
              </FormControl>
            </FormItem>
            <FormItem>
              <FormControl fullWidth>
                <InputLabel>Pronoun</InputLabel>
                <Select
                  labelId="pronoun-select-label"
                  value={pronoun}
                  label="Pronoun"
                  onChange={(e) => setPronoun(e.target.value as SetStateAction<string>)}
                >
                  <MenuItem value={'Him/He'}>Him/He</MenuItem>
                  <MenuItem value={'Her/She'}>Her/She</MenuItem>
                  <MenuItem value={'Miss'}>Mrs</MenuItem>
                  <MenuItem value={'Ms'}>Ms</MenuItem>
                  <MenuItem value={'Sir'}>Sir</MenuItem>
                </Select>
              </FormControl>
            </FormItem>
          </FormGroup>
          <CoverPictureUploaderWrapper>
            <Label>Cover Picture</Label>
            <TextField
              style={{ display: 'none' }}
              fullWidth
              type="file"
            />
            { backgroundImg ? (
              <>
                <CoverPictureWrapper>
                  <div className="overlay"></div>
                  <Image src={backgroundImg as string} alt="User cover picture" />
                  <ImageActions>
                    <ActionButton>
                      <EditButton htmlFor="upload-bg-photo">
                        <input
                          style={{ display: "none" }}
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
                      style={{ display: "none" }}
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
            ) }
          </CoverPictureUploaderWrapper>
          <TextField
            label="Bio"
            multiline
            fullWidth
            rows={4}
            value={user.bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <SubmitButton type="button" onClick={() => handleSubmit()}>Save Changes</SubmitButton>
        </PersonalInformationForm>
      </EditProfileTab>
      <ToastContainer />
    </>
  );
};

export default MyProfile;
