import { useCallback, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import ActivitiesItem from 'components/list/ActivitiesItem';
import Button from 'components/users/Auth/Button';
import ActivitiesCategories from 'components/utilities/Categories/ActivityTags';
import HeroSearch from 'components/utilities/search/HeroSearch';
import Banner from 'components/widgets/Banner';
import Breadcrumb from 'components/widgets/Breadcrumb';
import PageTitle from 'components/widgets/PageTitle';
import {
  ListingEntity,
  ListingsDocument,
} from 'generated/graphql';
import { ActivitiesList, BreadcrumbBlock, CategoriesBlock } from './styles';

import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
  activitiesSelector,
  listTotalSelector,
  setActivities,
} from 'src/features/activities';
import { searchingSelector } from 'src/features/search';
import { useFetchEntities } from 'src/hooks/usefetchEntities';
import {
  Column,
  InnerContainer,
  PageContainer,
  Row,
} from 'styles/common.styles';
import ListFilters from '../ListFilters';
import { categorySelector } from 'src/features/category';
import { TFetchActivityState } from 'src/types';



function Listings() {
  // const router = useRouter();
  const dispatch = useAppDispatch();
  const total = useAppSelector(listTotalSelector) as number;
  const category = useAppSelector(categorySelector);
  const searching = useAppSelector(searchingSelector);
  const [filteredListings, setFilteredListings] = useState<ListingEntity[]>([]);
  const activityEntities = useAppSelector(activitiesSelector);

  const remaining = total - activityEntities?.length;
  const fetchData = useFetchEntities<TFetchActivityState | null>(
    {
      limit: remaining >= 4 ? 4 : remaining,
      start: activityEntities?.length as number,
      gQDocument: ListingsDocument,
    },
    null
  );
  useEffect(() => {
    setFilteredListings(activityEntities);
  }, [activityEntities]);

  const getData = useCallback(async () => {
    if (filteredListings.length < total) {
      const res = fetchData;
      // console.log(res?.data.events.data);
      const activities = res?.data?.listings;
      dispatch(
        setActivities({
          total: activities?.meta.pagination.total,
          // eslint-disable-next-line no-unsafe-optional-chaining
          activities: [
            ...activityEntities,
            ...(activities?.data as ListingEntity[]),
          ],
        })
      );
    }
  }, [activityEntities, dispatch, fetchData, filteredListings?.length, total]);

  const route = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Activities',
      url: '/activities',
    },
  ];
  // console.log(category)
  return (
    <>
      <InnerContainer>
        <BreadcrumbBlock>
          <Breadcrumb route={route} />
        </BreadcrumbBlock>
      </InnerContainer>
      <PageContainer>
        <InnerContainer>
          {/* banner */}
          <Banner
            src={'/assets/images/activities.jpg'}
            text={'Choose surroundings according to your interests'}
          >
            <HeroSearch
              placeholder={'Search events that may be interesting for you'}
              entities={activityEntities}
              entityType={'activity'}
            />
          </Banner>

          {/* event */}
          {!searching && (
            <>
              <ListFilters entityType="activity" />

              <CategoriesBlock>
                <ActivitiesCategories filterItem={category} />
              </CategoriesBlock>
            </>
          )}

          {/* <Activitie*/}
          <ActivitiesList>
            <Row>
              <Column>
                {!searching && (
                  <PageTitle
                    className="pageTitle"
                    text={
                      category === 'all' || category === 'All'
                        ? 'Most popular activities'
                        : `Most popular ${category} activities`
                    }
                  />
                )}
              </Column>
            </Row>
            <Row>
              {filteredListings?.map((list) => (
                <Column className="Column-3" key={list?.id}>
                  <ActivitiesItem
                    id={list?.id as string}
                    hostName={
                      list?.attributes?.host?.data?.attributes
                        ?.username as string
                    }
                    hostImage={
                      list?.attributes?.host?.data?.attributes?.avatar as string
                    }
                    title={list?.attributes?.title as string}
                    slug={list?.attributes?.slug as string}
                    location={list?.attributes?.Location?.town as string}
                    venue={list?.attributes?.venue as string}
                    venueName={
                      list?.attributes?.Location?.name ||
                      (list?.attributes?.Location?.town as string)
                    }
                    route={`/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`}
                    startDate={list?.attributes?.startDate}
                    starTime={list?.attributes?.startTime as string}
                    price={
                      list?.attributes?.price === '0'
                        ? 'Free'
                        : `£${list?.attributes?.price}`
                    }
                    image={list?.attributes?.listImage as string}
                    category={
                      list?.attributes?.category?.data?.attributes
                        ?.slug as string
                    }
                  />
                </Column>
              ))}
            </Row>
            <Row className="buttonRow">
              <Column>
                {activityEntities?.length < total && (
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
          </ActivitiesList>
        </InnerContainer>
      </PageContainer>
    </>
  );
}

export default Listings;
