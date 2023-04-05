import React, { useContext, useEffect, useRef, useState } from 'react';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

// import { isUser } from 'src/features/auth';
import { useAppDispatch } from 'src/app/hooks';

import {
  collection,
  db,
  DocumentData,
  // limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'src/lib/firebase';

import Pencil from 'public/assets/icons/Pencil';
// import Heart from 'public/assets/icons/Heart';
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
  ProfileActions,
  ProfileBasicInfo,
  ProfileButtons,
  ProfileInfo,
} from '../profile.styles';
import { InnerContainer, Title, Text } from 'styles/common.styles';
import { upperCase } from 'src/utils';
import Link from 'next/link';
import { openModal } from 'src/features/modal';
import ProfileImage from '../ProfileImage';
import { useRouter } from 'next/router';
import { AuthContext } from 'src/features/auth/AuthContext';

type TUserProps = {
  username: string;
  fullName: string;
  orgName: string;
  avatar: string;
  backgroundImg: string;
  bio: string;
  membership: string;
  userType: string;
  createdAt: string;
  children: React.ReactNode;
};

const ProfileBase: React.FC<TUserProps> = ({
  username,
  fullName,
  orgName,
  avatar,
  backgroundImg,
  bio,
  membership,
  userType,
  createdAt,
  children,
}) => {
  const { user } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [notifications, setNotifications] = useState<DocumentData>([]);
  // console.log(user);

  useEffect(() => {
    if (user?.email !== undefined) {
      const getNewNotification = async () => {
        const q = query(
          collection(db, 'notifications'),
          where('recipientEmail', '==', user?.email),
          where('read', '==', false),
          orderBy('createdAt', 'desc')
          // limit(3)
        );
        // console.log(q);

        onSnapshot(q, (querySnapshot) => {
          const notices: React.SetStateAction<DocumentData> = [];
          querySnapshot.forEach((doc) => {
            // console.log(doc.id)
            notices.push({ id: doc.id, ...doc.data() });
          });
          setNotifications(notices);
        });
      };
      const listen = getNewNotification();
      return () => {
        listen;
      };
    }
  }, [user?.email]);

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
          <ProfileImage
            membership={membership}
            avatar={avatar}
            userType={userType}
          />
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
                  `${membership === 'premium' ? membership : 'Standard'} Member`
                )}
              </span>
              {userType === 'standard' && membership !== 'premium' ? (
                <Link href="/account/subscribe">get the Premium status</Link>
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
              {/* <Link passHref href={`/account/timeline`}>
                <span
                  className={
                    router.asPath.includes('/timeline') ? 'active' : ''
                  }
                >
                  <Heart />
                </span>
              </Link> */}
              <Link passHref href={`/account/bookmarks`}>
                <span
                  className={
                    router.asPath.includes('/bookmarks') ? 'active' : ''
                  }
                >
                  <Favourite />
                </span>
              </Link>
              <BellWrapperCard
                ref={dropdownRef}
                className={
                  `${dropdown ? 'active' : ''}` ||
                  router.asPath.includes('/notifications')
                    ? 'active'
                    : ''
                }
              >
                {notifications.length > 0 ? (
                  <BellWrapper onClick={() => setDropdown(!dropdown)}>
                    <Bell />
                    {notifications.length > 0 ? (
                      <span>{notifications.length}</span>
                    ) : null}
                  </BellWrapper>
                ) : (
                  <Link passHref href={'/account/notifications'}>
                    <BellWrapper onClick={() => setDropdown(!dropdown)}>
                      <Bell />
                    </BellWrapper>
                  </Link>
                )}

                <BellDropdown
                  className={`${dropdown ? 'opened' : ''}`}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <Notification
                    key={1}
                    name={'Andrew Swann'}
                    messageImage={''}
                    createdAt={'2 hours ago'}
                  />
                  <Notification
                    key={1}
                    name={'Andrew Swann'}
                    messageImage={''}
                    createdAt={'2 hours ago'}
                  />
                  <Notification
                    key={1}
                    name={'Andrew Swann'}
                    messageImage={''}
                    createdAt={'2 hours ago'}
                  />
                  <Link passHref href={'#'}>
                    <div className="seemore">See all the notifications</div>
                  </Link>
                </BellDropdown>

                {notifications.length > 0 ? (
                  <BellDropdown
                    className={`${dropdown ? 'opened' : ''}`}
                    onClick={() => setDropdown(!dropdown)}
                  >
                    {notifications
                      .slice(0, 3)
                      .map(
                        (item: {
                          id: string;
                          sender: string;
                          messageImage: string;
                          createdAt: { seconds: number };
                        }) => (
                          <Notification
                            key={item.id}
                            name={item.sender}
                            createdAt={dayjs
                              .unix(item.createdAt?.seconds)
                              .fromNow()}
                            messageImage={item.messageImage}
                          />
                        )
                      )}
                  </BellDropdown>
                ) : null}
              </BellWrapperCard>
            </ProfileButtons>
          </ProfileActions>
        </ProfileInfo>
        {children}
      </InnerContainer>
    </Dashboard>
  );
};

export default ProfileBase;
