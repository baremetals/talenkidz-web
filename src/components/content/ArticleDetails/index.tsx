
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { AuthContext } from 'src/features/auth/AuthContext';
import { updateStrapiEntity } from 'src/helpers';

import {
  ArticleEntityResponseCollection,
  ComponentLikesLikes,
} from 'generated/graphql';
import Breadcrumb from 'components/widgets/Breadcrumb';
// import Fields from 'components/widgets/Fields';
import SocialShare from 'components/utilities/SocialShare';
import CommentBox from 'components/utilities/comments/CommentBox';

// import Search from 'components/widgets/Search';
import RelatedArticles from '../ArticleDetails/RelatedArticles';
import {
  Column,
  InnerContainer,
  PageContainer,
  Row,
  SerchBlocks,
} from 'styles/common.styles';


import {
  ArticleLikeIcon,
  ArticleMediaIcons,
  ArticleCommentIcon,
  Datetime,
  Time,
  Date,
  BookMarkIconWrap,
  Readmore,
  ArticleAuthor,
  ArticleAuthorImg,
  ArticleAuthorSpe,
  ArticleInfo,
  ArticleBody,
  ArticleDescription,
  ArticleImg,
} from './details.styles';
import { Comments } from '../Comments';
import BookMarkIcon from 'components/widgets/BookMarkIcon';

export const ArticleDetails = (props: {
  props: {
    data: { articles: ArticleEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) => {
  // const [socialDropdown, setSocialDropdown] = useState(false)
  const { user, firebaseUser } = useContext(AuthContext);
  const { data } = props.props;

  // console.log(user, firebaseUser);

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

  // console.log(article)
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
  }, [likes, user?.id]);
  // console.log(user?.id)
  // console.log(totaleLikes);
  // console.log(filterLIkes);
  // console.log(hasLiked);

  const handleClick = async () => {
    if (!user) {
      console.log('please sign in first');
    } else {
      if (hasLiked) {
        // console.log('before', hasLiked);
        setHasLiked(false);
        setTotalLikes(totalLikes - 1);
        const filter = likes?.filter((like) => like?.userId !== user?.id);
        await updateStrapiEntity('articles', article?.id as string, {
          likes: filter as ComponentLikesLikes[],
        });
        // console.log(totalLikes);
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

  // const [bookedMarked, setActives] = useState(false);
  // const toggleClass = () => {
  //   // setActives(!bookedMarked);
  // };

  //  const [LikeMarked, setActive] = useState(false);
  // const LiketoggleClass = () => {
  //   // setActive(!LikeMarked);
  // };

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
                    src={author?.avatar?.data?.attributes?.url as string}
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
                    {/* <div>
                      <Image
                        src={'/assets/svgs/like.svg'}
                        alt="like Icon"
                        width={24}
                        height={24}
                        onClick={handleClick}
                      />
                    </div> */}
                    <div
                      // className={hasLiked ? 'active' : 'inactive'}
                      // onClick={LiketoggleClass}
                    >
                      {hasLiked ? (
                        <Image
                          src={'/assets/svgs/liked.svg'}
                          alt="like Icon"
                          width={24}
                          height={24}
                          onClick={handleClick}
                        />
                      ) : (
                        <Image
                          src={'/assets/svgs/like.svg'}
                          alt="like Icon"
                          width={24}
                          height={24}
                          onClick={handleClick}
                        />
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
                  <BookMarkIcon
                    id={article?.id as string}
                    title={article?.attributes?.title as string}
                    slug={article?.attributes?.slug as string}
                    image={imageurl as string}
                    detailsPage={true}
                  />
                  {/* <Image
                    src={'/assets/svgs/comment-plus.svg'}
                    alt="bookmark icon"
                    width={34}
                    height={34}
                  /> */}
                  {/* <div
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
                  </div> */}
                </BookMarkIconWrap>
              </ArticleAuthor>
            </Column>
          </Row>
          <ArticleInfo>
            <Row>
              <Column className="column-7">
                <ArticleBody>
                  <h1>{article?.attributes?.title} </h1>
                  {/* <p>
                    What I learned when my kids said college wasn’t for them
                  </p> */}
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
                  {/* <Search placeholder={'Search particular information'} /> */}
                </SerchBlocks>
                {/* <Fields></Fields> */}
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
              <SocialShare
                pathname={`/articles/${categoryArticle.toLowerCase()}/${postSlug}`}
              />

              <Comments firebaseId={article?.attributes?.firebaseId as string}>
                {user && firebaseUser && (
                  <CommentBox
                    userId={user?.id as number}
                    username={user?.username as string}
                    avatar={user?.avatar as string}
                    entityId={article?.id as string}
                    entitySlug={postSlug}
                    totalComments={article?.attributes?.totalComments as number}
                    entityFirebaseId={article?.attributes?.firebaseId as string}
                  />
                )}
              </Comments>

              <Readmore>
                <p>Read more</p>
              </Readmore>
            </Column>
          </Row>

          <RelatedArticles category={category} />
        </InnerContainer>
      </PageContainer>
    </>
  );
};
