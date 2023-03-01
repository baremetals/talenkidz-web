import React, { ReactElement } from 'react'
// import { animateScroll as scroll } from "react-scroll";

import { useFilteredEventsQuery, EventEntity } from "generated/graphql";

import {
  Column
} from "styles/common.styles";
import EventItem from '../EventItem';

type propType = {
    category: string
};

function RelatedEvents({ category }: propType): ReactElement {

    const { data } = useFilteredEventsQuery({
        variables: {
            filters: {
                category: {
                    slug: {
                        eq: category,
                    },
                }
            },
        },
    });

    // console.log(data?.articles?.data)
    // console.log(category)
    const events = data?.events?.data as EventEntity[]


    return (
      <>
        {events?.map((eve) => (
          <Column key={eve?.id} className="Column-3">
            <EventItem
              id={eve?.id as string}
              hostName={eve?.attributes?.host?.data?.attributes?.username}
              title={eve?.attributes?.title as string}
              slug={eve?.attributes?.slug as string}
              location={eve?.attributes?.Location?.town as string}
              venue={eve?.attributes?.venue as string}
              venueName={eve?.attributes?.Location?.name as string}
              route={`/events/${eve?.attributes?.category?.data?.attributes?.slug}/${eve?.attributes?.slug}`}
              starDate={eve?.attributes?.startDate as string}
              starTime={eve?.attributes?.startTime as string}
              price={
                eve?.attributes?.price === '0'
                  ? 'Free'
                  : `£${eve?.attributes?.price}`
              }
              image={eve?.attributes?.listImage || '/default-list-img.jpg'}
              category={
                eve?.attributes?.category?.data?.attributes?.slug as string
              }
            />
          </Column>
        ))}
      </>
    );
}

export default RelatedEvents
