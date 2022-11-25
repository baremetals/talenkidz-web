import React, { ReactElement, useState } from 'react'

import Link from 'next/link'
import axios from 'axios';
import { addToMailingList } from 'src/lib/helpers'
// import PolicyPopUp from "components/Policy"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaInstagram } from 'react-icons/fa'



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
  H2Title,
  Text,
  Input,
  // LabelText,
  // SwitchBox,
  // Switch,
  NewsletterBox,
} from '../../../styles/common.styles';

import { NewsCard } from './NewsCard'
import Button from 'components/widgets/Button';
// import AdComponent from 'components/AdComponent';

import { FaceBook } from "public/assets/icons/FaceBook";
import { Tiktok } from "public/assets/icons/Tiktok";
import { LinkedIn } from "public/assets/icons/LinkedIn";
import { Twitter } from "public/assets/icons/Twitter";
import PolicyPopUp from 'components/service/Policy';

// import { WhatsApp } from "public/assets/icons/WhatsApp";


function Footer(): ReactElement {
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    // const [manageSetting, setManageSetting] = useState(false);
    const [email, setEmail] = useState<string>('');

    if (typeof window !== "undefined") {
        // eslint-disable-next-line no-unused-vars, no-async-promise-executor
        const _promise = new Promise(async function (resolve, reject) {
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
              <Column className="column-6">
                {/* <Link href={'/'} passHref>
                                <Logo style={{marginBottom: '20px'}}>
                                    <Image src={'/logo-white.png'} alt='' />
                                </Logo>
                            </Link> */}
                <H2Title
                  style={{ color: '#fff', fontSize: '1.75rem', marginTop: '0' }}
                >
                  Get The Newsletter
                </H2Title>
                <Text style={{}}>
                  Keep the kids happy with entertaining and educational ideas
                </Text>
                <NewsletterBox style={{ maxWidth: '90%' }}>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  ></Input>
                  <Button
                    content=""
                    type="submit"
                    style={{
                      borderRadius: '.375rem',
                      marginLeft: '1rem',
                      borderColor: '#a40a52',
                    }}
                    onClick={() => handleSubmit()}
                  >
                    Subscribe
                  </Button>
                </NewsletterBox>
                {/* <Text>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrice gravida isus commodo viverra.</Text> */}
                <div className="footer_social">
                  <a
                    href={'https://www.facebook.com/jointalentkids'}
                    aria-label="FaceBook"
                  >
                    <FaceBook />
                  </a>
                  <a
                    href={'https://twitter.com/talentkids_join'}
                    aria-label="Twitter"
                  >
                    <Twitter />
                  </a>
                  <a
                    href={'https://www.linkedin.com/company/join-talentkids'}
                    aria-label="LinkedIn"
                  >
                    <LinkedIn />
                  </a>
                  {/* <a href={'https://web.whatsapp.com/'} aria-label="WhatsApp">
                    <WhatsApp />
                  </a> */}
                  <a
                    href={'https://www.instagram.com/join__talentkids'}
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={'https://www.tiktok.com/@join_talentkids'}
                    aria-label="Tiktok"
                  >
                    <Tiktok />
                  </a>
                </div>
              </Column>

              <Column>
                <FooterTitle>Talent Kids</FooterTitle>
                <FooterLinks>
                  <Link href={'/about'}>About Us</Link>
                  <Link href={'/contact'}>Contact us</Link>
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
