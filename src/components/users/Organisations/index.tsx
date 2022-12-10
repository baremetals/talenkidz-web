/* eslint-disable no-unused-vars */
import React, { SetStateAction, useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth/selectors';
import { client } from 'src/lib/initApollo';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import {
  EventEntity,
  ListingEntity,
  Maybe,
  Organisation,
  OrganisationEntity,
  UserEventsDocument,
  UserEventsQuery,
  UserListingsDocument,
  UserListingsQuery,
  UserListingsQueryResult,
} from 'generated/graphql';

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
  WidgetHeaderLink,
  DropdownMenu,
  DropdownMenuItem,
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
  // ActiveUsers,
  Image,
  // ActiveUsersCounter,
  ProfileContent,
  FollowButton,
  PhotoGallery,
  VideoGallery,
  PostTopRightWrap,
  PostDropdown,
} from '../ProfilePage/profile.styles';
// import { ShareCard } from '../ProfilePage/ShareCard';

import { BookMarkBorder } from 'public/assets/icons/BookMarkBorder';
import { BriefcaseBorder } from 'public/assets/icons/BriefcaseBorder';
// import { Send } from 'public/assets/icons/Send';
// import { Plus } from 'public/assets/icons/Plus';
import { Edit } from 'public/assets/icons/Edit';
import { Delete } from 'public/assets/icons/Delete';
import { Union } from 'public/assets/icons/Union';
// import { NavCard } from './NavCard';
import { Card } from './Card';
import { AuthContext } from 'src/context/AuthContext';
// import { useQuery } from '@apollo/client';
// import { Modal } from 'components/Modal';
// import EditForm from 'components/Create/EditForm';

type idProps = {
  id: string;
  attributes: Organisation;
  // children: React.ReactNode
};

const Organisations = ({ id, attributes }: idProps) => {
  const { state } = useContext(AuthContext);
  // const { id, attributes} = props?.props
  const { logo, name, slug, createdAt, bio, organisationType, website } =
    attributes;
  const [activities, setActivities] = useState<[ListingEntity] | []>([]);
  const [events, setEvents] = useState<[EventEntity] | []>([]);
  const [dropdown, setDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);
  const user = state.user;


  useEffect(() => {
    let callListing = false;
    const getListings = async () => {
      const { data } = await client.query<UserListingsQuery>({
        query: UserListingsDocument,
        variables: {
          filters: {
            host: {
              id: {
                eq: id,
              },
            },
          },
          pagination: {
            start: 0,
            limit: 6,
          },
          sort: 'updatedAt:desc',
        },
      });
      // console.log(data?.listings)
      const listings = data?.listings?.data;
    //   console.log(listings);
      if (!callListing) {
        setActivities(listings as SetStateAction<[] | [ListingEntity]>);
      }
    };

    getListings();

    return () => {
      callListing = true;
    };
  }, [id]);

  useEffect(() => {
    let callListing = false;
    const getListings = async () => {
      const { data } = await client.query<UserEventsQuery>({
        query: UserEventsDocument,
        variables: {
          filters: {
            host: {
              id: {
                eq: id,
              },
            },
          },
          pagination: {
            start: 0,
            limit: 6,
          },
          sort: 'updatedAt:desc',
        },
      });
      // console.log(data?.listings)
      const events = data?.events?.data;
    //   console.log(events);
      if (!callListing) {
        setEvents(events as SetStateAction<[] | [EventEntity]>);
      }
    };

    getListings();

    return () => {
      callListing = true;
    };
  }, [id]);

  const removeItem = async (id: string, type: string, index: number) => {
    // console.log(index)
    setDropdown(!dropdown);
    const url = type === 'Event' ? 'events' : 'listings';
    const response = await fetch('/api/list/delete', {
      method: 'POST',
      body: JSON.stringify({ id, url }),
    });
    await response
      .json()
      .then((res) => {
        // console.log('the response: ', res?.message)
        if (res?.message) {
          if (type === 'Event') {
            let eventArray: EventEntity[] = [];
            events.forEach((ele: EventEntity, i) => {
              if (index !== i) {
                eventArray?.push(ele);
              }
            });
            setEvents(eventArray as SetStateAction<[EventEntity] | []>);
          } else {
            let newArray: ListingEntity[] = [];
            activities.forEach((ele, i) => {
              if (index !== i) {
                newArray.push(ele);
              }
            });
            setActivities(newArray as SetStateAction<[] | [ListingEntity]>);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavBar />
      <Dashboard
        style={{
          backgroundColor: '#f4f7f5',
        }}
      >
        <ProfileCoverImage
          src={user?.backgroundImg as string}
          alt="Profile Banner"
        />
        <InnerContainer>
          <ProfileInfo
          // style={{
          //   backgroundColor: '#f4f7f5',
          // }}
          >
            <UserProfileImage src={logo as string} alt="user profile" />
            <ProfileBasicInfo>
              <Title
                style={{
                  fontSize: '1.75rem',
                  marginBottom: '.75rem',
                  lineHeight: 1,
                }}
              >
                {name || slug}
              </Title>
              <Text style={{ marginBottom: '1.5625rem', lineHeight: 1 }}>
                Joined: {dayjs(createdAt).fromNow()}
              </Text>
              <Text
                style={{
                  marginBottom: '0.75rem',
                  lineHeight: 1,
                  fontSize: '.875rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {organisationType && <BriefcaseBorder />}
                {organisationType}
              </Text>
              <Text
                style={{
                  marginBottom: '0.75rem',
                  fontSize: '.875rem',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {organisationType && <BookMarkBorder />}
                <a href={website as string}>{website}</a>
              </Text>
            </ProfileBasicInfo>
            <ProfileActions>
              {/* <ProfileButtons>
                                <SendButton><Send /> Write a Message</SendButton>
                                <FollowButton><Plus />Follow</FollowButton>
                            </ProfileButtons> */}
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
                <Widget>
                  <WidgetHeader>
                    <WidgetTitle>Activities</WidgetTitle>
                    {/* <WidgetHeaderLink href="#">View all</WidgetHeaderLink> */}
                  </WidgetHeader>
                  <WidgetBody>
                    <PhotoGallery>
                      {activities?.slice(0, 7).map((a) => (
                        <Image
                          src={a?.attributes?.listImage as string}
                          alt="activity image"
                          key={a?.id}
                        />
                      ))}
                    </PhotoGallery>
                  </WidgetBody>
                </Widget>
                <Widget>
                  <WidgetHeader>
                    <WidgetTitle>Events</WidgetTitle>
                    {/* <WidgetHeaderLink href="#">View all</WidgetHeaderLink> */}
                  </WidgetHeader>
                  <WidgetBody>
                    <VideoGallery>
                      {events?.slice(0, 3).map((a) => (
                        <Image
                          src={a?.attributes?.listImage as string}
                          alt=""
                          key={a?.id}
                        />
                      ))}
                    </VideoGallery>
                  </WidgetBody>
                </Widget>
              </Column>
              {/* {user?.slug === slug && <>
                                <ShareCard avatar={logo as string} />
                            </>} */}
              {activities.length > 0 && (
                <Column className="col" style={{ paddingLeft: '0.6875rem' }}>
                  {activities?.map((a, i) => (
                    <Card
                      key={a?.id}
                      id={a?.id as string}
                      type="Activity"
                      colour={
                        a?.attributes?.category?.data?.attributes
                          ?.colour as string
                      }
                      avatar={logo as string}
                      username={user?.username as string}
                      body={a?.attributes?.description as string}
                      createdAt={a?.attributes?.updatedAt}
                      slug={a?.attributes?.slug as string}
                      title={a?.attributes?.title as string}
                      content={a?.attributes?.listImage as string}
                      category={
                        a?.attributes?.category?.data?.attributes
                          ?.slug as string
                      }
                      // onClick={removeItem(a?.id as string, 'Activity')}
                    >
                      <PostTopRightWrap>
                        <PostDropdown>
                          <span
                            className="DropDownIcon"
                            onClick={() => setDropdown(!dropdown)}
                          >
                            <Union />
                          </span>
                          <DropdownMenu
                            className={`${dropdown ? 'opened' : ''}`}
                          >
                            <Link
                              href={`/activities/${
                                a?.attributes?.category?.data?.attributes
                                  ?.slug as string
                              }/${a?.attributes?.slug}/edit-form`}
                              passHref
                            >
                              <DropdownMenuItem>
                                <Edit /> Edit
                              </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem
                              onClick={() =>
                                removeItem(a?.id as string, 'Activity', i)
                              }
                            >
                              <Delete /> Delete
                            </DropdownMenuItem>
                          </DropdownMenu>
                        </PostDropdown>
                      </PostTopRightWrap>
                    </Card>
                  ))}
                </Column>
              )}

              {events.length > 0 && (
                <Column className="col" style={{ paddingLeft: '0.6875rem' }}>
                  {events?.map((e, i) => (
                    <Card
                      key={e?.id}
                      id={e?.id as string}
                      type="Event"
                      colour={
                        e?.attributes?.category?.data?.attributes
                          ?.colour as string
                      }
                      avatar={logo as string}
                      username={user?.username as string}
                      body={e?.attributes?.description as string}
                      createdAt={e?.attributes?.updatedAt}
                      slug={e?.attributes?.slug as string}
                      title={e?.attributes?.title as string}
                      content={e?.attributes?.listImage as string}
                      category={
                        e?.attributes?.category?.data?.attributes
                          ?.slug as string
                      }
                      // onClick={removeItem(e?.id as string, 'Event')}
                    >
                      <PostTopRightWrap>
                        <PostDropdown>
                          <span
                            className="DropDownIcon"
                            onClick={() => setEventDropdown(!eventDropdown)}
                          >
                            <Union />
                          </span>
                          <DropdownMenu
                            className={`${eventDropdown ? 'opened' : ''}`}
                          >
                            <Link
                              href={`/events/${
                                e?.attributes?.category?.data?.attributes
                                  ?.slug as string
                              }/${e?.attributes?.slug}/edit-form`}
                              passHref
                            >
                              <DropdownMenuItem>
                                <Edit /> Edit
                              </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem
                              onClick={() =>
                                removeItem(e?.id as string, 'Event', i)
                              }
                            >
                              <Delete /> Delete
                            </DropdownMenuItem>
                          </DropdownMenu>
                        </PostDropdown>
                      </PostTopRightWrap>
                    </Card>
                  ))}
                </Column>
              )}
            </Row>
          </ProfileContent>
        </InnerContainer>
      </Dashboard>
      {/* <Footer /> */}
    </>
  );
};

export default Organisations;
