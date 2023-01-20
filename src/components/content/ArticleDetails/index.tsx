import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { updateStrapiEntity} from 'src/helpers';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import Image from 'next/image';
dayjs.extend(relativeTime);

import {
  Column,
  InnerBanner,
  InnerContainer,
  PageContainer,
  Post,
  PostBody,
  PostDate,
  PostMedia,
  PostThumb,
  PostTitle,
  Row,
  Text,
  Title,
} from 'styles/common.styles';
import RelatedArticles from '../ArticleDetails/RelatedArticles';

import { ErrorMsg } from 'components/widgets/Input';

import SocialShare from 'components/utilities/SocialShare';
import { ArticleEntityResponseCollection, ComponentLikesLikes } from 'generated/graphql';
import { ClockSeven } from 'public/assets/icons/ClockSeven';
import CommentBox from 'components/utilities/comments/CommentBox';
import { AuthContext } from 'src/features/auth/AuthContext';
import CommentThread from 'components/utilities/comments/CommentThread';
import { ThumbsUp } from 'public/assets/icons/ThumbsUp';
import { BookMark } from 'public/assets/icons/BookMark';
import { CommentPost } from 'public/assets/icons/CommentPost';
import { upperCase } from 'src/utils';

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

      if (filterLIkes!.length > 0)
      return setHasLiked(true);
    }
    
    return () =>{
      checkLikeArrayForUser();
    }
  })
  // console.log(user?.id)
  // console.log(totaleLikes);
  // console.log(filterLIkes);
  // console.log(hasLiked);

  const handleClick = async () => {
    
    if (!user) {
      console.log('please sign in first')
    } 
    else {     
      if (hasLiked) {
        // console.log('before',hasLiked);
        setHasLiked(false);
        setTotalLikes(totalLikes - 1);
        const filter = likes?.filter((like) => like?.userId !== user?.id);
        await updateStrapiEntity(
          'articles',
          article?.id as string,
          { likes: filter as ComponentLikesLikes[] }
        );
        console.log(totalLikes);
      }
      else {
        setHasLiked(true);
        setTotalLikes(totalLikes + 1);
        await updateStrapiEntity(
          'articles',
          article?.id as string,
          {
            likes: [
              ...(likes as ComponentLikesLikes[]),
              { userId: user.id },
            ] as ComponentLikesLikes[],
          }
        );
        // console.log(res);
      }
    }
    
  }

  

  return (
    <>
      <InnerBanner
      // style={{ backgroundImage: 'url(/inner-banner.jpg)' }}
      >
        <InnerContainer>
          <Title>{article?.attributes?.title}</Title>
          <Text style={{ marginBottom: '0', color: '#000000' }}>
            <Link href={'/'}>Home</Link> /{' '}
            <Link href={'/articles'}>Articles</Link> /{' '}
            {upperCase(category as string)}
          </Text>
        </InnerContainer>
      </InnerBanner>
      <PageContainer>
        <InnerContainer>
          <Row>
            <Column className="column-7">
              <Row>
                <Column style={{ minWidth: '50%' }}>
                  <Post
                    style={{
                      padding: '1.5rem',
                      border: '1px solid #D9D9D9',
                      borderRadius: '.625rem',
                    }}
                  >
                    <PostThumb>
                      <Image
                        src={imageurl as string}
                        alt="article image"
                        width={700.59}
                        height={525.44}
                      />
                    </PostThumb>
                    <PostBody>
                      <PostTitle
                        style={{
                          fontSize: '1.2rem',
                          color: '#2e3032',
                          marginBottom: '.3rem',
                        }}
                      >
                        {article?.attributes?.title}{' '}
                        <SocialShare
                          pathname={`/articles/${categoryArticle.toLowerCase()}/${postSlug}`}
                        />
                      </PostTitle>
                      <PostDate style={{ marginBottom: '1.25rem' }}>
                        <ClockSeven />
                        By : {author?.fullName} |{' '}
                        {dayjs(article?.attributes?.updatedAt).format(
                          'DD MMMM YYYY'
                        )}{' '}
                        |{` ${article?.attributes?.readingTime}`}
                      </PostDate>
                      <div
                        style={{ marginBottom: '1.5rem' }}
                        // dangerouslySetInnerHTML={{
                        //   __html: article?.attributes?.body as string,
                        // }}
                      >
                        <Markdown options={{ wrapper: 'article' }}>
                          {article?.attributes?.body as string}
                        </Markdown>
                      </div>
                    </PostBody>
                    <PostMedia style={{ cursor: 'pointer' }}>
                      {totalLikes}
                      <PostMedia onClick={handleClick}>
                        <ThumbsUp colour={hasLiked ? '#3762e4' : 'none'} />
                      </PostMedia>
                      <PostMedia>
                        <Link href={'/posts'}>
                          <a>
                            <BookMark />
                          </a>
                        </Link>
                      </PostMedia>
                      <PostMedia>
                        <Link href={'/posts'}>
                          <a>
                            <CommentPost />
                          </a>
                        </Link>
                        {article?.attributes?.totalComments}
                      </PostMedia>
                    </PostMedia>
                  </Post>
                </Column>
              </Row>
            </Column>
            <Column>
              <RelatedArticles category={category} />
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
              <br />
              <CommentThread
                firebaseId={article?.attributes?.firebaseId as string}
              />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
};
