import React, { useState, useRef } from 'react';
// import Image from 'next/image'
import { UsersPermissionsUser } from 'generated/graphql';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import ArticleCard from 'components/content/Articles/ArticleCard';
import NavBar from 'components/Layout/NavBar';
import { Row, Column, Text, InnerContainer, Title } from 'styles/common.styles';

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
  BookmarkBlock,
  BoomarkItem,
  BookmarkDropdown,
  BookmarkList,
  BookmarkWrapper,
  BookmarkListWrapper,
} from '../ProfilePage/profile.styles';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth/selectors';
import Pencil from 'public/assets/icons/Pencil';
import Heart from 'public/assets/icons/Heart';
import Favourite from 'public/assets/icons/FavouriteInactive';
import Bell from 'public/assets/icons/Bell';

import PencilTwo from 'public/assets/icons/PencilTwo';
import Notification from '../ProfilePage/Notification';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';
import Link from 'next/link';

function BookmarkPage(props: { props: UsersPermissionsUser }) {
  const { user: user } = useAppSelector(isUser);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowns, setDropdowns] = useState(false);
  const dropdownRef = useRef<any>(null);
  const { username, fullName, avatar, backgroundImg, bio } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    props?.props;
  const dispatch = useAppDispatch();

  return (
    <div style={{ background: '#F4F4F4', paddingBottom: '100px' }}>
      <NavBar />
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
              <EditCoverButton>
                Edit the cover asas{' '}
                <span>
                  <PencilTwo />
                </span>
              </EditCoverButton>
            </div>
          </ProfileCoverWrapper>
          <ProfileInfo>
            <UserProfileImage
              src={avatar as string}
              alt="user profile"
              // width={200}
              // height={200}
            />
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
              <Text
                style={{
                  marginBottom: '10px',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: 1,
                  color: '#373737',
                }}
              >
                Virginia Commonwealth University
              </Text>
              <Text
                style={{
                  marginBottom: '10px',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: 1,
                  color: '#373737',
                }}
              >
                Customer
              </Text>
              <AccountStatus>
                <span>Standard</span>
                <a href="#">get the Premium status</a>
              </AccountStatus>
            </ProfileBasicInfo>
            <ProfileActions>
              <Followers>
                <span onClick={() => dispatch(openModal('PROFILE_MODAL'))}>
                  1,4k
                </span>{' '}
                followers
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
                  <span className="active">
                    <Favourite />
                  </span>
                </Link>
                <BellWrapperCard
                  className={`${dropdown ? 'active' : ''}`}
                  ref={dropdownRef}
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
          <BookmarkBlock>
            <Row className="row">
              <Column className="column-7">
                <div className="BreadcrumbsBookmark">
                  <h2>All the savings</h2>
                  <span className="cricle"></span>
                  <span className="category">Articles</span>
                </div>
                <div className="ArticleRow">
                  <ArticleCard
                    key={'1'}
                    id={'11'}
                    authorImg={''}
                    authorName={'Ally Blackmay'}
                    articleTitle={'Raise good Humans'}
                    articleIntro={
                      'What I learned when my kids said college wasn’t for them'
                    }
                    articleImage={''}
                    readingTime={'9 min read'}
                    createdAt={'Mar 8'}
                    category={'Self-development'}
                    slug={'Self-development'}
                  />
                  <ArticleCard
                    key={'1'}
                    id={'11'}
                    authorImg={''}
                    authorName={'Ally Blackmay'}
                    articleTitle={'Raise good Humans'}
                    articleIntro={
                      'What I learned when my kids said college wasn’t for them'
                    }
                    articleImage={''}
                    readingTime={'9 min read'}
                    createdAt={'Mar 8'}
                    category={'Self-development'}
                    slug={'Self-development'}
                  />
                </div>
              </Column>
              <Column className="column-5">
                <BookmarkListWrapper>
                  <BookmarkList>
                    <BoomarkItem>
                      <Link href={'/articles'}>All the savings</Link>
                    </BoomarkItem>
                    <BoomarkItem className="active">
                      <Link href={'/articles'}>Articles</Link>
                    </BoomarkItem>
                    <BoomarkItem>
                      <Link href={'/articles'}>Events</Link>
                    </BoomarkItem>
                    <BoomarkItem>
                      <Link href={'/articles'}>Activities</Link>
                    </BoomarkItem>
                  </BookmarkList>
                </BookmarkListWrapper>
              </Column>
            </Row>
          </BookmarkBlock>
        </InnerContainer>
      </Dashboard>
    </div>
  );
}

export default BookmarkPage;
