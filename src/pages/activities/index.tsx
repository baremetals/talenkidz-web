import Layout from 'components/Layout';
import Listings from 'components/list/Listings';
import {
  ListingEntity,
  ListingsDocument,
  ListingsQueryResult,
  ResponseCollectionMeta,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { setActivities } from 'src/features/activities';

type pageProps = {
  lists: { listings: { data: ListingEntity[]; meta: ResponseCollectionMeta } };
};

function ListingsPage(props: pageProps) {
  const dispatch = useAppDispatch();
  const { lists } = props;
  const description = 'Activities';
  const url = 'https://www.talentkids.io/activities';
  // console.log(cats?.data?.categories?.data);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Events',
    //  about: {description},
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
  // console.log(lists)
  useNoAuthPages();
  useEffect(() => {
    dispatch(
      setActivities({
        activities: lists?.listings?.data,
        total: lists?.listings?.meta?.pagination?.total,
        activitiesLength: lists?.listings?.data?.length,
      })
    );
  }, [lists?.listings?.data, lists?.listings?.meta?.pagination?.total, dispatch]);
  return (
    <Layout
      title={`Talentkids | Activities`}
      metaDescription={description}
      canonicalUrl={url}
      data={JSON.stringify(structuredData)}
      type="activities"
      pageUrl={url}
    >
      <Listings />
    </Layout>
  );
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  const { data } = await client.query<ListingsQueryResult>({
    query: ListingsDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 12,
      },
      sort: 'createdAt:desc',
    },
  });

  return {
    props: { lists: data }, // will be passed to the page component as props
  };
}

export default ListingsPage;
