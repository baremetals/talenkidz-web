import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import Link from 'next/link';
import React from 'react';
import { Column, InnerBanner, InnerContainer, Row, Text, Title, PageContainer, Quote } from 'styles/common.styles';
import { QuoteIcon } from '../../../public/assets/icons/QuoteIcon';
import Image from 'next/image';

const AboutUs = () => {
  return <>
    <NavBar />
    <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
      <InnerContainer>
        <Row style={{ textAlign: 'left', alignItems: 'center'}}>
          <Column style={{ textAlign: 'left'}}>
            <Title>We Are Kidadl</Title>
            <Title style={{fontSize: '1.5rem', marginBottom: '.75rem'}}>The Problem We Are Solving</Title>
            <Text>As time-poor, stressed parents, we are all suffering from information overwhelm online. Finding the right information to help educate and entertain our children is hard work and time consuming.</Text>
            <Title style={{fontSize: '1.5rem', marginBottom: '.75rem', marginTop: '1.5rem' }}>The Kidadl Solution</Title>
            <Text>Kidadl was founded as the digital home of family edutainment, helping parents educate and entertain their kids with trusted, personalized, curated content designed for families the world over.</Text>
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
        <Title style={{textAlign: 'center', marginBottom: '2.5rem'}}>How We Deliver To You</Title>
        <Row style={{alignItems: 'center', margin: '1rem 0'}}>
          <Column>
            <Image className='rounded' height={238} width={444} src='/blog-post01.jpg' />
          </Column>
          <Column>
            <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title>
            <Text>As time-poor, stressed parents, we are all suffering from information overwhelm online. Finding the right information to help educate and entertain our children is hard work and time consuming.</Text>
          </Column>
        </Row>
        <Row style={{alignItems: 'center', flexDirection: 'row-reverse', margin: '1rem 0'}}>
          <Column>
            <Image className='rounded' height={238} width={444} src='/blog-post02.jpg' />
          </Column>
          <Column>
            <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title>
            <Text>As time-poor, stressed parents, we are all suffering from information overwhelm online. Finding the right information to help educate and entertain our children is hard work and time consuming.</Text>
          </Column>
        </Row>
        <Row style={{alignItems: 'center', margin: '1rem 0'}}>
          <Column>
            <Image className='rounded' height={238} width={444} src='/blog-post03.jpg' />
          </Column>
          <Column>
            <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title>
            <Text>As time-poor, stressed parents, we are all suffering from information overwhelm online. Finding the right information to help educate and entertain our children is hard work and time consuming.</Text>
          </Column>
        </Row>
        <Row style={{alignItems: 'center', flexDirection: 'row-reverse', margin: '1rem 0'}}>
          <Column>
            <Image className='rounded' height={238} width={444} src='/blog-post04.jpg' />
          </Column>
          <Column>
            <Title style={{fontSize: '1.75rem'}}>The Problem We Are Solving</Title>
            <Text>As time-poor, stressed parents, we are all suffering from information overwhelm online. Finding the right information to help educate and entertain our children is hard work and time consuming.</Text>
          </Column>
        </Row>
      </InnerContainer>
    </PageContainer>

    <PageContainer style={{backgroundColor: 'red', backgroundImage: 'url(/baby-edu.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover',}}>
      <InnerContainer style={{textAlign: 'center', maxWidth: '1000px'}}>
        <Quote><QuoteIcon /></Quote>
        <Title style={{ textAlign: 'center', color: '#fff' }}>Tell me and I forget, teach me and I may remember, involve me and I learn</Title>
        <Text style={{color: '#fff'}}>Benjamin Franklin</Text>
      </InnerContainer>
    </PageContainer>

    <PageContainer style={{backgroundImage: 'url(/blackboard-bg.webp)', backgroundSize: 'cover', color: 'white'}}>
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
    </PageContainer>

    <PageContainer>
      <InnerContainer style={{textAlign: 'center', maxWidth: '700px'}}>
        <Title style={{}}>We Are Kidadl</Title>
        <Text><strong style={{display: 'block'}}>Our Founders : Parents Who Wanted Better</strong> Like you, we wanted curated personalised content that we could trust, based on our childrens ages and interests, and the location of our family. We all want to raise happy, inquisitive, engaged, confident and fulfilled children. Children who in turn will make the world a better place. That is the essence of why we chose to have children and build a family. So, Kidadl was born.</Text>
      </InnerContainer>
    </PageContainer>

    <PageContainer style={{backgroundColor: 'red', backgroundImage: 'url(/baby-edu.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
      <InnerContainer style={{textAlign: 'center', maxWidth: '1000px'}}>
        <Quote><QuoteIcon /></Quote>
        <Title style={{ textAlign: 'center', color: '#fff' }}>Tell me and I forget, teach me and I may remember, involve me and I learn</Title>
        <Text style={{color: '#fff'}}>Benjamin Franklin</Text>
      </InnerContainer>
    </PageContainer>
    <Footer />
  </>
};

export default AboutUs;
