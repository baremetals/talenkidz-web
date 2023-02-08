import React, { ChangeEvent, SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { UsersPermissionsUser } from 'generated/graphql';
import { FormData } from "formdata-node";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from 'components/Layout/NavBar';
import TabPanel from 'components/Layout/TabPanel';
import MyProfile from './MyProfile';
import OrgProfile from './OrgProfile';
// import BillingInfo from './BillingInfo';

import { Row, InnerContainer, Column } from 'styles/common.styles';

import {
  Image,
  ImageActions,
  ImageWrapper,
  ActionButton,
  InnerSidebar,
  Navigation,
  TabContent,
  ProfilePicturePlaceHolder,
  EditButton
} from './editProfile.styles';

import { BsTrash } from 'react-icons/bs';
import { Edit } from 'public/assets/icons/Edit';
import Spinner from 'components/utilities/Spinner';
import { AuthContext } from 'src/features/auth/AuthContext';
import { handleImgChange } from 'src/utils';

type Props = {
  user: UsersPermissionsUser
}

const menuItems = ['#profile', '#billing']

const EditProfile = ({ user }: Props) => {
  const { user: usr } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [profileImg, setDisplayImg] = useState<string| null>(user?.avatar as string);
  const [uploadImg, setUploadImg] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // console.log(user);
  useEffect(() => {
    if (location.hash && menuItems.indexOf(location.hash) !== -1) {
      setActiveTab(menuItems.indexOf(location.hash))
    }
  }, []);


  const onTabChange = (_: SyntheticEvent, tabIndex: number) => {
    setActiveTab(tabIndex);
    location.hash = menuItems[tabIndex];
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log('we here');
    const res = await handleImgChange({ event, setUploadImg, setDisplayImg });
    if (res?.error) {
      console.log('my - niggerrrrr!', res.error);
    }
  };

  const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const uploadProfileImage = async () => {
    // console.log('reactive baby');  
    // console.log(uploadImg)

    if (uploadImg !== null) {
      setLoading(true)
      let form = new FormData()
      form.append('file', uploadImg, uploadImg?.name)
      try {
        const res = await axios(`/api/upload`, {
          method: "post",
          headers: {
            Accept: 'multipart/form-data',
          },
          data: form as any,
        });

        // console.log('the response from the server: ',res)

        if (res?.data?.content?.url) {
          setDisplayImg(res?.data?.content?.url);

          const data = {
            imagefile: res?.data?.content?.url,
            flag: "profileImage"
          }
          
          if (usr?.userType === "organisation") {
            await axios.post('/api/org/update', {
              data
            })
          }
          

          const dta = await axios.post('/api/user/update', {
          data
        })
          console.log(dta)
          if (dta.status === 200) {
            setUploadImg(null);
            setLoading(false)
            toast.success(dta?.data?.message, { position: "top-left", })
          } else {
            setLoading(false)
            await axios.post('/api/upload/delete',{
              data: { id: res?.data?.content?.id}
            })
            toast.error('Issue updating image', { position: "top-left", })
          }

        } else {
          setLoading(false)
          toast.error('Issue uploading image', { position: "top-left", })
        }

      } catch (err) {
        // console.log(err);
        setLoading(false)
        toast.error('issues from mars come back later', { position: "top-left", })
      }
    } else {
      toast.error('Please upload an image first.', { position: "top-left", })
    }
    
  };
  return (
    <>
      <NavBar />
      <InnerContainer>
        <TabContent>
          <Row className="g-10">
            <Column
              className="col"
              style={{ maxWidth: '18rem', paddingRight: '0.6875rem' }}
            >
              <InnerSidebar>
                <ImageWrapper>
                  <div className="overlay"></div>
                  {profileImg && (
                    <Image src={profileImg} alt="profile picture" />
                  )}
                  {!profileImg && (
                    <ProfilePicturePlaceHolder>
                      No profile picture yet.
                    </ProfilePicturePlaceHolder>
                  )}
                  <ImageActions>
                    <ActionButton>
                      <EditButton htmlFor="upload-profile-photo">
                        <input
                          style={{ display: 'none' }}
                          id="upload-profile-photo"
                          name="upload-profile-photo"
                          type="file"
                          onChange={(e) => handleImageChange(e)}
                        />
                        <Edit />
                      </EditButton>
                    </ActionButton>
                    <ActionButton onClick={() => setDisplayImg('')}>
                      {/* <ActionButton> */}
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
                    <Tab
                      label={loading ? 'updating image...' : 'My Profile >'}
                      onClick={() => uploadProfileImage()}
                    ></Tab>
                    {/* <Tab label="Billing Info" /> */}
                    {loading && (
                      <Spinner
                        style={{
                          position: 'relative',
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                        }}
                      />
                    )}
                  </Tabs>
                </Navigation>
              </InnerSidebar>
            </Column>
            <Column className="col" style={{ paddingLeft: '0.6875rem' }}>
              <TabPanel value={activeTab} index={0} {...a11yProps(1)}>
                {usr?.userType === 'organisation' && (
                  <OrgProfile user={user as UsersPermissionsUser} />
                )}
                {usr?.userType === 'candidate' && (
                  <MyProfile user={user as UsersPermissionsUser} />
                )}
              </TabPanel>
              <TabPanel value={activeTab} index={1} {...a11yProps(2)}>
                {/* <BillingInfo user={user} /> */}
              </TabPanel>
            </Column>
          </Row>
        </TabContent>
      </InnerContainer>
      <ToastContainer />
    </>
  );
};

export default EditProfile;
