import React, { useContext, useEffect, useRef, useState } from 'react';
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
import Bell from 'public/assets/icons/Bell';
import Favourite from 'public/assets/icons/FavouriteInactive';

import Notification from '../../ProfilePage/Notification';
import BackGroundImg from '../BackGroundImg';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from 'src/features/auth/AuthContext';
import { openModal } from 'src/features/modal';
import { formatDayJSTime } from 'src/utils';
import { InnerContainer } from 'styles/common.styles';
import {
  BellDropdown,
  BellWrapper,
  BellWrapperCard,
  Dashboard,
  EditProfileButton,
  Followers,
  PageSpacer,
  ProfileActions,
  ProfileButtons,
  ProfileInfo,
} from '../profile.styles';
import ProfileImage from '../ProfileImage';
import BasicInfo from './BasicInfo';

type TUserProps = {
  userId?: number;
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
  userId,
  children,
}) => {
  const { user } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [notifications, setNotifications] = useState<DocumentData>([]);
  // console.log(user);

  useEffect(() => {
    if (user?.email !== undefined && userId == (user?.id as number)) {
      const getNewNotification = async () => {
        const q = query(
          collection(db, 'notifications'),
          where('entityId', '==', user?.id),
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
  }, [user?.email, user?.id, userId]);

  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<any>(null);
  return (
    <Dashboard>
      <InnerContainer>
        <PageSpacer />
        <BackGroundImg
          backgroundImg={backgroundImg as string}
          membership={membership as string}
          ownerId={userId as number}
        />

        <ProfileInfo>
          <ProfileImage
            membership={membership}
            avatar={avatar}
            userType={userType}
            ownerId={userId as number}
          />
          <BasicInfo
            userType={userType}
            membership={membership}
            orgName={orgName}
            fullName={fullName}
            username={username}
            bio={bio}
            createdAt={createdAt}
            ownerId={userId as number}
          />
          <ProfileActions>
            <Followers>
              <span>{/* 1,4k */}</span> {/* followers */}
            </Followers>
            {userId == user?.id && (
              <>
                <EditProfileButton
                  onClick={() => dispatch(openModal('PROFILE_MODAL'))}
                >
                  Edit profile
                  <Pencil />
                </EditProfileButton>{' '}
                <ProfileButtons>
                  {/* <Link passHref href={`/account/timeline`}>
          <span className={router.asPath.includes('/timeline') ? 'active' : ''}>
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
                    className={`${dropdown ? 'active' : ''} ${
                      router.asPath.includes('/notifications') ? 'active' : ''
                    }`}
                  >
                    {notifications.length > 0 ? (
                      <BellWrapper onClick={() => setDropdown(!dropdown)}>
                        <Bell />
                        <span>{notifications.length}</span>
                      </BellWrapper>
                    ) : (
                      <Link passHref href={'/account/notifications'}>
                        <BellWrapper>
                          <Bell />
                        </BellWrapper>
                      </Link>
                    )}
                    {notifications.length > 0 && (
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
                              messageType: string;
                              createdAt: string;
                              messageImage: string;
                            }) => (
                              <Notification
                                key={item.id}
                                name={item.sender}
                                messageType={item.messageType}
                                createdAt={formatDayJSTime(item.createdAt)}
                                messageImage={item.messageImage}
                              />
                            )
                          )}
                        <Link passHref href={'/account/notifications'}>
                          <div className="seemore">
                            See all the notifications
                          </div>
                        </Link>
                      </BellDropdown>
                    )}
                  </BellWrapperCard>
                </ProfileButtons>
              </>
            )}
          </ProfileActions>
        </ProfileInfo>
        {children}
      </InnerContainer>
    </Dashboard>
  );
};

export default ProfileBase;
