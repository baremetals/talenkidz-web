import React from 'react'
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from 'lib/initApollo';
import { EventEntity, EventsDocument, EventsQueryResult, CategoriesQueryResult, CategoriesDocument, CategoryEntity } from "generated/graphql";
import { useNoAuthPages } from "lib/noAuth";
import Events from 'components/Events';


type pageProps = {
  eve: { events: { data: EventEntity[] } },
  cats: { data: { categories: { data: CategoryEntity[] } }, loading: boolean }
}

const EventsPage = (props: pageProps) => {

  const { cats, eve } = props;
  // console.log(eve)
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
        <meta property="og:url" content="https://talentkids.io/events" />
        <meta property="og:type" content="events" />
        <meta property="og:locale" content="en_GB" />
        <link rel="canonical" href="https://talentkids.io/events" />
      </Head>
      <Events events={eve?.events?.data} categories={cats?.data?.categories?.data} />
    </>
  )
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {

  const { data } = await client.query<EventsQueryResult>({
    query: EventsDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "createdAt:desc",
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
    props: { eve: data, cats }, // will be passed to the page component as props
  };
}

export default EventsPage
