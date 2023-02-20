import React, { useState, useRef } from 'react';
// import Image from 'next/image'
import { UsersPermissionsUser } from 'generated/graphql';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

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
  AccountStatus,
  Followers,
  EditProfileButton,
  BellWrapper,
  PageSpacer,
  EditCoverButton,
  ProfileCoverWrapper,
  // FollowButton,
  // PhotoGallery,
  // VideoGallery
  BellWrapperCard,
  BellDropdown,
  BookmarkWrapper,
  BoomarkItem,
  BookmarkDropdown,
  UserProfileImageBlock,
  Premium,
} from './profile.styles';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth/selectors';
import Pencil from 'public/assets/icons/Pencil';
import Heart from 'public/assets/icons/Heart';
import Favourite from 'public/assets/icons/FavouriteInactive';
import Bell from 'public/assets/icons/Bell';
import PencilTwo from 'public/assets/icons/PencilTwo';
import Notification from '../ProfilePage/Notification';
// import { Card } from './Card'
// import { ShareCard } from './ShareCard'

// import { BookMarkBorder } from '../../../public/assets/icons/BookMarkBorder'
// import { BriefcaseBorder } from '../../../public/assets/icons/BriefcaseBorder'
// import { Send } from '../../../public/assets/icons/Send'
// import { Plus } from '../../../public/assets/icons/Plus'
import Content from './Content';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';
import Link from 'next/link';
import Image from 'next/image';
import { upperCase } from 'src/utils';

function Profile(props: { props: UsersPermissionsUser }) {
  const { user: user } = useAppSelector(isUser);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowns, setDropdowns] = useState(false);
  const dropdownRef = useRef<any>(null);
  const {
    username,
    fullName,
    avatar,
    backgroundImg,
    bio,
    membership,
    userType,
    createdAt,
  } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    props?.props;
  const dispatch = useAppDispatch();
  console.log(props.props);

  return (
    <Dashboard>
      <InnerContainer>
        <PageSpacer />
        <ProfileCoverWrapper>
          <ProfileCoverImage
            src={backgroundImg as string}
            alt="Profile Banner"
            // width={1466.36}
            // height={300}
          />
          <div className="actions">
            <EditCoverButton htmlFor="inputTag">
              Edit the cover
              <span>
                <PencilTwo />
              </span>
              <input id="inputTag" className="inputTag" type="file" />
            </EditCoverButton>
          </div>
        </ProfileCoverWrapper>
        <ProfileInfo>
          <UserProfileImageBlock
            className={membership === 'premium' ? 'premiumStatus' : ''}
          >
            <UserProfileImage
              src={avatar as string}
              alt="user profile"
              // width={200}
              // height={200}
            />
            {userType === 'organisation' && (
              <Premium className="premium-tag">
                <Image
                  src="/assets/svgs/premium.svg"
                  alt="premium"
                  width={30}
                  height={20}
                />
              </Premium>
            )}
          </UserProfileImageBlock>
          <ProfileBasicInfo>
            <Title
              style={{
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '20px',
                lineHeight: '29px',
              }}
            >
              {fullName || username}
            </Title>
            {userType === 'organisation' && (
              <Text
                style={{
                  marginBottom: '10px',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: 1,
                  color: '#373737',
                }}
              >
                Organisation
              </Text>
            )}

            <Text
              style={{
                marginBottom: '10px',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: 1,
                color: '#373737',
              }}
            >
              {'Member Since: '}
              {dayjs(createdAt).fromNow()}
            </Text>
            <AccountStatus>
              <span>
                {upperCase(
                  `${membership === 'premium' ? membership : 'Standard'} Member`
                )}
              </span>
              {userType === 'standard' && membership !== 'premium' ? (
                <a href="#">get the Premium status</a>
              ) : null}
            </AccountStatus>
          </ProfileBasicInfo>
          <ProfileActions>
            <Followers>
              <span>{/* 1,4k */}</span> {/* followers */}
            </Followers>
            <EditProfileButton
              onClick={() => dispatch(openModal('PROFILE_MODAL'))}
            >
              Edit profile
              <Pencil />
            </EditProfileButton>
            <ProfileButtons>
              <Link passHref href={`/account/liked-content`}>
                <span>
                  <Heart />
                </span>
              </Link>
              <Link passHref href={`/account/articles`}>
                <span>
                  <Favourite />
                </span>
              </Link>
              <BellWrapperCard
                ref={dropdownRef}
                className={`${dropdown ? 'active' : ''}`}
              >
                <BellWrapper onClick={() => setDropdown(!dropdown)}>
                  <Bell />
                  <span>3</span>
                </BellWrapper>
                <BellDropdown
                  className={`${dropdown ? 'opened' : ''}`}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <Notification />
                  <Notification />
                  <Notification />
                </BellDropdown>
              </BellWrapperCard>
            </ProfileButtons>
          </ProfileActions>
        </ProfileInfo>
        {/* Old Profile UI */}
        <ProfileContent>
          <Row className="g-10">
            <Column
              className="col"
              style={{ maxWidth: '24.438rem', paddingRight: '0.6875rem' }}
            >
              <Widget>
                <WidgetHeader>
                  <WidgetTitle>Bio</WidgetTitle>
                  {/* <WidgetHeaderLink href="#">Know More</WidgetHeaderLink> */}
                </WidgetHeader>
                <WidgetBody>
                  <WidgetText>{bio}</WidgetText>
                </WidgetBody>
              </Widget>
            </Column>
            <Column className="col" style={{ paddingLeft: '0.6875rem' }}>
              {user?.username === username && (
                <>{/* <ShareCard avatar={user?.avatar as string}/> */}</>
              )}
              {/* <Card
                  avatar={user?.avatar as string}
                  username={user?.username as string}
                  body={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  }
                  createdAt={'2022-07-08T12:58:51.512Z'}
                  content={
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAKlBMVEXg4OD////j4+Pd3d36+vri4uLw8PDs7Oz29vb09PTa2tr5+fnm5ubx8fF4aKZkAAABUUlEQVR4nO3Z246CMBRAUWjBgQ78/+8OeMVR4E0TzlovJpUY3DnBglUFAAAAAAAAAAAAAAAAAAAAAAAAAMAh5DZtq/K3T/HTclfv6YNFyf1ukro+ffssPyvX9bg9BtMg/cYalKnJz06TU93EazK/tENa+eJRm+Rxump0K0cEbXI6X0q7t189aJN8/X1p3x4Ru8nwWO7uQxO0Sbk2eax2j51a0CbVcNma3UejW2xfozbJqZley22tW+7pozapcinleUruUcI2Wa4sbgrnKLGbpPPC033yFCV0k2ben/x/dNDnwE1yM2/aXp+mlMBN5iR18/qAKW6T85S8FbfJapKwTdanJHCT9SSaaDLT5NWlSWrXpMh7tpW3g97v9CkN61LqwjUZN64lNzv/AB1O2f+/eCz7H3MspeRtJVwSAAAAAAAAAAAAAAAAAAAAAAAAAICj+gOmbQmv8zyqjAAAAABJRU5ErkJggg=='
                  }
                /> */}
            </Column>
          </Row>
        </ProfileContent>
        <Content />
      </InnerContainer>
    </Dashboard>
  );
}

export default Profile;
