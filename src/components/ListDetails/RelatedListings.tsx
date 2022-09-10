import React, { ReactElement, useState } from 'react'
import dayjs from "dayjs";
// import Link from 'next/link'
// import { animateScroll as scroll } from "react-scroll";

// import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { QueryResult } from '@apollo/client';
import { FilteredArticlesQuery, Exact, Query, useFilteredListingsQuery, ListingEntity } from "generated/graphql";

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

type articleProps = {
    id: string;
    attributes: {
        body: string;
        category: {
            data: {
                id: string;
                attributes: {
                    // name: string;
                    slug: string;
                };
            };
        };
        createdAt: Date;
        slug: string;
        title: string;
        blurb: string;
        author: {
            data: {
                id: string;
                attributes: {
                    fullName: string;
                    // slug: string;
                    // img: string;
                };
            };
        };
        heroImage: {
            data: {
                id: string;
                attributes: {
                    url: string;
                    // slug: string;
                    // img: string;
                };
            };
        };
    };
};

type propType = {
    category: string
};

function RelatedListings({ category }: propType): ReactElement {

    // const [articles, setArticles] = useState([])

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
                <WidgetPanelTitle style={{ backgroundColor: '#8152cd' }}>Related Listings</WidgetPanelTitle>
                <WidgetPanelListing>
                    <MediaObject>
                        {arty?.map((art, id) => (
                            <MediaObjectItem key={id}>
                                <MediaObjectThumb>
                                    <Link href={`/activities/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`} passHref>
                                    <Image src={art?.attributes?.listImage || '/default-list-img.jpg'} alt="" />
                                    </Link>
                                </MediaObjectThumb>
                                <MediaObjectBody>
                                    <MediaObjectDate>{dayjs(art?.attributes?.startDate).format('DD MMMM YYYY')}</MediaObjectDate>
                                    <Link href={`/activitiess/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`} passHref>
                                    <MediaObjectTitle>{art?.attributes?.title}</MediaObjectTitle>
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

export default RelatedListings
