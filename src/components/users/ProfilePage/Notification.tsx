import React from 'react';
import {
  NotificationWrapper,
  User,
  UserInfo,
  UserName,
  UserDec,
} from './profile.styles';
import Image from 'next/image';

const Notification = () => {
  return (
    <>
      <NotificationWrapper>
        <User>
          <Image
            src={'/assets/images/user3.png'}
            alt="User logo"
            width={50}
            height={50}
          />
        </User>
        <UserInfo>
          <UserName>
            Andrew Swann <span>2 hours ago</span>
          </UserName>
          <UserDec>
            liked your article <span>“Raise good Humans”</span>
          </UserDec>
        </UserInfo>
      </NotificationWrapper>
    </>
  );
};

export default Notification;
