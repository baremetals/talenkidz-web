import React from 'react'
import dayjs from "dayjs";
import Link from 'next/link'
import { useListingsQuery } from "generated/graphql";
import Image from 'next/image';

// import Button from 'components/Auth/Button';
// import Footer from 'components/Footer';
// import NavBar from 'components/NavBar';
// import OurServices from './OurServices'
// import Company from '../About/Company'

import {
  InnerContainer,
  Heading,
  SubTitle,
  H2Title,
  Row,
  Column,
  //   Image,
  Classes,
  PostCard,
  PostCardThumb,
  PostCardSummary,
//   PostCardTitle,
  PostTitle,
  PostCardText,
  PostDate,
} from 'styles/common.styles';
import { useRouter } from 'next/router';

const ActivityCard = () => {
  const router = useRouter()
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
      <>
        <Classes>
          <InnerContainer>
            <Heading style={{ textAlign: 'center' }}>
              <SubTitle>On Going Events & Activities</SubTitle>
              <H2Title>
                Sports Creative Educational <br /> Events and Activities
              </H2Title>
            </Heading>
            <Row>
              {lists &&
                lists?.map((list, id) => (
                  <Column key={id}>
                    <PostCard>
                      <PostCardThumb
                        onClick={() =>
                          router.push(
                            `/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`
                          )
                        }
                      >
                        {/* <Link
                          href={`/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`}
                          passHref
                        > */}
                        <Image
                          src={
                            list?.attributes?.listImage ||
                            '/default-list-img.jpg'
                          }
                          alt="activity image"
                          width={400}
                          height={250}
                        />
                        {/* </Link> */}
                      </PostCardThumb>
                      <PostCardSummary>
                        <Link
                          href={`/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`}
                          passHref
                        >
                          <PostTitle>
                            {list?.attributes?.title?.slice(0, 50)}...
                          </PostTitle>
                        </Link>
                        <PostCardText>
                          {list?.attributes?.description?.slice(0, 70)}
                        </PostCardText>
                        <PostDate>
                          {`${list?.attributes?.Location?.name}` +
                            ' • ' +
                            `${list?.attributes?.Location?.town}`}
                        </PostDate>
                        <PostDate style={{ color: '#a40a52' }}>
                          {/* {dayjs(event?.attributes?.startDate).day()}{' '}
                              , */}
                          {dayjs(list?.attributes?.startDate).format(
                            'DD MMMM YYYY'
                          )}
                          , {list?.attributes?.startTime}
                        </PostDate>
                        <PostDate>
                          {list?.attributes?.price === '0'
                            ? 'Free'
                            : `£${list?.attributes?.price}`}{' '}
                        </PostDate>
                      </PostCardSummary>
                    </PostCard>
                  </Column>
                ))}
            </Row>
          </InnerContainer>
        </Classes>
      </>
    );
}

export default ActivityCard
