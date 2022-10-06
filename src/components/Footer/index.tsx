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
    Input,
    LabelText,
    SwitchBox,
    Switch,
    NewsletterBox
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
        setManageSetting(!manageSetting);
        setPrivacyPolicy(false);
    };

    const [terms, setterms] = useState(false);
    const handleterms = () => {
        return setterms(!terms);
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

            <Modal showModal={terms} style={{textAlign: 'center'}}>
                <Title style={{color: 'white', fontSize: '2rem'}}>Terms and conditions</Title>
                <div className='minh'>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text style={{color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                    <Button style={{width: '12rem', marginLeft: 'auto'}} onClick={() => handleterms()}>Accept</Button>
                </div>
            </Modal>

            <Modal showModal={manageSetting} style={{textAlign: 'center'}}>
                <Title style={{color: 'white', fontSize: '2rem'}}>Manage Setting</Title>
                <div className='minh'>
                    <SwitchBox>
                        <Text>1. ipsum dolor sit amet.</Text>
                        <Switch>
                            <Input type={'checkbox'} id='consent'></Input>
                            <LabelText htmlFor='consent'>Consent</LabelText>
                        </Switch>
                        <Switch>
                            <Input type={'checkbox'} id='LegitimateInterest'></Input>
                            <LabelText htmlFor='LegitimateInterest'>Legitimate Interest</LabelText>
                        </Switch>
                    </SwitchBox>
                    <SwitchBox>
                        <Text>2. ipsum dolor sit amet.</Text>
                        <Switch>
                            <Input type={'checkbox'} id='consent1'></Input>
                            <LabelText htmlFor='consent1'>Consent</LabelText>
                        </Switch>
                        <Switch>
                            <Input type={'checkbox'} id='LegitimateInterest1'></Input>
                            <LabelText htmlFor='LegitimateInterest1'>Legitimate Interest</LabelText>
                        </Switch>
                    </SwitchBox>
                    <SwitchBox>
                        <Text>3. ipsum dolor sit amet.</Text>
                        <Switch>
                            <Input type={'checkbox'} id='consent2'></Input>
                            <LabelText htmlFor='consent2'>Consent</LabelText>
                        </Switch>
                        <Switch>
                            <Input type={'checkbox'} id='LegitimateInterest2'></Input>
                            <LabelText htmlFor='LegitimateInterest2'>Legitimate Interest</LabelText>
                        </Switch>
                    </SwitchBox>
                    <SwitchBox>
                        <Text>4. ipsum dolor sit amet.</Text>
                        <Switch>
                            <Input type={'checkbox'} id='consent3'></Input>
                            <LabelText htmlFor='consent3'>Consent</LabelText>
                        </Switch>
                        <Switch>
                            <Input type={'checkbox'} id='LegitimateInterest3'></Input>
                            <LabelText htmlFor='LegitimateInterest3'>Legitimate Interest</LabelText>
                        </Switch>
                    </SwitchBox>
                    <SwitchBox>
                        <Text>5. ipsum dolor sit amet.</Text>
                        <Switch>
                            <Input type={'checkbox'} id='consent4'></Input>
                            <LabelText htmlFor='consent4'>Consent</LabelText>
                        </Switch>
                        <Switch>
                            <Input type={'checkbox'} id='LegitimateInterest4'></Input>
                            <LabelText htmlFor='LegitimateInterest4'>Legitimate Interest</LabelText>
                        </Switch>
                    </SwitchBox>
                    <SwitchBox>
                        <Text>6. ipsum dolor sit amet.</Text>
                        <Switch>
                            <Input type={'checkbox'} id='consent5'></Input>
                            <LabelText htmlFor='consent5'>Consent</LabelText>
                        </Switch>
                        <Switch>
                            <Input type={'checkbox'} id='LegitimateInterest5'></Input>
                            <LabelText htmlFor='LegitimateInterest5'>Legitimate Interest</LabelText>
                        </Switch>
                    </SwitchBox>
                    
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
                    <Button style={{width: '12rem'}} onClick={() => handleManageSetting()}>Go Back</Button>
                    <Button style={{width: '12rem'}} onClick={() => handleManageSetting()}>Accept All</Button>
                </div>
            </Modal>

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
                                <Input type={'text'} placeholder="Enter your email"></Input>
                                <Button content="" type="submit" style={{borderRadius: '.375rem', marginLeft: '1rem'}}>Subscribe</Button>
                            </NewsletterBox>
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
                                <Link href={'/newsletter'}>Newsletter</Link>
                                <Link href={'/faq'}>Faqs</Link>
                                {/* <Link href={'/'}>Appointment</Link> */}
                                <Button className="footer-link" onClick={() => handleChange()}>Cookies</Button>
                                <Button className="footer-link" onClick={() => handleManageSetting()}>Privacy Policy</Button>
                                <Button className="footer-link" onClick={() => handleterms()}>Terms and conditions</Button>
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
