import { ArticleDetails } from 'components/content/ArticleDetails';
import Layout from 'components/Layout';
import {
  ArticleDocument,
  ArticleEntityResponseCollection,
  ArticleQueryResult,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { GetServerSidePropsContext } from 'next';

const Article = (props: {
  data: { articles: ArticleEntityResponseCollection };
  loading: boolean;
  error: any;
}) => {
  useNoAuthPages();
  const article = props?.data?.articles?.data[0];
  const author = article?.attributes?.author?.data?.attributes;
  const meta = article?.attributes?.SEO;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta?.title,
    description: meta?.description,
    author: [
      {
        '@type': 'Person',
        name: author?.fullName,
      },
    ],
    image: meta?.image,
    datePublished: article?.attributes?.updatedAt,
  };
  // console.log(article?.attributes?.author?.data?.attributes);
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
      <ArticleDetails props={props} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.query;
  const searchValue = slug![0];
  const { data } = await client.query<ArticleQueryResult>({
    query: ArticleDocument,
    variables: {
      filters: {
        slug: {
          eq: searchValue,
        },
      },
    },
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Article;
