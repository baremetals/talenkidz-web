import React from 'react'
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";
import {
  EventDocument,
  EventEntityResponseCollection,
  EventQueryResult,
} from "generated/graphql";
import EventDetails from 'components/EventDetails'
import { useNoAuthPages } from "lib/noAuth";

const Event = (props: { data: { events: EventEntityResponseCollection; }; loading: boolean; error: any; }) => {

  useNoAuthPages();
  const event = props?.data?.events?.data[0];
  const meta = event?.attributes?.SEO;
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | {meta?.title} </title>
        <meta property="og:title" content={meta?.title as string} key="title" />
        <meta name="description" content={meta?.description as string} />
        <meta property="og:type" content={meta?.type as string} />
        <meta property="og:url" content={meta?.url as string || ""} />
        <meta property="og:image" content={meta?.image as string} />
        <meta property="og:image:width" content="100%" />
        <meta property="og:image:height" content="auto" />
        <link
          rel="canonical"
          href={meta?.url as string || ''}
        />
      </Head>
      <EventDetails props={props} />
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.query;
  const { data } = await client.query<EventQueryResult>({
    query: EventDocument,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
    },
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Event
