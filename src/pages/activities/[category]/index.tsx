import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'src/app/hooks';
import { setActivities } from 'src/features/activities';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import Layout from 'components/Layout';
import CategoryListings from 'components/list/CategoryListings';
import {
  FilteredListingsDocument,
  FilteredListingsQueryResult,
  ListingEntity,
  ResponseCollectionMeta,
} from 'generated/graphql';
import { useEffect } from 'react';


type pageProps = {
  lists: { listings: { data: ListingEntity[]; meta: ResponseCollectionMeta } };
};

function FilteredListingsPage(props: pageProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { lists } = props;
  const { category } = router.query;

  const description = 'Activities';
  const url = `https://www.talentkids.io/listings/${category}`;
  // console.log(cats?.data?.categories?.data);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Events',
  };
  useNoAuthPages();
  useEffect(() => {
    dispatch(
      setActivities({
        activities: lists?.listings?.data,
        total: lists?.listings?.meta?.pagination?.total,
        activitiesLength: lists?.listings?.data?.length,
      })
    );
  }, [
    lists?.listings?.data,
    lists?.listings?.meta?.pagination?.total,
    dispatch,
  ]);
  return (
    <Layout
      title={`Talentkids | Activities`}
      metaDescription={description}
      canonicalUrl={url}
      data={JSON.stringify(structuredData)}
      type="activities"
      pageUrl={url}
    >
      <CategoryListings />
    </Layout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { category } = ctx.query;
  const { data } = await client.query<FilteredListingsQueryResult>({
    query: FilteredListingsDocument,
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
      sort: 'createdAt:desc',
    },
  });


  return {
    props: { lists: data }, // will be passed to the page component as props
  };
}

export default FilteredListingsPage;
