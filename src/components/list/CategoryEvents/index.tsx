import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import EventItem from 'components/list/EventItem';
import Button from 'components/users/Auth/Button';
import ListCategory from 'components/utilities/Categories/ListCategory';
import Banner from 'components/widgets/Banner';
import Breadcrumb from 'components/widgets/Breadcrumb';
import PageTitle from 'components/widgets/PageTitle';



// import { ThumbsUp } from 'public/assets/icons/ThumbsUp'
// import { BookMark } from 'public/assets/icons/BookMark'
import { EventEntity } from 'generated/graphql';
import {
  CategoriesBlock,
  EventList,
} from '../Events/styles';

import {
  Column,
  InnerContainer,
  PageContainer,
  Row,
} from 'styles/common.styles';
import { useAppSelector } from 'src/app/hooks';
import { eventsSelector } from 'src/features/events';
import HeroSearch from 'components/utilities/search/HeroSearch';
import { searchingSelector } from 'src/features/search';
import EventFilters from '../Events/EventFilters';

// type pageProps = {
//   events: EventEntity[];
//   categories: CategoryEntity[];
// };

const CategoryEvents = () => {
  const router = useRouter();
  // const dispatch = useAppDispatch();
  const eventEntities = useAppSelector(eventsSelector);
  // const total = useAppSelector(totalSelector) as number;
  const { category } = router.query;
  const [filteredEvents, setFilteredEvents] = useState<EventEntity[]>([]);
  const searching = useAppSelector(searchingSelector);

  useEffect(() => {
    setFilteredEvents(eventEntities);
  }, [eventEntities]);


  const route = [
    {
      name: 'home',
      url: '/',
    },
    {
      name: 'events',
      url: '/events',
    },
    {
      name: category as string,
      url: `/events/${category}`,
    },
  ];
  return (
    <>
      <InnerContainer>
        <Breadcrumb route={route} />
      </InnerContainer>

      <PageContainer>
        <InnerContainer>
          {/* banner */}
          <Banner
            src={'/assets/images/banner2.png'}
            text={
              'Games are not the only way to relax, that’s the way to educate'
            }
          >
            <HeroSearch
              placeholder={'Search events that may be interesting for you'}
              entities={eventEntities}
            />
          </Banner>
          {/* event */}
          {!searching && <EventFilters />}

          <EventList>
            <Row>
              <Column>
                {!searching && (
                  <PageTitle
                    className="pageTitle"
                    text={[
                      'Most',
                      <span key={'popular'}>popular</span>,
                      'events',
                    ]}
                  />
                )}
              </Column>
            </Row>
            <Row>
              {filteredEvents?.map((item) => (
                <Column className="Column-3" key={item?.id}>
                  <EventItem
                    id={item?.id as string}
                    hostName={
                      item?.attributes?.host?.data?.attributes?.username
                    }
                    title={item?.attributes?.title as string}
                    slug={item?.attributes?.slug as string}
                    location={item?.attributes?.Location?.town as string}
                    venue={item?.attributes?.venue as string}
                    venueName={item?.attributes?.Location?.name as string}
                    route={`/events/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`}
                    starDate={item?.attributes?.startDate as string}
                    starTime={item?.attributes?.startTime as string}
                    price={
                      item?.attributes?.price === '0'
                        ? 'Free'
                        : `£${item?.attributes?.price}`
                    }
                    image={
                      item?.attributes?.listImage || '/default-list-img.jpg'
                    }
                  />
                </Column>
              ))}
            </Row>
          </EventList>

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
              {filteredEvents?.map((item) => (
                <Column className="Column-3" key={item?.id}>
                  <EventItem
                    id={item?.id as string}
                    hostName={
                      item?.attributes?.host?.data?.attributes?.username
                    }
                    title={item?.attributes?.title as string}
                    slug={item?.attributes?.slug as string}
                    location={item?.attributes?.Location?.town as string}
                    venue={item?.attributes?.venue as string}
                    venueName={item?.attributes?.Location?.name as string}
                    route={`/events/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`}
                    starDate={item?.attributes?.startDate as string}
                    starTime={item?.attributes?.startTime as string}
                    price={
                      item?.attributes?.price === '0'
                        ? 'Free'
                        : `£${item?.attributes?.price}`
                    }
                    image={
                      item?.attributes?.listImage || '/default-list-img.jpg'
                    }
                  />
                </Column>
              ))}
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
            <ListCategory />
          </CategoriesBlock>

          {/*event*/}
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default CategoryEvents;
