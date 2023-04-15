import React from 'react';
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { GetServerSideProps } from 'next';
import { client } from 'src/lib/initApollo';
import { useIsAuth } from 'src/hooks/isAuth';
import Layout from 'components/Layout';
import EditEventForm from 'components/users/posts/events/EditEventForm';
import {
  Event,
  EventDocument,
  EventEntityResponseCollection,
  EventQueryResult,
  Maybe,
} from 'generated/graphql';

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;
    // console.log(type);
    // console.log(slug![0]);

    const { data } = await client.query<EventQueryResult>({
      query: EventDocument,
      variables: {
        filters: {
          slug: {
            eq: slug,
          },
        },
      },
    });
    return {
      props: {data},
    };
  }
);

const UpdateEventPage = (props: {
  data: { events: EventEntityResponseCollection };
  loading: boolean;
  error: any;
}) => {
  useIsAuth();
  const eve = props?.data?.events?.data[0];
  // const meta = eve?.attributes?.SEO;
  return (
    <Layout
      title={'U An Event Page'}
      canonicalUrl={'https://www.talentkids.io/account/create/event/update'}
      type="update page"
      pageUrl={'https://www.talentkids.io/account/create/event/update'}
    >
      <EditEventForm
        id={eve?.id as string}
        attributes={eve?.attributes as Maybe<Event>}
        formType="events"
      />
    </Layout>
  );
};

export default UpdateEventPage;
