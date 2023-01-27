import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { updateStrapiEntity} from 'src/helpers';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import Image from 'next/image';
import Fields from 'components/widgets/Fields';
import Breadcrumb from 'components/widgets/Breadcrumb';
import ArticleCommentBox from 'components/widgets/ArticleCommentBox';
import TalentedKidsWithPic from 'components/content/Articles/TalentedKidsWithPic';
dayjs.extend(relativeTime);

import {
  Column,
  InnerContainer,
  PageContainer,
  Post,
  PostBody,
  PostDate,
  PostMedia,
  PostThumb,
  PostTitle,
  Row,
  SerchBlocks,
  ArticleInfo,
  ArticleBody,
  ArticleImg,
  ArticleDescription,
  ArticleAuthor,
  ArticleAuthorImg,
  ArticleAuthorSpe,
} from 'styles/common.styles';

import RelatedArticles from '../ArticleDetails/RelatedArticles';

import { ErrorMsg } from 'components/widgets/Input';
import styled from 'styled-components';
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
import Search from 'components/widgets/Search';




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
      {/* <InnerBanner
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
      </InnerBanner> */}
      <InnerContainer>
        <Row>
            <Column>
              <Breadcrumb/>
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
                      alt="article image"
                      width={600}
                      height={600}
                    />
                  </ArticleAuthorImg>
                  <ArticleAuthorSpe>
                      <h2>Ally Blackmay</h2>
                      <Datetime>
                        <Date>Mar 8</Date>
                        <span></span>
                        <Time>9 min read</Time>
                      </Datetime>
                </ArticleAuthorSpe>
                <ArticleMedia>
                  <ArticleLike>
                     <Image
                      src={'/assets/svgs/like.svg'}
                      alt="article image"
                      width={24}
                      height={24}
                    />
                     <h3>1050 likes</h3>
                  </ArticleLike>
                  <ArticleComment>
                     <Image
                      src={'/assets/svgs/uil_comment.svg'}
                      alt="article image"
                      width={24}
                      height={24}
                    />
                    <h3>52 comments</h3>
                  </ArticleComment>
                </ArticleMedia>
                 <AaticlePlus>
                      <Image
                        src={'/assets/svgs/comment-plus.svg'}
                        alt="article image"
                        width={34}
                        height={34}
                      />
                  </AaticlePlus>
               </ArticleAuthor>
            </Column>
          </Row>
          <ArticleInfo>
            <Row>
                <Column className="column-7">
                  <ArticleBody>
                       <h1>{article?.attributes?.title}{' '}</h1>
                        <p>What I learned when my kids said college wasn’t for them</p>
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
                  <p>The other day, I saw this bumper sticker. Raise Good Humans. Crisp white font on a plain black background. Its simplicity stunned me, shuttled me back in time.</p>
 <p>
When she called in tears that autumn day in 2017, my daughter 3,000 miles away, a freshman at a small liberal arts college in upstate New York, I was concerned, of course, but also confused. What did she mean she was falling apart, needed to come home for the weekend?
My husband and I had been there three weeks earlier for parents’ weekend and her glow! her joy! She had friends and fun, intellectual stimulation and academic challenge. Her second week there, her advisor selected her to be one of five students having dinner at the college president’s house. Five freshmen, the president, and his wife. After dinner, when the wife asked the students if they had any criticisms of the school, my daughter was the only one to respond. “Not a single bathroom on campus has tampons or pads. They should be free and accessible.”</p>
 <p>
I mean. Badass. Thriving. Promising. So what had changed?
Depression and anxiety have a funny way of working, an insidious way of doing business, of derailing plans, deflecting dreams, dismantling hope. And even when you think you have conquered them, figured them out, they will morph again and again until you accept — surrender — that living with mental illness will never be a straight line.
Several months later, my daughter returned home for good. She wrote a stunning essay about her experience leaving school, about depression, anxiety, and refusing to see herself as a failure. But it took a few years before she regained solid footing, before my shining daughter returned to the light.</p>
 <p>
I filled those years with so many mistakes — driven by fear and ego. I mean, the mommy and me’s and Gymborees, summer camps and sing-alongs, private schools, parenting books, tutors, tests, softball, sleepovers, love, and love and more love, they weren’t supposed to end up here, with me, terrified, standing in her bedroom doorway yelling, “Get the hell up, you’ve been sleeping all day!”</p>
 <p>
I struggled to shut out the noise, the chatter of expectation and grief and fear. I struggled to be present for my daughter and myself. To be right there, making choices that served her needs, not my anxiety. I struggled with setting reasonable boundaries and realistic expectations for where we were, not where I wished or thought we would be.
My husband and I, in concert with her psychiatrist, said she had to take classes or work, she was capable of doing something. Nothing was not an option. So shortly after coming home, my daughter started babysitting. Several months later, a family offered her a full-time nanny position. We were thrilled.</p>
 <p>
“But, you don’t want her to be a nanny when she’s 30!” said a friend — now former — with a condescending laugh, when I shared the news.
Why not? Why would I care if my daughter was a nanny for the rest of her life? For god’s sake, in those days all I cared about was her waking up to live another day. Any parent of a struggling child knows that fear. Fuck college or careers or future plans. Just stay alive for one more day.</p>
 <p>
But it was hard. Of course, I didn’t want her to be a nanny for the rest of her life because I wanted her to do, become, achieve. I wasn’t comfortable — secure enough — in myself to be genuinely comfortable with where she was.</p>
 <p>
My brother and I are adopted, not biologically related to each other or our parents who raised us. In 1985, my brother dropped out of college. My parents forced him to return until eventually he dropped out of three colleges and they gave up. None of it was graceful or loving. It was ugly and a warning for me. Stay in school. Do and be what they want.
When he reunited with his birth mother, my brother learned no one in her family attended college. But our well-educated parents — a doctor and a teacher — made choices from their lived experience and class expectations. The possibility that my brother just wasn’t built for college never entered the conversation. They did not see him for who he was, only who they wanted him to be.</p>
 <p>
As I wrestled with what to do for my daughter, I thought about that a lot. I didn’t want to repeat my parents’ mistakes but didn’t know how to change the tape, shift the narrative. I went to college, got a master’s in social work, checked the boxes, followed the script. When I was 40, I finally found the courage to pursue my dream of becoming a writer. As much as I knew forcing her to be a student was wrong, letting my daughter be where and who she wanted terrified me.
Shutting out the judgment of others, shifting your dreams, adjusting your focus, being present, sitting in stillness — that’s the work of the Buddhas, the goal of an enlightened life. Learning to live that way is especially important for parents. It’s a lifeline for us and a gift to our children.</p>
              </ArticleDescription>

              <ArticleCommentBox />
              <Readmore>
                <Link href={'#'}>Read more</Link>
              </Readmore>
            </Column>
          </Row>
          <Row>
            <Column className='column-7'>
                <TalentedKidsBlock>
                  <TalentedKidsWithPic className="kidsRow" />
                  <TalentedKidsWithPic className="kidsRow" />
                  <TalentedKidsWithPic className="kidsRow" />
                  <TalentedKidsWithPic className="kidsRow" />
                  <TalentedKidsWithPic className="kidsRow" />
                  <LinkBlock >
                    <Link href={'#'}>Discover more</Link> 
                  </LinkBlock>
                </TalentedKidsBlock>
            </Column>
            <Column className='column-5'>
              <SerchBlock>
                <Search placeholder={'Search particular information'} />
              </SerchBlock>
              <Fields/>
            </Column>
          </Row>
        </InnerContainer>
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


export const Datetime = styled.div`
 display:flex;
 align-items:center;
 span {
  background: rgba(57, 0, 126, 0.2);
  width: 6px;
  height: 6px;
  border-radius: 50%;
 }
`;

export const Date = styled.div`
  display:flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: rgba(15, 2, 31, 0.7);
  margin-right:14px;
`;

export const Time = styled.div`
  display:flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: rgba(15, 2, 31, 0.7);
   margin-left:14px;
`;

export const ArticleMedia = styled.div`display: flex;
    align-items: flex-end;    margin-left: 50px;`;

export const ArticleLike = styled.div`
    display: flex;
    align-items: center; 
    margin-right: 30px;
    cursor: pointer;
    h3 {
      margin-left: 10px;
      font-size: 12px;
      line-height: 14px;
    }`;

export const ArticleComment = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
    h3 {
      margin-left: 10px;
       font-size: 12px;
      line-height: 14px;
    }`;


export const AaticlePlus = styled.div`
  margin-left: 70px; 
`;
    
export const Readmore = styled.div`
   margin-top: 90px; 
   margin-bottom: 50px; 
  a {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.1%;
    letter-spacing: -0.01em;
    color: #39007E;
  }
`;
export const TalentedKidBlock = styled.div`
 margin-bottom:160px;
  .rowblock {
    margin-bottom:15px;
  }
`;

export const TalentedKidsBlock = styled.div`
max-width:650px;
  a {
    color: #39007E;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }
 .kidsRow {
  margin-bottom:40px;
 }
`;

export const LinkBlock = styled.div`
     margin-bottom:20px;
     text-align: right;
`;
export const SerchBlock = styled.div`
     margin-bottom:50px;
`;



export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 52px;
  color: #39007E;
  margin-bottom:92px;
  max-width:700px;
  font-family: 'Syne', sans-serif !important;
  position: relative;
  line-height: 123.1%;
  span {
     position: relative;
     font-family: 'Syne', sans-serif !important;
     color:#fff;
     margin-left:6px;
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

