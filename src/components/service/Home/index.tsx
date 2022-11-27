
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

import Button from 'components/users/Auth/Button';

import OurServices from './OurServices'
// import Company from '../About/Company'
import ActivityCard from './ActivityCard'

import {
    // PageContainer,
    InnerContainer,
    Hero,
    HeroContent,
    // ImageContent,
    HeroTitle,
    HeroSubTitle,
    // OurService,
    // Heading,
    // SubTitle,
    // Title,
    // Row,
    // Column,
    // Card,
    // CardThumb,
    // CardBody,
    // CardImage,
    // CardTitle,
    // Image,

    // OurCompany,
    // OurCompanyThumb,
    // Text,
    // Listings,
    // ListingsItem,
    // ButtonOutLine,
    // Classes,
    // PostCard,
    // PostCardThumb,
    // PostCardSummary,
    // PostCardTitle,
    // PostCardText,

    // Benefits,

} from "styles/common.styles";


const Home = () => {
    const router = useRouter()
    return (
      <>

      
        <Hero>
          <Image
            src="/yung-buck.jpg"
            alt="education activity card image"
            width={"0"}
            height="0"
          />

          <InnerContainer>
            <HeroContent>
              <HeroSubTitle style={{ color: 'white' }}>talentkids</HeroSubTitle>
              <HeroTitle style={{ color: 'white' }}>
                Do What You Love For A Lifetime
              </HeroTitle>
              <div onClick={() => router.push('/auth/register')}>
                <Button
                  bgColor="#3762e4"
                  content="Get Started"
                  type="button"
                  disabled={false}
                  loading={false}
                />
              </div>
            </HeroContent>
          </InnerContainer>
        </Hero>
        <OurServices />

        <ActivityCard />

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

        {/* <Benefits>
            <InnerContainer>
                <Row>
                    <Column>
                        <Image src="/Benefits.jpg" alt="" />
                    </Column>
                    <Column className='column-7'>
                        <SubTitle>Service Benefits</SubTitle>
                        <Title style={{marginBottom: "20px"}}>We Are Here To Bring Your Child Next To The Level</Title>
                        <Text>Monotonectally conceptualize economically sound value after accurate growth strategies. Quickly parallel task client-centric materials with worldwide technologies. Assertively re-engineer interoperable customer</Text>
                        <PostCardTitle>Full Care Of Your Child</PostCardTitle>
                        <Text>Proactively myocardinate high-quality quality vectors rather than collaborative best practices. Continually create go forward total linkage vis-a-vis wireless mindshare.</Text>
                        <PostCardTitle>Professional Teachers</PostCardTitle>
                        <Text>Proactively myocardinate high-quality quality vectors rather than collaborative best practices. Continually create go forward total linkage vis-a-vis wireless mindshare.</Text>
                    </Column>
                </Row>
            </InnerContainer>
        </Benefits> */}
      </>
    );
};

export default Home;
