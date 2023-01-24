import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import axios from 'axios';
import { addToMailingList } from 'src/helpers'
import PolicyPopUp from 'components/service/Policy';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from 'components/widgets/Button';
import { FaceBook } from "public/assets/icons/FaceBook";
import { Tiktok } from "public/assets/icons/Tiktok";
import { LinkedIn } from "public/assets/icons/LinkedIn";
import { Twitter } from "public/assets/icons/Twitter";
import { Instagram } from 'public/assets/icons/Instagram';
import { YouTube } from 'public/assets/icons/YouTube';
import { Column, InnerContainer, Logo, Row, Input } from 'styles/common.styles';
import {
  SiteFooter,
  FooterLinks,
  NewsLetterTitle,
  NewsletterBox,
  NewsLetterText,
  Copyright,
} from './styles';


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
        {/* <SiteFooter>
          <InnerContainer>
            <Row>
              <Column className="column-6">
                
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
                 
                  <Link href={'/faqs'}>FAQs</Link>
                  
                </FooterLinks>
              </Column>
              <Column>
                <FooterTitle>News Feed</FooterTitle>
                <MediaObject>
                  <NewsCard />
                </MediaObject>
              </Column>
            </Row>
            <Text
              style={{ textAlign: 'center', color: '#fff', marginTop: '1rem' }}
            >
              Talentkids Ltd © 2022 &nbsp; &nbsp;{' '}
              <Link href={'/cookie-policy'}>Cookie Policy</Link> &nbsp; | &nbsp;{' '}
              <Link href={'/privacy'}>Privacy Policy</Link> &nbsp; | &nbsp;{' '}
              <Link href={'/terms'}>Terms and conditions</Link>
            </Text>
          </InnerContainer>
        </SiteFooter> */}
        <SiteFooter>
          <InnerContainer>
            <Row>
              <Column className="column-6">
                <Link href={'/'} passHref>
                  <Logo style={{ marginBottom: '50px' }}>
                    <Image
                      src={'/talentkids.svg'}
                      alt="talentkids logo"
                      width={200}
                      height={45.69}
                    />
                  </Logo>
                </Link>
                <NewsLetterTitle
                  style={{ color: '#fff', fontSize: '1.75rem', marginTop: '0' }}
                >
                  NEWSLETTER
                </NewsLetterTitle>
                <NewsLetterText style={{}}>
                  Keep the kids happy with entertaining and educational ideas
                </NewsLetterText>
                <NewsletterBox style={{ maxWidth: '90%' }}>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Write your email"
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
              </Column>

              <Column>
                <div className="footer_social">
                  <a
                    href={'https://www.linkedin.com/company/join-talentkids'}
                    aria-label="LinkedIn"
                  >
                    <LinkedIn />
                  </a>
                  <a
                    href={'https://www.instagram.com/join__talentkids'}
                    aria-label="Instagram"
                  >
                    <Instagram />
                  </a>
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

                  <a href={'https://web.whatsapp.com/'} aria-label="YouTube">
                    <YouTube />
                  </a>

                  <a
                    href={'https://www.tiktok.com/@join_talentkids'}
                    aria-label="Tiktok"
                  >
                    <Tiktok />
                  </a>
                </div>
                <FooterLinks>
                  <Link href={'/cookie-policy'}>Cookie Policy</Link>
                  <Link href={'/privacy'}>Privacy Policy</Link>
                  <Link href={'/terms'}>Teams and conditions </Link>
                  <Copyright>Talentkids Ltd © 2022</Copyright>
                </FooterLinks>
              </Column>
            </Row>
          </InnerContainer>
        </SiteFooter>
        <ToastContainer />
      </>
    );
}

export default Footer
