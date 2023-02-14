import React, { SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Listing, ListingEntity, CategoryEntity } from 'generated/graphql';
import Breadcrumb from 'components/widgets/Breadcrumb';
import Banner from 'components/widgets/Banner';
import ActivitiesCategories from 'components/widgets/ActivitiesCategories';
import PageTitle from 'components/widgets/PageTitle';
import ActivitiesItem from 'components/widgets/ActivitiesItem';
import { EventTime, LinkBlock, CategoriesBlock, ActivitiesList, BreadcrumbBlock } from './styles';
import Button from 'components/users/Auth/Button';
import Search from 'components/utilities/search/HeroSearch';

import {
    InnerBanner,
    InnerContainer,
    Title,
    PostTitle,
    Text,
    PageContainer,
    Row,
    Column,
    ListCard,
    ListIcon,
    ListBody,

    SearchBar,
    SearchInput,
    SearchButton,

    WidgetPanel,
    WidgetPanelTitle,

    WidgetPanelListing,
    WidgetPanelLink,
    PostThumb,
    Bottom,
    PostDate,
    // PostMedia,
} from 'styles/common.styles';
import { upperCase } from 'src/utils';
import { useAppSelector } from 'src/app/hooks';
import { activitiesSelector } from 'src/features/activities';

// import { ThumbsUp } from '../../../../public/assets/icons/ThumbsUp'
// import { BookMark } from '../../../../public/assets/icons/BookMark'


type listingProps = {
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
    host: {
      data: {
        id: string;
        attributes: {
          logo: string;
          // slug: string;
          name: string;
        };
      };
    };
    startTime: string
    listImage: string;
    price: string;
    Location: {
      name: string;
      town: string;
    };
    // heroImage: {
    //   data: {
    //     id: string;
    //     attributes: {
    //       url: string;
    //       // slug: string;
    //       // img: string;
    //     };
    //   };
    // };
  };
};

type pageProps = {
    listings: ListingEntity[]
    categories: CategoryEntity[]
}

function Listings({ listings, categories }: pageProps) {
    const router = useRouter();
    const [filteredListings, setFilteredListings] = useState([]);
    const eventEntities = useAppSelector(activitiesSelector);
    const [values, setValues] = useState({
        category: "",
        search: "",
    });

    useEffect(() => {
        setFilteredListings(listings as SetStateAction<never[]>);
    }, [listings]);

    // console.log(listings)

    const handleSearch =
        (name: string) => (event: { target: { value: string } }) => {
            setValues({ ...values, [name]: event.target.value });
            // console.log(event.target.value);
            const searchValue = event.target.value;
            if (searchValue !== "") {
                const filteredData = listings?.filter((list) => {
                    const article = list?.attributes as Listing
                    console.log(Object.values(article))
                    return Object.values(article)
                        .join(" ")
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());
                });
                setFilteredListings(filteredData as SetStateAction<never[]>);
            } else setFilteredListings(listings as SetStateAction<never[]>);
        };

    return (
      <>
        <InnerContainer>
          <BreadcrumbBlock>
            <Breadcrumb route={[]} />
          </BreadcrumbBlock>
        </InnerContainer>
        <PageContainer>
          <InnerContainer>
            {/* banner */}
            <Banner
              src={'/assets/images/activities.jpg'}
              text={'Choose surroundings according your interests'}
            >
              <Search
                placeholder={'Search events that may be interesting for you'}
                entities={eventEntities}
              />
            </Banner>

            {/* event */}
            <EventTime>
              <LinkBlock href={'#'}>Creativity </LinkBlock>
              <LinkBlock className="active" href={'#'}>
                Sport{' '}
              </LinkBlock>
              <LinkBlock href={'#'}>Education </LinkBlock>
            </EventTime>

            {/* Categories*/}
            <CategoriesBlock>
              <ActivitiesCategories />
            </CategoriesBlock>

            {/* <Activitie*/}
            <ActivitiesList>
              <Row>
                <Column>
                  <PageTitle
                    className="pageTitle"
                    text={'Most popular sport activities'}
                  />
                </Column>
              </Row>
              <Row>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
                  <Column className="Column-3" key={i}>
                    <ActivitiesItem />
                  </Column>
                ))}
              </Row>
              <Row className="buttonRow">
                <Column>
                  <Button
                    content="See more events "
                    type="submit"
                    disabled={false}
                    loading={false}
                  ></Button>
                </Column>
              </Row>
            </ActivitiesList>
          </InnerContainer>
        </PageContainer>

        <InnerBanner
        // style={{ backgroundImage: 'url(/inner-banner.jpg)' }}
        >
          <InnerContainer>
            <Title>
              {`${
                router.query.category === undefined
                  ? 'Latest'
                  : upperCase(router.query.category as string)
              }`}{' '}
              Activities
            </Title>
            <Text style={{ marginBottom: '0', color: '#000000' }}>
              <Link href={'/'}>Home </Link> /{' '}
              <Link href={'/activities'}>Activities </Link>{' '}
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
                  {filteredListings &&
                    filteredListings?.map((list: listingProps, id) => (
                      <Column
                        className="column-3"
                        style={{
                          marginTop: '3.5rem',
                          minWidth: '50%',
                          display: 'flex',
                        }}
                        key={id}
                      >
                        <Link
                          href={`/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`}
                          passHref
                        >
                          <ListCard>
                            <ListIcon style={{ backgroundColor: '#f1f0f1' }}>
                              {/* <Image
                                src={list?.attributes?.host?.data?.attributes?.logo as string  }
                                alt="host logo image"
                                width={73.99}
                                height={73.99}
                              /> */}
                            </ListIcon>
                            <ListBody>
                              <PostThumb>
                                <Image
                                  src={list?.attributes?.listImage}
                                  alt="article image"
                                  // style={{ height: '200px' }}
                                  width={285.33}
                                  height={200}
                                />
                              </PostThumb>
                              <PostTitle>{list?.attributes?.title}</PostTitle>
                              {/* <Text style={{ marginBottom: '0' }}>
                                {list?.attributes?.description}
                              </Text> */}
                            </ListBody>
                            <Bottom style={{ marginBottom: '.25rem' }}>
                              <PostDate style={{ color: '#a40a52' }}>
                                {/* {dayjs(event?.attributes?.startDate).day()}{' '}
                              , */}
                                {dayjs(list?.attributes?.startDate).format(
                                  'DD MMMM YYYY'
                                )}
                                , {list?.attributes?.startTime}
                              </PostDate>
                            </Bottom>
                            <Bottom style={{ marginBottom: '.25rem' }}>
                              <PostDate>
                                {`${list?.attributes?.Location?.name}` +
                                  ' • ' +
                                  `${list?.attributes?.Location?.town}`}
                              </PostDate>
                            </Bottom>
                            <Bottom style={{ marginBottom: '.25rem' }}>
                              <PostDate>
                                {list?.attributes?.price === '0'
                                  ? 'Free'
                                  : `£${list?.attributes?.price}`}{' '}
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
                                {list?.attributes?.host?.data?.attributes?.name}{' '}
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
                          </ListCard>
                        </Link>
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
                        {/* <Image
                          src={"/public/checkbox.svg"}
                          alt="checkboxes"
                          width={20}
                          height={20}
                        /> */}
                        <Link href={`/activities/${cat?.attributes?.slug}`}>
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

export default Listings
