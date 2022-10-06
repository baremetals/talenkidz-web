import Button from 'components/Button';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import { Form } from 'formik';
import React from 'react';
import { Column, InnerBanner, InnerContainer, Row, Text, Title, ContactSection, AdvertiseSection, FlexGroup, Checkbox, InputRadio, FormLabel } from 'styles/common.styles';

const ContactUsPage = () => {
  return <>
    <NavBar />
    <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
      <InnerContainer>

        <Row style={{ textAlign: 'left', alignItems: 'center' }}>
          <Column style={{ textAlign: 'left' }}>
            <Title>We’re Here For You</Title>
            <Text>Need help or willing to leave feedback on our content?</Text>
            <Text>Make sure you check our FAQs first!</Text>
          </Column>
          <Column>
            <img style={{ display: 'block', margin: '0 auto' }} height="250" src='/about-us.png' />
          </Column>
        </Row>

      </InnerContainer>
    </InnerBanner>

    <ContactSection>
      <InnerContainer>
        <Row>
          <Column>
            <Title style={{ fontSize: '1.25rem' }}>Registered Office</Title>
            <Text>3 Sheen Road,<br />
              Richmond Upon Thames,<br />
              England, TW9 1AD<br />
              United Kingdom</Text>
          </Column>
          <Column>
            <Title style={{ fontSize: '2.125rem', marginBottom: '.5rem' }}>Send Us A Message</Title>
            <Text>What do you want to contact us about?</Text>
            <form style={{ marginTop: '2rem' }}>
              <Row className='g-20'>
                <Column className='col column-full'>
                  <FlexGroup>
                    <Checkbox>
                      <InputRadio id='GeneralEnquiry' className="radio" name='message' type="radio" />
                      <FormLabel htmlFor="GeneralEnquiry">General Enquiry</FormLabel>
                    </Checkbox>
                    <Checkbox>
                      <InputRadio id='Editorial' className="radio" name='message' type="radio" />
                      <FormLabel htmlFor="Editorial">Editorial</FormLabel>
                    </Checkbox>
                    <Checkbox>
                      <InputRadio id='ContentFeedback' className="radio" name='message' type="radio" />
                      <FormLabel htmlFor="ContentFeedback">Content Feedback</FormLabel>
                    </Checkbox>
                  </FlexGroup>
                </Column>
                <Column className='col'>
                  <input type={'text'} className='' placeholder='Full Name' />
                </Column>
                <Column className='col'>
                  <input type={'text'} className='' placeholder='Email' />
                </Column>
                <Column className='col column-full'>
                  <input type={'text'} className='' placeholder='Paste article and/or write in the subject matter' />
                </Column>
                <Column className='col column-full'>
                  <textarea style={{ height: '8rem' }} placeholder='Leave your message here'></textarea>
                </Column>
                <Column className='col column-full' style={{ textAlign: 'center' }}>
                  <Button style={{ width: '12rem' }} content="Submit" type="submit">Submit</Button>
                </Column>
              </Row>
            </form>
          </Column>
        </Row>
      </InnerContainer>
    </ContactSection>
    <AdvertiseSection style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
      <InnerContainer>
        <Row style={{ justifyContent: 'center' }}>
          <Column></Column>
          <Column style={{ textAlign: 'center' }}>
            <Title style={{ fontSize: '2rem' }}>Advertise With Us</Title>
            <Text>To learn about partnering with Kidadl to promote your brand or product, reach out to our Sales team.</Text>
            <Button style={{ width: '12rem' }} content="Learn more">Learn more</Button>
          </Column>
          <Column></Column>
        </Row>
      </InnerContainer>
    </AdvertiseSection>
    <Footer />
  </>
};

export default ContactUsPage;
