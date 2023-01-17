import Layout from 'components/Layout';
import Listings from 'components/list/Listings';
import {
  CategoriesDocument,
  CategoriesQueryResult,
  CategoryEntity,
  ListingEntity,
  ListingsDocument,
  ListingsQueryResult,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { GetServerSidePropsContext } from 'next';

type pageProps = {
  lists: { listings: { data: ListingEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

function ListingsPage(props: pageProps) {
  const { cats, lists } = props;
  const description = 'Activities';
  const url = 'https://talentkids.io/activities';
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
  return (
    <Layout
      title={`Talentkids | Activities`}
      metaDescription={description}
      canonicalUrl={url}
      data={JSON.stringify(structuredData)}
      type="activities"
      pageUrl={url}
    >
      <Listings
        listings={lists?.listings?.data}
        categories={cats?.data?.categories?.data}
      />
    </Layout>
  );
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  const { data } = await client.query<ListingsQueryResult>({
    query: ListingsDocument,
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
    props: { lists: data, cats }, // will be passed to the page component as props
  };
}

export default ListingsPage;
