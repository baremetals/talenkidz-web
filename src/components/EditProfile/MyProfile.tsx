import React, { useState, BaseSyntheticEvent } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

import { UsersPermissionsUser } from 'generated/graphql';

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
  SelectCoverPictureButton
} from './editProfile.styles';

import { BsCloudArrowUp, BsTrash } from 'react-icons/bs';
import { Edit } from '../../../public/assets/icons/Edit';

type Props = {
  user: UsersPermissionsUser
}

const MyProfile = ({ user }: Props) => {
  const [fullName, setFullName] = useState<string>(user.fullName);
  const [username, setUsername] = useState<string>(user.username);
  const [pronoun, setPronoun] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [bio, setBio] = useState<string>('');

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const data = {
      fullName,
      username,
      pronoun,
      bio,
      gender
    }

    console.log('data', data)
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
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={'M'}>Male</MenuItem>
                  <MenuItem value={'F'}>Female</MenuItem>
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
                  onChange={(e) => setPronoun(e.target.value)}
                >
                  <MenuItem value={'Mr'}>Mr.</MenuItem>
                  <MenuItem value={'Mrs'}>Mrs</MenuItem>
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
            { user.backgroundImg ? (
              <>
                <CoverPictureWrapper>
                  <div className="overlay"></div>
                  <Image src={user.backgroundImg} alt="User cover picture" />
                  <ImageActions>
                    <ActionButton>
                      <Edit />
                    </ActionButton>
                    <ActionButton>
                      <BsTrash />
                    </ActionButton>
                  </ImageActions>
                </CoverPictureWrapper>
              </>
            ) : (
              <NoCoverPictureWrapper>
                <SelectCoverPictureButton>
                  <BsCloudArrowUp />
                  Select a cover picture
                </SelectCoverPictureButton>
              </NoCoverPictureWrapper>
            ) }
          </CoverPictureUploaderWrapper>
          <TextField
            label="Bio"
            multiline
            fullWidth
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <SubmitButton>Save Changes</SubmitButton>
        </PersonalInformationForm>
      </EditProfileTab>
    </>
  );
};

export default MyProfile;