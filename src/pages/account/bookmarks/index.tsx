import React from 'react';
import { GetServerSideProps } from 'next';
import { useIsAuth } from 'src/hooks/isAuth';
import BookmarkPage from 'components/users/BookmarkPage';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { initializeApollo } from 'src/hooks/apolloClient';
import Layout from 'components/Layout';
import {
  MeDocument,
  MeQueryResult,
  // UsersPermissionsUser,
} from 'generated/graphql';
import { ProfileProps } from '..';

// export type ProfileProps = {
//   data: {
//     usersPermissionsUser: { data: { attributes: UsersPermissionsUser } };
//   };
// };

const BookMarks = (data: ProfileProps) => {
  //   console.log('the rassssss data', data);
  const user = data?.data?.usersPermissionsUser?.data?.attributes;
  const userId = data?.data?.usersPermissionsUser?.data?.id;
  //   console.log('the rassssss user', user);
  useIsAuth();
  return (
    <Layout
      title="My bookmarks Page"
      canonicalUrl={`https://www.talentkids.io/account/bookmarks`}
      type="account page"
      pageUrl={`https://www.talentkids.io/account/bookmarks`}
    >
      <BookmarkPage props={user} userId={userId} />
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
        sort: 'date:desc',
        pagination: {
          start: 0,
          limit: 12,
        },
      },
    });
    // console.log('printing data on the server', data);
    return {
      props: { data },
    };
  }
);

export default BookMarks;
