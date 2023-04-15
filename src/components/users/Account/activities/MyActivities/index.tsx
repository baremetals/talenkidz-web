import { Column, Row } from 'styles/common.styles';
import ActivitiesCard from '../ActivitiesCard';
import { ListingEntity, useFilteredListingsLazyQuery } from 'generated/graphql';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';
import { useEffect, useState } from 'react';


const MyActivities = () => {
  const { user: user } = useAppSelector(isUser);
  const [entity, setEntities] = useState<ListingEntity[]>([]);

  const [loadActivities, { loading, data }] =
    useFilteredListingsLazyQuery({
      variables: {
        filters: {
          host: {
            id: {
              eq: user?.id?.toString(),
            },
          },
        },
        pagination: {
          start: 0,
          limit: 12,
        },
        sort: 'createdAt:desc',
      },
    });
  
// console.log(entity);
  useEffect(() => {
    const subscribe = loadActivities();

    return () => {
      subscribe
    }
  }, [loadActivities])

  useEffect(() => {
    const subscribe = setEntities(data?.listings?.data as ListingEntity[]);

    return () => {
      subscribe;
    };
  }, [data?.listings?.data]);
  
  return (
    <Row>
      {entity?.map((item) => (
        <Column className="column-6" key={item?.id}>
          <ActivitiesCard
            title={item?.attributes?.title as string}
            price={
              item?.attributes?.price === '0'
                ? 'Free'
                : `£${item?.attributes?.price}`
            }
            image={item?.attributes?.listImage as string}
            hostImage={
              item?.attributes?.host?.data?.attributes?.avatar as string
            }
            id={item?.id as string}
            hostName={
              item?.attributes?.host?.data?.attributes?.username as string
            }
            slug={item?.attributes?.slug as string}
            location={item?.attributes?.Location?.town as string}
            venue={item?.attributes?.venue as string}
            venueName={
              item?.attributes?.Location?.name ||
              (item?.attributes?.Location?.town as string)
            }
            route={`/activities/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`}
            startDate={item?.attributes?.startDate as string}
            starTime={item?.attributes?.startTime as string}
            userId={user?.id?.toString()}
            hostId={item?.attributes?.host?.data?.id as string}
          />
        </Column>
      ))}
    </Row>
  );
};

export default MyActivities;
