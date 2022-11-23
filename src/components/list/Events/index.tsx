import React, { SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import dayjs from "dayjs";
import { upperCase } from 'lib/helpers'

// import { ThumbsUp } from '../../../../public/assets/icons/ThumbsUp'
// import { BookMark } from '../../../../public/assets/icons/BookMark'
import { Event, EventEntity, CategoryEntity } from 'generated/graphql';


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
    // PostMedia,
} from 'styles/common.styles';
// import { ThumbsUp } from '../../../../public/assets/icons/ThumbsUp';
// import { BookMark } from '../../../../public/assets/icons/BookMark';

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
        <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
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
        </InnerBanner>

        <PageContainer>
          <InnerContainer>
            <Row>
              <Column className="column-7">
                <Row>
                  {filteredEvents?.map((event: eventProps, id) => (
                    <Column style={{ minWidth: '50%' }} key={id}>
                      <Post>
                        <PostThumb>
                          <Link
                            href={`/events/${event?.attributes?.category?.data?.attributes?.slug}/${event?.attributes?.slug}`}
                            passHref
                          >
                            <Image
                              src={
                                event?.attributes?.listImage ||
                                '/default-list-img.jpg'
                              }
                              alt="event image"
                            />
                          </Link>
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
                              style={{ fontSize: '14px', color: '#39364F', fontWeight: '500' }}
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
                  <SearchButton></SearchButton>
                </SearchBar>
                <WidgetPanel>
                  <WidgetPanelTitle>Categories</WidgetPanelTitle>
                  <WidgetPanelListing>
                    {categories?.map((cat, id) => (
                      <WidgetPanelLink
                        key={id}
                        style={{ fontSize: '14px', color: '#39364F' }}
                      >
                        <Image src="/checkbox.svg" alt="" />
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
