import React from 'react'
import Link from 'next/link';
import { FooterLinks } from '../styles';

type TServLinks = {
    class_name: string
}
const ServiceLinks = ({ class_name }: TServLinks) => {
  return (
    <FooterLinks className={class_name}>
      <Link href={'/cookie-policy'}>Cookie Policy</Link>
      <Link href={'/privacy'}>Privacy Policy</Link>
      <Link href={'/terms'}>Teams & conditions </Link>
      <Link href={'/about'}>About Us</Link>
    </FooterLinks>
  );
};

export default ServiceLinks