import dayjs from 'dayjs';
import {
  Event,
  EventEntity,
  FilteredEventsDocument,
  FilteredListingsDocument,
  ResponseCollectionMeta,
} from 'generated/graphql';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { setEvents } from 'src/features/events';
import { fetchApi } from 'src/helpers';
import { getCurrentWeek } from 'src/utils';
import { ActivityLinkBlock, ActivityTime, EventTime, LinkBlock } from './filters.styles';
import { Entities, TGetActivities } from 'src/types';
import { setActivities } from 'src/features/activities';
import { actvityCategoryFilterArray, actvityFilterArray, filterArray } from './data';
import { setCategory } from 'src/features/category';


type TGetEvents = {
  data: {
    events: {
      data: EventEntity[];
      meta: ResponseCollectionMeta;
    };
  };
};


type TFilterProps = {
  entityType: string;
  category?: string;
};

const ListFilters: React.FC<TFilterProps> = ({ entityType, category }) => {
  const dispatch = useAppDispatch();
  // console.log(eventEntities);
  // console.log(filteredEvents);

  const [idName, setIdName] = useState('All');

  const handleSearch = useCallback(
    async (filterType: string, entities: Entities[]) => {
      // console.log('starting......');
      const todaysDate = new Date();
      const filteredData = entities?.filter((ent) => {
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
      return filteredData;
    },
    []
  );

  const handleFetchData = useCallback(
    async <T extends {}>(filterBy: T, id: string, filterType: string = '') => {
      const body = JSON.stringify({
        limit: 12,
        start: 0,
        sort: 'createdAt:desc',
        gQDocument:
          entityType === 'event'
            ? FilteredEventsDocument
            : FilteredListingsDocument,
        filterBy: filterBy,
      });
      try {
        if (entityType === 'event') {
          const res: TGetEvents = await fetchApi('/api/entity/filtered', body);
          const events = res?.data?.events;
          if (filterType != '') {
            const res = await handleSearch(filterType, events?.data);
            // console.log(res);
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
        } else if (entityType === 'activity-category') {
          const res: TGetActivities = await fetchApi(
            '/api/entity/filtered',
            body
          );
          const listings = res?.data?.listings;
          const filteredRes = await handleSearch(filterType, listings?.data);
          dispatch(
            setEvents({
              events: filteredRes,
              // total: 12,
              eventsLength: filteredRes.length,
            })
          );
        } else {
          const res: TGetActivities = await fetchApi(
            '/api/entity/filtered',
            body
          );
          const listings = res?.data?.listings;
          dispatch(
            setActivities({
              activities: listings?.data,
              // total: 12,
              activitiesLength: listings.meta.pagination.total,
            })
          );
        }
        setIdName(id);
      } catch (err: any) {
        // setErrorMessage('Error! Please try again later');
        // setDisplayError(true);
        // setTimeout(() => {
        //   setDisplayError(false);
        //   setErrorMessage('');
        // }, 10000);
        console.log(err);
      }
    },
    [dispatch, entityType, handleSearch]
  );

  useEffect(() => {
    const subscribe = handleFetchData({}, 'All');

    return () => {
      subscribe;
    };
  }, [handleFetchData]);

  return (
    <>
      {entityType === 'event' ? (
        <EventTime>
          {filterArray.map((item, i) => (
            <LinkBlock
              className={idName === item.name ? 'active' : ''}
              onClick={() =>
                handleFetchData(
                  item.data.filterBy,
                  item.data.id,
                  item.data.filterType
                )
              }
              key={i}
            >
              {item.name}
            </LinkBlock>
          ))}
          {/* <LinkBlock href={'#'}>For parents </LinkBlock> */}
          {/* <LinkBlock className="underline" href={'#'}>
        Affiliate events
      </LinkBlock> */}
        </EventTime>
      ) : entityType === 'actvity' ? (
        <ActivityTime>
          {actvityFilterArray.map((item, i) => (
            <ActivityLinkBlock
              key={i}
              className={idName === item.name ? 'active' : ''}
              onClick={() => {
                handleFetchData(
                  item.data.filterBy,
                  item.data.id,
                  item.data.filterType
                );
                dispatch(
                  setCategory({
                    category: item.name.toLowerCase(),
                  })
                );
              }}
            >
              {item.name}
            </ActivityLinkBlock>
          ))}
        </ActivityTime>
      ) : (
        <ActivityTime>
          <ActivityLinkBlock
            className={idName === 'All' ? 'active' : ''}
            onClick={() => {
              handleFetchData(
                {
                  category: {
                    slug: {
                      eq: category,
                    },
                  },
                },
                'All'
              );
            }}
          >
            All
          </ActivityLinkBlock>
          {actvityCategoryFilterArray.map((item, i) => (
            <ActivityLinkBlock
              key={i}
              className={idName === item.name ? 'active' : ''}
              onClick={async() => {
                handleFetchData(
                  {
                  category: {
                    slug: {
                      eq: category,
                    },
                  },
                },
                  item.id,
                  item.filterType
                );

              }}
            >
              {item.name}
            </ActivityLinkBlock>
          ))}
        </ActivityTime>
      )}
    </>
  );
};

export default ListFilters;
