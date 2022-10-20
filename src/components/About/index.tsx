import React from 'react'

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import Button from 'components/Auth/Button';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
// import OurServices from './OurServices'
import Company from '../About/Company'

import {
    PageContainer,
    InnerContainer,
    Hero,
    HeroContent,
    ImageContent,
    HeroTitle,
    HeroSubTitle,
    OurService,
    Heading,
    SubTitle,
    Title,
    Row,
    Column,
    Card,
    CardThumb,
    CardBody,
    CardImage,
    CardTitle,
    Image,

    OurCompany,
    OurCompanyThumb,
    Text,
    Listings,
    ListingsItem,
    ButtonOutLine,
    Classes,
    PostCard,
    PostCardThumb,
    PostCardSummary,
    PostCardTitle,
    PostCardText,

    Benefits,

} from "../../styles/common.styles";
import OurServices from 'components/Home/OurServices';

const AboutUs = () => {
  return (
      <><NavBar />
          <Hero style={{ backgroundImage: "url(/banner-bg.jpg)" }}>
              <InnerContainer>
                  <HeroContent>
                      <HeroSubTitle>Talent Kids</HeroSubTitle>
                      <HeroTitle>Do What You Love For A Lifetime</HeroTitle>
                  </HeroContent>
              </InnerContainer>
          </Hero>
          <OurServices />

          <Classes>
              <InnerContainer>
                  <Heading style={{ textAlign: "center" }}>
                      <SubTitle>On Going Events</SubTitle>
                      <Title >Take The Classes & Start <br /> Learning From Today</Title>
                  </Heading>
                  <Row>
                      <Column>
                          <PostCard>
                              <PostCardThumb>
                                  <Image src="/post-img.jpg" alt="" />
                              </PostCardThumb>
                              <PostCardSummary>
                                  <PostCardTitle>Practical Classes</PostCardTitle>
                                  <PostCardText>Interactively brand client center through is customized value good ideas.</PostCardText>
                              </PostCardSummary>
                          </PostCard>
                      </Column>
                      <Column>
                          <PostCard>
                              <PostCardThumb>
                                  <Image src="/post-img.jpg" alt="" />
                              </PostCardThumb>
                              <PostCardSummary>
                                  <PostCardTitle>Practical Classes</PostCardTitle>
                                  <PostCardText>Interactively brand client center through is customized value good ideas.</PostCardText>
                              </PostCardSummary>
                          </PostCard>
                      </Column>
                      <Column>
                          <PostCard>
                              <PostCardThumb>
                                  <Image src="/post-img.jpg" alt="" />
                              </PostCardThumb>
                              <PostCardSummary>
                                  <PostCardTitle>Practical Classes</PostCardTitle>
                                  <PostCardText>Interactively brand client center through is customized value good ideas.</PostCardText>
                              </PostCardSummary>
                          </PostCard>
                      </Column>
                  </Row>
              </InnerContainer>
          </Classes>

          {/* <ImageContent>
            <InnerContainer>
                <Heading>
                    <Title>We will make your website <br /> look more elegant and stylish! </Title>
                </Heading>
                <Row>
                    <Column>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                    </Column>
                    <Column>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Image src="/Mac.jpg" alt="" />
                    </Column>
                    <Column>
                        <Listings>
                            <ListingsItem>Lorem Ipsum is simply dummy text of the printing.</ListingsItem>
                            <ListingsItem>Lorem Ipsum is simply dummy text of the printing.</ListingsItem>
                            <ListingsItem>Lorem Ipsum is simply dummy text of the printing.</ListingsItem>
                            <ListingsItem>Lorem Ipsum is simply dummy text of the printing.</ListingsItem>
                            <ListingsItem>Lorem Ipsum is simply dummy text of the printing.</ListingsItem>
                            <ListingsItem>Lorem Ipsum is simply dummy text of the printing.</ListingsItem>
                        </Listings>
                    </Column>
                </Row>
            </InnerContainer>
        </ImageContent> */}

          <Benefits>
              <InnerContainer>
                  <Row>
                      <Column>
                          <Image src="/Benefits.jpg" alt="" />
                      </Column>
                      <Column className='column-7'>
                          <SubTitle>Service Benefits</SubTitle>
                          <Title style={{ marginBottom: "20px" }}>We Are Here To Bring Your Child Next To The Level</Title>
                          <Text>Monotonectally conceptualize economically sound value after accurate growth strategies. Quickly parallel task client-centric materials with worldwide technologies. Assertively re-engineer interoperable customer</Text>
                          <PostCardTitle>Full Care Of Your Child</PostCardTitle>
                          <Text>Proactively myocardinate high-quality quality vectors rather than collaborative best practices. Continually create go forward total linkage vis-a-vis wireless mindshare.</Text>
                          <PostCardTitle>Professional Teachers</PostCardTitle>
                          <Text>Proactively myocardinate high-quality quality vectors rather than collaborative best practices. Continually create go forward total linkage vis-a-vis wireless mindshare.</Text>
                      </Column>
                  </Row>
              </InnerContainer>
          </Benefits>

          <Footer /></>
  )
}

export default AboutUs
