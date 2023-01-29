import React, { SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import dayjs from "dayjs";
import Banner from 'components/widgets/Banner';
import PageTitle from 'components/widgets/PageTitle';
import Categories from 'components/widgets/Categories';
import EventItem from 'components/widgets/EventItem';
import Breadcrumb from 'components/widgets/Breadcrumb';
import Button from 'components/users/Auth/Button';
// import { ThumbsUp } from 'public/assets/icons/ThumbsUp'
// import { BookMark } from 'public/assets/icons/BookMark'
import { Event, EventEntity, CategoryEntity } from 'generated/graphql';
import { EventTime, LinkBlock, CategoriesBlock, EventList } from './styles';

import {
    InnerBanner,
    InnerContainer,
    Title,
    Text,
    PageContainer,
    Row,
    Column,
    Image as Img,
    SearchBar,
    SearchInput,
    SearchButton,

    WidgetPanel,
    WidgetPanelTitle,

    WidgetPanelListing,
    WidgetPanelLink,
    Post,
    PostThumb,
    PostBody,
    PostTitle,
    Bottom,
    PostDate,
    // PostMedia,
} from 'styles/common.styles';
import { upperCase } from 'src/utils';


type eventProps = {
  id: string;
  attributes: {
    // body: string;
    category: {
      data: {
        id: string;
        attributes: {
          // name: string;
          slug: string;
        };
      };
    };
    startDate: string;
    startTime: string;
    endDate: string;
    createdAt: Date;
    slug: string;
    title: string;
    price: string;
    listImage: string;
    Location: {
        name: string;
        town: string;
    }
    host: {
      data: {
        id: string;
        attributes: {
          logo: string;
          slug: string;
          name: string;
        };
      };
    };
  };
};
type pageProps = {
    events: EventEntity[]
    categories: CategoryEntity[]
}

const Events = ({ events, categories }: pageProps) => {
    const router = useRouter();

    const [filteredEvents, setFilteredEvents] = useState([]);
    const [values, setValues] = useState({
        category: '',
        search: '',
    });
    // console.log(events)


    useEffect(() => {
        setFilteredEvents(events as SetStateAction<never[]>);
    }, [events]);

    const handleSearch =
        (name: string) => (event: { target: { value: string } }) => {
            setValues({ ...values, [name]: event.target.value });
            // console.log(event.target.value);
            const searchValue = event.target.value;
            if (searchValue !== '') {
                const filteredData = events?.filter((ev) => {
                    const article = ev?.attributes as Event;
                    console.log(Object.values(article));
                    return Object.values(article)
                        .join(' ')
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());
                });
                setFilteredEvents(filteredData as SetStateAction<never[]>);
            } else setFilteredEvents(events as SetStateAction<never[]>);
        };
    return (
      <>
        {/* <InnerBanner>
          <InnerContainer>
            <Title>
              {`${
                router.query.category === undefined
                  ? 'Latest'
                  : upperCase(router.query.category as string)
              }`}{' '}
              Events
            </Title>
            <Text style={{ marginBottom: '0', color: '#000000' }}>
              <Link href={'/'}>Home </Link> /{' '}
              <Link href={'/events'}>Events </Link>{' '}
              {`${
                router.query.category === undefined
                  ? ''
                  : '/ ' + upperCase(router.query.category as string)
              }`}
            </Text>
          </InnerContainer>
        </InnerBanner> */}
        <InnerContainer>
          <Breadcrumb />
        </InnerContainer>
        
        <PageContainer>
          <InnerContainer>
          
            {/* banner */}
            <Banner />
             {/* event */}
            <EventTime>
              <LinkBlock className='active' href={'#'}>All</LinkBlock>
              <LinkBlock href={'#'}>Today</LinkBlock>
              <LinkBlock href={'#'}>This week</LinkBlock>
              <LinkBlock href={'#'}>This month</LinkBlock>
              <LinkBlock href={'#'}>Online</LinkBlock>
              <LinkBlock href={'#'}>Freee</LinkBlock>
              <LinkBlock href={'#'}>For parents </LinkBlock>
              <LinkBlock className='underline' href={'#'}>Affiliate events</LinkBlock>
            </EventTime>

            {/* Categories*/}
            <CategoriesBlock>
                <Categories />
            </CategoriesBlock>
            
            {/*event*/}
            
            <EventList>
            <Row >
              <Column><PageTitle className="pageTitle" text={'Events on TALENTKIDS'} /></Column>
            </Row>
            <Row>
              <Column>
                <EventItem />
              </Column>
               <Column>
                <EventItem />
              </Column>
               <Column>
                <EventItem />
              </Column>
            </Row>
             <Row>
              <Column>
                <EventItem />
              </Column>
               <Column>
                <EventItem />
              </Column>
               <Column>
                <EventItem />
              </Column>
              </Row>
              <Row className='buttonRow'>
                <Column>
                  <Button
                    content="See more events "
                    type="submit"
                    disabled={false}
                    loading={false}
                  ></Button>
                </Column>
              </Row>
            </EventList>
            <Row>
              <Column className="column-7">
                <Row>
                  {filteredEvents?.map((event: eventProps, id) => (
                    <Column style={{ minWidth: '50%' }} key={id}>
                      <Post>
                        <PostThumb
                          onClick={() =>
                            router.push(
                              `/events/${event?.attributes?.category?.data?.attributes?.slug}/${event?.attributes?.slug}`
                            )
                          }
                        >
                          {/* <Link
                            href={`/events/${event?.attributes?.category?.data?.attributes?.slug}/${event?.attributes?.slug}`}
                            passHref
                          > */}
                          <Image
                            src={
                              event?.attributes?.listImage ||
                              '/default-list-img.jpg'
                            }
                            alt="event image"
                            width={359.32}
                            height={269.49}
                          />
                          {/* </Link> */}
                        </PostThumb>
                        <PostBody>
                          <Link
                            href={`/events/${event?.attributes?.category?.data?.attributes?.slug}/${event?.attributes?.slug}`}
                            passHref
                          >
                            <PostTitle>
                              {event?.attributes?.title.slice(0, 55)}
                            </PostTitle>
                          </Link>
                          {/* <Text>
                            {event?.attributes?.description.slice(0, 60)}
                          </Text> */}
                          <Bottom style={{ marginBottom: '.25rem' }}>
                            <PostDate style={{ color: '#a40a52' }}>
                              {/* {dayjs(event?.attributes?.startDate).day()}{' '}
                              , */}
                              {dayjs(event?.attributes?.startDate).format(
                                'DD MMMM YYYY'
                              )}
                              , {event?.attributes?.startTime}
                            </PostDate>
                          </Bottom>
                          <Bottom style={{ marginBottom: '.25rem' }}>
                            <PostDate>
                              {`${event?.attributes?.Location?.name}` +
                                ' • ' +
                                `${event?.attributes?.Location?.town}`}
                            </PostDate>
                          </Bottom>
                          <Bottom style={{ marginBottom: '.25rem' }}>
                            <PostDate>
                              {event?.attributes?.price === '0'
                                ? 'Free'
                                : `£${event?.attributes?.price}`}{' '}
                            </PostDate>
                          </Bottom>
                          <Bottom>
                            <PostDate
                              style={{
                                fontSize: '14px',
                                color: '#39364F',
                                fontWeight: '500',
                              }}
                            >
                              {event?.attributes?.host?.data?.attributes?.name}{' '}
                            </PostDate>

                            {/* <PostMedia>
                              <Link href={'/posts'}>
                                <a>
                                  <ThumbsUp />
                                </a>
                              </Link>
                              <Link href={'/posts'}>
                                <a>
                                  <BookMark />
                                </a>
                              </Link>
                            </PostMedia> */}
                          </Bottom>
                          <Bottom></Bottom>
                        </PostBody>
                      </Post>
                    </Column>
                  ))}
                </Row>
              </Column>

              <Column>
                <SearchBar>
                  <SearchInput
                    placeholder="Search"
                    type="text"
                    name="search"
                    onChange={handleSearch('search')}
                    style={{ fontSize: '14px', color: '#39364F' }}
                  />
                  <SearchButton aria-label="search icon button"></SearchButton>
                </SearchBar>
                <WidgetPanel>
                  <WidgetPanelTitle>Categories</WidgetPanelTitle>
                  <WidgetPanelListing>
                    {categories?.map((cat, id) => (
                      <WidgetPanelLink
                        key={id}
                        style={{ fontSize: '14px', color: '#39364F' }}
                      >
                        <Image
                          src="/checkbox.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <Link href={`/events/${cat?.attributes?.slug}`}>
                          {cat?.attributes?.slug}
                        </Link>
                      </WidgetPanelLink>
                    ))}
                  </WidgetPanelListing>
                </WidgetPanel>
              </Column>
            </Row>
          </InnerContainer>
        </PageContainer>
      </>
    );
}

export default Events