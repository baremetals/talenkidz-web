import Footer from 'components/Layout/Footer';
import NavBar from 'components/Layout/NavBar';
import Sidebar from 'components/Layout/Sidebar';
import Link from 'next/link';
import React from 'react';
import {
    InnerBanner,
    InnerContainer,
    Title,
    Text,
    Image,
    PageContainer,
    Row,
    Column,
    Post,
    PostThumb,
    PostBody,
    PostTitle,
    PostDate,
    Blockquote,
    BlockquoteName
} from 'styles/common.styles';

import { ClockSeven } from '../../../public/assets/icons/ClockSeven'

export const BlogDetails = () => {
    return <>

        <NavBar />

        <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
            <InnerContainer>
                <Title>Blog Details</Title>
                <Text style={{ marginBottom: '0', color: "#000000" }}><Link href={'/'}>Home</Link> / <Link href={'/posts'}>Latest Posts</Link> /Blog Details</Text>
            </InnerContainer>
        </InnerBanner>

        <PageContainer>
            <InnerContainer>
                <Row>
                    <Column className='column-7'>
                        <Row>
                            <Column style={{ minWidth: "50%" }}>
                                <Post style={{ padding: '1.5rem', border: '1px solid #D9D9D9', borderRadius: '.625rem' }}>
                                    <PostThumb>
                                        <Image src='/blog-detail.jpg' alt='' />
                                    </PostThumb>
                                    <PostBody>
                                        <PostTitle>Your Blog Posts are Boring? Here are 9 Tips for Making your Writing more Interesting</PostTitle>
                                        <PostDate style={{ marginBottom: "1.25rem" }}><ClockSeven /> By : Johnson smith  |  April 13, 2020 </PostDate>
                                        <Text style={{ color: '#242933' }} className='info'>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio dolor set consectetur.Ea ipsum sed consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe.</Text>
                                        <Text style={{ color: '#242933' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti odit? At iure facere, porro repellat officia quas, dolores magnam assumenda soluta odit harum voluptate inventore ipsa maiores fugiat accusamus eos nulla. Iure explicabo officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit, dolorem.</Text>
                                        <Blockquote>
                                            <Text style={{ color: '#242933' }}>
                                                Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi, dolores magnam assumenda soluta odit harum.
                                                <BlockquoteName>- Smith Lara</BlockquoteName>
                                            </Text>
                                        </Blockquote>
                                        <Title style={{ fontSize: '1.375rem', marginBottom: '1.25rem' }}>What makes a good blog post?</Title>
                                        <Text style={{ color: '#242933' }}>Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde expedita esse error enim repellat, architecto corporis rerum ipsa alias cum!</Text>
                                        <Text style={{ color: '#242933' }}>Dolor sit sed amet, excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis.</Text>
                                        <Text style={{ color: '#242933' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, veritatis. Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu. Nunc id ipsum fringilla, gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                                    </PostBody>
                                </Post>
                            </Column>
                        </Row>
                    </Column>
                    <Column>
                        <Sidebar />
                    </Column>
                </Row>
            </InnerContainer>
        </PageContainer>

        <Footer />
    </>;
};
