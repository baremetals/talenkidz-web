import React from 'react'
// import dayjs from "dayjs";
import Link from 'next/link'
import { useListingsQuery } from "generated/graphql";

// import Button from 'components/Auth/Button';
// import Footer from 'components/Footer';
// import NavBar from 'components/NavBar';
// import OurServices from './OurServices'
// import Company from '../About/Company'

import {
    InnerContainer,
    Heading,
    SubTitle,
    Title,
    Row,
    Column,
    Image,
    Classes,
    PostCard,
    PostCardThumb,
    PostCardSummary,
    PostCardTitle,
    PostCardText,
} from "../../styles/common.styles";

const ActivityCard = () => {

    const { data, loading, error } = useListingsQuery({
        variables: {
            pagination: {
                start: 0,
                limit: 3,
            },
            sort: "createdAt:desc",
        },
    });

    if (!data || loading) {
        return <div>loading...</div>;
    }
    if (error) return <div>No data found</div>;

    // console.log(data?.listings?.data);

    const lists = data?.listings?.data
    return (
        <><Classes>
            <InnerContainer>
                <Heading style={{ textAlign: "center" }}>
                    <SubTitle>On Going Events & Activities</SubTitle>
                    <Title >Take The Classes & Start <br /> Learning From Today</Title>
                </Heading>
                <Row>
                    {lists && lists?.map((list, id) => (
                        <Column key={id}>
                            <PostCard>
                                <PostCardThumb>
                                    <Link href={`/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`} passHref>
                                    <Image src={list?.attributes?.listImage || '/default-list-img.jpg'} alt="" />
                                    </Link>
                                </PostCardThumb>
                                <PostCardSummary>
                                    <Link href={`/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`} passHref>
                                    <PostCardTitle>{list?.attributes?.title}</PostCardTitle>
                                    </Link>
                                    <PostCardText>{list?.attributes?.description?.slice(0, 50)}</PostCardText>        
                                </PostCardSummary>
                            </PostCard>
                        </Column>
                    ))}                                                        
                </Row>
            </InnerContainer>
        </Classes></>
    )
}

export default ActivityCard
