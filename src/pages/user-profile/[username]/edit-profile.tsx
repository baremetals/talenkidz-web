import React from 'react';
import { GetServerSideProps } from "next";
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { initializeApollo } from "src/lib/apolloClient";
import {
    UserDocument,
    UserQueryResult,
    UsersPermissionsUser,
    UsersPermissionsUserEntityResponseCollection,
} from "generated/graphql";
import Head from 'next/head';
import { useIsAuth } from 'src/lib/isAuth';
import EditProfile from 'components/users/EditProfile';

type Props ={
  data: {
    data: {
      usersPermissionsUsers: UsersPermissionsUserEntityResponseCollection
    }
  }
}

const EditProfilePage = (props: Props) => {
  const user = props?.data?.data?.usersPermissionsUsers?.data[0]?.attributes as UsersPermissionsUser;
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
              content="Page to edit profile info"
          />
          <meta property="og:type" content="user-edit-profile" />
          <meta
              property="og:url"
              content={`https://telentkids.io/user-profile/${user?.username}/edit-profile` || ""}
          />
          <link
              rel="canonical"
              href={`https://telentkids.io/user-profile/${user?.username}/edit-profile` || ""}
          />
      </Head>
      <EditProfile user={user}/>
    </>
  )
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

export default EditProfilePage;
