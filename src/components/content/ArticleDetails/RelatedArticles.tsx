import React, { ReactElement, useEffect, useState } from 'react'
import dayjs from "dayjs";
import Link from 'next/link'
import { useFilteredArticlesQuery, ArticleEntity, FilteredArticlesDocument } from "generated/graphql";
import { cutTextToLength } from 'src/utils';

import ArticleCard from 'components/content/Articles/ArticleCard';
import {
  Row,
  Column,
} from 'styles/common.styles';
import { CardWrapper, LinkWrapper, SearchWrapper } from './details.styles';

// import Fields from 'components/widgets/Fields';
import EntitySearch from 'components/utilities/search/EntitySearch';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { articlesSelector, setArticles } from 'src/features/articles';
import Categories from 'components/utilities/Category';



type propType = {
    category: string
};

export function RelatedArticles({ category }: propType): ReactElement {
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
    const dispatch = useAppDispatch();
    const articleEntities = useAppSelector(articlesSelector);
    const [filteredArticles, setFilteredArticles] = useState<ArticleEntity[]>(
      []
    );
    // console.log(data?.articles?.data)
    // console.log(arty)
    const arty = data?.articles?.data as ArticleEntity[]
    // console.log(data);

    useEffect(() => {
      setFilteredArticles(articleEntities);
    }, [articleEntities]);

    useEffect(() => {
      dispatch(
        setArticles({
          articles: arty,
          total: data?.articles?.meta?.pagination?.total,
          articlesLength: arty?.length,
        })
      );
    }, [arty, data?.articles?.meta?.pagination?.total, dispatch]);

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
          {/* <Fields /> */}
          <Categories
            entityDocument={FilteredArticlesDocument}
          />
        </Column>
      </Row>
    );
}

export default RelatedArticles
