import React from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Link from 'next/link';
import { Column, InnerBanner, InnerContainer, Row, Text, Title, PageContainer, Quote } from 'styles/common.styles';
import { QuoteIcon } from '../../../public/assets/icons/QuoteIcon';
import Image from 'next/image';

const AboutUs = () => {
  return <>
    <NavBar />
    {/* <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>The Kidadl Solution</Title> */}
    <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
      <InnerContainer>
        <Title style={{marginBottom: '3rem'}}>Changing the Narrative</Title>
        <Row style={{ textAlign: 'left', alignItems: 'center', marginBottom: '3rem'}}>
          <Column style={{ textAlign: 'left', minWidth: '55%'}}>
            <Text>Are you a parent looking for your child’s future career prospects? Are you someone who believes in a child pursuing their dream and changing the redundant narrative of not following a “creative career” like sports, music, arts, entertainment, and possibly anything that revolves around creativity?</Text>
            <Text>That’s it! TALENKIDZ is what you are looking for. </Text>
            <Text>TALENKIDZ is a game-changing solution for the future generation while reshaping the current generation’s mindset, responsible for shaping their children’s future, ultimately contributing to a better future tomorrow. </Text>
            <Text>A little insight into why creative careers are meaningful revolves precisely around the fact that creativity can take multiple forms and is highly prised in the industry. With problem-solving solutions, creative individuals excel at what they do and have much more exposure, with very little acceptance initially before they even start. </Text>
          </Column>
          <Column style={{ textAlign: 'center' }} >
            <Image src='/about-us.png' alt='' width={310} height={350} />
          </Column>
        </Row>

        <Row style={{ textAlign: 'left', alignItems: 'center', flexDirection: 'row-reverse'}}>
          <Column style={{ textAlign: 'left', minWidth: '55%'}}>
            
            <Text>In today’s world, if someone has to pursue a creative career, they must prove themselves first. However, things are not the same for people not opting for creative careers and continuing with academic-based jobs. They don’t need to prove themselves to get the job. Instead, they get the job first and prove themselves later for promotional purposes.</Text>
            <Text>But you do not need to worry!</Text>
            <Text>At TALENKIDZ, we ensure what is best for your child. </Text>
            <Text>Our platform is a safe spot to look for guidance at all times. WELCOME TO TALENKIDZ.</Text>
          </Column>
          <Column style={{ textAlign: 'center' }} >
            <Image src='/about-us.png' alt='' width={310} height={350} />
          </Column>
        </Row>
      </InnerContainer>
    </InnerBanner>

    <PageContainer style={{paddingTop: '10rem', paddingBottom: '10rem'}}>
      <video className='video-wrapper' width='260' height='260' autoPlay loop>
        <source src="/Deliver-transcode.mp4" type="video/mp4" />
        <source src="/Deliver-transcode.ogg" type="video/ogg"/>
      </video>
      <InnerContainer>
        <Title style={{ textAlign: 'center', marginBottom: '0', color: '#fff' }}>Our mission is helping parents unlock a world of possibilities to fulfil their children s potential</Title>
      </InnerContainer>
    </PageContainer>

    <PageContainer>
      <InnerContainer style={{maxWidth: '1000px'}}>
        <Title style={{textAlign: 'center', marginBottom: '2.5rem'}}>How Did It All Start?</Title>
        <Row style={{alignItems: 'center', margin: '1rem 0'}}>
          <Column>
            <Image className='rounded' height={238} width={444} src='/blog-post01.jpg' />
          </Column>
          <Column>
            {/* <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title> */}
            <Text>A survey gave birth to this company in 2015; through our research, it was evident that parents are unsure which clubs or opportunities to look for while enabling their kids to step into creative careers. </Text>
          </Column>
        </Row>
        <Row style={{alignItems: 'center', flexDirection: 'row-reverse', margin: '1rem 0'}}>
          <Column>
            <Image className='rounded' height={238} width={444} src='/blog-post02.jpg' />
          </Column>
          <Column>
            {/* <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title> */}
            <Text>It leads to a gap where parents cannot understand what to do and where to begin. To bridge this particular gap, TALENKIDZ has developed a viable solution where love and effort are involved and ultimately guarantees productive outcomes. </Text>
          </Column>
        </Row>
        <Row style={{alignItems: 'center', margin: '1rem 0'}}>
          <Column>
            <Image className='rounded' height={238} width={444} src='/blog-post03.jpg' />
          </Column>
          <Column>
            {/* <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title> */}
            <Text>Our company’s CEO is proud to state that he is a football coach and a great one the world has ever seen. Explore our About Us page and find out more about us. Keep scrolling!</Text>
          </Column>
        </Row>
      </InnerContainer>
    </PageContainer>

    <PageContainer style={{backgroundColor: 'red', backgroundImage: 'url(/baby-edu.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover',}}>
      <InnerContainer style={{textAlign: 'center', maxWidth: '1000px'}}>
        <Quote><QuoteIcon /></Quote>
        <Title style={{ textAlign: 'center', color: '#fff' }}>Tell me and I forget, teach me and I may remember</Title>
        <Text style={{color: '#fff'}}>Benjamin Franklin</Text>
      </InnerContainer>
    </PageContainer>

    {/* <PageContainer style={{backgroundImage: 'url(/blackboard-bg.webp)', backgroundSize: 'cover', color: 'white'}}>
      <InnerContainer style={{textAlign: 'center', maxWidth: '600px', marginBottom: '1rem'}}>
        <Title>Intelligence</Title>
        <Text style={{color: '#fff'}}>All our content is based on the eight multiple intelligences that Howard Gardner describes in his book</Text>
      </InnerContainer>
      <InnerContainer style={{textAlign: 'center', maxWidth: '900px'}}>
        <table style={{width: '100%'}} className="table-style">
          <thead>
            <tr>
              <th style={{width: '45%'}} colSpan="2">Intelligences</th>
              <th style={{width: '10%'}}>=</th>
              <th style={{width: '30%'}}>Family interests</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: 'left'}}>
                <Image height={70} width={70} className="circle userprofile" src='/blog-post04.jpg' />
              </td>
              <td style={{textAlign: 'left'}}>Visual-Spatial</td>
              <td>=</td>
              <td style={{textAlign: 'right'}}>Arts & Crafts</td>
            </tr>
            <tr>
              <td style={{textAlign: 'left'}}>
                <Image height={70} width={70} className="circle userprofile" src='/blog-post04.jpg' />
              </td>
              <td style={{textAlign: 'left'}}>Visual-Spatial</td>
              <td>=</td>
              <td style={{textAlign: 'right'}}>Arts & Crafts</td>
            </tr>
            <tr>
              <td style={{textAlign: 'left'}}>
                <Image height={70} width={70} className="circle userprofile" src='/blog-post04.jpg' />
              </td>
              <td style={{textAlign: 'left'}}>Visual-Spatial</td>
              <td>=</td>
              <td style={{textAlign: 'right'}}>Arts & Crafts</td>
            </tr>
          </tbody>
        </table>
      </InnerContainer>
    </PageContainer> */}

    <PageContainer>
      <InnerContainer style={{maxWidth: '1000px'}}>
        <Title style={{}}>Embracing Natural Talent</Title>
        <Text>The vast majority have attempted eventually to be somebody else. Once in a while, this is because we like the change, and at times this is because we feel like we need to change to fit in.</Text>
        <Text>When I was a young man, I cherished playing football. While I was a respectable focal protector and traditional back, since I was an area of strength for genuinely having a decent speed and a fierce shot, I wound up as a striker sometimes, as well.</Text>
        <Text>However, my strategy and senses let me down while attempting to be a decent striker. I’m more of an issue solver than someone who loves to score. I love to direct a group from the back, and I flourish under tension when I can decide. What’s more, I tend to lead and care for others, which are great resources for safeguarding.</Text>
        <Text>A striker, in any case, needs different characteristics. The best strikers show restraint, zeroed in on individual achievement, and perhaps somewhat prideful on occasion.</Text>
      </InnerContainer>
    </PageContainer>

    <PageContainer style={{backgroundColor: 'red', backgroundImage: 'url(/baby-edu.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
      <InnerContainer style={{textAlign: 'center', maxWidth: '1000px'}}>
        <Quote><QuoteIcon /></Quote>
        <Title style={{ textAlign: 'center', color: '#fff' }}>Tell me and I forget, teach me and I may remember, involve me and I learn</Title>
        <Text style={{color: '#fff'}}>Benjamin Franklin</Text>
      </InnerContainer>
    </PageContainer>

    <PageContainer>
      <InnerContainer style={{maxWidth: '1000px'}}>
        <Title style={{}}>Engaging Individuals to Arrive at Their Maximum capacity</Title>
        <Row>
          <Column>
            <Text>Sound recognisable? It’s a typical situation at many organisations, so we maintain that we should do things correctly at TALENKIDZ by engaging our clients and kin to reach their maximum capacity.</Text>
            <Text>To do this, you need to know your assets. Is it true or not that you are energised by the craftsmanship and have the stuff to be a magnificent worth adding designer? Perhaps your assets lie in client care. Or, on the other hand, maybe your ability is centred around administrative obligations and assisting workers with tackling issues.</Text>
            <Text>It’s vital to understand your regular abilities and truly make you “tick.” It’s the underpinning of your self-improvement vocation, even. You must ensure your establishment is solid, and you can construct the remainder of your profession on it. When fabricating a house, you start with the establishment, not the rooftop.</Text>
          </Column>
          <Column>
            <Text>This is precisely how you need to develop the perspective while thinking about your child and understanding that your child will have to figure this out if you don’t figure it out for them today. </Text>
            <Text>Therefore, we began TALENKIDZ as an opportunity for parents like you to make wise decisions for your kids. We centre around your child’s capacity, believing they should do what suits them best. So we’ll enquire about their abilities, what drives them to succeed, and which capabilities you think will help your child help in leading to a great future. </Text>
            <Text>TALENKIDZ utilises a survey that gives a robotised report, understanding abilities, correspondence, and battles. It’s a demonstrated technique to see regions you should deal with and create. It likewise shares where your normal abilities lie so you can utilise those abilities for your potential benefit.</Text>
            <Text>Perceiving skills and abilities truly drives a group, and it can interface and engage everybody engaged in the excursion.</Text>
          </Column>
        </Row>
        
        
      </InnerContainer>
    </PageContainer>

    <PageContainer style={{backgroundColor: '#f3f3f3'}}>
      <InnerContainer style={{maxWidth: '1000px'}}>
        <Title style={{textAlign: 'center', marginBottom: '2.5rem'}}>How We Work</Title>
        <Row style={{alignItems: 'center', margin: '1rem 0'}}>
          <Column>
            <Image className='rounded' height={620} width={534} src='/detail-image.png' />
          </Column>
          <Column>
            <Title style={{fontSize: '1.75rem'}}>At TalenKIDZ, we work following the three-step approach</Title>
            <Text>A survey gave birth to this company in 2015; through our research, it was evident that parents are unsure which clubs or opportunities to look for while enabling their kids to step into creative careers. </Text>
            <Text>Our team responds to all queries and guides them accordingly. We ensure to connect parents with agents, coaches, clubs, etc.</Text>
            <Text>Enabling your child to participate in the TALENKIDZ community providing excessive opportunities for students to expand their circle for a progressive future. </Text>
          </Column>
        </Row>
      </InnerContainer>
    </PageContainer>


    <Footer />
  </>
};

export default AboutUs;
