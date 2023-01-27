import Events from 'components/list/Events';
import Layout from 'components/Layout';
import {
  CategoriesDocument,
  CategoriesQueryResult,
  CategoryEntity,
  EventEntity,
  EventsDocument,
  EventsQueryResult,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { GetServerSidePropsContext } from 'next';

type pageProps = {
  eve: { events: { data: EventEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

const EventsPage = (props: pageProps) => {
  const { cats, eve } = props;
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
  return (
    <Layout
      title={`Talentkids | Events`}
      metaDescription={description}
      canonicalUrl={url}
      data={JSON.stringify(structuredData)}
      type="events"
      pageUrl={url}
    >
      <Events
        events={eve?.events?.data}
        categories={cats?.data?.categories?.data}
      />
    </Layout>
  );
};

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
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

  const cats = await client.query<CategoriesQueryResult>({
    query: CategoriesDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: 'slug:asc',
    },
  });
  return {
    props: { eve: data, cats }, // will be passed to the page component as props
  };
}

export default EventsPage;
