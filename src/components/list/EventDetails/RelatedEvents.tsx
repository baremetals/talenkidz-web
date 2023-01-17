/* eslint-disable no-unused-vars */
import React, { ReactElement, useState } from 'react'
import dayjs from "dayjs";
import Image from 'next/image';
import { useRouter } from 'next/router';
// import Link from 'next/link'
// import { animateScroll as scroll } from "react-scroll";

// import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { QueryResult } from '@apollo/client';
import { FilteredEventsQuery, Exact, Query, useFilteredEventsQuery, EventEntity } from "generated/graphql";

import {
    MediaObject,
    MediaObjectItem,
    MediaObjectThumb,
    MediaObjectBody,
    MediaObjectDate,
    MediaObjectTitle,
    SearchBar,
    SearchInput,
    SearchButton,
    WidgetPanel,
    WidgetPanelTitle,
    MediaObjectSpan,
    WidgetPanelListing,
    WidgetPanelLink,
    PostMedia
} from "../../../styles/common.styles";
import Link from 'next/link';
import { BookMark } from '../../../../public/assets/icons/BookMark';
import { ThumbsUp } from '../../../../public/assets/icons/ThumbsUp';


type propType = {
    category: string
};

function RelatedEvents({ category }: propType): ReactElement {

  const router = useRouter();
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
        <WidgetPanel>
          <WidgetPanelTitle>Related Listings</WidgetPanelTitle>
          <WidgetPanelListing>
            <MediaObject>
              {events?.map((eve, id) => (
                <MediaObjectItem key={id}>
                  <MediaObjectThumb
                    onClick={() =>
                      router.push(
                        `/events/${eve?.attributes?.category?.data?.attributes?.slug}/${eve?.attributes?.slug}`
                      )
                    }
                  >
                    {/* <Link
                      href={`/events/${eve?.attributes?.category?.data?.attributes?.slug}/${eve?.attributes?.slug}`}
                      passHref
                    > */}
                    <Image
                      src={
                        eve?.attributes?.listImage || '/default-list-img.jpg'
                      }
                      alt="event image"
                      width={80}
                      height={80}
                    />
                    {/* </Link> */}
                    <MediaObjectSpan
                      style={{
                        fontSize: '14px',
                        color: '#39364F',
                        fontWeight: '500',
                        // marginTop: '0.1rem'
                      }}
                    >
                      {' '}
                    </MediaObjectSpan>
                  </MediaObjectThumb>
                  <MediaObjectBody>
                    <Link
                      href={`/events/${eve?.attributes?.category?.data?.attributes?.slug}/${eve?.attributes?.slug}`}
                      passHref
                    >
                      <MediaObjectTitle>
                        {eve?.attributes?.title?.slice(0, 23)}...
                      </MediaObjectTitle>
                    </Link>
                    <MediaObjectDate>
                      {dayjs(eve?.attributes?.startDate).format('DD MMMM YYYY')}
                    </MediaObjectDate>
                    <MediaObjectSpan>
                      {`${eve?.attributes?.Location?.name}` +
                        ' • ' +
                        `${eve?.attributes?.Location?.town}`}
                    </MediaObjectSpan>
                    <MediaObjectSpan>
                      {eve?.attributes?.price === '0'
                        ? 'Free'
                        : `£${eve?.attributes?.price}`}{' '}
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

export default RelatedEvents
