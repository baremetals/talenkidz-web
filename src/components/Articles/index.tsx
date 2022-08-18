
import React, { SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import dayjs from "dayjs";
import { upperCase } from 'lib/helpers'

// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

import {
    InnerBanner,
    InnerContainer,
    Row,
    Column,
    Title,
    Text,
    PageContainer,

    Post,
    PostThumb,
    PostBody,
    PostTitle,
    Bottom,
    PostDate,
    PostMedia,
    Image,

    SearchBar,
    SearchInput,
    SearchButton,

    WidgetPanel,
    WidgetPanelTitle,

    WidgetPanelListing,
    WidgetPanelLink
} from 'styles/common.styles';

import { ThumbsUp } from '../../../public/assets/icons/ThumbsUp'
import { Article, ArticleEntity, CategoryEntity } from 'generated/graphql';

type articleProps = {
    id: string;
    attributes: {
        body: string;
        category: {
            data: {
                id: string;
                attributes: {
                    // name: string;
                    slug: string;
                };
            };
        };
        updatedAt: Date;
        slug: string;
        title: string;
        blurb: string;
        author: {
            data: {
                id: string;
                attributes: {
                    fullName: string;
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
    articles: ArticleEntity[]
    categories: CategoryEntity[]
}
// { props: ArticleEntity[] }


const Articles = ({ articles, categories }: pageProps) => {
    const router = useRouter();
    // console.log(router.query.category)
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [values, setValues] = useState({
        category: "",
        search: "",
    });
    // console.log(props?.props);
    // const articles = props?.props

    useEffect(() => {
        setFilteredArticles(articles as SetStateAction<never[]>);
    }, [articles]);


    const handleSearch =
        (name: string) => (event: { target: { value: string } }) => {
            setValues({ ...values, [name]: event.target.value });
            // console.log(event.target.value);
            const searchValue = event.target.value;
            if (searchValue !== "") {
                const filteredData = articles?.filter((post) => {
                    const article = post?.attributes as Article
                    console.log(Object.values(article))
                    return Object.values(article)
                        .join(" ")
                        .toLowerCase()
                        .includes(searchValue.toLowerCase());
                });
                setFilteredArticles(filteredData as SetStateAction<never[]>);
            } else setFilteredArticles(articles as SetStateAction<never[]>);
        };
    return (
        <>
            <NavBar />

            <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
                <InnerContainer>
                    <Title>{`${router.query.category === undefined ? "Latest" : upperCase(router.query.category as string)}`} Articles</Title>
                    <Text style={{ marginBottom: '0', color: "#000000" }}><Link href={'/'}>Home </Link> / <Link href={'/articles'}>Articles </Link> {`${router.query.category === undefined ? "" : '/ ' + upperCase(router.query.category as string)}`}</Text>
                </InnerContainer>
            </InnerBanner>

            <PageContainer>
                <InnerContainer>
                    <Row>
                        <Column className='column-7'>
                            <Row>
                                {filteredArticles?.map((art: articleProps, id) => (
                                    <Column style={{ minWidth: "50%" }} key={id}>
                                        <Link href={`/articles/${art?.attributes?.category?.data?.attributes?.slug}/${art?.attributes?.slug}`} passHref>
                                            <Post>
                                                <PostThumb>
                                                    <Image src={art?.attributes?.heroImage?.data?.attributes?.url} alt='article image' />
                                                </PostThumb>
                                                <PostBody>
                                                    <PostTitle>{art?.attributes?.title}</PostTitle>
                                                    {/* <Text>{art?.attributes?.blurb}</Text> */}
                                                    <Bottom>

                                                        <PostDate>By : {art?.attributes?.author?.data?.attributes?.fullName}  |  {dayjs(art?.attributes?.updatedAt).format('DD MMMM YYYY')} </PostDate>
                                                        <PostMedia>
                                                            {/* <Link href={'/posts'}><a><ThumbsUp /></a></Link> */}
                                                            {/* <Link href={'/posts'}><a><BookMark /></a></Link> */}
                                                        </PostMedia>
                                                    </Bottom>
                                                </PostBody>
                                            </Post>
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
                                        <WidgetPanelLink key={id} ><Image src='/checkbox.svg' alt='' /><Link href={`/articles/${cat?.attributes?.slug}`}>{cat?.attributes?.slug}</Link></WidgetPanelLink>
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

export default Articles
