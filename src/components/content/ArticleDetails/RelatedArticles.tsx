import React, { ReactElement } from 'react'
import dayjs from "dayjs";
import Link from 'next/link'
import { useFilteredArticlesQuery, ArticleEntity } from "generated/graphql";
import { cutTextToLength } from 'src/utils';

import ArticleCard from 'components/content/Articles/ArticleCard';
import {
  Row,
  Column,
} from 'styles/common.styles';
import { CardWrapper, LinkWrapper, SearchWrapper } from './details.styles';

import Fields from 'components/widgets/Fields';
import Search from 'components/widgets/Search';



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

    // console.log(data?.articles?.data)
    // console.log(category)
    const arty = data?.articles?.data as ArticleEntity[]


    return (
      <Row>
        <Column className="column-7">
          <CardWrapper>
            {arty?.map((item) => (
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
            <Search placeholder={'Search particular information'} />
          </SearchWrapper>
          <Fields />
        </Column>
      </Row>
    );
}

export default RelatedArticles
