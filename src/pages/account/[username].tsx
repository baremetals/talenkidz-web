import React from 'react'

import Head from "next/head";
import { GetServerSideProps } from "next";
import { useIsAuth } from "src/hooks/isAuth";
import Org from "components/users/Organisations";
import ProfilePage from 'components/users/ProfilePage';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { initializeApollo } from "src/hooks/apolloClient";
import {
  UserDocument,
  UserQueryResult,
  Organisation,
  // OrganisationEntityResponseCollection,
  UsersPermissionsUserEntity,
  UsersPermissionsUser,
} from 'generated/graphql';

type PropsType = {
  data: { usersPermissionsUsers: { data: UsersPermissionsUserEntity[] } };
};


function OrganisationPage(props: PropsType) {
  const user = props?.data?.usersPermissionsUsers?.data[0];
  // console.log(user);
  const { id, attributes } = user;

  useIsAuth();
  console.log(props?.data?.usersPermissionsUsers?.data[0]);
  return (
    <>
      <Head>
        <title>Talentkids</title>
        <meta property="og:title" content="Talentkids" key="title" />
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <meta property="og:type" content="account" />
        <meta
          property="og:url"
          content={
            `https://www.talentkids.io//account/${attributes?.username}/` || ''
          }
        />
        <link
          rel="canonical"
          href={
            `https://www.talentkids.io//account/${attributes?.username}/` || ''
          }
        />
      </Head>
      {attributes?.userType === 'standard' && (
        <ProfilePage props={attributes as UsersPermissionsUser} />
      )}
      {attributes?.userType === 'organisation' && (
        <Org id={id as string} attributes={attributes as Organisation} />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
    async (ctx) => {
        const { username } = ctx.query;
        const cookies = JSON.parse(ctx.req.cookies.talentedKid);
        const { jwt, username: slug } = cookies;

        if (username === slug) {
          return {
            redirect: {
              permanent: false,
              destination: '/account',
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
            props: { data: data?.data },
        };
    }
);

export default OrganisationPage

