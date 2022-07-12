import React, { useState } from 'react'

import { UsersPermissionsUser } from 'generated/graphql';
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { 
    Row,
    Column, 
    Text,
    InnerContainer,
    Title,
    Widget,
    WidgetTitle,
    WidgetBody,
    WidgetText,
    WidgetHeader,
    WidgetHeaderLink
} from 'styles/common.styles';

import { 
    Dashboard, 
    ProfileCoverImage,
    UserProfileImage,
    ProfileBasicInfo,
    ProfileActions,
    ProfileInfo,
    ProfileButtons,
    SendButton,
    ActiveUsers,
    Image,
    ActiveUsersCounter,
    ProfileContent,
    FollowButton,
    PhotoGallery,
    VideoGallery
} from './profile.styles';
import { Card } from './Card'
import { ShareCard } from './ShareCard'

import { BookMarkBorder } from '../../../public/assets/icons/BookMarkBorder'
import { BriefcaseBorder } from '../../../public/assets/icons/BriefcaseBorder'
import { Send } from '../../../public/assets/icons/Send'
import { Plus } from '../../../public/assets/icons/Plus'

function Profile(props: { props: UsersPermissionsUser }) {
    const { user: user } = useAppSelector(isUser);
    // const [dropdown, setDropdown] = useState(false)

    const { username, fullName, avatar, backgroundImg, createdAt } = props?.props


    return (
        <>
            <NavBar />
            
            <Dashboard>
                <ProfileCoverImage src={backgroundImg as string} alt='Profile Banner' />
                <InnerContainer>
                    <ProfileInfo>
                        <UserProfileImage src={avatar as string} alt='user profile' />
                        <ProfileBasicInfo>
                            <Title style={{fontSize: '1.75rem', marginBottom: '.75rem', lineHeight: 1}}>{fullName || username}</Title>
                            <Text style={{marginBottom: '1.5625rem', lineHeight: 1}}>Joined: {dayjs(createdAt).fromNow()}</Text>
                            <Text style={{marginBottom: '0.75rem', lineHeight: 1, fontSize: '.875rem', display: 'flex', alignItems: 'center'}}>
                                <BriefcaseBorder />
                                Model at NEXT Model Management
                            </Text>
                            <Text style={{marginBottom: '0.75rem', fontSize: '.875rem', lineHeight: 1, display: 'flex', alignItems: 'center'}}>
                                <BookMarkBorder />
                                Studies Public Relations at Caucasus Universiry
                            </Text>
                        </ProfileBasicInfo>
                        <ProfileActions>
                            <ProfileButtons>
                                <SendButton><Send /> Write a Message</SendButton>
                                <FollowButton><Plus />Follow</FollowButton>
                            </ProfileButtons>
                            <ActiveUsers>
                                <Image src='/user-profile.jpg' alt='' />
                                <Image src='/user-profile.jpg' alt='' />
                                <Image src='/user-profile.jpg' alt='' />
                                <Image src='/user-profile.jpg' alt='' />
                                <ActiveUsersCounter>+5</ActiveUsersCounter>
                            </ActiveUsers>
                        </ProfileActions>
                    </ProfileInfo>
                    <ProfileContent>
                        <Row className='g-10'>
                            <Column className='col' style={{maxWidth: '24.438rem', paddingRight: '0.6875rem'}} >
                                <Widget>
                                    <WidgetHeader>
                                        <WidgetTitle>
                                            Bio
                                        </WidgetTitle>
                                        <WidgetHeaderLink href="#">
                                            Know More
                                        </WidgetHeaderLink>
                                    </WidgetHeader>
                                    <WidgetBody>
                                        <WidgetText>
                                            Mathilda Mariam Gavrliani - Georgian
                                            <br />
                                            <br />
                                            @lookmodelsmanagement
                                            <br />
                                            @nextmodels
                                            <br />
                                            munichmodels
                                            <br />
                                            unomodels
                                            <br />
                                            elite_copenhagen
                                        </WidgetText>
                                    </WidgetBody>
                                </Widget>
                                <Widget>
                                    <WidgetHeader>
                                        <WidgetTitle>
                                            Photos
                                        </WidgetTitle>
                                        <WidgetHeaderLink href="#">
                                            See all
                                        </WidgetHeaderLink>
                                    </WidgetHeader>
                                    <WidgetBody>
                                        <PhotoGallery>
                                            <Image src='/Photos.jpg' alt='' />
                                            <Image src='/Photos.jpg' alt='' />
                                            <Image src='/Photos.jpg' alt='' />
                                            <Image src='/Photos.jpg' alt='' />
                                            <Image src='/Photos.jpg' alt='' />
                                            <Image src='/Photos.jpg' alt='' />
                                        </PhotoGallery>
                                    </WidgetBody>
                                </Widget>
                                <Widget>
                                <WidgetHeader>
                                        <WidgetTitle>
                                            Videos
                                        </WidgetTitle>
                                        <WidgetHeaderLink href="#">
                                            See all
                                        </WidgetHeaderLink>
                                    </WidgetHeader>
                                    <WidgetBody>
                                        <VideoGallery>
                                            <Image src='/video.jpg' alt='' />
                                            <Image src='/video.jpg' alt='' />
                                        </VideoGallery>
                                    </WidgetBody>
                                </Widget>
                            </Column>
                            <Column className='col' style={{paddingLeft: '0.6875rem'}}>
                                {user?.username === username && <>
                                    <ShareCard avatar={user?.avatar as string}/>
                                </>}
                                <Card avatar={user?.avatar as string} username={user?.username as string} body={''} createdAt={''} content={''}/>
                                
                            </Column>
                        </Row>
                    </ProfileContent>

                </InnerContainer>
            </Dashboard>

            {/* <Footer /> */}
        </>
    );
}

export default Profile;
