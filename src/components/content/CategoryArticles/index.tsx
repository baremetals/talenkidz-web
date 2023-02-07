import React from 'react';
import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import dayjs from 'dayjs';

import ArticleCard from 'components/content/Articles/ArticleCard';
import Breadcrumb from 'components/widgets/Breadcrumb';

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
import {
  ArticleEntity,
  // ArticlesDocument,
  FilteredArticlesDocument,
} from 'generated/graphql';

// import { useFetchEntities } from 'src/hooks/useFetchEntities';

import { useSearchState } from 'components/utilities/search/searchReducer';
import { SearchBlock } from 'components/utilities/search/search.styles';
import { cutTextToLength } from 'src/utils';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { articlesSelector, setArticles, totalSelector } from 'src/features/articles';
import { fetchApi } from 'src/helpers';
import { TGetArticles } from 'src/types';


const CategoryArticles = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const articleEntities = useAppSelector(articlesSelector);
  const total = useAppSelector(totalSelector) as number;
  const [filteredArticles, setFilteredArticles] = useState<ArticleEntity[]>([]);

  const searchState = useSearchState();

    // console.log(router.query.category);
  const remaining = total % articleEntities?.length;
  // const fetchData = useFetchEntities({
  //   limit: remaining > 4 ? 4 : remaining,
  //   start: articleEntities?.length as number,
  //   gQDocument: ArticlesDocument,
  // });

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
    setFilteredArticles(articleEntities);
  }, [articleEntities]);

  const getData = useCallback(async () => {
    const body = JSON.stringify({
      limit: remaining > 4 ? 4 : remaining,
      start: articleEntities?.length as number,
      sort: 'createdAt:desc',
      gQDocument: FilteredArticlesDocument,
      filterBy: {
        category: {
          slug: {
            eq: router.query.category,
          },
        },
      },
    });
    if (!searchState.searching && filteredArticles.length < total) {
      try {
        const res: TGetArticles = await fetchApi('/api/entity/filtered', body);
        // console.log(res?.data);
        const articles = res?.data?.articles;
        dispatch(
          setArticles({
            // eslint-disable-next-line no-unsafe-optional-chaining
            articles: [...articleEntities, ...articles?.data],
            total: articles?.meta?.pagination?.total,
            articlesLength: articles?.data?.length,
          })
        );
        
      } catch (err: any) {
        console.log(err);
      }      
    }
  }, [articleEntities, dispatch, filteredArticles.length, remaining, router.query.category, searchState.searching, total]);

  return (
    <>
      <InnerContainer>
        <Breadcrumb route={route} />
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
                    articleIntro={cutTextToLength(
                      item?.attributes?.blurb as string,
                      80
                    )}
                    articleImage={
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
                  entities={articleEntities}
                  setFilteredEntities={setFilteredArticles as any}
                />
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

export default CategoryArticles;