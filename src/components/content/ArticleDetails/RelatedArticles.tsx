import React, { ReactElement, useEffect, useReducer, useState } from 'react'
import dayjs from "dayjs";
import Link from 'next/link'
import { useFilteredArticlesQuery, ArticleEntity } from "generated/graphql";
import { cutTextToLength } from 'src/utils';
import {
  INITIAL_STATE as Article_State,
  articleReducer,
} from '../Articles/articleReducer';
import ArticleCard from 'components/content/Articles/ArticleCard';
import {
  Row,
  Column,
} from 'styles/common.styles';
import { CardWrapper, LinkWrapper, SearchWrapper } from './details.styles';

import Fields from 'components/widgets/Fields';
import EntitySearch from 'components/utilities/search/EntitySearch';



type propType = {
    category: string
};

function RelatedArticles({ category }: propType): ReactElement {
    const { data } = useFilteredArticlesQuery({
        variables: {
            filters: {
                category: {
                    slug: {
                        eq: category,
                    },
                }
            },
        },
    });
    const [filteredArticles, setFilteredArticles] = useState<ArticleEntity[]>(
      []
    );
    const [state, dispatch] = useReducer(articleReducer, Article_State);
    // console.log(data?.articles?.data)
    // console.log(category)
    const arty = data?.articles?.data as ArticleEntity[]

    useEffect(() => {
      setFilteredArticles(state.articles);
    }, [state.articles]);

    useEffect(() => {
      dispatch({
        type: 'SET_ARTICLES',
        payload: {
          // ...state,
          articles: arty,
          total: arty?.length,
          articlesLength: arty?.length,
        },
      });
    }, [arty]);

    return (
      <Row>
        <Column className="column-7">
          <CardWrapper>
            {filteredArticles?.map((item) => (
              <ArticleCard
                className="kidsRow"
                key={item.id}
                id={item.id as string}
                authorImg={
                  item?.attributes?.author?.data?.attributes?.avatar?.data
                    ?.attributes?.url as string
                }
                authorName={
                  item?.attributes?.author?.data?.attributes?.fullName as string
                }
                articleTitle={cutTextToLength(
                  item?.attributes?.title as string,
                  18
                )}
                articleImage={
                  item?.attributes?.heroImage?.data?.attributes?.url ||
                  '/default-list-img.jpg'
                }
                articleIntro={cutTextToLength(
                  item?.attributes?.blurb as string,
                  80
                )}
                slug={item?.attributes?.slug}
                readingTime={item?.attributes?.readingTime as string}
                createdAt={dayjs(item?.attributes?.createdAt).format('MMM D')}
                category={category}
              />
            ))}
            <LinkWrapper>
              <Link href={'/articles'}>Discover more</Link>
            </LinkWrapper>
          </CardWrapper>
        </Column>
        <Column className="column-5">
          <SearchWrapper>
            <EntitySearch
              entities={arty}
              setFilteredEntities={setFilteredArticles as any}
            />
          </SearchWrapper>
          <Fields />
        </Column>
      </Row>
    );
}

export default RelatedArticles
