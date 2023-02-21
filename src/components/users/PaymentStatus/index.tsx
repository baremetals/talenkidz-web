import React, { useState, useRef } from 'react';
// import Image from 'next/image'
import { UsersPermissionsUser } from 'generated/graphql';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import Image from 'next/image';
import NavBar from 'components/Layout/NavBar';
import { Row, Column, Text, InnerContainer, Title } from 'styles/common.styles';
import Link from 'next/link';
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
  Premium,
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
  PaymentStatusCard,
  PaymentStatusWrapper,
  UserProfileImageBlock,
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

import Button from 'components/users/Auth/Button';
// import { UserProfileWapper } from 'components/utilities/Modal/modal.styles';

function LikedPage(props: { props: UsersPermissionsUser }) {
  const { user: user } = useAppSelector(isUser);
  const [dropdown, setDropdown] = useState(false);
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
            <UserProfileImageBlock className="premiumStatus">
              <UserProfileImage
                src={avatar as string}
                alt="user profile"
                // width={200}
                // height={200}
              />
              <Premium className="premium-tag">
                <Image
                  src="/assets/svgs/premium.svg"
                  alt="premium"
                  width={30}
                  height={20}
                />
              </Premium>
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
                  <span>
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
          <PaymentStatusWrapper>
            <Row>
              <Column className="column-6">
                <PaymentStatusCard>
                  <div className="PaymentStatus selected">
                    <label>Current status</label>
                    <h1>Premium</h1>
                    <p>
                      Expiration date: <span>24 March 2023</span>
                    </p>
                    <Button
                      content={'Extend'}
                      type="button"
                      disabled={false}
                      loading={false}
                    />
                  </div>
                </PaymentStatusCard>
              </Column>
              <Column className="column-6">
                <PaymentStatusCard>
                  <div className="PaymentStatus selected">
                    <label>Change the status to</label>
                    <h1>Standard</h1>
                    <p>Do you want to go back to standard?</p>
                    <Button
                      content={'Change'}
                      type="button"
                      disabled={false}
                      loading={false}
                    />
                  </div>
                </PaymentStatusCard>
              </Column>
            </Row>
          </PaymentStatusWrapper>
        </InnerContainer>
      </Dashboard>
    </div>
  );
}

export default LikedPage;
