import Articles from 'components/content/Articles';
import Layout from 'components/Layout';
import {
  ArticleEntity,
  ArticlesDocument,
  ArticlesQueryResult,
  CategoriesDocument,
  CategoriesQueryResult,
  CategoryEntity,
} from 'generated/graphql';
import { client } from 'lib/initApollo';
import { useNoAuthPages } from 'lib/noAuth';
import { GetServerSidePropsContext } from 'next';

type pageProps = {
  art: { articles: { data: ArticleEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

function ArticlesPage(props: pageProps) {
  const { cats, art } = props;
  const description = 'Articles';
  const url = 'https://talentkids.io/articles';
  // console.log(cats?.data?.categories?.data);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPostings',
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
      title={`Talentkids | Articles`}
      metaDescription={description}
      canonicalUrl={url}
      data={JSON.stringify(structuredData)}
      type="articles"
      pageUrl={url}
    >
      <Articles
        articles={art?.articles?.data}
        categories={cats?.data?.categories?.data}
      />
    </Layout>
  );
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  const { data } = await client.query<ArticlesQueryResult>({
    query: ArticlesDocument,
    variables: {
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

export default ArticlesPage;
