import React from 'react'
// import Link from 'next/link';
import Image from 'next/image';
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

// import Button from 'components/Auth/Button';

import { QuoteIcon } from '../../../../public/assets/icons/QuoteIcon';


import { Column, InnerBanner, InnerContainer, Row, Text, Title, PageContainer, Quote } from 'styles/common.styles';
import Markdown from 'markdown-to-jsx';


type Attributes = {
  data: {
        fifthHeader: string;
        firstHeader: string;
        fourthHeader: string;
        lastHeader: string;
        secondHeader: string;
        sectionEight: string;
        sectionFive: string;
        sectionFour: string;
        sectionNine: string;
        sectionOne: string;
        sectionSeven: string;
        sectionSix: string;
        sectionThree: string;
        sectionTwo: string;
        thirdHeader: string;
        firstQuote: string;
        firstQuoteAuthor: string;
        secondQuote: string;
        secondQuoteAuthor: string
  }
};

const AboutUs = ({data}: Attributes) => {
    // console.log(data.sectionOne)
    return (
        <>
            <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
                <InnerContainer>
                    <Title style={{ marginBottom: '3rem' }}>{data.firstHeader}</Title>
                    <Row style={{ textAlign: 'left', alignItems: 'center', marginBottom: '3rem' }}>
                        <Column style={{ textAlign: 'left', minWidth: '55%' }}>
                            <Markdown>{data.sectionOne}</Markdown>
                        </Column>
                        <Column style={{ textAlign: 'center' }} >
                            <Image src='/homepage/image1.jpg' alt='' width={410} height={450} />
                        </Column>
                    </Row>

                    <Row style={{ textAlign: 'left', alignItems: 'center', flexDirection: 'row-reverse' }}>
                        <Column style={{ textAlign: 'left', minWidth: '55%' }}>
                            <Markdown>{data.sectionTwo}</Markdown>
                        </Column>
                        <Column style={{ textAlign: 'center' }} >
                            <Image src='/homepage/image2.jpg' alt='' width={410} height={470} />
                        </Column>
                    </Row>
                </InnerContainer>
            </InnerBanner>

            {/* <PageContainer style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <video className='video-wrapper' width='260' height='260' autoPlay loop>
        <source src="/Deliver-transcode.mp4" type="video/mp4" />
        <source src="/Deliver-transcode.ogg" type="video/ogg" />
      </video>
      <InnerContainer>
        <Title style={{ textAlign: 'center', marginBottom: '0', color: '#fff' }}>Our mission is helping parents unlock a world of possibilities to fulfil their children s potential</Title>
      </InnerContainer>
    </PageContainer> */}

            <PageContainer>
                <InnerContainer style={{ maxWidth: '1000px' }}>
                    <Title style={{ textAlign: 'center', marginBottom: '2.5rem' }}>{data.secondHeader}</Title>
                    <Row style={{ alignItems: 'center', margin: '1rem 0' }}>
                        <Column>
                            <Image className='rounded' height={248} width={440} src='/homepage/image3.jpg' alt="" />
                        </Column>
                        <Column>
                            {/* <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title> */}
                            <Text>{data?.sectionThree}</Text>
                        </Column>
                    </Row>
                    <Row style={{ alignItems: 'center', flexDirection: 'row-reverse', margin: '1rem 0' }}>
                        <Column>
                            <Image className='rounded' height={248} width={440} src='/homepage/image4.jpg' alt="" />
                        </Column>
                        <Column>
                            {/* <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title> */}
                            <Text>{data?.sectionFour}</Text>
                        </Column>
                    </Row>
                    <Row style={{ alignItems: 'center', margin: '1rem 0' }}>
                        <Column>
                            <Image className='rounded' height={248} width={440} src='/homepage/image5.jpg' alt="" />
                        </Column>
                        <Column>
                            {/* <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title> */}
                            <Text>{data?.sectionFive}</Text>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

            <PageContainer style={{ backgroundColor: 'red', backgroundImage: 'url(/homepage/breakimage1.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', }}>
                <InnerContainer style={{ textAlign: 'center', maxWidth: '1000px' }}>
                    <Quote><QuoteIcon /></Quote>
                    <Title style={{ textAlign: 'center', color: '#fff' }}>{data?.firstQuote}</Title>
                    <Text style={{ color: '#fff' }}>{data?.firstQuoteAuthor}</Text>
                </InnerContainer>
            </PageContainer>

            <PageContainer>
                <InnerContainer style={{ maxWidth: '1000px' }}>
                    <Title style={{}}>{data.thirdHeader}</Title>
                    <Markdown>{data?.sectionSix}</Markdown>
                    
                    {/* <Text>The vast majority have attempted eventually to be somebody else. Once in a while, this is because we like the change, and at times this is because we feel like we need to change to fit in.</Text>
                    <Text>When I was a young man, I cherished playing football. While I was a respectable focal protector and traditional back, since I was an area of strength for genuinely having a decent speed and a fierce shot, I wound up as a striker sometimes, as well.</Text>
                    <Text>However, my strategy and senses let me down while attempting to be a decent striker. I’m more of an issue solver than someone who loves to score. I love to direct a group from the back, and I flourish under tension when I can decide. What’s more, I tend to lead and care for others, which are great resources for safeguarding.</Text>
                    <Text>A striker, in any case, needs different characteristics. The best strikers show restraint, zeroed in on individual achievement, and perhaps somewhat prideful on occasion.</Text> */}
                </InnerContainer>
            </PageContainer>

            <PageContainer style={{ backgroundColor: 'red', backgroundImage: 'url(/homepage/breakimage.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                <InnerContainer style={{ textAlign: 'center', maxWidth: '1000px' }}>
                    <Quote><QuoteIcon /></Quote>
                    <Title style={{ textAlign: 'center', color: '#fff' }}>{data?.secondQuote}</Title>
                    <Text style={{ color: '#fff' }}>{data?.secondQuoteAuthor}</Text>
                </InnerContainer>
            </PageContainer>

            <PageContainer>
                <InnerContainer style={{ maxWidth: '1000px' }}>
                    <Title style={{}}>{data.fourthHeader}</Title>
                    <Row>
                        <Column>
                            <Markdown>{data?.sectionSeven}</Markdown>
                        </Column>
                        <Column>
                            <Markdown>{data?.sectionEight}</Markdown>                            
                        </Column>
                    </Row>


                </InnerContainer>
            </PageContainer>

            <PageContainer style={{ backgroundColor: '#f3f3f3' }}>
                <InnerContainer style={{ maxWidth: '1000px' }}>
                    <Title style={{ textAlign: 'center', marginBottom: '2.5rem' }}>{data.fifthHeader}</Title>
                    <Row style={{ alignItems: 'center', margin: '1rem 0' }}>
                        <Column>
                            <Image className='rounded' height={720} width={534} src='/homepage/image6.jpg' alt=""/>
                        </Column>
                        <Column>
                            <Title style={{ fontSize: '1.75rem' }}>{data.lastHeader}</Title>
                            <Markdown>{data?.sectionNine}</Markdown>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

        </>
    )
}

export default AboutUs
