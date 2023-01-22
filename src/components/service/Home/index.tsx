import React from 'react';

import QuestionSection from './QuestionSection';
import FaqQuestion from './FaqsSection';
import DoubtSection from './DoubtSection';
import BestPlaceSection from './BestPlaceSection';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import ActivitySection from './ActivitySection';

const Home = () => {

  return (
    <>
      <HeroSection />
      <ActivitySection />
      <BestPlaceSection />
      <FaqQuestion />
      <QuestionSection />
      <ServiceSection />
      <DoubtSection />
    </>
  );
};

export default Home;
