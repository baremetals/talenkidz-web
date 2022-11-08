import React from 'react'
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";

import ListDetails from 'components/ListDetails'
import { useNoAuthPages } from "lib/noAuth";
import {
    ListDocument,
    ListingEntityResponseCollection,
    ListQueryResult,
} from "generated/graphql";


const ListDetailsPage = (props: { data: { listings: ListingEntityResponseCollection; }; loading: boolean; error: any; }) => {
    useNoAuthPages();
    const list = props?.data?.listings?.data[0];
    const meta = list?.attributes?.SEO;
    return (
        <>
            <Head>
                <title>Bare Metals Aacademy | {meta?.title} </title>
                <meta property="og:title" content={meta?.title as string} key="title" />
                <meta name="description" content={meta?.description as string} />
                <meta property="og:type" content={meta?.type as string} />
                <meta property="og:url" content={meta?.url as string} />
                <meta property="og:image" content={meta?.image as string} />
                <meta property="og:image:width" content="100%" />
                <meta property="og:image:height" content="auto" />
                <link
                    rel="canonical"
                    href={meta?.url as string || ''}
                />
            </Head>
            <ListDetails props={props} />
        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const { slug } = ctx.query;
    // console.log(slug);
    const { data } = await client.query<ListQueryResult>({
        query: ListDocument,
        variables: {
            filters: {
                slug: {
                    eq: slug,
                },
            },
        },
    });
    return {
        props: { data }, // will be passed to the page component as props
    };
}
export default ListDetailsPage
