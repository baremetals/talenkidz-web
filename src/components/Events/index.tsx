import React, { SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import dayjs from "dayjs";
import { upperCase } from 'lib/helpers'

// import { ThumbsUp } from '../../../public/assets/icons/ThumbsUp'
// import { BookMark } from '../../../public/assets/icons/BookMark'
import { Event, EventEntity, CategoryEntity } from 'generated/graphql';

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import {
    InnerBanner,
    InnerContainer,
    Title,
    Text,
    PageContainer,
    Row,
    Column,

    SearchBar,
    SearchInput,
    SearchButton,

    WidgetPanel,
    WidgetPanelTitle,

    WidgetPanelListing,
    WidgetPanelLink,
    Image,

    Post,
    PostThumb,
    PostBody,
    PostTitle,
    Bottom,
    PostDate,
    PostMedia,
} from 'styles/common.styles';

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
        endDate: string;
        createdAt: Date;
        slug: string;
        title: string;
        description: string;
        listImage: string;
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
    console.log(events)


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
          <NavBar />

          <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
              <InnerContainer>
                  <Title>{`${router.query.category === undefined ? "Latest" : upperCase(router.query.category as string)}`} Events</Title>
                  <Text style={{ marginBottom: '0', color: "#000000" }}><Link href={'/'}>Home </Link> / <Link href={'/events'}>Events </Link> {`${router.query.category === undefined ? "" : '/ ' + upperCase(router.query.category as string)}`}</Text>
              </InnerContainer>
          </InnerBanner>

          <PageContainer>
              <InnerContainer>
                  <Row>
                      <Column className='column-7'>
                          <Row>
                              {filteredEvents?.map((event: eventProps, id) => (
                                  <Column style={{ minWidth: "50%" }} key={id}>
                                      <Post>
                                          <PostThumb>
                                              <Link href={`/events/${event?.attributes?.category?.data?.attributes?.slug}/${event?.attributes?.slug}`} passHref>
                                                  <Image src={event?.attributes?.listImage || '/default-list-img.jpg'} alt='event image' />
                                              </Link>
                                          </PostThumb>
                                          <PostBody>
                                              <Link href={`/events/${event?.attributes?.category?.data?.attributes?.slug}/${event?.attributes?.slug}`} passHref>
                                              <PostTitle>{event?.attributes?.title}</PostTitle>
                                              </Link>
                                              <Text>{event?.attributes?.description}</Text>
                                              <Bottom>

                                                  <PostDate>Date : {event?.attributes?.host?.data?.attributes?.name}  |  {dayjs(event?.attributes?.startDate).format('DD MMMM YYYY')} - {dayjs(event?.attributes?.endDate).format('DD MMMM YYYY')}</PostDate>
                                                  <PostMedia>
                                                      {/* <Link href={'/posts'}><a><ThumbsUp /></a></Link> */}
                                                      {/* <Link href={'/posts'}><a><BookMark /></a></Link> */}
                                                  </PostMedia>
                                              </Bottom>
                                          </PostBody>
                                      </Post>
                                  </Column> 
                              ))}
                          </Row>
                      </Column>

                      <Column>
                          <SearchBar>
                              <SearchInput placeholder="Search" type="text"
                                  name="search"
                                  onChange={handleSearch("search")}
                              />
                              <SearchButton></SearchButton>
                          </SearchBar>
                          <WidgetPanel>
                              <WidgetPanelTitle>Categories</WidgetPanelTitle>
                              <WidgetPanelListing>

                                  {categories?.map((cat, id) => (
                                      <WidgetPanelLink key={id} ><Link href={`/events/${cat?.attributes?.slug}`}>{cat?.attributes?.slug}</Link></WidgetPanelLink>
                                  ))}
                              </WidgetPanelListing>

                          </WidgetPanel>
                      </Column>
                  </Row>
              </InnerContainer>
          </PageContainer>
          <Footer />
    </>
  )
}

export default Events
