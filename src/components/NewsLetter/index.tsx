import React, { useState } from 'react'
import Button from 'components/Button';
import Modal from 'components/Modal';
import Image from 'next/image'
import { Column, InnerBanner, InnerContainer, Row, Text, Title, PageContainer, PostCard, PostCardThumb, PostCardSummary, PostCardTitle, PostCardText, Input, NewsletterBox } from 'styles/common.styles';

function Newsletter() {
  
    return (
        <>
            <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
                <InnerContainer>
                    <Row style={{ textAlign: 'left', alignItems: 'center'}}>
                        <Column style={{ textAlign: 'left'}}>
                            <Title>Thousands Of Inspirational Ideas</Title>
                            <Text>Get the newsletter and we will provide amazing ideas and inspiration for you and your family.</Text>
                            <NewsletterBox style={{display: 'flex'}}>
                                <Input type={'text'} placeholder="Enter your email"></Input>
                                <Button content="" type="submit" style={{borderRadius: '.375rem', marginLeft: '1rem'}}>Subscribe</Button>
                            </NewsletterBox>
                            <Title style={{fontSize: '1.75rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>Inspiration By Parents For Parents</Title>
                            <Text>Our newsletter provides amazing ideas and inspiration for you and your family. Keep the kids happy with entertaining and educational ideas and inspire a love of learning while having lots of fun. From quotes to quizzes, coloring to crafts, baking to badminton and great days out to great days in, is your home for family Edutainment.</Text>
                            {/* <Text style={{ marginBottom: '0', color: "#000000" }}><Link href={'/'}>Home </Link> / <Link href={'/about us'}>about us </Link></Text> */}
                        </Column>
                        <Column>
                            {/* <img style={{ display: 'block', margin: '0 auto'}} height="350" src='/about-us.png' /> */}
                            <Image style={{ display: 'block', margin: '0 auto' }} height="350" width="350" src='/about-us.png' alt=''/>

                        </Column>
                    </Row>
                </InnerContainer>
            </InnerBanner>

            <PageContainer>
                <InnerContainer>
                    <Row>
                        <Column>
                            <Title>Filter By Interests</Title>
                            <Text>All of our content is aligned with Gardner’s theory of multiple intelligences and is curated, researched and hand-picked by parents to enrich the lives of your children.</Text>
                        </Column>
                        <Column>
                            <PostCard style={{textAlign: 'center', backgroundColor: '#bc70ad', color: '#fff'}}>
                            <PostCardThumb>
                                <img height="70" src="/sr-1.png" alt="" />
                            </PostCardThumb>
                            <PostCardSummary>
                                <PostCardTitle>Arts & Crafts</PostCardTitle>
                                <PostCardText>Craft up a storm with hundreds of inspirational ideas for mini masterpieces in the making and the whole family get involved.</PostCardText>
                            </PostCardSummary>
                            </PostCard>
                        </Column>
                        <Column>
                            <PostCard style={{textAlign: 'center', backgroundColor: '#333333', color: '#fff'}}>
                            <PostCardThumb>
                                <img height="70" src="/sr-2.png" alt="" />
                            </PostCardThumb>
                            <PostCardSummary>
                                <PostCardTitle>Arts & Crafts</PostCardTitle>
                                <PostCardText>Craft up a storm with hundreds of inspirational ideas for mini masterpieces in the making and the whole family get involved.</PostCardText>
                            </PostCardSummary>
                            </PostCard>
                        </Column>
                        <Column>
                            <PostCard style={{textAlign: 'center', backgroundColor: '#bc70ad', color: '#fff'}}>
                            <PostCardThumb>
                                <img height="70" src="/sr-3.png" alt="" />
                            </PostCardThumb>
                            <PostCardSummary>
                                <PostCardTitle>Arts & Crafts</PostCardTitle>
                                <PostCardText>Craft up a storm with hundreds of inspirational ideas for mini masterpieces in the making and the whole family get involved.</PostCardText>
                            </PostCardSummary>
                            </PostCard>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

            <PageContainer style={{backgroundColor: 'red', backgroundImage: 'url(/homepage-BG.jpg.webp)', backgroundPosition: 'center center', backgroundSize: 'cover',}}>
                <InnerContainer style={{maxWidth: '1000px'}}>
                    <Row>
                        <Column>
                            <Title style={{ }}>Get The Newsletter</Title>
                            <Text style={{}}>1,000 of inspirational ideas direct to your inbox for things to do with your kids</Text>
                            <NewsletterBox style={{display: 'flex'}}>
                                <Input type={'text'} placeholder="Enter your email"></Input>
                                <Button content="" type="submit" style={{borderRadius: '.375rem', marginLeft: '1rem'}}>Subscribe</Button>
                            </NewsletterBox>
                        </Column>
                        <Column></Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

            <PageContainer>
                <InnerContainer style={{maxWidth: '1000px'}}>
                    <Row style={{alignItems: 'center', flexDirection: 'row-reverse', margin: '1rem 0'}}>
                        <Column>
                            <img style={{ display: 'block', width: '100%', borderRadius: '1rem' }} src='/blog-post02.jpg' />
                        </Column>
                        <Column>
                            <Title style={{fontSize: '1.75rem'}}>Search By Age</Title>
                            <Text>Whether you are entertaining a toddler or a teenager, our simple age sorting tab allows you to easily find curated lists of fun-packed activities and home-learning ideas to meet your needs.</Text>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

            <PageContainer style={{backgroundColor: '#fbf8e4'}}>
                <InnerContainer style={{maxWidth: '1000px'}}>
                    <Text style={{textAlign: 'center'}}>Whether you are.</Text>
                    <Title style={{textAlign: 'center'}}>Join Our Community</Title>
                        <Row style={{alignItems: 'center', flexDirection: 'row-reverse', margin: '1rem 0'}}>
                        <Column>
                            <div style={{display: 'flex'}}>
                                <img style={{ display: 'block', height: '120px', width: '120px', borderRadius: '10rem' }} src='/blog-post02.jpg' />
                                <div style={{paddingLeft: '1.5rem'}}>
                                    <Text style={{fontSize: '.875rem'}}>““I would highly recommend it for busy parents who need ideas and shortcuts to keep the little ones occupied and happy.””</Text>
                                    <Text style={{textAlign: 'right'}}>Miles</Text>
                                </div>
                            </div>
                        </Column>
                        <Column>
                            <div style={{display: 'flex'}}>
                                <img style={{ display: 'block', height: '120px', width: '120px', borderRadius: '10rem' }} src='/blog-post02.jpg' />
                                <div style={{paddingLeft: '1.5rem'}}>
                                    <Text style={{fontSize: '.875rem'}}>““I would highly recommend it for busy parents who need ideas and shortcuts to keep the little ones occupied and happy.””</Text>
                                    <Text style={{textAlign: 'right'}}>Miles</Text>
                                </div>
                            </div>
                        </Column>
                        </Row>
                        <Row style={{alignItems: 'center', flexDirection: 'row-reverse', margin: '1rem 0'}}>
                        <Column>
                            <div style={{display: 'flex'}}>
                                <img style={{ display: 'block', height: '120px', width: '120px', borderRadius: '10rem' }} src='/blog-post02.jpg' />
                                <div style={{paddingLeft: '1.5rem'}}>
                                    <Text style={{fontSize: '.875rem'}}>““I would highly recommend it for busy parents who need ideas and shortcuts to keep the little ones occupied and happy.””</Text>
                                    <Text style={{textAlign: 'right'}}>Miles</Text>
                                </div>
                            </div>
                        </Column>
                        <Column>
                            <div style={{display: 'flex'}}>
                                <img style={{ display: 'block', height: '120px', width: '120px', borderRadius: '10rem' }} src='/blog-post02.jpg' />
                                <div style={{paddingLeft: '1.5rem'}}>
                                    <Text style={{fontSize: '.875rem'}}>““I would highly recommend it for busy parents who need ideas and shortcuts to keep the little ones occupied and happy.””</Text>
                                    <Text style={{textAlign: 'right'}}>Miles</Text>
                                </div>
                            </div>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

            <PageContainer style={{backgroundColor: '#fff', textAlign: 'center'}}>
                <InnerContainer style={{maxWidth: '600px'}}>
                    <Row>
                        <Column>
                            <Title style={{}}>Get The Newsletter</Title>
                            <Text style={{}}>Keep the kids happy with entertaining and educational ideas</Text>
                            <NewsletterBox style={{display: 'flex'}}>
                                <Input type={'text'} placeholder="Enter your email"></Input>
                                <Button content="" type="submit" style={{borderRadius: '.375rem', marginLeft: '1rem'}}>Subscribe</Button>
                            </NewsletterBox>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

        </>
    );
}

export default Newsletter
