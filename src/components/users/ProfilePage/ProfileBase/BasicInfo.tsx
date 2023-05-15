import React, { useContext } from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import { upperCase } from 'src/utils';
import { Text, Title } from 'styles/common.styles';
import { AccountStatus, ProfileBasicInfo } from '../profile.styles';
import Link from 'next/link';
import { AuthContext } from 'src/features/auth/AuthContext';

type TBasicInfoProps = {
  userType: string;
  membership: string;
  orgName: string;
  fullName: string;
  username: string;
  bio: string;
  createdAt: string;
  ownerId: number;
};
const BasicInfo: React.FC<TBasicInfoProps> = ({
  userType,
  orgName,
  membership,
  fullName,
  username,
  bio,
  createdAt,
  ownerId,
}) => {
  const { user } = useContext(AuthContext);
  return (
    <ProfileBasicInfo>
      <Title
        style={{
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '20px',
          lineHeight: '29px',
        }}
      >
        {userType === 'organisation'
          ? orgName || fullName || username
          : fullName || username}
      </Title>
      {userType === 'organisation' ? (
        <Text
          style={{
            marginBottom: '20px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1,
            color: '#373737',
          }}
        >
          Organisation
        </Text>
      ) : (
        <Text
          style={{
            marginBottom: '20px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1,
            color: '#373737',
          }}
        >
          {bio}
        </Text>
      )}

      <Text
        style={{
          marginBottom: '10px',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: 1,
          color: '#373737',
        }}
      >
        {'Member Since: '}
        {dayjs(createdAt).fromNow()}
      </Text>
      <AccountStatus>
        <span>
          {upperCase(
            `${membership !== 'basic' ? membership : 'Standard'} Member`
          )}
        </span>
        {userType === 'standard' && membership === 'basic' && (ownerId == user?.id as number) ? (
          <Link href="/account/subscribe">upgrade to premium</Link>
        ) : null}
      </AccountStatus>
    </ProfileBasicInfo>
  );
};

export default BasicInfo