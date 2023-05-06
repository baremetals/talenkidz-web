import { EventEntity, useFilteredEventsLazyQuery } from 'generated/graphql';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';
import { Column, Row } from 'styles/common.styles';
import EventItem from '../EventCard';
import { useRouter } from 'next/router';

const MyEvent = () => {
  const router = useRouter();
  const { user: user } = useAppSelector(isUser);
  const [entity, setEntities] = useState<EventEntity[]>([]);
  const pageOwner = router.query.username
    ? router.query.username
    : user?.username;
  const [loadEvents, { loading, data }] = useFilteredEventsLazyQuery({
    variables: {
      filters: {
        host: {
          username: {
            eq: pageOwner as string,
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
  useEffect(() => {
    const subscribe = loadEvents();

    return () => {
      subscribe;
    };
  }, [loadEvents]);

  useEffect(() => {
    const subscribe = setEntities(data?.events?.data as EventEntity[]);

    return () => {
      subscribe;
    };
  }, [data?.events?.data]);
  return (
    <Row>
      {entity?.map((item) => (
        <Column className="column-6" key={item?.id}>
          <EventItem
            title={item?.attributes?.title as string}
            image={item?.attributes?.listImage as string}
            hostName={item?.attributes?.host?.data?.attributes?.username}
            location={item?.attributes?.Location?.town as string}
            venue={item?.attributes?.venue as string}
            venueName={item?.attributes?.Location?.name as string}
            route={`/events/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`}
            starDate={item?.attributes?.startDate as string}
            starTime={item?.attributes?.startTime as string}
            price={item?.attributes?.price as string}
            userId={user?.id?.toString()}
            hostId={item?.attributes?.host?.data?.id as string}
            slug={item?.attributes?.slug as string}
            eventId={item?.id as string}
          />
        </Column>
      ))}
    </Row>
  );
};

export default MyEvent;
