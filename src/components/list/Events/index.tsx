import {
  EventEntity,
  EventsDocument,
} from 'generated/graphql';

import { useCallback, useEffect, useState } from 'react';

import EventItem from 'components/list/EventItem';
import Button from 'components/users/Auth/Button';
import ListCategory from 'components/utilities/Categories/ListCategory';
import Banner from 'components/widgets/Banner';
import Breadcrumb from 'components/widgets/Breadcrumb';
import PageTitle from 'components/widgets/PageTitle';

import { CategoriesBlock, EventList } from './styles';

import Search from 'components/utilities/search/HeroSearch';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { eventsSelector, setEvents, totalSelector } from 'src/features/events';
import { searchingSelector } from 'src/features/search';
import { useFetchEntities } from 'src/hooks/usefetchEntities';
import {
  Column,
  InnerContainer,
  PageContainer,
  Row,
} from 'styles/common.styles';
import EventFilters from '../ListFilters';
import { TFetchEventState } from 'src/types';

const Events = () => {
  const dispatch = useAppDispatch();
  const eventEntities = useAppSelector(eventsSelector);
  const total = useAppSelector(totalSelector) as number;
  const searching = useAppSelector(searchingSelector);

  const [filteredEvents, setFilteredEvents] = useState<EventEntity[]>([]);
  // console.log(searching);

  const remaining = total - eventEntities?.length;
  const fetchData = useFetchEntities<TFetchEventState | null>(
    {
      limit: remaining > 4 ? 4 : remaining,
      start: eventEntities?.length as number,
      gQDocument: EventsDocument,
    },
    null
  );

  useEffect(() => {
    setFilteredEvents(eventEntities);
  }, [eventEntities]);

  const getData = useCallback(async () => {
    if (filteredEvents.length < total) {
      const res = fetchData;
      // console.log(res?.data.events.data);
      const events = res?.data?.events;
      dispatch(
        setEvents({
          total: events?.meta.pagination.total,
          // eslint-disable-next-line no-unsafe-optional-chaining
          events: [...eventEntities, ...(events?.data as EventEntity[])],
        })
      );
    }
  }, [eventEntities, dispatch, fetchData, filteredEvents?.length, total]);

  const route = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Events',
      url: '/events',
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
            src={'/assets/images/banner.png'}
            text={'DIVE INTO THE ATMOSPHERE OF OUR EVENTS'}
          >
            <Search
              placeholder={'Search events that may be interesting for you'}
              entities={eventEntities}
              entityType={'event'}
            />
          </Banner>
          {/* event */}
          {!searching && (
            <>
              <EventFilters entityType={'event'} />

              {/* Categories*/}
              <CategoriesBlock>
                <ListCategory />
              </CategoriesBlock>
            </>
          )}

          {/*event*/}
          <EventList>
            <Row>
              <Column>
                {!searching && (
                  <PageTitle
                    className="pageTitle"
                    text={'Events on TALENTKIDS'}
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
                    category={
                      item?.attributes?.category?.data?.attributes
                        ?.slug as string
                    }
                  />
                </Column>
              ))}
            </Row>
            <Row className="buttonRow">
              <Column>
                {eventEntities?.length < total && (
                  <Button
                    content="See more events "
                    type="submit"
                    disabled={false}
                    loading={false}
                    onClick={getData}
                  />
                )}
              </Column>
            </Row>
          </EventList>
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default Events;
