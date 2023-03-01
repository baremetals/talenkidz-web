import { useCallback, useEffect, useState } from 'react';

// import { openModal } from 'src/features/modal/reducers';

//articles Redux
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { setArticles } from 'src/features/articles/reducers';
import {
  articlesSelector,
  totalSelector,
} from 'src/features/articles/selectors';

import ArticleCard from 'components/content/Articles/ArticleCard';
import SmallACards from 'components/content/Articles/SmallACards';
import Breadcrumb from 'components/widgets/Breadcrumb';

// import {
//   fetchStrapiUser,
//   updateStrapiUserBookMarks,
// } from 'src/helpers';

import {
  ArticleTitle,
  LinkBlock,
  MoreArticlesBlock,
  PageTitle,
  TrendingBlock,
} from './styles';

import EntitySearch from 'components/utilities/search/EntitySearch';
import {
  Column,
  InnerContainer,
  PageContainer,
  Row,
  Title,
} from 'styles/common.styles';

import {
  ArticleEntity,
  ArticlesDocument,
  FilteredArticlesDocument,
  ResponseCollectionMeta,
} from 'generated/graphql';

import { useFetchEntities } from 'src/hooks/usefetchEntities';
// import {
//   INITIAL_STATE as Article_State,
//   articleReducer,
// } from './articleReducer';

import { useSearchState } from 'components/utilities/search/searchReducer';
// import { AuthContext } from 'src/features/auth/AuthContext';
import { SearchBlock } from 'components/utilities/search/search.styles';
import Categories from 'components/utilities/Categories';
// import { TBookMark } from 'src/types';

// type saveFuncProps = {
//   id: string;
//   title: string;
//   slug: string;
//   image: string;
// };

type TFetchArticleState = {
  data: {
    articles: {
      data: ArticleEntity[];
      meta: ResponseCollectionMeta;
    };
  };
};
const route = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Articles',
    url: '/articles',
  },
];

const Articles = () => {
  const dispatch = useAppDispatch();
  const articleEntities = useAppSelector(articlesSelector);
  const total = useAppSelector(totalSelector) as number;
  const [filteredArticles, setFilteredArticles] = useState<ArticleEntity[]>([]);

  const searchState = useSearchState();

  // console.log('from the articles page', filteredArticles);
  const remaining = total - articleEntities?.length;
  const fetchData = useFetchEntities<TFetchArticleState | null>(
    {
      limit: remaining > 4 ? 4 : remaining,
      start: articleEntities?.length as number,
      gQDocument: ArticlesDocument,
    },
    null
  );

  useEffect(() => {
    setFilteredArticles(articleEntities);
  }, [articleEntities]);

  const getData = useCallback(async () => {
    if (!searchState.searching && filteredArticles.length < total) {
      const res = fetchData;
      // console.log(res);
      const articles = res?.data?.articles;
      // setFilteredArticles((filteredArticles) => [
      //   ...filteredArticles,
      //   // eslint-disable-next-line no-unsafe-optional-chaining
      //   ...articles?.data,
      // ]);
      // console.log(meta);
      dispatch(
        setArticles({
          // ...state,
          total: articles?.meta.pagination.total,
          // eslint-disable-next-line no-unsafe-optional-chaining
          articles: [
            ...articleEntities,
            ...(articles?.data as ArticleEntity[]),
          ],
        })
      );
    }
  }, [
    articleEntities,
    dispatch,
    fetchData,
    filteredArticles?.length,
    searchState.searching,
    total,
  ]);

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
            {articleEntities?.slice(0, 6)?.map((item) => (
              <Column className="column-4" key={item?.id}>
                <SmallACards
                  id={item.id as string}
                  authorImg={
                    item?.attributes?.author?.data?.attributes?.avatar?.data
                      ?.attributes?.url ||
                    (item?.attributes?.creator?.data?.attributes
                      ?.avatar as string)
                  }
                  authorName={
                    item?.attributes?.author?.data?.attributes?.fullName ||
                    (item?.attributes?.creator?.data?.attributes
                      ?.fullName as string)
                  }
                  articleTitle={item?.attributes?.title as string}
                  slug={item?.attributes?.slug}
                  readingTime={item?.attributes?.readingTime as string}
                  createdAt={item?.attributes?.createdAt}
                  category={
                    item?.attributes?.category?.data?.attributes?.slug as string
                  }
                  articleImage={
                    item?.attributes?.heroImage?.data?.attributes?.url
                  }
                />
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
                {filteredArticles?.map((item) => (
                  <ArticleCard
                    className="kidsRow"
                    key={item?.id as string}
                    id={item.id as string}
                    authorImg={
                      item?.attributes?.author?.data?.attributes?.avatar?.data
                        ?.attributes?.url ||
                      (item?.attributes?.creator?.data?.attributes
                        ?.avatar as string)
                    }
                    authorName={
                      item?.attributes?.author?.data?.attributes?.fullName ||
                      (item?.attributes?.creator?.data?.attributes
                        ?.fullName as string)
                    }
                    articleTitle={item?.attributes?.title as string}
                    articleIntro={item?.attributes?.blurb as string}
                    articleImage={
                      item?.attributes?.heroImage?.data?.attributes?.url
                    }
                    readingTime={item?.attributes?.readingTime as string}
                    createdAt={item?.attributes?.createdAt}
                    category={
                      item?.attributes?.category?.data?.attributes
                        ?.slug as string
                    }
                    slug={item?.attributes?.slug}
                  />
                ))}
                <LinkBlock onClick={getData}>
                  {articleEntities?.length < total && <p>Discover more</p>}
                </LinkBlock>
              </MoreArticlesBlock>
            </Column>
            <Column className="column-5">
              <SearchBlock>
                {/* <Search placeholder={'Search particular information'} /> */}
                <EntitySearch entities={articleEntities} />
              </SearchBlock>
              {/* <Fields /> */}
              <Categories entityDocument={FilteredArticlesDocument} />
            </Column>
          </Row>
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default Articles;
