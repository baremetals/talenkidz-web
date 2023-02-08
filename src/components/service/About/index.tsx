import React from 'react'
// import Link from 'next/link';
import Image from 'next/image';
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

// import Button from 'components/Auth/Button';
import PageTitle from 'components/widgets/PageTitle';
import { QuoteIcon } from '../../../../public/assets/icons/QuoteIcon';

import { AboutPage, GameType, ImgBox, SectionBlock, KeepScrolling, ShapeImageBlock, ShapeImage } from './styles';

import {
  Column,
  InnerBanner,
  InnerContainer,
  Row,
  Text,
  Title,
  PageContainer,
  Quote,
  H2Title,
} from 'styles/common.styles';
import Markdown from 'markdown-to-jsx';
import { Section } from '../Home/DoubtSection/styles';


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
            {/* <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
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
            </InnerBanner> */}

            {/* <PageContainer style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
      <video className='video-wrapper' width='260' height='260' autoPlay loop>
        <source src="/Deliver-transcode.mp4" type="video/mp4" />
        <source src="/Deliver-transcode.ogg" type="video/ogg" />
      </video>
      <InnerContainer>
        <H2Title style={{ textAlign: 'center', marginBottom: '0', color: '#fff' }}>Our mission is helping parents unlock a world of possibilities to fulfil their children s potential</H2Title>
      </InnerContainer>
    </PageContainer> */}
            
            <PageContainer>
                <AboutPage>
                    <InnerContainer style={{ maxWidth: '1130px' }}>
                        <PageTitle className="pageTitle aboutpage" text={[<span key={"TALENTKIDS"}>What is the TALENTKIDS?</span>,]} />

                        <Row className='gametypeBlock'>
                            <Column>
                                <GameType>
                                    <ImgBox className='gameImg'>
                                       <Image width={259} height={259}  src='/assets/svgs/game-one.svg' alt="" />
                                    </ImgBox>
                                    <p>TALENTKIDS is a game-changing solution for the future generation </p>
                               </GameType>
                            </Column>
                            <Column>
                                <GameType>
                                     <ImgBox className='gameImg'>
                                        <Image width={259} height={259} src='/assets/svgs/game-two.svg' alt="" />
                                    </ImgBox>
                                    <p>while reshaping the current generation’s mindset, responsible for shaping their children’s future</p>
                               </GameType>
                            </Column>
                            <Column>
                                <GameType>
                                    <ImgBox className='gameImg'>
                                        <Image width={198} height={224}  src='/assets/images/game-three.png' alt="" />
                                     </ImgBox>
                                    <p>ultimately contributing to a better future tomorrow</p>
                               </GameType>
                            </Column>
                        </Row>
                        
                        <SectionBlock className='TalentedKidBlock'>
                            <Row className='pageHeader'>
                                <PageTitle className="pageTitle" text={["TALENTKIDS is what", <span key={"TALENTKIDS"}>you are looking for,</span>, "if"]} />
                            </Row>  
                            <Row className='row'>
                                <Column>
                                    <div className='TalentedKidInfo'>
                                        <p style={{ maxWidth: '400px' }}>You are a parent looking for your child’s future career prospects</p>
                                    </div>
                                </Column>
                                <Column>
                                     <div className='TalentedKidInfo'>
                                        <p>You are someone who believes in a child pursuing their dream and changing the redundant narrative of not following a “creative career” like sports, music, arts, entertainment, and possibly anything that revolves around creativity</p>
                                     </div>
                                </Column>
                                </Row>
                        </SectionBlock>

                        <SectionBlock className='WhyCreativeCareer'> 
                              <ImgBox className='WhyCreativeCareerIcon'>
                                 <Image width={275} height={275}  src='/assets/svgs/creativeCareer.svg' alt="" />
                              </ImgBox>
                            <Row>
                                <Column>
                                    <PageTitle className="pageTitle" text={["Why a creative career?"]} />
                                    <p>A little insight into why creative careers are meaningful revolves precisely around the fact that creativity can take multiple forms and is highly prised in the industry. With problem-solving solutions, creative individuals excel at what they do and have much more exposure, with very little acceptance initially before they even start.</p>
                                </Column>
                                <Column>
                                    <p>In today’s world, if someone has to pursue a creative career, they must prove themselves first. However, things are not the same for people not opting for 
creative careers and continuing with academic-based jobs. They don’t need 
to prove themselves to get the job. 
Instead, they get the job first and prove 
                                        themselves later for promotional purposes</p>
                                    <p>But you do not need to worry!</p>
                                    <p className='blue'>At TALENTKIDS, we ensure what 
                                        is best for your child.</p>
                                    <p className='blue'>Our platform is a safe spot to look for guidance at all times. WELCOME TO TALENTKIDS.</p>
                                </Column>
                            </Row>
                        </SectionBlock>

                         
                        <SectionBlock className='AllStart'>
                            <Row className='pageHeader'>
                                <PageTitle className="pageTitle" text={["How did it all", <span key={"TALENTKIDS"}>start?</span>]} />
                            </Row>
                            <Row>
                                <Column>
                                    <div className='inYears'>
                                        <div className=''>in <span>birth of the company</span></div>
                                        <div className=''>2015 </div>
                                    </div>
                                   <KeepScrolling >
                                        <label>Keep scrolling</label> 
                                        <ImgBox className='downArrow'>
                                            <Image width={47} height={47} src='/assets/svgs/downArrow.svg' alt="" />
                                        </ImgBox>
                                   </KeepScrolling>
                                </Column>
                                <Column>
                                 <div className='AllStarInfo'>
                                     <p>through our research, it was evident that parents are unsure which clubs or opportunities to look for while enabling their kids to step into creative careers.</p>
                                    </div>
                                      <div className='AllStarInfo'>
                                     <p>it leads to a gap where parents cannot understand what to do and where to begin. To bridge this particular gap, TALENTKIDS has developed a viable solution where love and effort are involved and ultimately guarantees productive outcomes.</p>
                                    </div>
                                      <div className='AllStarInfo'>
                                     <p>our company’s CEO is proud to state that he is a football coach and a great one the world has ever seen. Explore our About Us page and find out more about us.</p>
                                  </div>
                                </Column>
                            </Row>
                        </SectionBlock>


                        <SectionBlock className='TestimonialBlock'>
                            <Row className='row'>
                                <Column className='column-7'>
                                    <div className='TestimonialInfo'>
                                        <Image width={82} height={73} src='/assets/svgs/quotes.svg' alt="" />
                                        <p>Behind every young child who believes in himself is a parent who believed first.</p>
                                        <label>Matthew Jacobson</label>
                                    </div>
                                </Column>
                                <Column className='column-5'>
                                    <ShapeImageBlock>
                                        <ShapeImage>
                                            <Image
                                            src="/assets/images/image92.jpg"
                                            alt="question"
                                            width={400}
                                            height={400}
                                                />
                                        </ShapeImage>
                                    </ShapeImageBlock>
                                </Column>
                            </Row>

                            <Row className='TestimonialInfoRow'>
                                <Column className='column-5'>
                                     <ShapeImageBlock>
                                        <ShapeImage>
                                            <Image
                                            src="/assets/images/image90.png"
                                            alt="question"
                                            width={400}
                                            height={400}
                                                />
                                        </ShapeImage>
                                    </ShapeImageBlock>
                                </Column>
                                <Column className='column-7'>
                                    <div className='TestimonialText'>
                                        <p>The vast majority have attempted eventually to be somebody else. Once in a while, this is because we like the change, and at times this is because we feel like we need to change to fit in.</p>
                                        
                                        <p> When I was a young man, I cherished playing football. While I was a respectable focal protector and traditional back, since I was an area of strength for genuinely having a decent speed and a fierce shot, I wound up as a striker sometimes, as well.</p>
                                       

                                        <p>However, my strategy and senses let me down while attempting to be a decent striker. I’m more of an issue solver than someone who loves to score. I love to direct a group from the back, and I flourish under tension when I can decide. 
                                        What’s more, I tend to lead and care for others, which 
                                        are great resources for safeguarding.</p>

                                        <p>A striker, in any case, needs different characteristics. The best strikers show restraint, zeroed in on individual achievement, and perhaps somewhat prideful on occasion.</p>
                                    </div>
                                </Column>
                            </Row>

                              <Row className='row'>
                                <Column className='column-7'>
                                    <div className='TestimonialInfo'>
                                        <Image width={82} height={73} src='/assets/svgs/quotes.svg' alt="" />
                                        <p>Don’t focus on what she can’t do. Focus on what she can do. Like a boss.</p>
                                        <label>Lisa Thornbury</label>
                                    </div>
                                </Column>
                                <Column className='column-5'>
                                    <ShapeImageBlock>
                                        <ShapeImage>
                                            <Image
                                            src="/assets/images/image91.png"
                                            alt="question"
                                            width={400}
                                            height={400}
                                                />
                                        </ShapeImage>
                                    </ShapeImageBlock>
                                </Column>
                            </Row>
                        </SectionBlock>

                        {/*  */}
                        <SectionBlock className='CapacityBlock'>
                            <ImgBox className='CapacityIcon'>
                                 <Image width={389} height={382}  src='/assets/svgs/trophy.svg' alt="" />
                            </ImgBox>
                            <Row>
                                <Column>
                                  <h2>Engaging individuals to arrive at their maximum capacity</h2>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <p>We began TALENTKIDS as an opportunity for caring parents to make wise decisions for their kids. We centre around your child’s capacity, believing they should do what suits them best. </p>
                                </Column>
                                <Column>
                                     <p>We’ll enquire about their abilities, what drives them to succeed, and which capabilities you think will help your child help in leading to a great future.</p>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <p className='ColorBlue'>TALENKIDS utilises a survey that gives a robotised report, understanding abilities, correspondence, and battles. It’s a demonstrated technique to see regions
you should deal with and create. It likewise shares where your normal abilities lie so you can utilise those abilities for your potential benefit.</p>
                                </Column>
                            </Row>
                        </SectionBlock>

                        {/*  */}

                        <SectionBlock className='TalentKidsApproach'>
                           <Row className='pageHeader'>
                                <PageTitle className="pageTitle" text={["At TALENTKIDS, we work following the ", <span key={"TALENTKIDS"}>three-step approach</span>]} />
                            </Row>
                            <Row>
                                <Column className='column-6'>
                                    <div className='ApproachStep'>
                                        <span>1</span>
                                        <p>Our team responds to all queries and guides them accordingly</p>
                                    </div>
                                </Column>
                                <Column className='column-6'>
                                     <div className='ApproachStep'>
                                        <span>2</span>
                                        <p>We ensure to connect parents with agents, coaches, clubs, etc.</p>
                                    </div>
                                </Column>
                            </Row>
                             <Row className='LastStep'>
                                <Column>
                                     <div className='ApproachStep'>
                                        <span>3</span>
                                        <p>Enabling your child to participate in the TALENTKIDS community providing excessive opportunities for students to expand their circle for a progressive future.</p>
                                    </div>
                                </Column>
                            </Row>
                        </SectionBlock>
                        

                        


                        
                    </InnerContainer>
                </AboutPage>
            </PageContainer>

            <PageContainer>
                <InnerContainer style={{ maxWidth: '1130px' }}>

                    

                    <H2Title style={{ textAlign: 'center', marginBottom: '2.5rem' }}>{data.secondHeader}</H2Title>
                    <Row style={{ alignItems: 'center', margin: '1rem 0' }}>
                        <Column>
                            <Image className='rounded' height={248} width={440} src='/homepage/image3.jpg' alt="" />
                        </Column>
                        <Column>
                            {/* <H2Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</H2Title> */}
                            <Text>{data?.sectionThree}</Text>
                        </Column>
                    </Row>
                    <Row style={{ alignItems: 'center', flexDirection: 'row-reverse', margin: '1rem 0' }}>
                        <Column>
                            <Image className='rounded' height={248} width={440} src='/homepage/image4.jpg' alt="" />
                        </Column>
                        <Column>
                            {/* <H2Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</H2Title> */}
                            <Text>{data?.sectionFour}</Text>
                        </Column>
                    </Row>
                    <Row style={{ alignItems: 'center', margin: '1rem 0' }}>
                        <Column>
                            <Image className='rounded' height={248} width={440} src='/homepage/image5.jpg' alt="" />
                        </Column>
                        <Column>
                            {/* <H2Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</H2Title> */}
                            <Text>{data?.sectionFive}</Text>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

            <PageContainer style={{ backgroundColor: 'red', backgroundImage: 'url(/homepage/breakimage1.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', }}>
                <InnerContainer style={{ textAlign: 'center', maxWidth: '1000px' }}>
                    <Quote><QuoteIcon /></Quote>
                    <H2Title style={{ textAlign: 'center', color: '#fff' }}>{data?.firstQuote}</H2Title>
                    <Text style={{ color: '#fff' }}>{data?.firstQuoteAuthor}</Text>
                </InnerContainer>
            </PageContainer>

            <PageContainer>
                <InnerContainer style={{ maxWidth: '1000px' }}>
                    <H2Title style={{}}>{data.thirdHeader}</H2Title>
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
                    <H2Title style={{ textAlign: 'center', color: '#fff' }}>{data?.secondQuote}</H2Title>
                    <Text style={{ color: '#fff' }}>{data?.secondQuoteAuthor}</Text>
                </InnerContainer>
            </PageContainer>

            <PageContainer>
                <InnerContainer style={{ maxWidth: '1000px' }}>
                    <H2Title style={{}}>{data.fourthHeader}</H2Title>
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
                    <H2Title style={{ textAlign: 'center', marginBottom: '2.5rem' }}>{data.fifthHeader}</H2Title>
                    <Row style={{ alignItems: 'center', margin: '1rem 0' }}>
                        <Column>
                            <Image className='rounded' height={720} width={534} src='/homepage/image6.jpg' alt=""/>
                        </Column>
                        <Column>
                            <H2Title style={{ fontSize: '1.75rem' }}>{data.lastHeader}</H2Title>
                            <Markdown>{data?.sectionNine}</Markdown>
                        </Column>
                    </Row>
                </InnerContainer>
            </PageContainer>

        </>
    )
}

export default AboutUs
