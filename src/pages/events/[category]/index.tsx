import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import Events from 'components/Events';
import { GetServerSidePropsContext } from "next";
import { client } from 'lib/initApollo';
import { EventEntity, FilteredEventsDocument, FilteredEventsQueryResult, CategoriesQueryResult, CategoriesDocument, CategoryEntity } from "generated/graphql";
import { useNoAuthPages } from "lib/noAuth";


type pageProps = {
  eve: { articles: { data: EventEntity[] } },
  cats: { data: { categories: { data: CategoryEntity[] } }, loading: boolean }
}

function FilteredArticlesPage(props: pageProps) {
  const router = useRouter();
  const { cats, eve } = props;
  const { category } = router.query;
  // console.log(art);
  useNoAuthPages();
  return (
    <>
      <Head>
        <title>Talentkids | Events</title>
        <meta
          property="og:title"
          content="Talentkids | Events"
          key="title"
        />
        <meta
          name="description"
          content="Events"
        />
        <meta property="og:url" content={`https://talentkids.io/events/${category}` || ""} />
        <meta property="og:type" content="events" />
        <link rel="canonical" href={`https://talentkids.io/events/${category}` || ""} />
      </Head>
      <Events events={eve?.articles?.data} categories={cats?.data?.categories?.data} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

  const { category } = ctx.query;
  const { data } = await client.query<FilteredEventsQueryResult>({
    query: FilteredEventsDocument,
    variables: {
      filters: {
        category: {
          slug: {
            eq: category,
          },
        }
      },
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "updatedAt:desc",
    },
  });

  const cats = await client.query<CategoriesQueryResult>({
    query: CategoriesDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "slug:asc",
    },
  });
  return {
    props: { art: data, cats }, // will be passed to the page component as props
  };
}

export default FilteredArticlesPage;
