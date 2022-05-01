import React, { ReactElement, useState } from 'react'
import dayjs from "dayjs";
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
    Image,
    SearchBar,
    SearchInput,
    SearchButton,

    WidgetPanel,
    WidgetPanelTitle,

    WidgetPanelListing,
    WidgetPanelLink
} from "../../styles/common.styles";
import Link from 'next/link';


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
            <WidgetPanel>
                <WidgetPanelTitle style={{ backgroundColor: '#8152cd' }}>Related Listings</WidgetPanelTitle>
                <WidgetPanelListing>
                    <MediaObject>
                        {events?.map((eve, id) => (
                            <MediaObjectItem key={id}>
                                <MediaObjectThumb>
                                    <Link href={`/events/${eve?.attributes?.category?.data?.attributes?.slug}/${eve?.attributes?.slug}`} passHref>
                                        <Image src={eve?.attributes?.listImage || '/default-list-img.jpg'} alt="" />
                                    </Link>
                                </MediaObjectThumb>
                                <MediaObjectBody>
                                    <MediaObjectDate>{dayjs(eve?.attributes?.startDate).format('DD MMMM YYYY')}</MediaObjectDate>
                                    <Link href={`/events/${eve?.attributes?.category?.data?.attributes?.slug}/${eve?.attributes?.slug}`} passHref>
                                        <MediaObjectTitle>{eve?.attributes?.title}</MediaObjectTitle>
                                    </Link>
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
