import React from 'react';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';
import MyProfile from './MyProfile';
import OrgProfile from './OrgProfile';


export default function ProfileInformationModal() {
  const { user: user } = useAppSelector(isUser);
  // console.log(user)

  return (
    <>
    {user?.userType === 'standard' ? (<MyProfile />) : (<OrgProfile />)}
    </>

  );
}
