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

function BookmarkPage(props: { props: UsersPermissionsUser; userId: number }) {
  const { user: user } = useAppSelector(isUser);
    
    const [showButton, setShowButton] = useState(true);
  const [bookmarks, setBookmarks] = useState(props?.props?.bookmarklist);
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
    if (newBookMarks && newBookMarks.length < 1) {
      setShowButton(false);
    } else {
      setBookmarks(() => [
        ...(bookmarks as ComponentBookMarksReadingList[]),
        ...(newBookMarks as ComponentBookMarksReadingList[]),
      ]);
    }
      
    // console.log(meta);
  }, [bookmarks, loadBookmarks]);

  const filterbookmarks = useCallback(
    (type: string) => {
      setActive(type);
      const filteredData = bookmarks?.filter((ent) => {
        return ent?.type === type;
      });
      if (type !== 'all') {
        setBookmarks(filteredData);
      } else setBookmarks(props?.props?.bookmarklist);
    },
    [props?.props?.bookmarklist, bookmarks]
  );

  return (
    <ProfileBase
      username={props?.props?.username}
      fullName={props?.props?.fullName as string}
      avatar={props?.props?.avatar as string}
      backgroundImg={props?.props?.backgroundImg as string}
      bio={props?.props?.bio as string}
      membership={props?.props?.membership as string}
      userType={props?.props?.userType as string}
      createdAt={props?.props?.createdAt as string}
      orgName={props?.props?.organisation?.name as string}
      userId={props.userId}
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
