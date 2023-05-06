import React from 'react';

import FaqQuestion from './FaqsSection';
// import BestPlaceSection from './BestPlaceSection';
import HeroSection from './HeroSection';
import ActivitySection from './ActivitySection';
// import TeachersSection from './TeachersSection';
import { TFaq, TFeatureSlider } from 'src/types';
// import QuestionSection from './QuestionSection';
// import ServiceSection from './ServiceSection';
// import DoubtSection from './DoubtSection';

type THomeProps = {
  faqs: TFaq[];
  slides: TFeatureSlider[];
};
const Home: React.FC<THomeProps> = ({ faqs, slides }) => {
  // console.log(slides);
  return (
    <>
      <HeroSection slides={slides} />
      <ActivitySection />
      {/* <TeachersSection /> */}
      {/* <BestPlaceSection /> */}
      <FaqQuestion faqs={faqs} />
      {/* <QuestionSection /> */}
      {/* <ServiceSection /> */}
      {/* <DoubtSection /> */}
    </>
  );
};

export default Home;
