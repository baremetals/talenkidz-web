import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import Listings from 'components/Listings';
import { GetServerSidePropsContext } from "next";
import { client } from 'lib/initApollo';
import { ListingEntity, FilteredListingsDocument, FilteredListingsQueryResult, CategoriesQueryResult, CategoriesDocument, CategoryEntity } from "generated/graphql";
import { useNoAuthPages } from "lib/noAuth";


type pageProps = {
    lists: { listings: { data: ListingEntity[] } },
    cats: { data: { categories: { data: CategoryEntity[] } }, loading: boolean }
}

function FilteredListingsPage(props: pageProps) {
    const router = useRouter();
    const { cats, lists } = props;
    const { category } = router.query;
    useNoAuthPages();
    return (
        <>
            <Head>
                <title>Talentkids | Listings</title>
                <meta
                    property="og:title"
                    content="Talentkids | Listings"
                    key="title"
                />
                <meta
                    name="description"
                    content="Listings"
                />
                <meta property="og:url" content={`https://talentkids.io/listings/${category}`} />
                <meta property="og:type" content="listings" />
                <link rel="canonical" href={`https://talentkids.io/listings/${category}`} />
            </Head>
            <Listings listings={lists?.listings?.data} categories={cats?.data?.categories?.data} />
        </>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    const { category } = ctx.query;
    const { data } = await client.query<FilteredListingsQueryResult>({
        query: FilteredListingsDocument,
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

export default FilteredListingsPage;
