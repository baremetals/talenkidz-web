import React from 'react'
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from 'lib/initApollo';
import { useNoAuthPages } from "lib/noAuth";
import { ListingEntity, ListingsDocument, ListingsQueryResult, CategoriesQueryResult, CategoriesDocument, CategoryEntity } from "generated/graphql";
import Listings from 'components/Listings';

type pageProps = {
    lists: { listings: { data: ListingEntity[] } },
    cats: { data: { categories: { data: CategoryEntity[] } }, loading: boolean }
}

function ListingsPage(props: pageProps) {
    const { cats, lists } = props;
    // console.log(lists)
    useNoAuthPages();
    return (
        <>
            <Head>
                <title>Talentkids | Activities</title>
                <meta
                    property="og:title"
                    content="Talentkids | Activities"
                    key="title"
                />
                <meta
                    name="description"
                    content="Activities"
                />
                <meta property="og:url" content="https://talentkids.io/activities" />
                <meta property="og:type" content="activities" />
                <meta property="og:locale" content="en_GB" />
                <link rel="canonical" href="https://talentkids.io/activities" />
            </Head>
            <Listings listings={lists?.listings?.data} categories={cats?.data?.categories?.data} />
        </>
    );
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {

    const { data } = await client.query<ListingsQueryResult>({
        query: ListingsDocument,
        variables: {
            pagination: {
                start: 0,
                limit: 6,
            },
            sort: "createdAt:desc",
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
        props: { lists: data, cats }, // will be passed to the page component as props
    };
}

export default ListingsPage
