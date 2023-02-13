import React, { useCallback } from 'react'
import { EventTime, LinkBlock } from '../styles';
import { useAppDispatch } from 'src/app/hooks';
import { EventEntity, Event, FilteredEventsDocument, ResponseCollectionMeta } from 'generated/graphql';
import { fetchApi } from 'src/helpers';
import { setEvents } from 'src/features/events';
import dayjs from 'dayjs';
import { getCurrentWeek } from 'src/utils';

type TGetEvents = {
  data: {
    events: {
      data: EventEntity[];
      meta: ResponseCollectionMeta;
    };
  };
};

const EventFilters = () => {
  const dispatch = useAppDispatch();
  // console.log(eventEntities);
  // console.log(filteredEvents);
  const handleSearch = useCallback(
    async (filterType: string, entities: EventEntity[]) => {
      console.log('starting......');
      const todaysDate = new Date();
      const filteredData: EventEntity[] = entities?.filter((ent) => {
        const entity = ent?.attributes as Event;

        switch (filterType != '') {
          case filterType == 'free':
            return entity.price == '0';
          case filterType === 'online':
            return entity.venue != 'location';
          case filterType === 'today':
            return dayjs(entity.startDate).isSame(todaysDate, 'day');
          case filterType === 'month':
            return dayjs(entity.startDate).isSame(todaysDate, 'month');
          case filterType === 'week':
            var currentWeek = getCurrentWeek(todaysDate);
           var startWeek = getCurrentWeek(new Date(entity.startDate));
            return startWeek == currentWeek;
          default:
            return ent;
        }
      });
      return filteredData
    },
    []
  );


  const handleFetchData = useCallback(async <T extends {}>(filterBy: T, filterType: string = "") => {
    const body = JSON.stringify({
      limit: 12,
      start: 0,
      sort: 'createdAt:desc',
      gQDocument: FilteredEventsDocument,
      filterBy: filterBy
    });
    try {
      const res: TGetEvents = await fetchApi('/api/entity/filtered', body);
      const events = res?.data?.events;
      if (filterType != "") {
        const res = await handleSearch(filterType, events?.data);
        console.log(res);
        dispatch(
          setEvents({
            events: res,
            // total: 12,
            eventsLength: res.length,
          })
        );

      } else {
        dispatch(
          setEvents({
            events: events?.data,
            // total: 12,
            eventsLength: events?.meta.pagination.total,
          })
        );
      }
        
    } catch (err: any) {
      // setErrorMessage('Error! Please try again later');
      // setDisplayError(true);
      // setTimeout(() => {
      //   setDisplayError(false);
      //   setErrorMessage('');
      // }, 10000);
      console.log(err);
    }
  }, [dispatch, handleSearch]);
  

  
  return (
    <EventTime>
      <LinkBlock className="active" onClick={() => handleFetchData({})}>
        All
      </LinkBlock>
      <LinkBlock onClick={() => handleFetchData({}, 'today')}>Today</LinkBlock>
      <LinkBlock onClick={() => handleFetchData({}, 'week')}>
        This week
      </LinkBlock>
      <LinkBlock onClick={() => handleFetchData({}, 'month')}>
        This month
      </LinkBlock>
      <LinkBlock
        onClick={() =>
          handleFetchData({
            venue: {
              ne: 'location',
            },
          })
        }
      >
        Online
      </LinkBlock>
      <LinkBlock
        onClick={() =>
          handleFetchData({
            price: {
              eq: '0',
            },
          })
        }
      >
        Free
      </LinkBlock>
      {/* <LinkBlock href={'#'}>For parents </LinkBlock> */}
      {/* <LinkBlock className="underline" href={'#'}>
        Affiliate events
      </LinkBlock> */}
    </EventTime>
  );
}

export default EventFilters