import React, { useState } from 'react';
import { TextField } from '@mui/material';

import { UsersPermissionsUser } from 'generated/graphql';
import { Column } from 'styles/common.styles';

import {
  Image,
  ImageActions,
  ImageWrapper,
  ActionButton,
  PersonalInformation,
  HeaderLine,
  PersonalInformationForm
} from './editProfile.styles';

import { BsTrash } from 'react-icons/bs';
import { Edit } from '../../../public/assets/icons/Edit';

// import avatar from '../../../public/assets/avatar.jpeg';

type Props = {
  user: UsersPermissionsUser
}

const MyProfile = ({ user }: Props) => {
  const [fullName, setFullName] = useState(user.fullName);
  const [username, setUsername] = useState(user.username);

  return (
    <>
      <Column className='col' style={{maxWidth: '18rem', paddingRight: '0.6875rem'}}>
        <ImageWrapper>
          <Image src={user.avatar!} alt="profile picture"  />
          <ImageActions>
            <ActionButton>
              <Edit />
            </ActionButton>
            <ActionButton>
              <BsTrash />
            </ActionButton>
          </ImageActions>
        </ImageWrapper>
      </Column>
      <Column className='col' style={{paddingLeft: '0.6875rem'}}>
        <PersonalInformation>
          <h3>Personal Information</h3>
          <HeaderLine />
          <PersonalInformationForm>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </PersonalInformationForm>
        </PersonalInformation>
      </Column>
    </>
  );
};

export default MyProfile;