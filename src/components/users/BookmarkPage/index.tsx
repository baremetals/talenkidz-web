import React, { useCallback, useState } from 'react';
// import Image from 'next/image'
import { ComponentBookMarksReadingList, UsersPermissionsUser, useUsersBookMarksLazyQuery } from 'generated/graphql';
import Button from 'components/users/Auth/Button';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import ArticleCard from 'components/content/Articles/ArticleCard';
import ListItemCard from 'components/users/Account/ListItemCard';

import { Row, Column } from 'styles/common.styles';

import {
  BookmarkBlock,
  BoomarkItem,
  BookmarkList,
  BookmarkListWrapper,
} from '../ProfilePage/profile.styles';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth/selectors';
import ProfileBase from '../ProfilePage/ProfileBase';
import { upperCase } from 'src/utils';

function BookmarkPage(props: { props: UsersPermissionsUser }) {
  const { user: user } = useAppSelector(isUser);
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

    
    const [showButton, setShowButton] = useState(true);
  const [bookmarks, setBookmarks] = useState(bookmarklist);
  const [active, setActive] = useState('all');

  const [loadBookmarks] = useUsersBookMarksLazyQuery({
    variables: {
      usersPermissionsUserId: user?.id?.toString(),
      pagination: {
        start: bookmarks?.length,
        limit: 12,
      },
      sort: 'date:desc',
    },
  });

  // console.log(bookmarklist);

  const getBookmarks = useCallback(async () => {
    const res = await loadBookmarks();
    const newBookMarks =
      res.data?.usersPermissionsUser?.data?.attributes?.bookmarklist;
    // console.log(newBookMarks);
    if (newBookMarks && newBookMarks.length < 1) setShowButton(false);
      setBookmarks(() => [
        ...(bookmarks as ComponentBookMarksReadingList[]),
        ...(newBookMarks as ComponentBookMarksReadingList[]),
      ]);
    // console.log(meta);
  }, [bookmarks, loadBookmarks]);

  const filterbookmarks = useCallback((type: string) => {
    setActive(type);
    const filteredData = bookmarks?.filter((ent) => {
      return ent?.type === type;
    });
    if (type !== 'all'){
      setBookmarks(filteredData);
    } else setBookmarks(bookmarklist);
    
  },[bookmarklist, bookmarks])

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
              <h2>saved articles events and activities</h2>
              <span className="cricle"></span>
              <span className="category">
                {upperCase(
                  active === 'all'
                    ? active
                    : active === 'listing'
                    ? 'activities'
                    : active + 's'
                )}
              </span>
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
                      articleIntro={item?.blurb as string}
                      articleImage={item?.image as string}
                      readingTime={item?.readingTimeOrPrice as string}
                      createdAt={item?.date as string}
                      category={item?.category as string}
                      slug={item?.slug as string}
                    />
                  );
                } else if (item?.type === 'event') {
                  return (
                    <ListItemCard
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
                    <ListItemCard
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
              {showButton ? (
                <div className="activityBlock">
                  <Button
                    content="See more"
                    type="button"
                    disabled={false}
                    loading={false}
                    onClick={getBookmarks}
                  />
                </div>
              ) : null}
            </div>
          </Column>
          <Column className="column-5">
            <BookmarkListWrapper>
              <BookmarkList>
                <BoomarkItem
                  className={active === 'all' ? 'active' : ''}
                  onClick={() => filterbookmarks('all')}
                >
                  <span>All</span>
                </BoomarkItem>
                <BoomarkItem
                  className={active === 'article' ? 'active' : ''}
                  onClick={() => filterbookmarks('article')}
                >
                  <span>Articles</span>
                </BoomarkItem>
                <BoomarkItem
                  className={active === 'event' ? 'active' : ''}
                  onClick={() => filterbookmarks('event')}
                >
                  <span>Events</span>
                </BoomarkItem>
                <BoomarkItem
                  className={active === 'listing' ? 'active' : ''}
                  onClick={() => filterbookmarks('listing')}
                >
                  <span>Activities</span>
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
