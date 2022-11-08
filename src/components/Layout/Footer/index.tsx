import React, { ReactElement, useState, useEffect } from 'react'
import Modal from 'components/Modal';
import Link from 'next/link'
import axios from 'axios';
import { addToMailingList } from 'lib/helpers'
import PolicyPopUp from "components/Policy"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import {
    Column,
    InnerContainer,
    Logo,
    Row,
    Image,
    SiteFooter,
    FooterLinks,
    FooterTitle,
    MediaObject,
    Title,
    Text,
    Input,
    LabelText,
    SwitchBox,
    Switch,
    NewsletterBox
} from "../../../styles/common.styles";

import { NewsCard } from './NewsCard'
import Button from 'components/Button';
import AdComponent from 'components/AdComponent';

function Footer(): ReactElement {
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [manageSetting, setManageSetting] = useState(false);
    const [email, setEmail] = useState<string>('');

    if (typeof window !== "undefined") {
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