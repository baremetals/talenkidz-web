import React from 'react';

import { UsersPermissionsUser } from 'generated/graphql';
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import NavBar from 'components/Layout/NavBar';
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
} from 'styles/common.styles';

import {
    Dashboard,
    ProfileCoverImage,
    UserProfileImage,
    ProfileBasicInfo,
    ProfileActions,
    ProfileInfo,
    ProfileButtons,
    // SendButton,
    // ActiveUsers,
    // Image,
    // ActiveUsersCounter,
    ProfileContent,
    // FollowButton,
    // PhotoGallery,
    // VideoGallery
} from './profile.styles';
// import { Card } from './Card'
// import { ShareCard } from './ShareCard'

// import { BookMarkBorder } from '../../../public/assets/icons/BookMarkBorder'
// import { BriefcaseBorder } from '../../../public/assets/icons/BriefcaseBorder'
// import { Send } from '../../../public/assets/icons/Send'
// import { Plus } from '../../../public/assets/icons/Plus'

function Profile(props: { props: UsersPermissionsUser }) {
    const { user: user } = useAppSelector(isUser);

    // eslint-disable-next-line no-unsafe-optional-chaining
    const { username, fullName, avatar, backgroundImg, createdAt, bio } = props?.props

    return (
        <>
            <NavBar />

            <Dashboard>
                <ProfileCoverImage src={backgroundImg as string} alt='Profile Banner' />
                <InnerContainer>
                    <ProfileInfo>
                        <UserProfileImage src={avatar as string} alt='user profile' />
                        <ProfileBasicInfo>
                            <Title style={{ fontSize: '1.75rem', marginBottom: '.75rem', lineHeight: 1 }}>{fullName || username}</Title>
                            <Text style={{ marginBottom: '1.5625rem', lineHeight: 1 }}>Joined: {dayjs(createdAt).fromNow()}</Text>
                            {/* <Text style={{marginBottom: '0.75rem', lineHeight: 1, fontSize: '.875rem', display: 'flex', alignItems: 'center'}}>
                                <BriefcaseBorder />
                                Model at NEXT Model Management
                            </Text> */}
                            {/* <Text style={{marginBottom: '0.75rem', fontSize: '.875rem', lineHeight: 1, display: 'flex', alignItems: 'center'}}>
                                <BookMarkBorder />
                                Studies Public Relations at Caucasus Universiry
                            </Text> */}
                        </ProfileBasicInfo>
                        <ProfileActions>
                            <ProfileButtons>
                                {/* <SendButton><Send /> Write a Message</SendButton>
                                <FollowButton><Plus />Follow</FollowButton> */}
                            </ProfileButtons>
                            {/* <ActiveUsers>
                                <Image src='/user-profile.jpg' alt='' />
                                <Image src='/user-profile.jpg' alt='' />
                                <Image src='/user-profile.jpg' alt='' />
                                <Image src='/user-profile.jpg' alt='' />
                                <ActiveUsersCounter>+5</ActiveUsersCounter>
                            </ActiveUsers> */}
                        </ProfileActions>
                    </ProfileInfo>
                    <ProfileContent>
                        <Row className='g-10'>
                            <Column className='col' style={{ maxWidth: '24.438rem', paddingRight: '0.6875rem' }} >
                                <Widget>
                                    <WidgetHeader>
                                        <WidgetTitle>
                                            Bio
                                        </WidgetTitle>
                                        {/* <WidgetHeaderLink href="#">
                                            Know More
                                        </WidgetHeaderLink> */}
                                    </WidgetHeader>
                                    <WidgetBody>
                                        <WidgetText>
                                            {bio}
                                        </WidgetText>
                                    </WidgetBody>
                                </Widget>
                                {/* <Widget>
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
                                </Widget> */}
                                {/* <Widget>
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
                                </Widget> */}
                            </Column>
                            <Column className='col' style={{ paddingLeft: '0.6875rem' }}>
                                {user?.username === username && <>
                                    {/* <ShareCard avatar={user?.avatar as string}/> */}
                                </>}
                                {/* <Card
                                    avatar={user?.avatar as string}
                                    username={user?.username as string}
                                    body={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                                    createdAt={'2022-07-08T12:58:51.512Z'}
                                    content={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAKlBMVEXg4OD////j4+Pd3d36+vri4uLw8PDs7Oz29vb09PTa2tr5+fnm5ubx8fF4aKZkAAABUUlEQVR4nO3Z246CMBRAUWjBgQ78/+8OeMVR4E0TzlovJpUY3DnBglUFAAAAAAAAAAAAAAAAAAAAAAAAAMAh5DZtq/K3T/HTclfv6YNFyf1ukro+ffssPyvX9bg9BtMg/cYalKnJz06TU93EazK/tENa+eJRm+Rxump0K0cEbXI6X0q7t189aJN8/X1p3x4Ru8nwWO7uQxO0Sbk2eax2j51a0CbVcNma3UejW2xfozbJqZley22tW+7pozapcinleUruUcI2Wa4sbgrnKLGbpPPC033yFCV0k2ben/x/dNDnwE1yM2/aXp+mlMBN5iR18/qAKW6T85S8FbfJapKwTdanJHCT9SSaaDLT5NWlSWrXpMh7tpW3g97v9CkN61LqwjUZN64lNzv/AB1O2f+/eCz7H3MspeRtJVwSAAAAAAAAAAAAAAAAAAAAAAAAAICj+gOmbQmv8zyqjAAAAABJRU5ErkJggg=='}
                                /> */}

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
