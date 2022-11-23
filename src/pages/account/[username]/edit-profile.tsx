import React from 'react';
import { GetServerSideProps } from "next";
import { requireAuthentication } from 'lib/requireAuthentication';
import { initializeApollo } from "lib/apolloClient";
import {
  Organisation,
    OrganisationEntityResponseCollection,
    OrgDocument,
    OrgQueryResult,
    // UsersPermissionsUser,
    // UsersPermissionsUserEntityResponseCollection,
} from "generated/graphql";
import Head from 'next/head';
import { useIsAuth } from 'lib/isAuth';
import EditProfile from 'components/users/EditProfile';


// type Props ={
//   data: {
//     data: {
//       usersPermissionsUsers: UsersPermissionsUserEntityResponseCollection
//     }
//   }
// }

const EditProfilePage = (props: { laodings: boolean, data: { data: { organisations: OrganisationEntityResponseCollection } } }) => {
  // console.log('EditProfilePage')
  // const org = props?.data?.data?.usersPermissionsUsers?.data[0]?.attributes as UsersPermissionsUser;
  const org =
    props?.data?.data?.organisations?.data[0]?.attributes as Organisation;
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
              content={`https://telentkids.io/account/${org?.slug}/edit-profile` || ""}
          />
          <link
              rel="canonical"
              href={`https://telentkids.io/account/${org?.slug}/edit-profile` || ""}
          />
      </Head>
      <EditProfile user={org}/>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { username } = ctx.query;
    const cookies = JSON.parse(ctx.req.cookies.talentedKid);
    const { jwt } = cookies;
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

export default EditProfilePage;
