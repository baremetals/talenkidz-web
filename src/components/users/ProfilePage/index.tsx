import React from 'react';
import { UsersPermissionsUser } from 'generated/graphql';

import Content from './PageContent';

import ProfileBase from './ProfileBase';

function Profile(props: { props: UsersPermissionsUser; userId: string }) {
  // console.log(props?.userId);

  return (
    <ProfileBase
      username={props?.props?.username}
      fullName={props?.props?.fullName as string}
      avatar={props?.props?.avatar as string}
      backgroundImg={props?.props?.backgroundImg as string}
      bio={props?.props?.bio as string}
      membership={props?.props?.membership as string}
      userType={props?.props?.userType as string}
      createdAt={props?.props?.createdAt as string}
      orgName={props?.props?.organisation?.name as string}
      userId={Number(props?.userId)}
    >
      <Content />
    </ProfileBase>
  );
}

export default Profile;
