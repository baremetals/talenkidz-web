import React from 'react';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { GetServerSideProps } from 'next';
import { useIsAuth } from 'src/hooks/isAuth';
import Layout from 'components/Layout';
import ActivityForm from 'components/users/posts/activities/ActivityForm';

 
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);

const CreateAnActivityPage = () => {
  useIsAuth();
  return (
    <Layout
      title={'Create An Activity Page'}
      canonicalUrl={'https://www.talentkids.io/account/create/activity'}
      type="create page"
      pageUrl={'https://www.talentkids.io/account/create/activity'}
    >
      <ActivityForm />
    </Layout>
  );
}


export default CreateAnActivityPage;