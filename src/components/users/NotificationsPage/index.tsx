import React from 'react';
import { UsersPermissionsUser } from 'generated/graphql';
import ProfileBase from '../ProfilePage/ProfileBase';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth/selectors';
import Sidebar from '../Account/Sidebar';
import Notification from '../../widgets/Notification';

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
    email,
    avatar,
    backgroundImg,
    bio,
    membership,
    userType,
    createdAt,
    organisation,
    subscription,
  } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    props?.props;
  return (
    <>
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
        children={undefined}
      ></ProfileBase>
      <Wrapper>
        <Row>
          <Column className="column-7">
            <HeaderNotifications>
              Notifications <NumberNotifications>6</NumberNotifications>
            </HeaderNotifications>
            <Notification />
          </Column>
          <Column className="column-5">
            <Sidebar />
          </Column>
        </Row>
      </Wrapper>
    </>
  );
}

export default NotificationsPage;
