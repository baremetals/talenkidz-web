import React, { useRef, useState } from 'react'
import Image from 'next/image';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { isUser } from 'src/features/auth';
import { useAppSelector, useAppDispatch } from 'src/app/hooks';



import Pencil from 'public/assets/icons/Pencil';
import Heart from 'public/assets/icons/Heart';
import Favourite from 'public/assets/icons/FavouriteInactive';
import Bell from 'public/assets/icons/Bell';


import Notification from '../../ProfilePage/Notification';
import BackGroundImg from '../BackGroundImg';

import {
  AccountStatus,
  BellDropdown,
  BellWrapper,
  BellWrapperCard,
  Dashboard,
  EditProfileButton,
  Followers,
  PageSpacer,
  Premium,
  ProfileActions,
  ProfileBasicInfo,
  ProfileButtons,
  ProfileInfo,
  UserProfileImage,
  UserProfileImageBlock,
  EditIconButton,
} from '../profile.styles';
import { InnerContainer, Title, Text } from 'styles/common.styles';
import { upperCase } from 'src/utils';
import Link from 'next/link';
import { openModal } from 'src/features/modal';


type TUserProps = {
  username: string;
  fullName: string;
  avatar: string;
  backgroundImg: string;
  bio: string;
  membership: string;
  userType: string;
  createdAt: string;
  children: React.ReactNode
};

const ProfileBase: React.FC<TUserProps> = ({
  username,
  fullName,
  avatar,
  backgroundImg,
  bio,
  membership,
  userType,
  createdAt,
  children,
}) => {
  const { user: user } = useAppSelector(isUser);
  const dispatch = useAppDispatch();

  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<any>(null);
  return (
    <Dashboard>
      <InnerContainer>
        <PageSpacer />
        <BackGroundImg
          backgroundImg={backgroundImg as string}
          membership={membership as string}
        />

        <ProfileInfo>
          <UserProfileImageBlock
            className={membership === 'premium' ? 'premiumStatus' : ''}
          >
            <UserProfileImage
              src={avatar as string}
              alt="user profile"
              // width={200}
              // height={200}
            />
            {userType === 'organisation' && (
              <Premium className="premium-tag">
                <Image
                  src="/assets/svgs/premium.svg"
                  alt="premium"
                  width={30}
                  height={20}
                />
              </Premium>
            )}
            <EditIconButton htmlFor="inputTag" className="EditButton">
              <Pencil />
              <input id="inputTag" className="inputTag" type="file" />
            </EditIconButton>
          </UserProfileImageBlock>
          <ProfileBasicInfo>
            <Title
              style={{
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '20px',
                lineHeight: '29px',
              }}
            >
              {fullName || username}
            </Title>
            {userType === 'organisation' && (
              <Text
                style={{
                  marginBottom: '10px',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: 1,
                  color: '#373737',
                }}
              >
                Organisation
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
                  `${membership === 'premium' ? membership : 'Standard'} Member`
                )}
              </span>
              {userType === 'standard' && membership !== 'premium' ? (
                <a href="#">get the Premium status</a>
              ) : null}
            </AccountStatus>
          </ProfileBasicInfo>
          <ProfileActions>
            <Followers>
              <span>{/* 1,4k */}</span> {/* followers */}
            </Followers>
            <EditProfileButton
              onClick={() => dispatch(openModal('PROFILE_MODAL'))}
            >
              Edit profile
              <Pencil />
            </EditProfileButton>
            <ProfileButtons>
              <Link passHref href={`/account/liked-content`}>
                <span>
                  <Heart />
                </span>
              </Link>
              <Link passHref href={`/account/articles`}>
                <span>
                  <Favourite />
                </span>
              </Link>
              <BellWrapperCard
                ref={dropdownRef}
                className={`${dropdown ? 'active' : ''}`}
              >
                <BellWrapper onClick={() => setDropdown(!dropdown)}>
                  <Bell />
                  <span>3</span>
                </BellWrapper>
                <BellDropdown
                  className={`${dropdown ? 'opened' : ''}`}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <Notification />
                  <Notification />
                  <Notification />
                </BellDropdown>
              </BellWrapperCard>
            </ProfileButtons>
          </ProfileActions>
        </ProfileInfo>
        {children}
      </InnerContainer>
    </Dashboard>
  );
};

export default ProfileBase