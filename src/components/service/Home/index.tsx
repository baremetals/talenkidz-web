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

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Hero>
        {/* <Image
            src="/twokids.jpg"
            alt="education activity card image"
            width={"0"}
            height="0"
            className="banner-bg"
          /> */}

        <InnerContainer>
          <HeroContent>
            <HeroSubTitle style={{ color: 'white' }}>talentkids</HeroSubTitle>
            <HeroTitle style={{ color: 'white' }}>
              Do What You Love For A Lifetime
            </HeroTitle>
            <div onClick={() => router.push('/auth/register')}>
              <Button
                bgColor="#3762e4"
                content="Get Started"
                type="button"
                disabled={false}
                loading={false}
                BtnNames={''}
              />
            </div>
          </HeroContent>
        </InnerContainer>
      </Hero>
      <OurServices />
        <BestPlaceSection />
      <FaqQuestion />
      <QuestionSection />
      <DoubtSection />
    </>
  );
};

export default Home;
