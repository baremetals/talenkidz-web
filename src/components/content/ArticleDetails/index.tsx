import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { upperCase } from 'src/lib/helpers';
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
  PostThumb,
  PostTitle,
  Row,
  Text,
  Title,
} from 'styles/common.styles';
import RelatedArticles from '../ArticleDetails/RelatedArticles';

import { ErrorMsg } from 'components/widgets/Input';

import SocialShare from 'components/utilities/SocialShare';
import { ArticleEntityResponseCollection } from 'generated/graphql';
import { ClockSeven } from 'public/assets/icons/ClockSeven';

export const ArticleDetails = (props: {
  props: {
    data: { articles: ArticleEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) => {
  // const [socialDropdown, setSocialDropdown] = useState(false);
  const { data, loading, error } = props.props;
  // console.log(data)

  if (!data || loading) {
    return <div>loading...</div>;
  }

  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const article = data?.articles?.data[0];

  const imageurl = article?.attributes?.heroImage?.data?.attributes?.url;
  const author = article?.attributes?.author?.data?.attributes;
  // const avatar = author?.avatar?.data?.attributes?.url;
  const category = article?.attributes?.category?.data?.attributes
    ?.slug as string;

  // console.log(article)
  // Article

  const postSlug = article?.attributes?.slug as string;

  const categoryArticle = article?.attributes?.category?.data?.attributes
    ?.slug as string;

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
                        {dayjs(article?.attributes?.createdAt).format(
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
                  </Post>
                </Column>
              </Row>
            </Column>
            <Column>
              <RelatedArticles category={category} />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
};
