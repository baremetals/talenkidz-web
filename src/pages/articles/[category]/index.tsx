import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import Articles from "components/Articles";
import { GetServerSidePropsContext } from "next";
import { client } from 'lib/initApollo';
import { ArticleEntity, FilteredArticlesDocument, FilteredArticlesQueryResult, CategoriesQueryResult, CategoriesDocument, CategoryEntity } from "generated/graphql";
import { useNoAuthPages } from "lib/noAuth";


type pageProps = {
    art: { articles: { data: ArticleEntity[] } },
    cats: { data: { categories: { data: CategoryEntity[] } }, loading: boolean }
}

function FilteredArticlesPage(props: pageProps) {
    const router = useRouter();
    const { cats, art } = props;
    const { category } = router.query;
    // console.log(art);
    useNoAuthPages();
    return (
        <>
            <Head>
                <title>Talentkids | Articles</title>
                <meta
                    property="og:title"
                    content="Talentkids | Articles"
                    key="title"
                />
                <meta
                    name="description"
                    content="Articles"
                />
                <meta property="og:url" content={`https://talentkids.io/articles/${category}` || ""} />
                <meta property="og:type" content="articles" />
                <link rel="canonical" href={`https://talentkids.io/articles/${category}` || ""}  />
            </Head>
            <Articles articles={art?.articles?.data} categories={cats?.data?.categories?.data} />
        </>
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
                }
            },
            pagination: {
                start: 0,
                limit: 6,
            },
            sort: "updatedAt:desc",
        },
    });

    const cats = await client.query<CategoriesQueryResult>({
        query: CategoriesDocument,
        variables: {
            pagination: {
                start: 0,
                limit: 6,
            },
            sort: "slug:asc",
        },
    });
    return {
        props: { art: data, cats }, // will be passed to the page component as props
    };
}

export default FilteredArticlesPage;
