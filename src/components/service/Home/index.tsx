import React from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";
import dynamic from 'next/dynamic';

import Button from 'components/users/Auth/Button';

import OurServices from './OurServices'
import Questions from './Questions'
import Accordion from './Accordion/Accordion';

// import Company from '../About/Company'

const ActivityCard = dynamic(() => import('./ActivityCard'), {
  ssr: false,
});

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
  const accordionItems = [
    {
      title: 'Accordion Item #1',
      content: (
        <div>
          <strong>This is the first item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Accordion Item #2',
      content: (
        <div>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, but shown when title is clicked. It will also be
          hidden if the title is clicked again or when another item is clicked.
          You can pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Accordion Item #3',
      content: (
        <div>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
  ];
    const router = useRouter()
    return (
      <>

      
        <Hero>
          {/* <Image
            src="/twokids.jpg"
            alt="education activity card image"
            width={"0"}
            height="0"
            className="banner-bg"
          /> */}

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
         <Accordion items={accordionItems} />
        <Questions />
       
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
