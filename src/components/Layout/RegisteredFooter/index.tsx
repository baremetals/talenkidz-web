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
  ContactBtn,
  NewsLetterTitle,
  NewLetterBox,
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
         <SiteFooter>
          <InnerContainer>
            <Row className='footerFirstRow'>
              <Column>
                <Link href={'/'} passHref>
                  <Logo>
                    <Image
                      src={'/talentkids.svg'}
                      alt="talentkids logo"
                      width={200}
                      height={45.69}
                    />
                  </Logo>
                </Link>
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
              </Column>
              <Column>
                <ContactBtn>
                  <Link href={'#'}>Contact</Link>
                </ContactBtn>
              </Column>
            </Row>
            <Row className='footerSecondRow'>
              <Column>
                <FooterLinks className='footerLink'>
                  <Link href={'#'}>Home</Link>
                  <Link href={'#'}>Events</Link>
                  <Link href={'#'}>Articles</Link>
                  <Link href={'#'}>Activities</Link>
                </FooterLinks>
              </Column>
              <Column>
                <Copyright className='copy'>Talentkids Ltd © 2022</Copyright>
              </Column>
              <Column>
                <FooterLinks className='footerLinks'>
                  <Link href={'#'}>Cookie Policy</Link>
                  <Link href={'#'}>Privacy Policy</Link>
                  <Link href={'#'}>Teams and conditions</Link>
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
