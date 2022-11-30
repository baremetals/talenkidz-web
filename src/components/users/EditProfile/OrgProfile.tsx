/* eslint-disable no-unused-vars */
import React, { useState, BaseSyntheticEvent, SetStateAction, ChangeEvent } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { FormData } from "formdata-node";
import { Organisation, UsersPermissionsUser } from 'generated/graphql';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from 'components/utilities/Spinner';
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
import { Edit } from 'public/assets/icons/Edit';
import { toBase64 } from 'src/utils/base64';
import { FileType } from './MyProfile';
import axios from 'axios';

type Props = {
    user: Organisation
}

const OrgProfile = ({ user }: Props) => {
    const [backgroundImg, setBackgroundImg] = useState<any>(
      user?.profile?.data?.attributes?.backgroundImg || ''
    );
    const [uploadImg, setUploadImg] = useState<FileType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const [profile, setProfile] = useState({
      orgName: user.name || '',
      username: user.slug || '',
      email: user?.profile?.data?.attributes?.email || '',
      website: user.website || '',
      bio: user.bio || '',
      organisationType: user.organisationType || '',
    });

    const handleImgChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) return;
        const base64 = await toBase64(event.target.files[0]);
        setBackgroundImg(base64);
        setUploadImg(event.target.files[0] as any);
    }

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //   console.log(e.target.value);
      setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // console.log(user)
    const handleSubmit = async () => {
        
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
                      username: profile?.username,
                      backgroundImg: res?.data?.content?.url,
                      name: profile.orgName,
                      email: profile?.email,
                      organisationType: profile?.organisationType,
                      bio: profile?.bio,
                      website: profile?.website,
                    };
                    // console.log(data)

                    const dta = await axios.post('/api/user/update', {
                        data
                    })
                    // console.log(dta)
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
            console.log('iam going of boy')
            try {
                const data = {
                  name: profile?.orgName,
                  username: profile?.username,
                  email: profile?.email,
                  organisationType: profile?.organisationType,
                  bio: profile?.bio,
                  website: profile?.website,
                  backgroundImg,
                };
            const res = await axios.post('/api/org/update', {
                data
            })
            console.log('data', res)
                if (res.status === 200) {
                    setUploadImg(null);
                    setLoading(false)
                    toast.success(res?.data?.message, { position: "top-center", })
                } else {
                    setLoading(false)
                    toast.error('Issue updating details', { position: "top-center", })
                }
            } catch (e) {
                console.log(e)
            }
        }

        // console.log('data', data)
    }

    return (
      <>
        <EditProfileTab>
          <h3>Personal Information</h3>
          <HeaderLine />
          <PersonalInformationForm onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Organisation Name"
              variant="outlined"
              name="orgName"
              value={profile?.orgName}
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
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  disabled
                  value={profile?.email}
                  onChange={handleChange}
                />
              </FormItem>
              <FormItem>
                <TextField
                  fullWidth
                  label="organisationType"
                  variant="outlined"
                  name="organisationType"
                  value={profile?.organisationType}
                  onChange={handleChange}
                />
              </FormItem>
              <FormItem>
                <TextField
                  fullWidth
                  label="Website"
                  variant="outlined"
                  name="website"
                  value={profile?.website}
                  onChange={handleChange}
                />
              </FormItem>
              {/* <FormItem>
                            <FormControl fullWidth>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    labelId="gender-select-label"
                                    value={user.gender}
                                    label="Gender"
                                    onChange={(e) => setGender(e.target.value as SetStateAction<string>)}
                                >
                                    <MenuItem value={'M'}>Male</MenuItem>
                                    <MenuItem value={'F'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </FormItem> */}
              {/* <FormItem>
                            <FormControl fullWidth>
                                <InputLabel>Pronoun</InputLabel>
                                <Select
                                    labelId="pronoun-select-label"
                                    value={user.pronoun}
                                    label="Pronoun"
                                    onChange={(e) => setPronoun(e.target.value as SetStateAction<string>)}
                                >
                                    <MenuItem value={'Mr'}>Mr.</MenuItem>
                                    <MenuItem value={'Mrs'}>Mrs</MenuItem>
                                    <MenuItem value={'Miss'}>Mrs</MenuItem>
                                    <MenuItem value={'Ms'}>Ms</MenuItem>
                                    <MenuItem value={'Sir'}>Sir</MenuItem>
                                </Select>
                            </FormControl>
                        </FormItem> */}
            </FormGroup>
            <CoverPictureUploaderWrapper>
              <Label>Cover Picture</Label>
              <TextField style={{ display: 'none' }} fullWidth type="file" />
              {backgroundImg ? (
                <>
                  <CoverPictureWrapper>
                    <div className="overlay"></div>
                    <Image src={backgroundImg} alt="User cover picture" />
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
              name="bio"
              value={profile?.bio}
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

export default OrgProfile;
