import { useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'src/app/hooks';
import { setEvents } from 'src/features/events';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { client } from 'src/lib/initApollo';
import Layout from 'components/Layout';
import CategoryEvents from 'components/list/CategoryEvents';
import {
  CategoryEntity,
  EventEntity,
  FilteredEventsDocument,
  FilteredEventsQueryResult,
  ResponseCollectionMeta,
} from 'generated/graphql';



type pageProps = {
  eve: { events: { data: EventEntity[]; meta: ResponseCollectionMeta } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

function FilteredArticlesPage(props: pageProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { eve } = props;
  const { category } = router.query;

  const description = 'Events';
  const url = `https://www.talentkids.io/events/${category}`;
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
  //
  // console.log(props);
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
      <CategoryEvents />
    </Layout>
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
        },
      },
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: 'updatedAt:desc',
    },
  });
  return {
    props: { eve: data }, // will be passed to the page component as props
  };
}

export default FilteredArticlesPage;
