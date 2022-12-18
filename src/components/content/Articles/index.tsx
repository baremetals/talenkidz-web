import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { upperCase } from 'src/helpers';
import InfiniteScroll from 'react-infinite-scroll-component';

// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

import {
  Bottom,
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
  Top,
} from 'styles/common.styles';
import EntitySearch from 'components/utilities/search/EntitySearch';

import {
  ArticleEntity,
  CategoryEntity,
  ArticlesDocument,
} from 'generated/graphql';
import { BookMark } from 'public/assets/icons/BookMark';
import { ThumbsUp } from 'public/assets/icons/ThumbsUp';
import {
  articleReducer,
  INITIAL_STATE as Article_State,
} from './articleReducer';
import { useFetchEntities } from 'components/utilities/hooks/useFetchEntities';
import Categories from 'components/utilities/category/Category';
// import { SearchContext } from 'components/utilities/search/SearchContext';
import { useSearchState } from 'components/utilities/search/searchReducer';
import { AuthContext } from 'src/features/auth/AuthContext';

//     id: string;
//     attributes: {
//         readingTime: string;
//         body: string;
//         category: {
//             data: {
//                 id: string;
//                 attributes: {
//                     // name: string;
//                     slug: string;
//                 };
//             };
//         };
//         updatedAt: Date;
//         slug: string;
//         title: string;
//         blurb: string;
//         author: {
//             data: {
//                 id: string;
//                 attributes: {
//                     fullName: string;
//                     // slug: string;
//                     // img: string;
//                 };
//             };
//         };
//         heroImage: {
//             data: {
//                 id: string;
//                 attributes: {
//                     url: string;
//                     // slug: string;
//                     // img: string;
//                 };
//             };
//         };
//     };
// };

type pageProps = {
  articles: ArticleEntity[];
  categories: CategoryEntity[];
  total: number;
};


const Articles = ({ articles, categories, total }: pageProps) => {
  const router = useRouter();
  const [filteredArticles, setFilteredArticles] = useState<ArticleEntity[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [state, dispatch] = useReducer(articleReducer, Article_State);
  const { user, firebaseUser } = useContext(AuthContext);
  // const { state: searchState } = useContext(SearchContext);

  const searchState = useSearchState();


  // console.log('the state', searchState);
  const fetchData = useFetchEntities({
    limit: 4,
    start: state.articlesLength as number,
    gQDocument: ArticlesDocument,
  });

  useEffect(() => {
    setFilteredArticles(state.articles);
  }, [state]);

  useEffect(() => {
    dispatch({
      type: 'SET_ARTICLES',
      payload: {
        // ...state,
        articles: articles,
        total,
        articlesLength: articles?.length,
      },
    });
  }, [articles, total]);

  useEffect(() => {
    setHasMore(
      filteredArticles.length >= total || searchState.searching ? false : true
    );
  }, [filteredArticles.length, total, searchState.searching]);

  //   const data = {
  //     limit: 4,
  //     start: state.articlesLength as number,
  //     gQDocument: ArticlesDocument,
  //     // stopLoading: searchState.stopLoading,
  //   };
  //   // console.log(
  //   //   searchState.searching,
  //   //   'losers'
  //   // );
  //   if (!searchState.searching && filteredArticles.length <= total) {
  //     const newArticles = await fetchData({ ...data });
  //     // console.log(newArticles);
  //     setFilteredArticles((filteredArticles) => [
  //       ...filteredArticles,
  //       // eslint-disable-next-line no-unsafe-optional-chaining
  //       ...newArticles?.articles?.data,
  //     ]);
  //   }
  // };
  
  const getData = async () => {
    
    if (!searchState.searching && filteredArticles.length <= total) {
      const res = await fetchData;
      // console.log(res);
      setFilteredArticles((filteredArticles) => [
        ...filteredArticles,
        // eslint-disable-next-line no-unsafe-optional-chaining
        ...res?.articles?.data,
      ]);
    }
  }
  return (
    <>
      <InnerBanner>
        <InnerContainer>
          <Title>
            {`${
              router.query.category === undefined
                ? 'Latest'
                : upperCase(router.query.category as string)
            }`}{' '}
            Articles
          </Title>
          <Text style={{ marginBottom: '0', color: '#000000' }}>
            <Link href={'/'}>Home </Link> /{' '}
            <Link href={'/articles'}>Articles </Link>{' '}
            {`${
              router.query.category === undefined
                ? ''
                : '/ ' + upperCase(router.query.category as string)
            }`}
          </Text>
        </InnerContainer>
      </InnerBanner>

      <PageContainer>
        <InnerContainer>
          <Row>
            <Column
              className="column-7"
              id="scrollableDiv"
              style={{
                height: 300,
                overflow: 'auto',
                display: 'flex',
                // flexDirection: 'column-reverse',
              }}
            >
              <InfiniteScroll
                dataLength={filteredArticles.length} //This is important field to render the next data
                next={getData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                // style={{ display: 'flex', flexDirection: 'column-reverse' }}
              >
                <Row>
                  {filteredArticles?.map((art, id) => {
                    
                    const likes = art?.attributes?.likes;
                    const filterLIkes = likes?.filter(
                      (like) => like?.userId === user?.id
                    );
                    const hasLiked = filterLIkes!.length > 0;
                    // {
                    //   console.log(art?.attributes?.likes)
                    //   const filterLIkes = likes?.filter(
                    //     (like) => like?.userId === user?.id
                    //   );
                    //   const hasLiked = filterLIkes!.length > 0;
                      
                    // }
                    return (
                    <Column style={{ minWidth: '50%' }} key={id}>
                        <Link
                          href={`/articles/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`}
                          passHref
                        >
                          <Post>
                            <PostThumb>
                              <Image
                                src={
                                  art?.attributes?.heroImage?.data?.attributes
                                    ?.url as string
                                }
                                alt="article image"
                                width={359.3}
                                height={269.47}
                              />
                            </PostThumb>
                            <PostBody>
                              <Top>
                                <PostMedia>
                                  <Link href={'/posts'}>
                                    <a>
                                      <ThumbsUp
                                        colour={hasLiked ? '#3762e4' : 'none'}
                                      />
                                    </a>
                                  </Link>

                                  <Link href={'/posts'}>
                                    <a>
                                      <BookMark />
                                    </a>
                                  </Link>
                                </PostMedia>
                                <br />
                                <PostTitle
                                  style={{
                                    fontSize: '1rem',
                                    color: '#2e3032',
                                    marginBottom: '.3rem',
                                  }}
                                >
                                  {art?.attributes?.title.slice(0, 40)}...
                                </PostTitle>
                                <Text>
                                  {art?.attributes?.blurb?.slice(0, 80)}...
                                </Text>
                              </Top>
                              <Bottom style={{ fontSize: '.75rem' }}>
                                {
                                  art?.attributes?.author?.data?.attributes
                                    ?.fullName
                                }
                              </Bottom>
                              <Bottom>
                                <PostDate>
                                  {dayjs(art?.attributes?.updatedAt).format(
                                    'DD MMMM YYYY'
                                  )}{' '}
                                </PostDate>

                                <PostMedia
                                  style={{
                                    fontSize: '.75rem',
                                    color: '#74787C',
                                  }}
                                >
                                  {art?.attributes?.readingTime}
                                </PostMedia>
                                {/* <PostMedia>
                                                            <Link href={'/posts'}><a><ThumbsUp /></a></Link>
                                                            <PostMedia>
                                                                <Link href={'/posts'}><a><BookMark /></a></Link>
                                                            </PostMedia>
                                                        </PostMedia> */}
                              </Bottom>
                            </PostBody>
                          </Post>
                        </Link>
                      </Column>)
})}
                </Row>
              </InfiniteScroll>
            </Column>
            <Column>
              <EntitySearch
                entities={articles}
                setFilteredEntities={setFilteredArticles as any}
              />
              <Categories categories={categories} />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default Articles;
