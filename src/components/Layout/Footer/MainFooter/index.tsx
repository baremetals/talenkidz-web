import React, { ReactElement, useState } from 'react';


import { addToMailingList } from 'src/helpers';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'components/widgets/Button';
import { Column, Row, Input } from 'styles/common.styles';
import {
  NewsLetterTitle,
  NewLetterBox,
  NewsletterBox,
  NewsLetterText,
  Copyright,
} from '../styles';
import NavLinks from '../NavLinks';
import ServiceLinks from '../ServiceLinks';
import LogoBlock from '../LogoBlock';

function MainFooter(): ReactElement {
  const [email, setEmail] = useState<string>('');


  const handleSubmit = async () => {
    try {
      const res = await addToMailingList(email);
      toast.success(res.data.message, { position: 'bottom-left' });
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LogoBlock route="/" />
      <Row className="footerSecondRow">
        <Column>
          <NavLinks />
        </Column>
        <Column>
          <NewLetterBox>
            <NewsLetterTitle
              className="title"
              style={{ color: '#fff', fontSize: '1.75rem', marginTop: '0' }}
            >
              NEWSLETTER
            </NewsLetterTitle>
            <NewsLetterText style={{}}>
              Keep the kids happy with entertaining and educational ideas
            </NewsLetterText>
            <NewsletterBox style={{ maxWidth: '100%' }}>
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
          </NewLetterBox>
        </Column>
      </Row>
      <Row className="copyrightBlock">
        <Column className="column-4">
          <Copyright className="copy">
            Talentkids Ltd © {new Date().getFullYear()}
          </Copyright>
        </Column>
        <Column className="column-8">
          <ServiceLinks class_name="legleLink" />
        </Column>
      </Row>
      <ToastContainer />
    </>
  );
}

export default MainFooter;
