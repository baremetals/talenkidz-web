import React, { useState } from 'react'
import Image from 'next/image';
// import { useRouter } from 'next/router';
import Button from 'components/users/Auth/Button';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), {
  ssr: false,
});
import {
  InnerContainer,
} from 'styles/common.styles';
// eslint-disable-next-line no-unused-vars
import { HeroButtonBlock, HeroHeading, HeroInfo, HeroItem, OwlCarouselsBlock, Section } from './hero.styles';
import { Div, LeftImg, RightImg } from '../home.styles';
import { TFeatureSlider } from 'src/types';
import { cutTextToLength } from 'src/utils';
const options = {
  responsiveClass: true,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};


const HeroSection = (slides: { slides: TFeatureSlider[] }) => {
  // console.log(slides.slides);
  // eslint-disable-next-line no-unused-vars
  const [slidesArray, setSlidesArray] = useState(slides.slides);
  return (
    <Section>
      <InnerContainer>
        <LeftImg>
          <Image
            src="/assets/svgs/cube.svg"
            alt="creative activity card image"
            className="cube icon"
            width={378}
            height={378}
          />
        </LeftImg>
        {/* <HeroHeading>
          find your child’s future{' '}
          <span className="WhiteBg">career prospects</span>
        </HeroHeading>
        <HeroInfo>stay responsible for shaping their path</HeroInfo> */}
        <OwlCarouselsBlock>
          <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            margin={1}
            {...options}
          >
            {slidesArray.map((item) => (
              <Div className="Takingitem" key={item.id}>
                <HeroHeading>
                  {cutTextToLength(item.attributes.title, 40)}
                  {/* <span className="WhiteBg">career prospects</span> */}
                </HeroHeading>
                {/* <HeroInfo>stay responsible for shaping their path</HeroInfo> */}
                <HeroItem>
                  <Image
                    src={item.attributes.featureImage}
                    alt="slider image"
                    width={1033}
                    height={693}
                  />
                  <HeroButtonBlock>
                    <Button
                      content={item.attributes.buttonText}
                      type="submit"
                      disabled={false}
                      loading={false}
                    ></Button>
                  </HeroButtonBlock>
                </HeroItem>
              </Div>
            ))}

            {/* <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            margin={1}
            {...options}
          > */}
            {/* {[1, 2, 3].map((item, i) => (
              <Div className="Takingitem" key={i}>
                <HeroItem>
                  <Image
                    src="/assets/images/herobanner.png"
                    alt="slider image"
                    width={1033}
                    height={693}
                  />
                  <HeroButtonBlock>
                    <Button
                      content="Start now"
                      type="submit"
                      disabled={false}
                      loading={false}
                    ></Button>
                  </HeroButtonBlock>
                </HeroItem>
              </Div>
            ))} */}
          </OwlCarousel>
        </OwlCarouselsBlock>

        <RightImg>
          <Image
            src="/assets/svgs/throfy.svg"
            alt="trophy icon"
            width={396}
            height={396}
          />
        </RightImg>
      </InnerContainer>
    </Section>
  );
};

export default HeroSection