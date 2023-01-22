import React from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";
import dynamic from 'next/dynamic';

import Button from 'components/users/Auth/Button';

import OurServices from './OurServices';
import QuestionSection from './QuestionSection';
import FaqQuestion from './FaqsSection';
import Accordion from './Accordion/Accordion';

// import Company from '../About/Company'

const ActivityCard = dynamic(() => import('./ActivityCard'), {
  ssr: false,
});

import {
  InnerContainer,
  Hero,
  HeroContent,
  HeroTitle,
  HeroSubTitle,
} from 'styles/common.styles';
import DoubtSection from './DoubtSection';
import BestPlaceSection from './BestPlaceSection';
import HeroSection from './HeroSection';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <HeroSection />

      <OurServices />
      <BestPlaceSection />
      <FaqQuestion />
      <QuestionSection />
      <DoubtSection />
    </>
  );
};

export default Home;
