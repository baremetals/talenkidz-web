import React from 'react';

import QuestionSection from './QuestionSection';
import FaqQuestion from './FaqsSection';
import DoubtSection from './DoubtSection';
import BestPlaceSection from './BestPlaceSection';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import ActivitySection from './ActivitySection';
import TeachersSection from './TeachersSection';

const Home = () => {

  return (
    <>
      <HeroSection />
      <ActivitySection />
      <TeachersSection />
      <BestPlaceSection />
      <FaqQuestion />
      <QuestionSection />
      <ServiceSection />
      <DoubtSection />
    </>
  );
};

export default Home;
