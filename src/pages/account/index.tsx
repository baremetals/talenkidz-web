import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useIsAuth } from 'src/hooks/isAuth';
import ProfilePage from 'components/users/ProfilePage';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { initializeApollo } from 'src/hooks/apolloClient';
import {
  MeDocument,
  MeQueryResult,
  UsersPermissionsUser,
} from 'generated/graphql';

export type ProfileProps = {
  data: {
    usersPermissionsUser: { data: { attributes: UsersPermissionsUser } };
  };
};

const UserProfile = (data: ProfileProps) => {
  //   console.log('the rassssss data', data);
  const user = data?.data?.usersPermissionsUser?.data?.attributes;
  //   console.log('the rassssss user', user);
  useIsAuth();
  return (
    <>
      <Head>
        <title>{user?.username} Account Page</title>
        <meta property="og:title" content="Talentkids" key="title" />
        <meta property="og:type" content="account page" />
        <meta
          property="og:url"
          content={`https://telentkids.io/account/${user?.username}/` || ''}
        />
        <link
          rel="canonical"
          href={`https://telentkids.io/user-profile/${user?.username}/` || ''}
        />
      </Head>
      <ProfilePage props={user} />
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
        sort: null,
        pagination: {
            start: 0,
            limit: 6
        }
      },
    });
    // console.log('printing data on the server', data);
    return {
      props: { data },
    };
  }
);

export default UserProfile;
