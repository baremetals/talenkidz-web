import React, { useState } from 'react';
// import Image from 'next/image'
import { UsersPermissionsUser } from 'generated/graphql';
import Button from 'components/users/Auth/Button';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import ArticleCard from 'components/content/Articles/ArticleCard';
import ActivitiesItem from 'components/content/Articles/ActivitiesItem';

import { Row, Column } from 'styles/common.styles';

import {
  BookmarkBlock,
  BoomarkItem,
  BookmarkList,
  BookmarkListWrapper,
} from '../ProfilePage/profile.styles';
// import { useAppSelector } from 'src/app/hooks';
// import { isUser } from 'src/features/auth/selectors';
import Link from 'next/link';
import ProfileBase from '../ProfilePage/ProfileBase';

function BookmarkPage(props: { props: UsersPermissionsUser }) {
  // const { user: user } = useAppSelector(isUser);
  const {
    username,
    fullName,
    avatar,
    backgroundImg,
    bio,
    membership,
    userType,
    createdAt,
    organisation,
    bookmarklist,
  } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    props?.props;

  const [bookmarks, setBookmarks] = useState(bookmarklist);

  console.log(bookmarklist);

  return (
    <ProfileBase
      username={username}
      fullName={fullName as string}
      avatar={avatar as string}
      backgroundImg={backgroundImg as string}
      bio={bio as string}
      membership={membership as string}
      userType={userType as string}
      createdAt={createdAt as string}
      orgName={organisation?.name as string}
    >
      <BookmarkBlock>
        <Row className="row">
          <Column className="column-7">
            <div className="BreadcrumbsBookmark">
              <h2>All the savings</h2>
              <span className="cricle"></span>
              <span className="category">Articles</span>
            </div>
            <div className="ArticleRow">
              {bookmarks?.map((item) => {
                if (item?.type === 'article') {
                  return (
                    <ArticleCard
                      key={item?.slug}
                      id={item?.itemId as string}
                      authorImg={item?.userImage as string}
                      authorName={item?.userName as string}
                      articleTitle={item.title as string}
                      articleIntro={
                        item?.blurb as string
                      }
                      articleImage={item?.image as string}
                      readingTime={item?.readingTimeOrPrice as string}
                      createdAt={item?.date as string}
                      category={item?.category as string}
                      slug={item?.slug as string}
                    />
                  );
                } else if (item?.type === 'event') {
                  return (
                    <ActivitiesItem
                      key={item?.slug}
                      id={item?.itemId as string}
                      hostName={item?.userName as string}
                      hostImage={item?.userImage || '/assets/images/sport.png'}
                      title={item?.title as string}
                      slug={item?.slug as string}
                      venue={item?.venue as string}
                      venueName={item?.venueName as string}
                      route={`/event/${item?.category}/${item?.slug}`}
                      startDate={item?.date as string}
                      starTime={item?.time as string}
                      price={item?.readingTimeOrPrice as string}
                      image={item?.image as string}
                      location={item?.location as string}
                      category={item?.category as string}
                    />
                  );
                } else {
                  return (
                    <ActivitiesItem
                      key={item?.slug}
                      id={item?.itemId as string}
                      hostName={item?.userName as string}
                      hostImage={item?.userImage || '/assets/images/sport.png'}
                      title={item?.title as string}
                      slug={item?.slug as string}
                      venue={item?.venue as string}
                      venueName={item?.venueName as string}
                      route={`/activities/${item?.category}/${item?.slug}`}
                      startDate={item?.date as string}
                      starTime={item?.time as string}
                      price={item?.readingTimeOrPrice as string}
                      image={item?.image as string}
                      location={item?.location as string}
                      category={item?.category as string}
                    />
                  );
                }
              })}
              <div className="activityBlock">
                <Button
                  content="See more"
                  type="submit"
                  disabled={false}
                  loading={false}
                />
              </div>
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
    </ProfileBase>
  );
}

export default BookmarkPage;
