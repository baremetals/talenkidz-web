import React from 'react';
import { GetServerSideProps } from 'next';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { initializeApollo } from 'src/hooks/apolloClient';
import {
  MeDocument,
  MeQueryResult,
} from 'generated/graphql';
import Head from 'next/head';
import { useIsAuth } from 'src/hooks/isAuth';
import EditProfile from 'components/users/EditProfile';
import { ProfileProps } from '.';


const EditProfilePage = (data: ProfileProps) => {
  const user = data?.data?.usersPermissionsUser?.data?.attributes;
  useIsAuth();
  return (
    <>
      <Head>
        <title>Talentkids</title>
        <meta property="og:title" content="Talentkids" key="title" />
        <meta name="description" content="Page to edit profile info" />
        <meta property="og:type" content="user-edit-profile" />
        <meta
          property="og:url"
          content={
            `https://www.talentkids.io/user-profile/${user?.username}/edit-profile` ||
            ''
          }
        />
        <link
          rel="canonical"
          href={
            `https://www.talentkids.io/user-profile/${user?.username}/edit-profile` ||
            ''
          }
        />
      </Head>
      <EditProfile user={user} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.talentedKid);
    const { jwt, id } = cookies;

    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    const {data} = await apolloClient.query<MeQueryResult>({
      query: MeDocument,
      variables: {
        usersPermissionsUserId: id,
      },
    });
    return {
      props: { data },
    };
  }
);

export default EditProfilePage;
