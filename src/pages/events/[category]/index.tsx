import Events from 'components/list/Events';
import Layout from 'components/Layout';
import {
  CategoriesDocument,
  CategoriesQueryResult,
  CategoryEntity,
  EventEntity,
  FilteredEventsDocument,
  FilteredEventsQueryResult,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/lib/noAuth';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

type pageProps = {
  eve: { articles: { data: EventEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

function FilteredArticlesPage(props: pageProps) {
  const router = useRouter();
  const { cats, eve } = props;
  const { category } = router.query;

  const description = 'Events';
  const url = `https://talentkids.io/events/${category}`;
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
  // console.log(art);
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
        events={eve?.articles?.data}
        categories={cats?.data?.categories?.data}
      />
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
    props: { art: data, cats }, // will be passed to the page component as props
  };
}

export default FilteredArticlesPage;
