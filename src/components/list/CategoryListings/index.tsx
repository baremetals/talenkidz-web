import { useEffect, useState } from 'react';
import ActivitiesItem from 'components/list/ActivitiesItem';
import Search from 'components/utilities/search/HeroSearch';
import Banner from 'components/widgets/Banner';
import Breadcrumb from 'components/widgets/Breadcrumb';
import PageTitle from 'components/widgets/PageTitle';
import { ListingEntity } from 'generated/graphql';
import { useRouter } from 'next/router';

import {
  ActivitiesList,
  BreadcrumbBlock,
} from './styles';

import { useAppSelector } from 'src/app/hooks';
import { activitiesSelector } from 'src/features/activities';

import {
  Column,
  InnerContainer,
  PageContainer,
  Row,
} from 'styles/common.styles';
import ListFilters from '../ListFilters';

function CategoryListings() {
  const router = useRouter();
  const [filteredListings, setFilteredListings] = useState<ListingEntity[]>([]);
  const activityEntities = useAppSelector(activitiesSelector);
  const { category } = router.query;



  useEffect(() => {
    setFilteredListings(activityEntities);
  }, [activityEntities]);


  const route = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Activities',
      url: '/activities',
    },
    {
      name: category as string,
      url: `/activities/${category}`,
    },
  ];
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
            src={'/assets/images/activities2.jpg'}
            text={'Tennis is more than most sports, a sport of the mind'}
            author={'- Rafael Nadal'}
          >
            <Search
              placeholder={'Search events that may be interesting for you'}
              entities={activityEntities}
              entityType={'activity'}
            />
          </Banner>

          {/* event */}
          <ListFilters entityType="activity-category" category={category as string} />

          {/* <Activitie*/}
          <ActivitiesList>
            <Row>
              <Column>
                <PageTitle
                  className="pageTitle"
                  text={`${category} section for today`}
                />
              </Column>
            </Row>
            <Row className="">
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
                  />
                </Column>
              ))}
            </Row>
          </ActivitiesList>

          {/* <Activitie*/}
          {/* <ActivitiesList>
            <Row>
              <Column>
                <PageTitle className="pageTitle" text={'Participate weekly '} />
              </Column>
            </Row>
            <Row>
              <Column className="Column-3">
                <ActivitiesItem
                  id={''}
                  hostName={undefined}
                  hostImage={undefined}
                  title={''}
                  slug={undefined}
                  location={undefined}
                  venue={undefined}
                  venueName={undefined}
                  route={''}
                  startDate={''}
                  starTime={''}
                  price={''}
                  image={undefined}
                />
              </Column>
            </Row>
          </ActivitiesList> */}

          {/* <Activitie*/}
          {/* <ActivitiesList>
            <Row>
              <Column>
                <PageTitle className="pageTitle" text={'Visit for free'} />
              </Column>
            </Row>
            <Row>
              <Column className="Column-3">
                <ActivitiesItem
                  id={''}
                  hostName={undefined}
                  hostImage={undefined}
                  title={''}
                  slug={undefined}
                  location={undefined}
                  venue={undefined}
                  venueName={undefined}
                  route={''}
                  startDate={''}
                  starTime={''}
                  price={''}
                  image={undefined}
                />
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
          </ActivitiesList> */}
        </InnerContainer>
      </PageContainer>
    </>
  );
}

export default CategoryListings;
