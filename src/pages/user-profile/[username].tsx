import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useIsAuth } from "lib/isAuth";
import ProfilePage from "components/users/ProfilePage";
import { requireAuthentication } from 'lib/requireAuthentication';
import { initializeApollo } from "lib/apolloClient";
import {
    UserDocument,
    UserQueryResult,
    UsersPermissionsUser,
    UsersPermissionsUserEntityResponseCollection,
} from "generated/graphql";

const UserProfile = (props: { laodings: boolean, data: { data: { usersPermissionsUsers: UsersPermissionsUserEntityResponseCollection } }}) => {
    const user =
        props?.data?.data?.usersPermissionsUsers?.data[0]?.attributes as UsersPermissionsUser;
    useIsAuth();
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
                <meta property="og:type" content="user-profile" />
                <meta
                    property="og:url"
                    content={`https://telentkids.io/user-profile/${user?.username}/` || ""}
                />
                <link
                    rel="canonical"
                    href={`https://telentkids.io/user-profile/${user?.username}/` || ""}
                />
            </Head>
            <ProfilePage props={user}/>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
    async (ctx) => {
        const { username } = ctx.query;
        const cookies = JSON.parse(ctx.req.cookies.talentedKid);
        const { jwt, userType, username: slug} = cookies;
        if (userType === 'organisation' && username === slug) {
            return {
                redirect: {
                    permanent: false,
                    destination: `/account/${slug}`,
                },
            };
        }
        const token = `Bearer ${jwt}`;
        const apolloClient = initializeApollo(null, token);
        const data = await apolloClient.query<UserQueryResult>({
            query: UserDocument,
            variables: {
                filters: {
                    username: {
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

export default UserProfile;
