import React, { useState } from 'react'
// import Link from 'next/link';

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
} from 'styles/common.styles';
import Button from 'components/Auth/Button';

import { 
    Dashboard, 
    ProfileCoverImage,
    UserProfileImage,
    ProfileInfo,
    
    // UserName,
    // UserDescription,

    ProfileButtons,
    SendButton,
    ActiveUsers,
    // Image,

    ProfileContent,
} from './profile.styles';
import { Card } from './Card'
import { ShareCard } from './ShareCard'

import { BookMarkBorder } from '../../../public/assets/icons/BookMarkBorder'
import { BriefcaseBorder } from '../../../public/assets/icons/BriefcaseBorder'
import { Send } from '../../../public/assets/icons/Send'




function Profile(props: { props: UsersPermissionsUser }) {
    const { user: user } = useAppSelector(isUser);
    // const [dropdown, setDropdown] = useState(false)

    // console.log(props?.props)

    const { username, fullName, avatar, backgroundImg, createdAt } = props?.props


    return (
        <>
            <NavBar />
            
            <Dashboard>
                <ProfileCoverImage src={backgroundImg as string} alt='Profile Banner' />
                <InnerContainer>
                    <ProfileInfo>
                        <Row>
                            <Column style={{maxWidth: '12.5rem'}}>
                                <UserProfileImage src={avatar as string} alt='user profile' />
                            </Column>
                            <Column>
                                <Title style={{fontSize: '1.75rem', marginBottom: '.75rem'}}>{fullName || username}</Title>
                                <Text style={{ marginBottom: '1rem' }}>Joined: {dayjs(createdAt).fromNow()}</Text>
                                <Text style={{marginBottom: '.5rem', fontSize: '.875rem'}}>
                                    <BriefcaseBorder />
                                    Model at NEXT Model Management
                                </Text>
                                <Text style={{marginBottom: '.5rem', fontSize: '.875rem'}}>
                                    {/* <BookMarkBorder />
                                    Studies Public Relations at Caucasus Universiry */}
                                </Text>
                            </Column>
                            <Column style={{textAlign: 'end'}}>
                                <ProfileButtons>
                                    <SendButton><Send /> Write a Message</SendButton>
                                    <Button content='+ Follow' />
                                </ProfileButtons>
                                <ActiveUsers>
                                    {/* <Image src='/user-profile.jpg' alt='' />
                                    <Image src='/user-profile.jpg' alt='' />
                                    <Image src='/user-profile.jpg' alt='' />
                                    <Image src='/user-profile.jpg' alt='' />
                                    <Image src='/user-profile.jpg' alt='' /> */}
                                </ActiveUsers>
                            </Column>
                        </Row>
                    </ProfileInfo>
                    <ProfileContent>
                        <Row className='g-10'>
                            <Column className='col' style={{maxWidth: '24rem'}}>
                                <Widget>
                                    <WidgetTitle>
                                        Bio
                                    </WidgetTitle>
                                    <WidgetBody>
                                        <Text style={{marginBottom: '1rem', fontSize: '.875rem'}}>Mathilda Mariam Gavrliani - Georgian</Text>
                                    </WidgetBody>
                                </Widget>
                                {/* <Widget>
                                    <WidgetTitle>
                                        Photos
                                        <Link href={'#'}>
                                            <u style={{fontSize: '.875rem', fontWeight: 'normal', marginLeft: 'auto'}}>See all</u>
                                        </Link>
                                    </WidgetTitle>
                                    <WidgetBody>
                                        <Row className='g-6'>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '33.33% !important'}}><Image src='/Photos.jpg' alt='' /></Column>
                                        </Row>
                                    </WidgetBody>
                                </Widget> */}
                                {/* <Widget>
                                    <WidgetTitle>
                                        Videos
                                        <Link href={'#'}>
                                            <u style={{fontSize: '.875rem', fontWeight: 'normal', marginLeft: 'auto'}}>See all</u>
                                        </Link>
                                    </WidgetTitle>
                                    <WidgetBody>
                                        <Row className='g-6'>
                                            <Column className='col' style={{minWidth: '100%'}}><Image src='/video.jpg' alt='' /></Column>
                                            <Column className='col' style={{minWidth: '100%'}}><Image src='/video.jpg' alt='' /></Column>
                                        </Row>
                                    </WidgetBody>
                                </Widget> */}
                            </Column>
                            <Column className='col'>
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
