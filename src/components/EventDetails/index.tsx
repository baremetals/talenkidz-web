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
    InnerBanner, Image, InnerContainer, Title, Text, PageContainer, Content, Row, Column, ServiceCard, ServiceIcon, PostDate, ListIcon, Post, PostThumb, PostBody, PostTitle, MediaObjectTitle
} from "styles/common.styles";
import RelatedEvents from '../EventDetails/RelatedEvents'
import { ClockSeven } from '../../../public/assets/icons/ClockSeven'

import { GraphicImage } from '../../../public/assets/icons/GraphicImage'
import { ResponsiveDisplay } from '../../../public/assets/icons/ResponsiveDisplay'
import { UserFriendly } from '../../../public/assets/icons/UserFriendly'
import { FullyCustomizable } from '../../../public/assets/icons/FullyCustomizable'

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
                </InnerContainer>
            </InnerBanner>

            <PageContainer>
                <InnerContainer>
                    <Row>
                        <Column className='column-7'>
                            <Row>
                                <Column style={{ minWidth: "50%" }} >
                                    <ListIcon style={{ backgroundColor: '#f1f0f1', marginBottom: "0rem" }}>
                                        {/* <Briefcase /> */}
                                        <Image src={event?.attributes?.host?.data?.attributes?.logo as string} alt='host logo image' />
                                    </ListIcon>
                                    <PostDate style={{ marginBottom: "1.25rem" }}> By : {host?.name} </PostDate>
                                    <PostDate style={{ marginBottom: "1.25rem" }}><ClockSeven /> Date : {dayjs(event?.attributes?.startDate).format('DD MMMM YYYY')}  - {dayjs(event?.attributes?.endDate).format('DD MMMM YYYY')}</PostDate>
                                    <PostDate style={{ marginBottom: "1.25rem" }}><ClockSeven /> Time : {event?.attributes?.startTime} - {event?.attributes?.endTime}</PostDate>
                                    <Post style={{ padding: '1.5rem', border: '1px solid #D9D9D9', borderRadius: '.625rem' }}>
                                        <PostThumb>
                                            {imageurl && <Image src={imageurl} alt='host logo image' />}
                                        </PostThumb>
                                        <PostBody>
                                            <ListIcon style={{ backgroundColor: '#f1f0f1', marginBottom: "0rem" }}>
                                                {/* <Briefcase /> */}
                                                <Image src={event?.attributes?.host?.data?.attributes?.logo as string} alt='host logo image' />
                                            </ListIcon>
                                            <PostDate style={{ marginBottom: "1.25rem" }}> By : {host?.name} </PostDate>
                                            {/* <PostTitle>{event?.attributes?.title}</PostTitle> */}
                                            {/* <PostDate style={{ marginBottom: "1.25rem" }}><ClockSeven /> By : {author?.fullName}  |  {dayjs(article?.attributes?.createdAt).format('DD MMMM YYYY')} </PostDate> */}
                                            <div style={{ marginBottom: "1.5rem" }}>
                                                <Markdown>{event?.attributes?.body as string}</Markdown>
                                            </div>
                                            <Column>
                                                <Title style={{ marginBottom: "1.25rem" }}>Location</Title>
                                                <PostDate style={{ marginBottom: "0rem" }}> Street : {location?.numberOrName} {location?.street}</PostDate>
                                                <PostDate style={{ marginBottom: "0rem" }}> Town : {location?.town} </PostDate>
                                                <PostDate > Town : {location?.postCode} </PostDate>
                                            </Column>
                                        </PostBody>
                                    </Post>
                                </Column>
                            </Row>
                        </Column>
                        <Column>
                            <RelatedEvents category={category} />
                        </Column>
                    </Row>

                    {/* <Row className="space-bottom">
                        <Column className="column-3">
                            <ServiceCard>
                                <ServiceIcon style={{backgroundColor: '#F7BD00'}}>
                                    <ResponsiveDisplay />
                                </ServiceIcon>
                                <Title style={{fontSize: '1.375rem', marginBottom: '1.375rem', marginTop: '1.875rem'}}>Responsive Display</Title>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                            </ServiceCard>
                        </Column>
                        <Column className="column-3">
                            <ServiceCard>
                                <ServiceIcon style={{backgroundColor: '#2FA952'}}>
                                    <UserFriendly />
                                </ServiceIcon>
                                <Title style={{fontSize: '1.375rem', marginBottom: '1.375rem', marginTop: '1.875rem'}}>User Friendly</Title>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                            </ServiceCard>
                        </Column>
                        <Column className="column-3">
                            <ServiceCard>
                                <ServiceIcon style={{backgroundColor: '#2B59FF'}}>
                                    <FullyCustomizable />
                                </ServiceIcon>
                                <Title style={{fontSize: '1.375rem', marginBottom: '1.375rem', marginTop: '1.875rem'}}>Fully Customizable</Title>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                            </ServiceCard>
                        </Column>
                    </Row> */}

                    {/* <Row className="space-bottom">
                        <Column>
                            <Image src="/detail-image.png" alt="" />
                        </Column>
                        <Column>
                            <Title style={{marginBottom: '1.875rem'}}>Lorem Ipsum is simply dummy text.</Title>
                            <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</Text>
                            <Text>consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </Text>
                        </Column>
                    </Row> */}

                    {/* <Row className="row-reverse">
                        <Column>
                            <Image src="/detail-image.png" alt="" />
                        </Column>
                        <Column>
                            <Title style={{marginBottom: '1.875rem'}}>Lorem Ipsum is simply dummy text.</Title>
                            <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</Text>
                            <Text>consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </Text>
                        </Column>
                    </Row> */}
                </InnerContainer>
            </PageContainer>

            <Footer />
        </>
    );
}

export default EventDetails;
