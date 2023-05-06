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


  const [notifications, setNotifications] = useState<DocumentData>([]);
  // console.log(user.email);

  useEffect(() => {
    if (user?.email !== undefined) {
      const getNewNotification = async () => {
        const q = query(
          collection(db, 'notifications'),
          where('entityId', '==', user?.id),
          orderBy('createdAt', 'desc'),
          limit(10)
        );
        // console.log(q);

        onSnapshot(q, (querySnapshot) => {
          const notices: React.SetStateAction<DocumentData> = [];
          querySnapshot.forEach((doc) => {
            // console.log(typeof doc.createdAt)
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
  }, [user?.email, user?.id]);
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
      // eslint-disable-next-line react/no-children-prop
      // children={undefined}
    >
      <Wrapper>
        <Row>
          <Column className="column-7">
            <HeaderNotifications>
              Notifications
              {notifications.length > 0 ? (
                <NumberNotifications>
                  {notifications.length}
                </NumberNotifications>
              ) : null}
            </HeaderNotifications>

            <Notification notifications={notifications} />

            {/* {notifications.length > 0 ? (
              <Notification notifications={notifications} />
            ) : null} */}
          </Column>
          <Column className="column-5">{/* <Sidebar /> */}</Column>
        </Row>
      </Wrapper>
    </ProfileBase>
  );
}

export default NotificationsPage;
