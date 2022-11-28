import { client } from 'src/lib/initApollo';
import { GetServerSidePropsContext } from 'next';

import Layout from 'components/Layout';
import ListDetails from 'components/list/ListDetails';
import {
  ListDocument,
  ListingEntityResponseCollection,
  ListQueryResult,
} from 'generated/graphql';
import { useNoAuthPages } from 'src/lib/noAuth';
import {
  bothLocationType,
  locationType,
  onlineLocationType,
} from 'src/utils/types';

const ListDetailsPage = (props: {
  data: { listings: ListingEntityResponseCollection };
  loading: boolean;
  error: any;
}) => {
  useNoAuthPages();
  const list = props?.data?.listings?.data[0];
  const meta = list?.attributes?.SEO;
  const location = list?.attributes?.Location;
  const host = list?.attributes?.host?.data?.attributes;

  let place: locationType | onlineLocationType | bothLocationType;

  if (list?.attributes?.venue === 'both') {
    place = [
      {
        '@type': 'VirtualLocation',
        url: list?.attributes?.link as string,
      },
      {
        '@type': 'Place',
        name: location?.name as string,
        address: {
          '@type': 'PostalAddress',
          streetAddress: location?.street as string,
          addressLocality: location?.town as string,
          postalCode: location?.postCode as string,
          addressCountry: 'UK',
        },
      },
    ];
  } else if (list?.attributes?.venue === 'online') {
    const ol = {
      '@type': 'VirtualLocation',
      url: list?.attributes?.link as string,
    };
    place = ol;
  } else {
    const loc = {
      '@type': 'Place',
      name: location?.name as string,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location?.street,
        addressLocality: location?.town,
        postalCode: location?.postCode,
        addressCountry: 'UK',
      },
    } as locationType;
    place = loc;
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: meta?.title,
    startDate: list?.attributes?.startDate,
    endDate: list?.attributes?.endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: place,
    image: meta?.image,
    description: meta?.description,
    organizer: [
      {
        '@type': 'Organization',
        name: host?.name,
        logo: host?.logo,
        url: host?.website,
      },
    ],
  };
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
      <ListDetails props={props} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.query;
  // console.log(slug);
  const { data } = await client.query<ListQueryResult>({
    query: ListDocument,
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
export default ListDetailsPage;
