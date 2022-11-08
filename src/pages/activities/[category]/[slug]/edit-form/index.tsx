import React from 'react'
import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";


import { useNoAuthPages } from "lib/noAuth";
import {
    ListDocument,
    Listing,
    ListingEntity,
    ListingEntityResponseCollection,
    ListQueryResult,
    Maybe,
} from "generated/graphql";
import EditForm from 'components/Create/EditForm';
import Layout from 'components/Layout';
import { requireAuthentication } from 'lib/requireAuthentication';


const ListEditForm = (props: { data: { listings: ListingEntityResponseCollection; }; loading: boolean; error: any; }) => {
    useNoAuthPages();
    const list = props?.data?.listings?.data[0];
    const meta = list?.attributes?.SEO;
    // console.log(list)
    return (
        <Layout
            title={`Bare Metals Aacademy | ${meta?.title}`}
        >
            {/* <Head>
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
            </Head> */}
            <EditForm id={list?.id as string} attributes={list?.attributes as Maybe<Listing>} formType={'activities'} />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(async (ctx: GetServerSidePropsContext) => {
    const { slug, type } = ctx.query;
    // console.log(type);
    // console.log(slug![0]);

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
})

export default ListEditForm