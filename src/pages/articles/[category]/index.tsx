
import Layout from 'components/Layout';
import {
  ArticleEntity,
  FilteredArticlesDocument,
  FilteredArticlesQueryResult,
  ResponseCollectionMeta,
} from 'generated/graphql';
import { client } from 'src/lib/initApollo';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';


import CategoryArticles from 'components/content/CategoryArticles';
import { useAppDispatch } from 'src/app/hooks';
import { useEffect } from 'react';
import { setArticles } from 'src/features/articles';

type pageProps = {
  art: { articles: { data: ArticleEntity[]; meta: ResponseCollectionMeta } };
};

function FilteredArticlesPage(props: pageProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { art } = props;
  const { category } = router.query;
  const description = 'Articles';
  const url = `https://www.talentkids.io/articles/${category}`;
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
  // console.log(art);
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
        <CategoryArticles />
    </Layout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { category } = ctx.query;
  const { data } = await client.query<FilteredArticlesQueryResult>({
    query: FilteredArticlesDocument,
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
    props: { art: data }, // will be passed to the page component as props
  };
}

export default FilteredArticlesPage;
