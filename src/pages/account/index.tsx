import React from 'react';
import { GetServerSideProps } from 'next';
import { useIsAuth } from 'src/hooks/isAuth';
import ProfilePage from 'components/users/ProfilePage';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { initializeApollo } from 'src/hooks/apolloClient';
import Layout from 'components/Layout';
import {
  MeDocument,
  MeQueryResult,
  UsersPermissionsUser,
} from 'generated/graphql';

export type ProfileProps = {
  data: {
    usersPermissionsUser: { data: { attributes: UsersPermissionsUser, id: number } };
  };
};

const UserProfile = (data: ProfileProps) => {
  //   console.log('the rassssss data', data);
  const user = data?.data?.usersPermissionsUser?.data?.attributes;
  const userId = data?.data?.usersPermissionsUser?.data?.id;
  console.log('the rassssss user', userId);
  useIsAuth();
  return (
    <Layout
      title={`${user?.username} Account Page`}
      canonicalUrl={`https://www.talentkids.io/account/${user?.username}/`}
      type="account page"
      pageUrl={`https://www.talentkids.io/account/${user?.username}/`}
    >
      <ProfilePage props={user} userId={userId.toString()} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.talentedKid);
    const { jwt, id } = cookies;

    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    // console.log('printing the token', process.env.NEXT_PUBLIC_GRAPHQL_URL);
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
