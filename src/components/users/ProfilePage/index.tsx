import React from 'react';
import { UsersPermissionsUser } from 'generated/graphql';

import Content from './Content';

import ProfileBase from './ProfileBase';

function Profile(props: { props: UsersPermissionsUser }) {
  const {
    username,
    fullName,
    avatar,
    backgroundImg,
    bio,
    membership,
    userType,
    createdAt,
    organisation
  } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    props?.props;
    // console.log(props?.props)

  return (
    <ProfileBase
      username={username}
      fullName={fullName as string}
      avatar={avatar as string}
      backgroundImg={backgroundImg as string}
      bio={bio as string}
      membership={membership as string}
      userType={userType as string}
      createdAt={createdAt as string}
      orgName={organisation?.name as string}
    >
      <Content />
    </ProfileBase>
  );
}

export default Profile;
