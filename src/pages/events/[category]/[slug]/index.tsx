import React from 'react'
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";
import {
  EventDocument,
  EventEntityResponseCollection,
  EventQueryResult,
} from "generated/graphql";
import Layout from 'components/Layout';
import EventDetails from 'components/EventDetails'
import { useNoAuthPages } from "lib/noAuth";
import { locationType, onlineLocationType, bothLocationType } from 'utils/types';

const Event = (props: { data: { events: EventEntityResponseCollection; }; loading: boolean; error: any; }) => {

  useNoAuthPages();
  const event = props?.data?.events?.data[0];
  const location = event?.attributes?.Location
  const meta = event?.attributes?.SEO;
  const host = event?.attributes?.host?.data?.attributes
  // console.log(host)

  

  

  let place: locationType | onlineLocationType | bothLocationType;

  if (event?.attributes?.venue === "both") {
    place = [{
      "@type": "VirtualLocation",
      "url": event?.attributes?.link as string,
    },
    {
      "@type": "Place",
      "name": location?.name as string,
      "address": {
        "@type": "PostalAddress",
        streetAddress: location?.street as string,
        addressLocality: location?.town as string,
        postalCode: location?.postCode as string,
        "addressCountry": "UK"
      }
    },
    ]
  } 
  else if (event?.attributes?.venue === "online") {
    const ol = {
      "@type": "VirtualLocation",
      "url": event?.attributes?.link as string,
    }
    place = ol
  } 
  else {
    const loc = {
      "@type": "Place",
      "name": location?.name as string,
      "address": {
        "@type": "PostalAddress",
        streetAddress: location?.street,
        addressLocality: location?.town,
        postalCode: location?.postCode,
        "addressCountry": "UK"
      }
    } as locationType
    place = loc
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ChildrensEvent',
    name: meta?.title,
    startDate: event?.attributes?.startDate,
    endDate: event?.attributes?.endDate,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    location: place,
    image: meta?.image,
    description: meta?.description,
    organizer: [
      {
        '@type': 'Organization',
        name: host?.name,
        logo: host?.logo,
        url: host?.website
      },
    ],
    
  };

  // console.log('the data: ', structuredData)
  return (
    <Layout
      title={`Talentkids | ${meta?.title as string}`}
      metaDescription={meta?.description as string}
      canonicalUrl={meta?.url as string}
      pageUrl={meta?.url as string}
      image={meta?.image as string}
      data={JSON.stringify(structuredData)}
      imageHeight={'auto'}
      imageWidth={'100%'}
      type={meta?.type as string}
    >
      <EventDetails props={props} />
    </Layout>
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
