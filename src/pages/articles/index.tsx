import React from "react";
import Head from "next/head";
import Articles from 'components/Articles';
import { GetServerSidePropsContext } from "next";
import { client } from 'lib/initApollo';
import { ArticleEntity, ArticlesDocument, ArticlesQueryResult, CategoriesQueryResult, CategoriesDocument, CategoryEntity } from "generated/graphql";
import { useNoAuthPages } from "lib/noAuth";


type pageProps = {
    art: { articles: { data: ArticleEntity[] } },
    cats: { data: { categories: { data: CategoryEntity[] } }, loading: boolean }
}

function ArticlesPage(props: pageProps) {
    
    const {cats, art} = props;
    // console.log(cats?.data?.categories?.data);
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
                <meta property="og:url" content="https://talentkids.io/articles" />
                <meta property="og:type" content="articles" />
                <meta property="og:locale" content="en_GB" />
                <link rel="canonical" href="https://talentkids.io/articles" />
            </Head>
            <Articles articles={[...art?.articles?.data, ...art?.articles?.data]} categories={cats?.data?.categories?.data}/>
        </>
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

export default ArticlesPage;
