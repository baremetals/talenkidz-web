import Layout from 'components/Layout';
import Listings from 'components/list/Listings';
import {
  CategoriesDocument,
  CategoriesQueryResult,
  CategoryEntity,
  FilteredListingsDocument,
  FilteredListingsQueryResult,
  ListingEntity,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

type pageProps = {
  lists: { listings: { data: ListingEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

function FilteredListingsPage(props: pageProps) {
  const router = useRouter();
  const { cats, lists } = props;
  const { category } = router.query;

  const description = 'Activities';
  const url = `https://talentkids.io/listings/${category}`;
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

export default FilteredListingsPage;
