import React, { ReactElement, useState } from 'react'
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
} from "../../styles/common.styles";

import { NewsCard } from './NewsCard'
import Button from 'components/Button';
import AdComponent from 'components/AdComponent';

function Footer(): ReactElement {
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [manageSetting, setManageSetting] = useState(false);
    const [terms, setterms] = useState(false);
    const [email, setEmail] = useState<string>('');
    const handleterms = () => {
        return setterms(!terms);
    };

    const promise = new Promise(async function (resolve, reject) {
        const r = await axios.post('/api/policy', { data: { flag: 'getCookie' } })

        if (r.data.name === 'no cookie') {
            console.log(r.data.name);
            setPrivacyPolicy(true)
            resolve("Stuff worked!");
        }
        else {
            reject(Error("It broke"));
        }
    });

    promise.then((res) => {
        // console.log(res)
    })

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
            {privacyPolicy && <PolicyPopUp privacyPolicy />}
            
            {/* <Modal showModal={terms} style={{textAlign: 'center'}}>
                <Title style={{color: 'white', fontSize: '2rem'}}>Terms and conditions</Title>
                <div className='minh'>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                    <Button style={{width: '12rem', marginLeft: 'auto'}} onClick={() => handleterms()}>Accept</Button>
                </div>
            </Modal> */}


            <SiteFooter>
                <InnerContainer>
                    <Row>
                        <Column className='column-6'>
                            {/* <Link href={'/'} passHref>
                                <Logo style={{marginBottom: '20px'}}>
                                    <Image src={'/logo-white.png'} alt='' />
                                </Logo>
                            </Link> */}
                            <Title style={{color: '#fff', fontSize: '1.75rem', marginTop: '0'}}>Get The Newsletter</Title>
                            <Text style={{}}>Keep the kids happy with entertaining and educational ideas</Text>
                            <NewsletterBox style={{maxWidth: '90%'}}>
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
                                {/* <Button className="footer-link" onClick={() => handleChange()}>Cookies</Button>
                                <Button className="footer-link" onClick={() => handleManageSetting()}>Privacy Policy</Button> */}
                                {/* <Button className="footer-link" onClick={() => handleterms()}>Terms and conditions</Button> */}
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
