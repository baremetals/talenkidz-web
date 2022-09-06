import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import { Organisation, UsersPermissionsUser } from 'generated/graphql';

import NavBar from 'components/NavBar';
import TabPanel from 'components/TabPanel';
import MyProfile from './MyProfile';
import OrgProfile from './OrgProfile';
import BillingInfo from './BillingInfo';

import { Row, InnerContainer, Column } from 'styles/common.styles';

import {
  Image,
  ImageActions,
  ImageWrapper,
  ActionButton,
  InnerSidebar,
  Navigation,
  TabContent,
} from './editProfile.styles';

import { BsTrash } from 'react-icons/bs';
import { Edit } from '../../../public/assets/icons/Edit';

type Props = {
  user: UsersPermissionsUser
}

type orgProps = {
  user: Organisation
}

type mixProps = Props | orgProps
const menuItems = ['#profile', '#billing']

const EditProfile = ({ user }: mixProps) => {
  const { user: usr } = useAppSelector(isUser);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    if (location.hash && menuItems.indexOf(location.hash) !== -1) {
      setActiveTab(menuItems.indexOf(location.hash))
    }
  }, []);

  const onTabChange = (_: SyntheticEvent, tabIndex: number) => {
    setActiveTab(tabIndex);
    location.hash = menuItems[tabIndex];
  };

  const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  return (
    <>
      <NavBar />
      <InnerContainer>
        <TabContent>
          <Row className='g-10'>
            <Column className='col' style={{maxWidth: '18rem', paddingRight: '0.6875rem'}}>
              <InnerSidebar>
                <ImageWrapper>
                  <div className="overlay"></div>
                  {usr?.userType === 'candidate' && <Image src={usr?.avatar} alt="profile picture"  />}
                  {usr?.userType === 'organisation' && <Image src={usr?.logo } alt="profile picture" />}
                  <ImageActions>
                    <ActionButton>
                      <Edit />
                    </ActionButton>
                    <ActionButton>
                      <BsTrash />
                    </ActionButton>
                  </ImageActions>
                </ImageWrapper>
                <Navigation>
                  <Tabs
                    orientation="vertical"
                    value={activeTab}
                    onChange={onTabChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="My Profile" />
                    {/* <Tab label="Billing Info" /> */}
                  </Tabs>
                </Navigation>
              </InnerSidebar>
            </Column>
            <Column className='col' style={{paddingLeft: '0.6875rem'}}>
              <TabPanel value={activeTab} index={0} {...a11yProps(1)}>
                {usr?.userType === 'organisation' && <OrgProfile user={user as Organisation} />}
                {usr?.userType === 'candidate' && <MyProfile user={user as UsersPermissionsUser} />}
                
              </TabPanel>
              <TabPanel value={activeTab} index={1} {...a11yProps(2)}>
                {/* <BillingInfo user={user} /> */}
              </TabPanel>
            </Column>
          </Row>
        </TabContent>
      </InnerContainer>
    </>
  );
};

export default EditProfile;
