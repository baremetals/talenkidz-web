import React from 'react';
import NavBar from 'components/Layout/NavBar';
import Footer from 'components/Layout/Footer';
import { ContactPage } from 'components/service/ContactPage';

const Contact = () => {

  return <>
    <NavBar />
      <ContactPage />
    <Footer />
  </>
};

export default Contact;
