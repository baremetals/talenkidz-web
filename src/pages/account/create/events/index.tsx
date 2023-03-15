import React from 'react'
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { GetServerSideProps } from 'next';
import { useIsAuth } from 'src/hooks/isAuth';
import Layout from 'components/Layout';
import EventForm from 'components/users/posts/events/EventForm';

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);

const CreateEventPage = () => {
  useIsAuth();
  return (
    <Layout
      title={'Create An Event Page'}
      canonicalUrl={'https://www.talentkids.io/account/create/event'}
      type="create page"
      pageUrl={'https://www.talentkids.io/account/create/event'}
    >
      <EventForm />
    </Layout>
  );
}

export default CreateEventPage;
