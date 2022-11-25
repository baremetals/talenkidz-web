import React, { ReactElement } from 'react'
import dayjs from "dayjs";
import { useFilteredListingsQuery, ListingEntity } from "generated/graphql";

import {
    MediaObject,
    MediaObjectItem,
    MediaObjectThumb,
    MediaObjectBody,
    MediaObjectDate,
    MediaObjectTitle,
    Image,
    WidgetPanel,
    WidgetPanelTitle,
    WidgetPanelListing,
    MediaObjectSpan,
} from "../../../styles/common.styles";
import Link from 'next/link';

// type articleProps = {
//     id: string;
//     attributes: {
//         body: string;
//         category: {
//             data: {
//                 id: string;
//                 attributes: {
//                     // name: string;
//                     slug: string;
//                 };
//             };
//         };
//         createdAt: Date;
//         slug: string;
//         title: string;
//         blurb: string;
//         author: {
//             data: {
//                 id: string;
//                 attributes: {
//                     fullName: string;
//                     // slug: string;
//                     // img: string;
//                 };
//             };
//         };
//         heroImage: {
//             data: {
//                 id: string;
//                 attributes: {
//                     url: string;
//                     // slug: string;
//                     // img: string;
//                 };
//             };
//         };
//     };
// };

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

    // console.log(data?.articles?.data)
    // console.log(category)
    const arty = data?.listings?.data as ListingEntity[]
    

    return (
      <>
        <WidgetPanel>
          <WidgetPanelTitle>Related Listings</WidgetPanelTitle>
          <WidgetPanelListing>
            <MediaObject>
              {arty?.map((art, id) => (
                <MediaObjectItem key={id}>
                  <MediaObjectThumb>
                    <Link
                      href={`/activities/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`}
                      passHref
                    >
                      <Image
                        src={
                          art?.attributes?.listImage || '/default-list-img.jpg'
                        }
                        alt="activity image"
                      />
                    </Link>
                    <MediaObjectSpan
                      style={{
                        fontSize: '14px',
                        color: '#39364F',
                        fontWeight: '500',
                        // marginTop: '0.1rem'
                      }}
                    >
                      {art?.attributes?.host?.data?.attributes?.name}{' '}
                    </MediaObjectSpan>
                  </MediaObjectThumb>
                  <MediaObjectBody>
                    <Link
                      href={`/activitiess/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`}
                      passHref
                    >
                      <MediaObjectTitle>
                        {art?.attributes?.title?.slice(0, 23)}...
                      </MediaObjectTitle>
                    </Link>
                    <MediaObjectDate>
                      {dayjs(art?.attributes?.startDate).format('DD MMMM YYYY')}
                    </MediaObjectDate>
                    <MediaObjectSpan>
                      {`${art?.attributes?.Location?.name}` +
                        ' • ' +
                        `${art?.attributes?.Location?.town}`}
                    </MediaObjectSpan>
                    <MediaObjectSpan>
                      {art?.attributes?.price === '0'
                        ? 'Free'
                        : `£${art?.attributes?.price}`}{' '}
                    </MediaObjectSpan>
                  </MediaObjectBody>
                </MediaObjectItem>
              ))}
            </MediaObject>
          </WidgetPanelListing>
        </WidgetPanel>
      </>
    );
}

export default RelatedListings
