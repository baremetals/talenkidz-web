import React from 'react';
import { GetServerSideProps } from 'next';

import SettingsPage from 'components/users/SettingsPage';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { initializeApollo } from 'src/hooks/apolloClient';
import Layout from 'components/Layout';
import {
  MeDocument,
  MeQueryResult,
  // UsersPermissionsUser,
} from 'generated/graphql';
import { useIsAuth } from 'src/hooks/isAuth';
import { ProfileProps } from '..';

// export type ProfileProps = {
//   data: {
//     usersPermissionsUser: { data: { attributes: UsersPermissionsUser } };
//   };
// };

const SettingProfile = (data: ProfileProps) => {
  //   console.log('the rassssss data', data);
  const user = data?.data?.usersPermissionsUser?.data?.attributes;
  const userId = data?.data?.usersPermissionsUser?.data?.id;
  //   console.log('the rassssss user', user);
  useIsAuth();
  return (
    <Layout
      title={`${user?.username} Account Page`}
      canonicalUrl={`https://www.talentkids.io/account/${user?.username}/`}
      type="account page"
      pageUrl={`https://www.talentkids.io/account/${user?.username}/`}
    >
      <SettingsPage props={user} userId={userId} />
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
    const { data } = await apolloClient.query<MeQueryResult>({
      query: MeDocument,
      variables: {
        usersPermissionsUserId: id,
        sort: null,
        pagination: {
          start: 0,
          limit: 6,
        },
      },
    });
    // console.log('printing data on the server', data);
    return {
      props: { data },
    };
  }
);

export default SettingProfile;
