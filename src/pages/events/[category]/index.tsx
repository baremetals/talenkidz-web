import Layout from 'components/Layout';
import Button from 'components/users/Auth/Button';
import Categories from 'components/utilities/Category/ListCategory';
import Banner from 'components/widgets/Banner';
import Breadcrumb from 'components/widgets/Breadcrumb';
import EventItem from 'components/widgets/EventItem';
import PageTitle from 'components/widgets/PageTitle';
import {
  CategoriesDocument,
  CategoriesQueryResult,
  CategoryEntity,
  EventEntity,
  FilteredEventsDocument,
  FilteredEventsQueryResult,
} from 'generated/graphql';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useNoAuthPages } from 'src/hooks/noAuth';
import { client } from 'src/lib/initApollo';

import {
  CategoriesBlock,
  EventList,
  EventTime,
  LinkBlock,
} from 'components/widgets/EventItem/styles';
import {
  Column,
  InnerContainer,
  PageContainer,
  Row,
} from 'styles/common.styles';
type pageProps = {
  eve: { articles: { data: EventEntity[] } };
  cats: { data: { categories: { data: CategoryEntity[] } }; loading: boolean };
};

function FilteredArticlesPage(props: pageProps) {
  const router = useRouter();
  const { cats, eve } = props;
  const { category } = router.query;

  const description = 'Events';
  const url = `https://www.talentkids.io/events/${category}`;
  // console.log(cats?.data?.categories?.data);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Events',
    // headline: meta?.title,
    // description: meta?.description,
    // author: [
    //     {
    //         '@type': 'Person',
    //         name: author?.fullName,
    //     },
    // ],
    // image: meta?.image,
    // datePublished: article?.attributes?.updatedAt,
  };
  //
  // console.log(art);
  useNoAuthPages();
  return (
    <Layout
      title={`Talentkids | Events`}
      metaDescription={description}
      canonicalUrl={url}
      data={JSON.stringify(structuredData)}
      type="events"
      pageUrl={url}
    >
      <InnerContainer>
        <Breadcrumb route={[]} />
      </InnerContainer>
      <PageContainer>
        <InnerContainer>
          {/* banner */}
          <Banner
            src={'/assets/images/banner2.png'}
            text={
              'Games are not only the way to relax, that’s the way to educate'
            }
          />
          {/* event */}
          <EventTime>
            <LinkBlock className="active" href={'#'}>
              All
            </LinkBlock>
            <LinkBlock href={'#'}>Today</LinkBlock>
            <LinkBlock href={'#'}>This week</LinkBlock>
            <LinkBlock href={'#'}>This month</LinkBlock>
            <LinkBlock href={'#'}>Online</LinkBlock>
            <LinkBlock href={'#'}>Freee</LinkBlock>
            <LinkBlock href={'#'}>For parents </LinkBlock>
            <LinkBlock className="underline" href={'#'}>
              Affiliate events
            </LinkBlock>
          </EventTime>

          {/*event*/}
          <EventList>
            <Row>
              <Column>
                <PageTitle
                  className="pageTitle"
                  text={[
                    'Most',
                    <span key={'popular'}>popular</span>,
                    'events',
                  ]}
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <EventItem />
              </Column>
              <Column>
                <EventItem />
              </Column>
              <Column>
                <EventItem />
              </Column>
            </Row>
          </EventList>

          {/*event*/}
          <EventList className="thisWeek">
            <Row>
              <Column>
                <PageTitle
                  className="pageTitle"
                  text={[
                    'Actual ones for ',
                    <span key={'popular'}>this week </span>,
                  ]}
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <EventItem />
              </Column>
              <Column>
                <EventItem />
              </Column>
              <Column>
                <EventItem />
              </Column>
            </Row>
            <Row>
              <Column>
                <EventItem />
              </Column>
              <Column>
                <EventItem />
              </Column>
              <Column>
                <EventItem />
              </Column>
            </Row>
            <Row className="buttonRow">
              <Column>
                <Button
                  content="See more events "
                  type="submit"
                  disabled={false}
                  loading={false}
                ></Button>
              </Column>
            </Row>
          </EventList>

          {/* Categories*/}
          <CategoriesBlock>
            <Categories />
          </CategoriesBlock>
        </InnerContainer>
      </PageContainer>
      {/* <Events
        events={eve?.articles?.data}
        categories={cats?.data?.categories?.data}
      /> */}
    </Layout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { category } = ctx.query;
  const { data } = await client.query<FilteredEventsQueryResult>({
    query: FilteredEventsDocument,
    variables: {
      filters: {
        category: {
          slug: {
            eq: category,
          },
        },
      },
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: 'updatedAt:desc',
    },
  });

  const cats = await client.query<CategoriesQueryResult>({
    query: CategoriesDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: 'slug:asc',
    },
  });
  return {
    props: { art: data, cats }, // will be passed to the page component as props
  };
}

export default FilteredArticlesPage;
