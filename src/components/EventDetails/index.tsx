import React, { useState } from "react";
import { upperCase } from 'lib/helpers'
import Markdown from "markdown-to-jsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { ErrorMsg } from "components/Input";
import { GiPriceTag } from 'react-icons/gi';
import { HiStatusOnline } from 'react-icons/hi';
import { VscLocation } from 'react-icons/vsc';
import { MdOutlineSchedule } from 'react-icons/md';
import {
    InnerBanner, Image, InnerContainer, Title, Text, PageContainer, Row, Column, PostDate, ListIcon, Post, PostThumb, PostBody, AvatarRow, Avatar, AddressMap, AddressCard, Iframe
} from "styles/common.styles";
import RelatedEvents from '../EventDetails/RelatedEvents'

import Link from "next/link";
import { EventEntityResponseCollection } from 'generated/graphql';
import SocialShare from "components/Layout/SocialShare";
import { SocialDropDownIcon } from "../../../public/assets/icons/SocialDropDownIcon"
import GoogleMap from 'components/Google/GoogleMap';
import Map from '../Google/Map'

function EventDetails(props: {
    props: {
        data: { events: EventEntityResponseCollection };
        loading: boolean;
        error: any;
    }
}) {
    const [socialDropdown, setSocialDropdown] = useState(false)

    const { data, loading, error } = props.props;

    if (!data || loading) {
        return <div>loading...</div>;
    }

    if (error) return <ErrorMsg>{error}</ErrorMsg>;

    const event = data?.events?.data[0];

    const imageurl = event?.attributes?.listImage;

    const host = event?.attributes?.host?.data?.attributes;
    const location = event?.attributes?.Location
    // console.log(location)

    const postSlug = event?.attributes?.slug as string;

    const category = event?.attributes?.category?.data?.attributes?.slug as string;
    
    const socialToggle  = () => {
        setSocialDropdown(!socialDropdown)
    }

    return (
        <>
            <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
                <InnerContainer>
                    <Title>{event?.attributes?.title}</Title>
                    <Text style={{ marginBottom: '0', color: "#000000" }}><Link href={'/'}>Home</Link> / <Link href={'/activities'}>Activities</Link> / {upperCase(category as string)}</Text>

                    <AvatarRow>
                        <PostDate>
                            <Avatar>
                                <Image style={{ width: '3rem', height: '3rem' }} src={event?.attributes?.host?.data?.attributes?.logo as string || '/logo-w.svg'} alt='host logo image' />
                                By : {host?.name || 'TalentKids'}
                            </Avatar>
                        </PostDate>
                        <PostDate>{dayjs(event?.attributes?.startDate).format('DD MMMM YYYY')}  - {dayjs(event?.attributes?.endDate).format('DD MMMM YYYY')}</PostDate>
                        <PostDate>{event?.attributes?.startTime} - {event?.attributes?.endTime}</PostDate>
                    </AvatarRow>
                </InnerContainer>
            </InnerBanner>

            <PageContainer>
                <InnerContainer>
                    <Row>
                        <Column className='column-7'>
                            <Row>
                                <Column style={{ minWidth: "50%" }} >
                                    <div style={{margin: ' 0 0 1rem'}} className="clearfix">
                                        <SocialShare toggle={() => socialToggle()} socialDropdown={socialDropdown} pathname={`/events/${category.toLowerCase()}/${postSlug}`}>
                                            <SocialDropDownIcon />
                                        </SocialShare>
                                    </div> 
                                    <div className="align_names">
                                    <Link passHref href={event?.attributes?.link as string}>
                                        {event?.attributes?.linkButtonText?.replace('_', ' ')}
                                    </Link> 
                                    <div style={{}} >
                                        <GiPriceTag />
                                         
                                        £{event?.attributes?.price}
                                    </div>   
                                    <div style={{}} >
                                        <MdOutlineSchedule />
                                         {event?.attributes?.status}
                                    </div> 
                                    
                                    {event?.attributes?.venue === 'online' && <div style={{}} >
                                        <HiStatusOnline />
                                         {event?.attributes?.venue} online
                                    </div>
                                    } 
                                    {event?.attributes?.venue === 'location' && <div style={{}} >
                                        <VscLocation />
                                         {location?.name} 
                                    </div>
                                    }
                                    {event?.attributes?.venue === 'both' && <div style={{}} >
                                        <VscLocation />
                                         {location?.name}
                                    </div>
                                    }
                                        {event?.attributes?.venue === 'both' && <div style={{}} >
                                            <HiStatusOnline /> online
                                        </div>
                                        } 
                                    </div>                                                        
                                    <div>
                                        <Post>
                                            <PostThumb>
                                                {imageurl && <Image src={imageurl} alt='host logo image' />}
                                            </PostThumb>
                                            <PostBody>
                                                <div style={{ marginBottom: "1.5rem" }}>
                                                    <Markdown>{event?.attributes?.body as string}</Markdown>
                                                </div>
                                            </PostBody>
                                        </Post>
                                    </div>                                   
                                    <AddressMap>
                                        <GoogleMap>
                                            <Map lat={location?.latitude as number} lng={location?.longtitude as number} />
                                        </GoogleMap>
                                    </AddressMap>
                                </Column>
                            </Row>
                        </Column>
                        <Column>
                            <RelatedEvents category={category} />
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>
        </>
    );
}

export default EventDetails;
