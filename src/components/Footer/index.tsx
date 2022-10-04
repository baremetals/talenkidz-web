import React, { ReactElement, useState } from 'react'
import Modal from 'components/Modal';
import Link from 'next/link'
import { animateScroll as scroll } from "react-scroll";

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
} from "../../styles/common.styles";

import { NewsCard } from './NewsCard'
import Button from 'components/Button';


function Footer(): ReactElement {

    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const handleChange = () => {
        return setPrivacyPolicy(!privacyPolicy);
    };

    const [manageSetting, setManageSetting] = useState(false);
    const handleManageSetting = () => {
        return setManageSetting(!manageSetting);
    };
    return (
        <>
            <Modal showModal={privacyPolicy} style={{textAlign: 'center'}}>
                <Title style={{color: 'white', fontSize: '2rem'}}>Data and coocki content</Title>
                <div className='minh'>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                    <Button style={{width: '15rem'}} onClick={() => handleManageSetting()}>Manage Setting</Button>
                    <Button style={{width: '12rem'}} onClick={() => handleChange()}>Accept</Button>
                </div>
            </Modal>

            <Modal showModal={manageSetting} style={{textAlign: 'center'}}>
                <Title style={{color: 'white', fontSize: '2rem'}}>Manage Setting</Title>
                <div className='minh'>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                    <Button style={{width: '12rem'}} onClick={() => handleChange()}>Go Back</Button>
                    <Button style={{width: '12rem'}} onClick={() => handleManageSetting()}>Accept All</Button>
                </div>
            </Modal>

            <SiteFooter>
                <InnerContainer>
                    <Row>
                        <Column>
                            <Link href={'/'} passHref>
                                <Logo style={{marginBottom: '20px'}}>
                                    <Image src='/logo-w.svg' alt='' />
                                </Logo>
                            </Link>
                            {/* <Text>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrice gravida isus commodo viverra.</Text> */}
                        </Column>
                        {/* <Column>
                            <FooterTitle>Contact Us</FooterTitle>
                            <FooterContact>
                                <Text>
                                    <MapPin /> 256 Lonely Street Ave, Brooklyn CA, 25943. United State
                                </Text>
                                <Text>
                                    <Mail /> info@test.com
                                </Text>
                                <Text>
                                    <Phone /> +256 (3156) 2156 236
                                </Text>
                            </FooterContact>
                        </Column> */}
                        <Column>
                            <FooterTitle>Talent Kids</FooterTitle>
                            <FooterLinks>
                                <Link href={'/about'}>About Us</Link>
                                <Link href={'/contact-us'}>Contact us</Link>
                                {/* <Link href={'/terms'}>Terms of Service</Link> */}
                                <Button className="footer-link" onClick={() => handleChange()}>Terms of Service</Button>
                                <Button className="footer-link" onClick={() => handleManageSetting()}>Privacy Policy</Button>
                                {/* <Link href={'/privacy'}>Privacy Policy</Link> */}
                                <Link href={'/'}>Appointment</Link>
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
        </>
    );
}

export default Footer
