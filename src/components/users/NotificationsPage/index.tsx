import React, { useEffect, useState } from 'react';
import { UsersPermissionsUser } from 'generated/graphql';
import ProfileBase from '../ProfilePage/ProfileBase';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth/selectors';
// import Sidebar from '../Account/Sidebar';
import Notification from '../../widgets/Notification';

import {
  collection,
  db,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'src/lib/firebase';

import {
  Wrapper,
  HeaderNotifications,
  NumberNotifications,
} from './notice.styles';
import { Column, Row } from 'styles/common.styles';

function NotificationsPage(props: { props: UsersPermissionsUser }) {
  const { user: user } = useAppSelector(isUser);
  // const [dropdown, setDropdown] = useState(false);
  // const dropdownRef = useRef<any>(null);
  const {
    username,
    fullName,
    // email,
    avatar,
    backgroundImg,
    bio,
    membership,
    userType,
    createdAt,
    organisation,
    // subscription,
  } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    props?.props;

    const [notifications, setNotifications] = useState<DocumentData>([]);
    // console.log(user);

    useEffect(() => {
      if (user?.email !== undefined) {
        const getNewNotification = async () => {
          const q = query(
            collection(db, 'notifications'),
            where('recipientEmail', '==', user?.email),
            orderBy('createdAt', 'desc'),
            limit(10)
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
      // eslint-disable-next-line react/no-children-prop
      // children={undefined}
    >
      <Wrapper>
        <Row>
          <Column className="column-7">
            <HeaderNotifications>
              Notifications{' '}
              {notifications.length > 0 ? (
                <NumberNotifications>
                  {notifications.length}
                </NumberNotifications>
              ) : null}
            </HeaderNotifications>
            {notifications.length > 0? <Notification
              notifications={notifications}
            />: null}
            
          </Column>
          <Column className="column-5">{/* <Sidebar /> */}</Column>
        </Row>
      </Wrapper>
    </ProfileBase>
  );
}

export default NotificationsPage;
