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
  messageType: string;
};
const Notification: React.FC<TProps> = ({
  name,
  createdAt,
  messageImage,
  messageType,
}) => {
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
            <span>{messageType}</span>
          </UserDec>
        </UserInfo>
      </NotificationWrapper>
    </>
  );
};

export default Notification;
