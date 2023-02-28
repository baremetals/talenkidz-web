import React, { useState } from 'react';
// import Image from 'next/image'
import { UsersPermissionsUser } from 'generated/graphql';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import ArticleCard from 'components/content/Articles/ArticleCard';

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

  console.log(bookmarklist)

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
              {bookmarks?.map((item, i) => {
                if (item?.type === 'article') {
                  return (
                    <ArticleCard
                      key={item.itemId}
                      id={item.itemId as string}
                      authorImg={
                        item?.article?.data?.attributes?.author?.data
                          ?.attributes?.avatar?.data?.attributes?.url as string
                      }
                      authorName={
                        item?.article?.data?.attributes?.author?.data
                          ?.attributes?.fullName as string
                      }
                      articleTitle={item.title as string}
                      articleIntro={
                        item?.article?.data?.attributes?.blurb as string
                      }
                      articleImage={item.image as string}
                      readingTime={
                        item?.article?.data?.attributes?.readingTime as string
                      }
                      createdAt={
                        item?.article?.data?.attributes?.createdAt as string
                      }
                      category={item.category as string}
                      slug={item.slug as string}
                    />
                  );
                }
              })}

              <ArticleCard
                key={'2'}
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
    </ProfileBase>
  );
}

export default BookmarkPage;
