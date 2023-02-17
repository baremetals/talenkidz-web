import { useCallback, useEffect, useState } from 'react';
// import Link from 'next/link';
import PageTitle from 'components/widgets/PageTitle';
import {
  PageTitleBlock,
  CategorieList,
  CategorieRow,
  Categoriecolumn,
  // LinkBlock,
  TimeSlot,
  Time,
  PageTitleRow,
  Tags,
} from './styles';
import { TGetActivities, TGetTags, TTags } from 'src/types';

import { useFetchWithArgs } from 'src/hooks/useFetchWithArgs';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { activitiesSelector, setActivities } from 'src/features/activities';
import { FilteredListingsDocument, Listing, ListingEntity } from 'generated/graphql';
import { fetchApi } from 'src/helpers';
import dayjs from 'dayjs';
import { getCurrentWeek } from 'src/utils';

type TagsProps = {
  filterItem: string;
};

const ActivityTags: React.FC<TagsProps> = ({ filterItem }) => {
  const dispatch = useAppDispatch();
  const data = useFetchWithArgs<TGetTags | null>(
    '/api/tags',
    filterItem,
    null
  );
  const activityEntities = useAppSelector(activitiesSelector);
  const [tags, setTags] = useState<TTags[] | undefined>(data?.data);
  const [idNumber, setIdNumber] = useState<number | null>(null);
  const [indexNumber, setIndexNumber] = useState<number>(0);

  useEffect(() => {
    // console.log('i am running')
    const unsubscribe = setTags(data?.data);
    return () => {
      unsubscribe;
    };
  }, [data?.data]);

  const sendDispatch = useCallback((list: ListingEntity[], total: number) => {
    return dispatch(
      setActivities({
        activities: list,
        // total: 12,
        activitiesLength: total,
      })
    );
  },[dispatch]);
  
  const handleSearch = useCallback(
    async (filterType: string, index: number) => {
      // console.log('starting......');
      const todaysDate = new Date();
      const filteredData = activityEntities?.filter((ent) => {
        const entity = ent?.attributes as Listing;

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
      setIndexNumber(index);
      return sendDispatch(filteredData, filteredData.length);
    },
    [activityEntities, sendDispatch]
  );

  const handleFetchData = useCallback(
    async (id: number) => {
      const body = JSON.stringify({
        limit: 12,
        start: 0,
        sort: 'createdAt:desc',
        gQDocument: FilteredListingsDocument,
        filterBy: {
          tags: {
            id: {
              eq: id
            }
          }
        },
      });
      try {
        const res: TGetActivities = await fetchApi(
            '/api/entity/filtered',
            body
          );
          const listings = res?.data?.listings;
          sendDispatch(listings?.data, listings.meta.pagination.total);
          setIdNumber(id);
        }   
       catch (err: any) {
        console.log(err);
      }
    },
    [sendDispatch]
  );
    // console.log(tags)
  
  const filterArray = [
    {
      name: 'Today',
      data: 'today'
    },
    {
      name: 'This week',
      data: 'week'
    },
    {
      name: 'This month',
      data: 'month'
    },
    {
      name: 'Free',
      data: 'free'
    },
    {
      name: 'Online',
      data: 'online'
    }
  ]
  return (
    <Tags>
      <PageTitleRow>
        <PageTitleBlock>
          {(tags?.length as number) > 0 && (
            <PageTitle
              text={
                filterItem === 'all' || filterItem === 'All'
                  ? [<span key={'TRENDING'}>TRENDING</span>, 'ACTIVITIES']
                  : [
                      <span key={'TRENDING'}>TRENDING</span>,
                      `${filterItem.toUpperCase()} ACTIVITIES`,
                    ]
              }
            />
          )}
        </PageTitleBlock>
        <TimeSlot>
          {filterArray.map((item, i) => (
            <Time
              className={indexNumber === i ? "active" : ""}
              onClick={() => handleSearch(item.data, i)}
              key={i}
            >
              {item.name}
            </Time>
          ))}
        </TimeSlot>
      </PageTitleRow>
      <CategorieList>
        <CategorieRow>
          {(tags?.length as number) > 0 ? (
            tags?.map((item, i) => (
              <Categoriecolumn
                key={i}
                className={idNumber === item?.id ? 'active' : ''}
                onClick={() => handleFetchData(item?.id)}
              >
                {item?.attributes.name}
              </Categoriecolumn>
            ))
          ) : (
            <></>
          )}
        </CategorieRow>
      </CategorieList>
      {/* <LinkBlock>
          <Link href={'#'}>See more categories</Link> 
      </LinkBlock> */}
    </Tags>
  );
};

export default ActivityTags;
