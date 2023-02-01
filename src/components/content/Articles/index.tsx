import ArticleCard from 'components/content/Articles/ArticleCard';
import SmallACards from 'components/content/Articles/SmallACards';
import Breadcrumb from 'components/widgets/Breadcrumb';
import Fields from 'components/widgets/Fields';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useReducer, useState } from 'react';
import { updateStrapiEntity } from 'src/helpers';

import {
  ArticleTitle,
  LinkBlock,
  PageTitle,
  MoreArticlesBlock,
  TrendingBlock,
} from './styles';

import Search from 'components/widgets/Search';
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

import EntitySearch from 'components/utilities/search/EntitySearch';
import {

  Column,
  InnerContainer,
  PageContainer,
  Row,
  Title,
} from 'styles/common.styles';

import Categories from 'components/utilities/Category';
import {
  ArticleEntity,
  ArticlesDocument,
  CategoryEntity,
  ComponentLikesLikes,
} from 'generated/graphql';

import { useFetchEntities } from 'src/hooks/useFetchEntities';
import {
  INITIAL_STATE as Article_State,
  articleReducer,
} from './articleReducer';
// import { SearchContext } from 'components/utilities/search/SearchContext';
import { useSearchState } from 'components/utilities/search/searchReducer';
import { AuthContext } from 'src/features/auth/AuthContext';
import { SearchBlock } from 'components/utilities/search/search.styles';
import { cutTextToLength } from 'src/utils';

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
  const [hasLiked, setHasLiked] = useState(false);

  const searchState = useSearchState();

  // console.log('the state', searchState);
  const limit = 4
  const remaining = total % filteredArticles.length;
  const fetchData = useFetchEntities({
    limit: remaining > 4 ? 4 : remaining,
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


  const getData = async () => {
    if (!searchState.searching && filteredArticles.length < total) {
      const res = await fetchData;
      // console.log(res);
      setFilteredArticles((filteredArticles) => [
        ...filteredArticles,
        // eslint-disable-next-line no-unsafe-optional-chaining
        ...res?.articles?.data,
      ]);
    }
  };

  const handleClick = async (
    hasLiked: boolean,
    likes: ComponentLikesLikes[],
    articleId: string,
    totaleLikes: number
  ) => {
    if (!user) {
      console.log('please sign in first');
    } else {
      if (hasLiked) {
        // console.log('before',hasLiked);
        // setHasLiked(false);
        // hasLiked = false;
        // totaleLikes - 1;
        const filter = likes?.filter((like) => like?.userId !== user?.id);
        await updateStrapiEntity('articles', articleId as string, {
          likes: filter as ComponentLikesLikes[],
        });
        console.log(totaleLikes);
        setFilteredArticles(filteredArticles);
      } else {
        hasLiked = true;
        totaleLikes + 1;
        await updateStrapiEntity('articles', articleId as string, {
          likes: [
            ...(likes as ComponentLikesLikes[]),
            { userId: user.id },
          ] as ComponentLikesLikes[],
        });
        setFilteredArticles(filteredArticles);
        // console.log(res);
      }
    }
  };

  console.log(filteredArticles);
  console.log(remaining);

  const route = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'articles',
      url: '/articles',
    },
  ];

  return (
    <>
      <InnerContainer>
        <Breadcrumb route={route} />
        <ArticleTitle>
          <Title className="title">
            <span>TRENDING</span> ON TALENTKIDS
          </Title>
        </ArticleTitle>

        <TrendingBlock>
          <Row className="rowblock">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <Column key={i}>
                <SmallACards />
              </Column>
            ))}
          </Row>
        </TrendingBlock>
      </InnerContainer>

      <PageContainer>
        <InnerContainer>
          <Row>
            <Column>
              <PageTitle>
                Find more useful tips from our <span>articles</span>
              </PageTitle>
            </Column>
          </Row>
          <Row>
            <Column className="column-7">
              <MoreArticlesBlock>
                {filteredArticles?.map((item, i) => (
                  <ArticleCard
                    className="kidsRow"
                    key={item?.id as string}
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
                  />
                ))}
                <LinkBlock onClick={getData}>
                  <p>Discover more</p>
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
              <Categories categories={categories} />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default Articles;
