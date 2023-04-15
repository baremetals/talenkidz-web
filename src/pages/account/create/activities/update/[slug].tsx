import React from 'react';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { GetServerSideProps } from 'next';
import { client } from 'src/lib/initApollo';
import { useIsAuth } from 'src/hooks/isAuth';
import Layout from 'components/Layout';
import EditActivityForm from 'components/users/posts/activities/EditActivityForm';
import {
  ListDocument,
  Listing,
  ListingEntityResponseCollection,
  ListQueryResult,
  Maybe,
} from 'generated/graphql';

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;
    // console.log(type);
    // console.log(slug![0]);

    const { data } = await client.query<ListQueryResult>({
      query: ListDocument,
      variables: {
        filters: {
          slug: {
            eq: slug,
          },
        },
      },
    });
    return {
      props: { data },
    };
  }
);

const UpdateAnActivityPage = (props: {
  data: { listings: ListingEntityResponseCollection };
  loading: boolean;
  error: any}) => {
  useIsAuth();

  const list = props?.data?.listings?.data[0];
  // const meta = list?.attributes?.SEO;
  // console.log(list)
  return (
    <Layout
      title={'Update An Activity Page'}
      canonicalUrl={'https://www.talentkids.io/account/create/activity/update'}
      type="create page"
      pageUrl={'https://www.talentkids.io/account/create/activity/update'}
    >
      <EditActivityForm
        id={list?.id as string}
        attributes={list?.attributes as Maybe<Listing>}
        formType={'activities'}
      />
    </Layout>
  );
};

export default UpdateAnActivityPage;
