import React from 'react';
import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import dayjs from 'dayjs';

import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';

import ArticleCard from 'components/content/Articles/ArticleCard';
import Breadcrumb from 'components/widgets/Breadcrumb';

import { fetchStrapiUser, updateStrapiUserBookMarks } from 'src/helpers';

import {
  LinkBlock,
  PageTitle,
  MoreArticlesBlock,
} from '../Articles/styles';

import EntitySearch from 'components/utilities/search/EntitySearch';
import {
  Column,
  InnerContainer,
  PageContainer,
  Row,
} from 'styles/common.styles';

import Categories from 'components/utilities/Category';
import { ArticleEntity, ArticlesDocument } from 'generated/graphql';

import { useFetchEntities } from 'src/hooks/useFetchEntities';
import {
  INITIAL_STATE as Article_State,
  articleReducer,
} from '../Articles/articleReducer';

import { useSearchState } from 'components/utilities/search/searchReducer';
import { AuthContext } from 'src/features/auth/AuthContext';
import { SearchBlock } from 'components/utilities/search/search.styles';
import { cutTextToLength } from 'src/utils';
import { TBookMark } from 'src/types';
import { useRouter } from 'next/router';

type pageProps = {
  articles: ArticleEntity[];
  total: number;
};

type saveFuncProps = {
  id: string;
  title: string;
  slug: string;
  image: string;
};


const CategoryArticles = ({ articles, total }: pageProps) => {
  const dispatcher = useAppDispatch();
  const router = useRouter()
  const [filteredArticles, setFilteredArticles] = useState<ArticleEntity[]>([]);

  const [state, dispatch] = useReducer(articleReducer, Article_State);
  const { user } = useContext(AuthContext);

  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [myBookMarks, setMyBookMarks] = useState<TBookMark[]>([]);

  const searchState = useSearchState();

//   console.log(total);
  const remaining = total % filteredArticles.length;
  const fetchData = useFetchEntities({
    limit: remaining > 4 ? 4 : remaining,
    start: filteredArticles.length as number,
    gQDocument: ArticlesDocument,
  });
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
      name: router.query.category as string,
      url: `/articles/${router?.query?.category as string}`,
    },
  ];

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

  const getMe = useCallback(async () => {
    const marks: string[] = [];
    const { data } = await fetchStrapiUser();
    setMyBookMarks(data?.data);
    data?.data.forEach((item: { itemId: string }) => marks.push(item.itemId));
    setBookmarks(marks);
    // console.log('the response', data);
    return data;
  }, []);

  // const handleModal = useCallback(() => {
  //   dispatch(openModal('REGISTER_FORM'));
  // }, [dispatch]);

  useEffect(() => {
    if (user) {
      const unsubscribe = getMe();
      return () => {
        unsubscribe;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getData = useCallback(async () => {
    if (!searchState.searching && filteredArticles.length < total) {
      const res = fetchData;
      // console.log(res?.data.articles.data);
      const articles = res?.data?.articles;
      setFilteredArticles((filteredArticles) => [
        ...filteredArticles,
        // eslint-disable-next-line no-unsafe-optional-chaining
        ...articles?.data,
      ]);
    }
  }, [fetchData, filteredArticles.length, searchState.searching, total]);

  const saveArticle = useCallback(
    async ({ id, title, slug, image }: saveFuncProps) => {
      // console.log(id, title, slug, image)
      // console.log(bookmarks);
      if (user === null) {
        // console.log(id, title, slug, image);
        dispatcher(openModal('LOGIN_FORM'));
      }
      if (bookmarks.includes(id)) {
        const filteredMarks = myBookMarks.filter((item) => item?.itemId !== id);
        await updateStrapiUserBookMarks(filteredMarks);
        await getMe();
      } else {
        // console.log('summer house');
        await updateStrapiUserBookMarks([
          ...myBookMarks,
          { itemId: id, title, slug, image, type: 'article' },
        ]);
        await getMe();
      }
      // console.log('saving articles');
    },
    [bookmarks, dispatcher, getMe, myBookMarks, user]
  );
  return (
    <>
      <InnerContainer>
        <Breadcrumb route={route} />
        {/* <TrendingBlock>
          <Row className="rowblock">
            {filteredArticles?.map((item) => (
              <Column className="column-4" key={item?.id}>
                <SmallACards
                  authorImg={
                    item?.attributes?.author?.data?.attributes?.avatar?.data
                      ?.attributes?.url as string
                  }
                  authorName={
                    item?.attributes?.author?.data?.attributes
                      ?.fullName as string
                  }
                  articleTitle={cutTextToLength(
                    item?.attributes?.title as string,
                    40
                  )}
                  slug={item?.attributes?.slug}
                  readingTime={item?.attributes?.readingTime as string}
                  createdAt={dayjs(item?.attributes?.createdAt).format('MMM D')}
                  saveArticle={() => {
                    const data = {
                      id: item?.id as string,
                      title: item?.attributes?.title as string,
                      slug: item?.attributes?.slug as string,
                      image: item?.attributes?.heroImage?.data?.attributes
                        ?.url as string,
                    };
                    saveArticle({ ...data });
                  }}
                  bookedMarked={
                    bookmarks.includes(item?.id as string) ? true : false
                  }
                  category={
                    item?.attributes?.category?.data?.attributes?.slug as string
                  }
                />
              </Column>
            ))}
          </Row>
        </TrendingBlock> */}
      </InnerContainer>

      <PageContainer>
        <InnerContainer>
          <Row>
            <Column>
              <PageTitle>
                Find useful tips from our{' '}
                <span>{router.query.category as string}</span> articles
              </PageTitle>
            </Column>
          </Row>
          <Row>
            <Column className="column-7">
              <MoreArticlesBlock>
                {filteredArticles?.map((item) => (
                  <ArticleCard
                    className="kidsRow"
                    key={item?.id as string}
                    id={item?.id as string}
                    authorImg={
                      item?.attributes?.author?.data?.attributes?.avatar?.data
                        ?.attributes?.url as string
                    }
                    authorName={
                      item?.attributes?.author?.data?.attributes
                        ?.fullName as string
                    }
                    articleTitle={cutTextToLength(
                      item?.attributes?.title as string,
                      18
                    )}
                    ArticleIntro={cutTextToLength(
                      item?.attributes?.blurb as string,
                      80
                    )}
                    ArticleImage={
                      item?.attributes?.heroImage?.data?.attributes?.url
                    }
                    readingTime={item?.attributes?.readingTime as string}
                    createdAt={dayjs(item?.attributes?.createdAt).format(
                      'MMM D'
                    )}
                    category={
                      item?.attributes?.category?.data?.attributes
                        ?.slug as string
                    }
                    saveArticle={() => {
                      const data = {
                        id: item?.id as string,
                        title: item?.attributes?.title as string,
                        slug: item?.attributes?.slug as string,
                        image: item?.attributes?.heroImage?.data?.attributes
                          ?.url as string,
                      };
                      saveArticle({ ...data });
                    }}
                    bookedMarked={
                      bookmarks.includes(item?.id as string) ? true : false
                    }
                    slug={item?.attributes?.slug}
                  />
                ))}
                <LinkBlock onClick={getData}>
                  {filteredArticles.length < total && <p>Discover more</p>}
                </LinkBlock>
              </MoreArticlesBlock>
            </Column>
            <Column className="column-5">
              <SearchBlock>
                {/* <Search placeholder={'Search particular information'} /> */}
                <EntitySearch
                  entities={articles}
                  setFilteredEntities={setFilteredArticles as any}
                />
              </SearchBlock>
              {/* <Fields /> */}
              <Categories />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default CategoryArticles;