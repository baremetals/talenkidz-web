import React from "react";
import { upperCase } from 'lib/helpers'
import Markdown from "markdown-to-jsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { ErrorMsg } from "components/Input";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import {
    InnerBanner, Image, InnerContainer, Title, Text, PageContainer, Row, Column, PostDate, ListIcon, Post, PostThumb, PostBody, AvatarRow, Avatar, AddressMap, AddressCard, Iframe
} from "styles/common.styles";
import RelatedEvents from '../EventDetails/RelatedEvents'

import Link from "next/link";
import { EventEntityResponseCollection } from 'generated/graphql';

function EventDetails(props: {
    props: {
        data: { events: EventEntityResponseCollection };
        loading: boolean;
        error: any;
    }
}) {

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
    const category = event?.attributes?.category?.data?.attributes?.slug as string;


    return (
        <>
            <NavBar />

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
                                    <Post>
                                    <PostThumb>
                                        {imageurl && <Image src={imageurl} alt='host logo image' />}
                                    </PostThumb>
                                    
                                        <PostThumb>
                                            {imageurl && <Image src={imageurl} alt='host logo image' />}
                                        </PostThumb>
                                        <PostBody>
                                            <div style={{ marginBottom: "1.5rem" }}>
                                                <Markdown>{event?.attributes?.body as string}</Markdown>
                                            </div>
                                        </PostBody>
                                    </Post>

                                    <AddressMap>
                                        <AddressCard>
                                            <Title style={{ marginBottom: "1.25rem", fontSize: '2rem', color: '#FFF' }}>Address</Title>

                                            <PostDate style={{ marginBottom: "0rem" }}> </PostDate>
                                            <PostDate style={{ marginBottom: "0rem" }}> Town : {location?.town} </PostDate>
                                            <PostDate > Town : {location?.postCode} </PostDate>
                                        </AddressCard>
                                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.81855860692!2d78.12085855249065!3d26.21413888461391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1652167836340!5m2!1sen!2sin" width="100%" height="300" loading="lazy"></Iframe>
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

            <Footer />
        </>
    );
}

export default EventDetails;
