import React from 'react'
import Link from 'next/link';
import { FooterLinks } from '../styles';

const NavLinks = () => {
  return (
    <FooterLinks className="footerLink">
      <Link href={'/account'}>Home</Link>
      <Link href={'/events'}>Events</Link>
      <Link href={'/articles'}>Articles</Link>
      <Link href={'activities'}>Activities</Link>
    </FooterLinks>
  );
}

export default NavLinks