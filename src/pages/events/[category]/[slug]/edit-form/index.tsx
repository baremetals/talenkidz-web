import { client } from 'src/lib/initApollo';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import EditForm from 'components/list/Create/EditForm';
import Layout from 'components/Layout';
import {
  Event,
  EventDocument,
  EventEntityResponseCollection,
  EventQueryResult,
  Maybe,
} from 'generated/graphql';
import { useIsAuth } from 'src/lib/isAuth';
import { requireAuthentication } from 'src/lib/requireAuthentication';

const EventEditForm = (props: {
  data: { events: EventEntityResponseCollection };
  loading: boolean;
  error: any;
}) => {
  useIsAuth();
  const eve = props?.data?.events?.data[0];
  const meta = eve?.attributes?.SEO;
  // console.log(list)
  return (
    <Layout title={`Bare Metals Aacademy | ${meta?.title}`}>
      {/* <Head>
                <title>Bare Metals Aacademy | {meta?.title} </title>
                <meta property="og:title" content={meta?.title as string} key="title" />
                <meta name="description" content={meta?.description as string} />
                <meta property="og:type" content={meta?.type as string} />
                <meta property="og:url" content={meta?.url as string} />
                <meta property="og:image" content={meta?.image as string} />
                <meta property="og:image:width" content="100%" />
                <meta property="og:image:height" content="auto" />
                <link
                    rel="canonical"
                    href={meta?.url as string || ''}
                />
            </Head> */}
      <EditForm
        id={eve?.id as string}
        attributes={eve?.attributes as Maybe<Event>}
        formType="events"
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx: GetServerSidePropsContext) => {
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
      props: { data }, // will be passed to the page component as props
    };
  }
);
export default EventEditForm;
