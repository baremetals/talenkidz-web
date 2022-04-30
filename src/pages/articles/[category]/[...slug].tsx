import React from 'react'
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";
import {
    ArticleDocument,
    ArticleEntityResponseCollection,
    ArticleQueryResult,
} from "generated/graphql";
import { ArticleDetails } from 'components/ArticleDetails'
import { useNoAuthPages } from "lib/noAuth";


const Article = (props: { data: { articles: ArticleEntityResponseCollection; }; loading: boolean; error: any; }) => {
    useNoAuthPages();
    const article = props?.data?.articles?.data[0];
    const meta = article?.attributes?.SEO;
    return (
        <>
            <Head>
                <title>Bare Metals Aacademy | {meta?.title} </title>
                <meta property="og:title" content={meta?.title as string} key="title" />
                <meta name="description" content={meta?.description as string} />
                <meta property="og:type" content={meta?.type as string} />
                <meta property="og:url" content={meta?.url as string || ""} />
                <meta property="og:image" content={meta?.image as string} />
                <meta property="og:image:width" content="100%" />
                <meta property="og:image:height" content="auto" />
                <link
                    rel="canonical"
                    href={meta?.url as string || ''}
                />
            </Head>
            <ArticleDetails props={props} />
        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const { slug } = ctx.query;
    const searchValue = slug![0]
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

export default Article
