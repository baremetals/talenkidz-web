import React, { ReactElement, useState } from 'react'

import Link from 'next/link'
import axios from 'axios';
import { addToMailingList } from 'lib/helpers'
import PolicyPopUp from "components/Policy"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import {
    Column,
    InnerContainer,
    // Logo,
    Row,
    // Image,
    SiteFooter,
    FooterLinks,
    FooterTitle,
    MediaObject,
    Title,
    Text,
    Input,
    // LabelText,
    // SwitchBox,
    // Switch,
    NewsletterBox
} from "../../../styles/common.styles";

import { NewsCard } from './NewsCard'
import Button from 'components/Button';
// import AdComponent from 'components/AdComponent';

import { FaceBook } from "../../../../public/assets/icons/FaceBook";
import { Tiktok } from "../../../../public/assets/icons/Tiktok";
import { LinkedIn } from "../../../../public/assets/icons/LinkedIn";
import { Twitter } from "../../../../public/assets/icons/Twitter";
import { WhatsApp } from "../../../../public/assets/icons/WhatsApp";

function Footer(): ReactElement {
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    // const [manageSetting, setManageSetting] = useState(false);
    const [email, setEmail] = useState<string>('');

    if (typeof window !== "undefined") {
        // eslint-disable-next-line no-unused-vars, no-async-promise-executor
        const promise = new Promise(async function (resolve, reject) {
            const r = await axios.post('/api/policy', { data: { flag: 'getCookie' } })

            if (r.data.name === 'no cookie') {
                // console.log(r.data.name);
                setPrivacyPolicy(true)
            }
            else {
                // console.log(r.data.policyOptions); 
                resolve("Stuff worked!");
                // reject(Error("It broke"));
            }
        });
    }

    // const promise = new Promise(async function (resolve, reject) {
    //     const r = await axios.post('/api/policy', { data: { flag: 'getCookie' } })

    //     if (r.data.name === 'no cookie') {
    //         // console.log(r.data.name);
    //         setPrivacyPolicy(true)
    //     }
    //     else {
    //         // console.log(r.data.policyOptions); 
    //         resolve("Stuff worked!");
    //         // reject(Error("It broke"));
    //     }
    // });

    const handleSubmit = async () => {
        try {
            const res = await addToMailingList(email)
            toast.success(res.data.message, { position: "bottom-left", })
            setEmail('')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {privacyPolicy && <PolicyPopUp privacyPolicy={privacyPolicy} />}
            <SiteFooter>
                <InnerContainer>
                    <Row>
                        <Column className='column-6'>
                            {/* <Link href={'/'} passHref>
                                <Logo style={{marginBottom: '20px'}}>
                                    <Image src={'/logo-white.png'} alt='' />
                                </Logo>
                            </Link> */}
                            <Title style={{ color: '#fff', fontSize: '1.75rem', marginTop: '0' }}>Get The Newsletter</Title>
                            <Text style={{}}>Keep the kids happy with entertaining and educational ideas</Text>
                            <NewsletterBox style={{ maxWidth: '90%' }}>
                                <Input id="email" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email}></Input>
                                <Button content="" type="submit" style={{ borderRadius: '.375rem', marginLeft: '1rem' }} onClick={() => handleSubmit()}>Subscribe</Button>
                            </NewsletterBox>
                            {/* <Text>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrice gravida isus commodo viverra.</Text> */}
                            <div className='footer_social'>
                                <a href={'https://www.facebook.com/'}><FaceBook /></a>
                                <a href={'https://twitter.com/'}><Twitter /></a>
                                <a href={'https://www.linkedin.com/'}><LinkedIn /></a>
                                <a href={'https://web.whatsapp.com/'}><WhatsApp /></a>
                                <a href={'https://www.tiktok.com'}><Tiktok /></a>
                            </div>
                        </Column>

                        <Column>
                            <FooterTitle>Talent Kids</FooterTitle>
                            <FooterLinks>
                                <Link href={'/about'}>About Us</Link>
                                <Link href={'/contact-us'}>Contact us</Link>
                                {/* <Link href={'/newsletter'}>Newsletter</Link> */}
                                <Link href={'/faqs'}>FAQs</Link>
                                <Link href={'/cookie-policy'}>Cookie Policy</Link>
                                <Link href={'/privacy'}>Privacy Policy</Link>
                                <Link href={'/terms'}>Terms and conditions</Link>
                                {/* <Link href={'/'}>Appointment</Link> */}
                            </FooterLinks>
                        </Column>
                        <Column>
                            <FooterTitle>News Feed</FooterTitle>
                            <MediaObject>
                                <NewsCard />
                            </MediaObject>
                        </Column>
                    </Row>
                </InnerContainer>
            </SiteFooter>
            <ToastContainer />
        </>
    );
}

export default Footer
