import React from 'react'

import Head from "next/head";
import { GetServerSideProps } from "next";
import { useIsAuth } from "src/lib/isAuth";
import Org from "components/users/Organisations";
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { initializeApollo } from "src/lib/apolloClient";
import {
    OrgDocument,
    OrgQueryResult,
    Organisation,
    // OrganisationEntityResponseCollection,
    OrganisationEntity,
} from "generated/graphql";


function OrganisationPage(props: { data: { data: { organisations: { data: [OrganisationEntity]; }; }; }; }) {
    const org =
        props?.data?.data?.organisations?.data[0];
    const {id, attributes} = org
    useIsAuth();
    // console.log(id)
    return (
        <>
            <Head>
                <title>Talentkids</title>
                <meta
                    property="og:title"
                    content="Talentkids"
                    key="title"
                />
                <meta
                    name="description"
                    content="Tutorial site for learning web and software development"
                />
                <meta property="og:type" content="account" />
                <meta
                    property="og:url"
                    content={`https://telentkids.io/account/${attributes?.slug}/` || ""}
                />
                <link
                    rel="canonical"
                    href={`https://telentkids.io/account/${attributes?.slug}/` || ""}
                />
            </Head>
            <Org id={id as string} attributes={attributes as Organisation} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
    async (ctx) => {
        const { username } = ctx.query;
        const cookies = JSON.parse(ctx.req.cookies.talentedKid);
        const { jwt, userType, username: usr } = cookies;

        if (userType === 'candidate' && username === usr) {
            return {
                redirect: {
                    permanent: false,
                    destination: `/user-profile/${username}`,
                },
            };
        }
        const token = `Bearer ${jwt}`;
        const apolloClient = initializeApollo(null, token);
        const data = await apolloClient.query<OrgQueryResult>({
            query: OrgDocument,
            variables: {
                filters: {
                    slug: {
                        eq: username,
                    },
                },
            },
        });
        return {
            props: { data },
        };
    }
);

export default OrganisationPage

