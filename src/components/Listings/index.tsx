import React, { SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Listing, ListingEntity, CategoryEntity } from 'generated/graphql';
import { upperCase } from 'lib/helpers'

import Footer from 'components/Layout/Footer';
import NavBar from 'components/Layout/NavBar';
import {
    InnerBanner,
    InnerContainer,
    Title,
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
    Image,
} from 'styles/common.styles';


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

type pageProps = {
    listings: ListingEntity[]
    categories: CategoryEntity[]
}

function Listings({ listings, categories }: pageProps) {
    const router = useRouter();
    const [filteredListings, setFilteredListings] = useState([]);
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
            <NavBar />
            <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
                <InnerContainer>
                    <Title>{`${router.query.category === undefined ? "Latest" : upperCase(router.query.category as string)}`} Activities</Title>
                    <Text style={{ marginBottom: '0', color: "#000000" }}><Link href={'/'}>Home </Link> / <Link href={'/activities'}>Activities </Link> {`${router.query.category === undefined ? "" : '/ ' + upperCase(router.query.category as string)}`}</Text>
                </InnerContainer>
            </InnerBanner>
            <PageContainer>
                <InnerContainer>
                    <Row>
                        <Column className='column-7'>
                            <Row>
                                {filteredListings && filteredListings?.map((list: listingProps, id) => (
                                    <Column className='column-3' style={{ marginTop: '3.5rem', minWidth: '50%', display: 'flex' }} key={id}>
                                        <Link href={`/activities/${list?.attributes?.category?.data?.attributes?.slug}/${list?.attributes?.slug}`} passHref>
                                            <ListCard>
                                                <ListIcon style={{ backgroundColor: '#f1f0f1' }}>
                                                    <Image src={list?.attributes?.host?.data?.attributes?.logo} alt='host logo image' />
                                                </ListIcon>
                                                <ListBody>
                                                    <Title style={{ fontSize: '1.375rem', marginBottom: '1.25rem' }}>{list?.attributes?.title}</Title>
                                                    <Text style={{ marginBottom: '0' }}>{list?.attributes?.description}</Text>
                                                </ListBody>
                                            </ListCard>
                                        </Link>
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
                                        <WidgetPanelLink key={id} ><Image src='/checkbox.svg' alt='' /><Link href={`/activities/${cat?.attributes?.slug}`}>{cat?.attributes?.slug}</Link></WidgetPanelLink>
                                    ))}
                                </WidgetPanelListing>

                            </WidgetPanel>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>
            <Footer />
        </>
    );
}

export default Listings
