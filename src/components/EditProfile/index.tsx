import React, { useMemo, useState } from 'react';
import Link from "next/link";

import NavBar from 'components/NavBar';

import { UsersPermissionsUser } from 'generated/graphql';
import { Row, InnerContainer } from 'styles/common.styles';

import { Menu, MenuLink } from './editProfile.styles';

import MyProfile from './MyProfile';
import BillingInfo from './BillingInfo';

type Props = {
  user: UsersPermissionsUser
}


const EditProfile = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState<string>('#profile');

  const changeTab = (tab: string) => {
    history.pushState(null, '', tab)
    setSelectedTab(tab);
  }

  return (
    <>
      <NavBar />
      <InnerContainer>
        <Menu>
          <MenuLink
            onClick={() => changeTab('#profile')}
            isActive={selectedTab === '#profile'}
          >
            My Profile
          </MenuLink>
          <MenuLink
            onClick={() => changeTab('#billing')}
            isActive={selectedTab === '#billing'}
          >
            Billing Info
          </MenuLink>
        </Menu>
        <Row className='g-10'>
          { selectedTab === '#billing' && <BillingInfo user={props.user} /> }
          { selectedTab === '#profile' && <MyProfile user={props.user} /> }
        </Row>
      </InnerContainer>
    </>
  );
};

export default EditProfile;