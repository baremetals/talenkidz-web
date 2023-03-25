import React, { useState } from 'react';
import { UsersPermissionsUser } from 'generated/graphql';
import ProfileBase from '../ProfilePage/ProfileBase';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth/selectors';
import Tabs from '../Account/Tabs/Tabs';
import Account from './Account';
import Publishing from './Publishing';
import MembershipPayment from './MembershipPayment';
import Notifications from './Notifications';
import { Wrapper, Headers } from './styles';
import { Column, Row } from 'styles/common.styles';

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
  icon?: any;
}[];

const tabs: TabsType = [
  {
    label: 'Account ',
    index: 1,
    Component: Account,
  },
  {
    label: 'Publishing',
    index: 2,
    Component: Publishing,
  },
  {
    label: 'Notifications',
    index: 3,
    Component: Notifications,
  },
  {
    label: 'Membership and payment ',
    index: 4,
    Component: MembershipPayment,
  },
];

function SettingsPage(props: { props: UsersPermissionsUser }) {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
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
          <Column>
            <Headers>Settings</Headers>
            <Tabs
              selectedTab={selectedTab}
              onClick={setSelectedTab}
              tabs={tabs}
            />
          </Column>
        </Row>
      </Wrapper>
    </>
  );
}

export default SettingsPage;
