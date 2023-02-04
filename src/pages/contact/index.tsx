import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from 'components/widgets/PageTitle';
import Button from 'components/widgets/Button';
import NavBar from 'components/Layout/NavBar';
import Footer from 'components/Layout/Footer';
import { Contactblock, Header, FormInput, FormTextarea, FlexGroup, Checkbox, InputRadio, } from './styles';
// import AdvertiseSection from 'components/AdvertiseSection';
import { Column, InnerBanner, InnerContainer, Row, Text, Title, ContactSection, FormLabel } from 'styles/common.styles';



type formProps = {
  name: string;
  email: string;
  subject: string;
  reason: string;
  message: string;
}

const ContactUsPage = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>();

  const onSubmit = async ({ ...values }: formProps) => {
    const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    const body = {
      data: values
    }
    const name = values.name.split(" ")[0];
    let successMsg;

    if (values.reason == 'feedback') {
      successMsg = `${name}, Your feedback has been received thanks.`
    } else {
      successMsg = `${name}, Your message has neen sent, You will hear back from us within 48hrs`
    }
    const errorMsg = `Sorry ${name}, something went wrong, please try again later`
    // console.log(body)
    try {
      const response = await fetch(`${baseUrl}/enquiries`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const res = await response.json();
      // console.log(res)
      if (res.data != null) {
        toast.success(successMsg, { position: "bottom-center", })
        reset({ name: '', email: '', subject: '', message: '' });
      } else toast.error(errorMsg, { position: "bottom-center", })

    } catch (error) {
      console.log(error);
    }
  }

  return <>
    <NavBar />
    {/* <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
      <InnerContainer>

        <Row style={{ textAlign: 'left', alignItems: 'center' }}>
          <Column style={{ textAlign: 'left' }}>
            <Title>Need Help?</Title>
            <Text>Willing to leave feedback or need some help?</Text>
            <Text>Please check the <Link href="/faqs"><a target="_blank">FAQs</a></Link>!</Text>
          </Column>
          <Column>
            <Image height="250" width="250" src='/about-us.png' alt='about' />
          </Column>
        </Row>

      </InnerContainer>
    </InnerBanner> */}
    <Contactblock>
      <InnerContainer>
        <Row>
          <Column>
            <PageTitle className="pageTitle" text={[<span key={"TALENTKIDS"}>Contact Us</span>,]} />
          </Column>
        </Row>
        <Row className=''>
          <Column>
            <Header>Willing to leave feedback or need some help?</Header>
             <Row >
              <Column>
                <FlexGroup>
                    <Checkbox>
                      <InputRadio id='Generalfeedback' className="radio" name='reason' type="radio" checked defaultValue="leave feedback " />
                      <FormLabel htmlFor="Generalfeedback">leave feedback </FormLabel>
                    </Checkbox>
                    <Checkbox>
                      <InputRadio id='need' className="radio" name='reason' type="radio" />
                      <FormLabel htmlFor="need">need help</FormLabel>
                  </Checkbox>
                  </FlexGroup>
              </Column>
             </Row>
            <Row className='mb30 '>
              <Column className='column-5'>
                <FormInput
                      type="text"
                      placeholder="Full name "
                      name="fname"
                />
              </Column>
              <Column className='column-7'>
               <FormInput
                      type="text"
                      placeholder="Email address"
                      name="Email"
                />
              </Column>
            </Row>
            <Row className='mb30'>
              <Column>
                <FormInput
                      type="text"
                      placeholder="Massage subject "
                      name="subject"
                />
              </Column>
            </Row>
             <Row className='mb30'>
              <Column>
                <FormTextarea placeholder="Massage"
                />
              </Column>
            </Row>
             <Row className='submit'>
              <Column>
                <Button style={{ width: '12rem' }} content="Submit" type="submit">Send</Button>
              </Column>
            </Row>
            {/* <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>
              <Row className='g-20'>
                <Column className='col column-full'>
                  <FlexGroup>
                    <Checkbox>
                      <InputRadio {...register("reason", { required: true })} id='GeneralEnquiry' className="radio" name='reason' type="radio" checked defaultValue="general enquiry" />
                      <FormLabel htmlFor="GeneralEnquiry">General Enquiry</FormLabel>
                    </Checkbox>
                    <Checkbox>
                      <InputRadio id='Editorial' className="radio" name='reason' type="radio" />
                      <FormLabel htmlFor="Editorial">Editorial</FormLabel>
                  </Checkbox>
                    <Checkbox>
                      <InputRadio {...register("reason", { required: true })} id='ContentFeedback' className="radio" name='reason' type="radio" defaultValue="feedback" />
                      <FormLabel htmlFor="ContentFeedback">Feedback</FormLabel>
                    </Checkbox>
                  </FlexGroup>
                </Column>
                <Column className='col'>
                  <input {...register("name", { required: true })} type={'text'} className='' placeholder='Full Name' name="name" />
                  {errors.name && <span>Full Name is required</span>}
                </Column>
                <Column className='col'>
                  <input {...register("email", { required: true })} type={'email'} className='' placeholder='Email' name="email" />
                  {errors.email && <span>Email is required</span>}
                </Column>
                <Column className='col column-full'>
                  <input {...register("subject", { required: true })} type={'text'} className='' placeholder='Please provide reason' name="subject" />
                  {errors.subject && <span>Subject is required</span>}
                </Column>
                <Column className='col column-full'>
                  {errors.message && <span>Message is required</span>}
                  <textarea {...register("message", { required: true })} style={{ height: '8rem' }} placeholder='Leave your message here' name="message"></textarea>
                </Column>
                <Column className='col column-full' style={{ textAlign: 'center' }}>
                  <Button style={{ width: '12rem' }} content="Submit" type="submit">Submit</Button>
                </Column>
              </Row>
            </form> */}
          </Column>
        </Row>
      </InnerContainer>
    </Contactblock>
    <ToastContainer />
    {/* <AdvertiseSection  /> */}
    <Footer />
  </>
};

export default ContactUsPage;
