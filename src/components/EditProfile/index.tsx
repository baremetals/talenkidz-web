import React, { useEffect, useMemo, useState } from 'react';

import NavBar from 'components/NavBar';

import { UsersPermissionsUser } from 'generated/graphql';
import { Row, InnerContainer } from 'styles/common.styles';

import { Menu, MenuLink, TabContent } from './editProfile.styles';

import MyProfile from './MyProfile';
import BillingInfo from './BillingInfo';

type Props = {
  user: UsersPermissionsUser
}

const EditProfile = (props: Props) => {
  const [selectedTabHash, setSelectedTabHash] = useState<string|null>(null)

  useEffect(() => {
    if (location.hash) setSelectedTabHash(location.hash)
  }, [])

  const changeTab = (tab: string) => {
    history.pushState(null, '', tab)
    setSelectedTabHash(tab);
  }

  return (
    <>
      <NavBar />
      <InnerContainer>
        <Row className='g-10'>
          <Menu>
            <MenuLink
              onClick={() => changeTab('#profile')}
              isActive={!selectedTabHash || selectedTabHash === '#profile'}
            >
              My Profile
            </MenuLink>
            <MenuLink
              onClick={() => changeTab('#billing')}
              isActive={selectedTabHash === '#billing'}
            >
              Billing Info
            </MenuLink>
          </Menu>
        </Row>
        <TabContent>
          <Row className='g-10'>
            { selectedTabHash === '#billing' && <BillingInfo user={props.user} /> }
            { (!selectedTabHash || selectedTabHash === '#profile') && <MyProfile user={props.user} /> }
          </Row>
        </TabContent>
      </InnerContainer>
    </>
  );
};

export default EditProfile;