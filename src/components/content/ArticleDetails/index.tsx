import TalentedKidsWithPic from 'components/content/Articles/ArticleCard';
import ArticleCommentBox from 'components/widgets/ArticleCommentBox';
import Breadcrumb from 'components/widgets/Breadcrumb';
import Fields from 'components/widgets/Fields';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { updateStrapiEntity } from 'src/helpers';
dayjs.extend(relativeTime);

import {
  ArticleAuthor,
  ArticleAuthorImg,
  ArticleAuthorSpe,
  ArticleBody,
  ArticleDescription,
  ArticleImg,
  ArticleInfo,
  Column,
  InnerContainer,
  PageContainer,
  Post,
  PostBody,
  Row,
  SerchBlocks,
} from 'styles/common.styles';

import RelatedArticles from '../ArticleDetails/RelatedArticles';

import SocialShare from 'components/utilities/SocialShare';
import CommentBox from 'components/utilities/comments/CommentBox';
import CommentThread from 'components/utilities/comments/CommentThread';
import Search from 'components/widgets/Search';
import {
  ArticleEntityResponseCollection,
  ComponentLikesLikes,
} from 'generated/graphql';

import { AuthContext } from 'src/features/auth/AuthContext';
import styled from 'styled-components';
import {
  ArticleLikeIcon,
  ArticleMediaIcons,
  ArticleCommentIcon,
  Datetime,
  Time,
  Date,
  BookMarkIconWrap,
  Readmore,
  CardWrapper,
  SearchWrapper,
  LinkWrapper,
} from './details.styles';

export const ArticleDetails = (props: {
  props: {
    data: { articles: ArticleEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) => {
  // const [socialDropdown, setSocialDropdown] = useState(false)
  const { user, firebaseUser } = useContext(AuthContext);
  const { data, loading, error } = props.props;
  // console.log(typeof user?.id);

  // if (!data || loading) {
  //   return <div>loading...</div>;
  // }

  // if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const article = data?.articles?.data[0];

  const imageurl = article?.attributes?.heroImage?.data?.attributes?.url;
  const author = article?.attributes?.author?.data?.attributes;
  // const avatar = author?.avatar?.data?.attributes?.url;
  const category = article?.attributes?.category?.data?.attributes
    ?.slug as string;

  const categoryArticle = article?.attributes?.category?.data?.attributes
    ?.slug as string;

  const postSlug = article?.attributes?.slug as string;
  const likes = article?.attributes?.likes;

  // console.log(article?.attributes?.likes)
  // Article

  // const filterLIkes = likes?.filter((like) => like?.userId === user?.id)
  // const hasLiked = filterLIkes!.length > 0
  const [hasLiked, setHasLiked] = useState(false);
  let [totalLikes, setTotalLikes] = useState<number>(likes!.length);

  useEffect(() => {
    const checkLikeArrayForUser = () => {
      const filterLIkes = likes?.filter((like) => like?.userId === user?.id);

      if (filterLIkes!.length > 0) return setHasLiked(true);
    };

    return () => {
      checkLikeArrayForUser();
    };
  });
  // console.log(user?.id)
  // console.log(totaleLikes);
  // console.log(filterLIkes);
  // console.log(hasLiked);

  const handleClick = async () => {
    if (!user) {
      console.log('please sign in first');
    } else {
      if (hasLiked) {
        // console.log('before',hasLiked);
        setHasLiked(false);
        setTotalLikes(totalLikes - 1);
        const filter = likes?.filter((like) => like?.userId !== user?.id);
        await updateStrapiEntity('articles', article?.id as string, {
          likes: filter as ComponentLikesLikes[],
        });
        console.log(totalLikes);
      } else {
        setHasLiked(true);
        setTotalLikes(totalLikes + 1);
        await updateStrapiEntity('articles', article?.id as string, {
          likes: [
            ...(likes as ComponentLikesLikes[]),
            { userId: user.id },
          ] as ComponentLikesLikes[],
        });
        // console.log(res);
      }
    }
  };

  const route = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'articles',
      url: '/articles',
    },
    {
      name: categoryArticle as string,
      url: `/articles/${categoryArticle as string}`,
    },
    // {
    //   name: router.query.category as string,
    //   url: `/articles/${router?.query?.category as string}`,
    // },
  ];

  const [bookedMarked, setActives] = useState(false);
  const toggleClass = () => {
    setActives(!bookedMarked);
  };

   const [LikeMarked, setActive] = useState(false);
  const LiketoggleClass = () => {
    setActive(!LikeMarked);
  };

  return (
    <>
      <InnerContainer>
        <Row>
          <Column>
            <Breadcrumb route={route} />
          </Column>
        </Row>
      </InnerContainer>
      <PageContainer>
        <InnerContainer>
          <Row>
            <Column>
              <ArticleAuthor>
                <ArticleAuthorImg>
                  <Image
                    src={'/assets/images/kid.png'}
                    alt="author image"
                    width={600}
                    height={600}
                  />
                </ArticleAuthorImg>
                <ArticleAuthorSpe>
                  <h2>{author?.fullName}</h2>
                  <Datetime>
                    <Date>
                      {dayjs(article?.attributes?.updatedAt).format('MMM D')}
                    </Date>
                    <span></span>
                    <Time>{article?.attributes?.readingTime} read</Time>
                  </Datetime>
                </ArticleAuthorSpe>
                <ArticleMediaIcons>
                  <ArticleLikeIcon>

                    <div
                    className={LikeMarked ? 'active' : 'inactive'}
                     onClick={LiketoggleClass}
                    >
                      
                        {LikeMarked ? (
                    <Image
                      src={'/assets/svgs/like.svg'}
                      alt="like Icon"
                      width={24}
                      height={24}
                      onClick={handleClick}
                    />
                     ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.364 0 0 5.4 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0ZM9.3 6.984C10.344 6.984 11.34 7.476 12 8.244C12.66 7.476 13.656 6.984 14.7 6.984C16.548 6.984 18 8.436 18 10.284C18 12.552 15.96 14.4 12.864 17.208L12 18L11.136 17.208C8.04 14.4 6 12.552 6 10.284C6 8.436 7.452 6.984 9.3 6.984Z" fill="#39007E"/>
                    <path d="M11.3928 17.6932L11.3921 17.6925C9.5581 16.0294 8.0764 14.6847 7.04718 13.4264C6.02371 12.1751 5.5 11.0703 5.5 9.89583C5.5 7.99031 6.99031 6.5 8.89583 6.5C9.97694 6.5 11.0224 7.00572 11.7027 7.80459L12.0833 8.25162L12.464 7.80459C13.1443 7.00572 14.1897 6.5 15.2708 6.5C17.1764 6.5 18.6667 7.99031 18.6667 9.89583C18.6667 11.0703 18.143 12.1751 17.1194 13.4274C16.0902 14.6865 14.6088 16.0328 12.7751 17.6991L12.7742 17.7L12.0846 18.3229L11.3928 17.6932Z" fill="#39007E" stroke="#FFF8F8"/>
                        </svg>
                      )}
                    </div>
                    <h3>{totalLikes} likes</h3>
                  </ArticleLikeIcon>
                  <ArticleCommentIcon>
                    <Image
                      src={'/assets/svgs/uil_comment.svg'}
                      alt="comment icon"
                      width={24}
                      height={24}
                    />
                    <h3>{article?.attributes?.totalComments} comments</h3>
                  </ArticleCommentIcon>
                </ArticleMediaIcons>
                <BookMarkIconWrap>
                <div
                    className={bookedMarked ? 'active' : 'inactive'}
                     onClick={toggleClass}
                  >
                    {bookedMarked ? (
                      <div className="bookmarkActive">
                        <Image
                          src="/assets/svgs/bookmark-active.svg"
                          alt="bookmark icon"
                          width={35}
                          height={35}
                        />
                      </div>
                    ) : (
                      <div className="bookmark">
                        <Image
                          src="/assets/svgs/bookmar.svg"
                          alt="bookmark icon"
                          width={35}
                          height={35}
                        />
                      </div>
                    )}
                  </div>
                </BookMarkIconWrap>
              </ArticleAuthor>
            </Column>
          </Row>
          <ArticleInfo>
            <Row>
              <Column className="column-7">
                <ArticleBody>
                  <h1>{article?.attributes?.title} </h1>
                  <p>
                    What I learned when my kids said college wasn’t for them
                  </p>
                  <ArticleImg>
                    <Image
                      src={imageurl as string}
                      alt="article image"
                      width={600}
                      height={600}
                    />
                  </ArticleImg>
                </ArticleBody>
              </Column>
              <Column className="column-5">
                <SerchBlocks>
                  <Search placeholder={'Search particular information'} />
                </SerchBlocks>
                <Fields></Fields>
              </Column>
            </Row>
          </ArticleInfo>
          <Row>
            <Column>
              <ArticleDescription>
                <Markdown options={{ wrapper: 'article' }}>
                  {article?.attributes?.body as string}
                </Markdown>
              </ArticleDescription>
              <Row>
                <Column className="column-7">
                  <Row>
                    <Column style={{ minWidth: '50%' }}>
                      <Post
                        style={{
                          padding: '1rem',
                          border: '1px solid #D9D9D9',
                          borderRadius: '.625rem',
                        }}
                      >
                        <PostBody>
                          <SocialShare
                            pathname={`/articles/${categoryArticle.toLowerCase()}/${postSlug}`}
                          />
                        </PostBody>
                      </Post>
                    </Column>
                  </Row>
                </Column>
                <Column>
                  {user && firebaseUser && (
                    <CommentBox
                      userId={user?.id as number}
                      username={user?.username as string}
                      avatar={user?.avatar as string}
                      entityId={article?.id as string}
                      entitySlug={postSlug}
                      totalComments={
                        article?.attributes?.totalComments as number
                      }
                      entityFirebaseId={
                        article?.attributes?.firebaseId as string
                      }
                    />
                  )}
                  <br />
                  <CommentThread
                    firebaseId={article?.attributes?.firebaseId as string}
                  />
                </Column>
              </Row>

              <ArticleCommentBox />

              <Readmore>
                <Link href={'#'}>Read more</Link>
              </Readmore>
            </Column>
          </Row>

          <RelatedArticles category={category} />
        </InnerContainer>
      </PageContainer>
    </>
  );
};




export const TalentedKidsBlock = styled.div`
  max-width: 650px;
  a {
    color: #39007e;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }
  .kidsRow {
    margin-bottom: 40px;
  }
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 52px;
  color: #39007e;
  margin-bottom: 92px;
  max-width: 700px;
  font-family: 'Syne', sans-serif !important;
  position: relative;
  line-height: 123.1%;
  span {
    position: relative;
    font-family: 'Syne', sans-serif !important;
    color: #fff;
    margin-left: 6px;
    &::after {
      content: '';
      background: #39007e;
      position: absolute;
      width: 106%;
      border-radius: 10px;
      transform: matrix(1, -0.02, 0.01, 1, 0, 0);
      height: 100%;
      top: -1px;
      left: -8px;
      z-index: -1;
    }
  }
`;
