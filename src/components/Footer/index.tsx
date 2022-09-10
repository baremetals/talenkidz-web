import React, { ReactElement } from 'react'
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
    Text,
    FooterTitle,

    MediaObject,
    MediaObjectItem,
    MediaObjectThumb,
    MediaObjectBody,
    MediaObjectDate,
    MediaObjectTitle,
    
    FooterContact,
} from "../../styles/common.styles";

import { MapPin } from '../../../public/assets/icons/MapPin'
import { Phone } from '../../../public/assets/icons/Phone'
import { Mail } from '../../../public/assets/icons/Mail'
import { NewsCard } from './NewsCard'

function Footer(): ReactElement {

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // };
    return (
        <>
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
                                <Link href={'/terms'}>Terms of Service</Link>
                                <Link href={'/privacy'}>Privacy Policy</Link>
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
