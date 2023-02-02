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

// import {
//   InnerContainer,
// } from 'styles/common.styles';
// import {
//   SearchProvider,
// } from 'components/utilities/search/SearchContext';
// import { SearchProvider } from 'components/utilities/search/searchReducer';

type pageProps = {
  art: { articles: { data: ArticleEntity[]; meta: ResponseCollectionMeta } };
};

function ArticlesPage(props: pageProps) {
  const { art } = props;
  const description = 'Articles';
  const url = 'https://www.talentkids.io/articles';
  // console.log(art);

  
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
          total={art?.articles?.meta?.pagination?.total}
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
      sort: 'createdAt:desc',
    },
  });
  // console.log('the fucking data', data);

  // if (data.status === 404) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: '/404',
  //     },
  //     props: {},
  //   };
  // }

 
  return {
    props: { art: data }, // will be passed to the page component as props
  };
}

export default ArticlesPage;
