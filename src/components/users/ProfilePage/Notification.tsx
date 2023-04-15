import React from 'react';
import {
  NotificationWrapper,
  User,
  UserInfo,
  UserName,
  UserDec,
} from './profile.styles';
import Image from 'next/image';

type TProps = {
  name: string;
  createdAt: string;
  messageImage: string;
};
const Notification: React.FC<TProps> = ({ name, createdAt, messageImage }) => {
  return (
    <>
      <NotificationWrapper>
        <User>
          <Image
            src={messageImage || '/assets/images/user3.png'}
            alt="User logo"
            width={50}
            height={50}
          />
        </User>
        <UserInfo>
          <UserName>
            {name}
            <span>{createdAt}</span>
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
