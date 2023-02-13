import Events from 'components/list/Events';
import Layout from 'components/Layout';
import {
  EventEntity,
  EventsDocument,
  EventsQueryResult,
  FilteredEventsDocument,
  FilteredEventsQueryResult,
  ResponseCollectionMeta,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { setEvents } from 'src/features/events';

type pageProps = {
  eve: { events: { data: EventEntity[]; meta: ResponseCollectionMeta } };
};

const EventsPage = (props: pageProps) => {
  const dispatch = useAppDispatch();
  const { eve } = props;
  const description = 'Events';
  const url = 'https://www.talentkids.io/events';
  // console.log(cats?.data?.categories?.data);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Events',
    // headline: meta?.title,
    // description: meta?.description,
    // author: [
    //     {
    //         '@type': 'Person',
    //         name: author?.fullName,
    //     },
    // ],
    // image: meta?.image,
    // datePublished: article?.attributes?.updatedAt,
  };
  // console.log(eve)
  useNoAuthPages();

  useEffect(() => {
    dispatch(
      setEvents({
        events: eve?.events?.data,
        total: eve?.events?.meta?.pagination?.total,
        eventsLength: eve?.events?.data?.length,
      })
    );
  }, [eve?.events?.data, eve?.events?.meta?.pagination?.total, dispatch]);
  return (
    <Layout
      title={`Talentkids | Events`}
      metaDescription={description}
      canonicalUrl={url}
      data={JSON.stringify(structuredData)}
      type="events"
      pageUrl={url}
    >
      <Events />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  console.log(ctx.query.filter);
  const date = new Date();
  console.log(date.getMonth() + 1);
  if (ctx.query.filters !== undefined) {
    const { data } = await client.query<FilteredEventsQueryResult>({
      query: FilteredEventsDocument,
      variables: {
        filters: {
          category: {
            slug: {
              eq: '',
            },
          },
        },
        pagination: {
          start: 0,
          limit: 6,
        },
        sort: 'updatedAt:desc',
      },
    });
  }
    const { data } = await client.query<EventsQueryResult>({
      query: EventsDocument,
      variables: {
        pagination: {
          start: 0,
          limit: 6,
        },
        sort: 'createdAt:desc',
      },
    });

  return {
    props: { eve: data }, // will be passed to the page component as props
  };
}

export default EventsPage;
