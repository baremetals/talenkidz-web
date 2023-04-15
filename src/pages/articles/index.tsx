import { useEffect } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { setArticles } from 'src/features/articles/reducers';

import Articles from 'components/content/Articles';
import Layout from 'components/Layout';
import {
  ArticleEntity,
  ArticlesDocument,
  ArticlesQueryResult,
  ResponseCollectionMeta,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { GetServerSidePropsContext } from 'next';

type pageProps = {
  art: { articles: { data: ArticleEntity[]; meta: ResponseCollectionMeta } };
};

function ArticlesPage(props: pageProps) {
  const { art } = props;
  const dispatch = useAppDispatch();
  const description = 'Articles';
  const url = 'https://www.talentkids.io/articles';
  // console.log(props);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPostings',
  };
  useNoAuthPages();

  useEffect(() => {
    dispatch(
      setArticles({
        articles: art?.articles?.data,
        total: art?.articles?.meta?.pagination?.total,
        articlesLength: art?.articles?.data?.length,
      })
    );
  }, [art?.articles?.data, art?.articles?.meta?.pagination?.total, dispatch]);
  return (
    <Layout
      title={`Talentkids | Articles`}
      metaDescription={description}
      canonicalUrl={url}
      data={JSON.stringify(structuredData)}
      type="articles"
      pageUrl={url}
    >
      <Articles />
    </Layout>
  );
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  const data  = await client.query<ArticlesQueryResult>({
    query: ArticlesDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: 'createdAt:desc',
    },
  });
  console.log('the fucking data', data);

  // if (data?.error?.name) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: '/404',
  //     },
  //     props: {},
  //   };
  // }

  return {
    props: { art: data.data }, // will be passed to the page component as props
  };
}

export default ArticlesPage;
