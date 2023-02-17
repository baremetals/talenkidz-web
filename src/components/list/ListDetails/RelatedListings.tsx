import React, { ReactElement } from 'react'
import { useFilteredListingsQuery, ListingEntity } from "generated/graphql";
import {
    Column,
} from "styles/common.styles";
import ActivitiesItem from '../ActivitiesItem';

type propType = {
    category: string
};

function RelatedListings({ category }: propType): ReactElement {
  
    const { data } = useFilteredListingsQuery({
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

    const activities = data?.listings?.data as ListingEntity[]
    
    return (
      <>
        {activities.map((list) => (
          <Column className="Column-3" key={list?.id}>
            <ActivitiesItem
              id={list?.id as string}
              hostName={list?.attributes?.host?.data?.attributes?.username}
              hostImage={
                list?.attributes?.host?.data?.attributes?.avatar as string
              }
              title={list?.attributes?.title as string}
              slug={list?.attributes?.slug as string}
              location={list?.attributes?.Location?.town as string}
              venue={list?.attributes?.venue as string}
              venueName={list?.attributes?.Location?.name as string}
              route={`/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`}
              startDate={list?.attributes?.startDate}
              starTime={list?.attributes?.startTime as string}
              price={
                list?.attributes?.price === '0'
                  ? 'Free'
                  : `£${list?.attributes?.price}`
              }
              image={
                (list?.attributes?.listImage as string) ||
                '/default-list-img.jpg'
              }
            />
          </Column>
        ))}
      </>
    );
}

export default RelatedListings
