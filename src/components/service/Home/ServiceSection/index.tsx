import React from 'react';
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
import { Div, LeftImg, RightImg } from '../home.styles';
import {
  TakingOurService,
  OwlCarouselBlock,
  OurServicePageHeading,
  OurServiceItem,
  ButtonBlock,
} from './ss.styles';

const ServiceSection: React.FC = () => {
  // const router = useRouter();
  return (
    <TakingOurService>
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

        <OurServicePageHeading>
          expand your child’s circle{' '}
          <span className="WhiteBg"> taking our service </span>
        </OurServicePageHeading>
        <OwlCarouselBlock>
          <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            margin={1}
            nav
            navText={[
              '<img src="/assets/svgs/LeftArrow.svg">',
              '<img src="/assets/svgs/RightArrow.svg">',
            ]}
          >
            <Div className="Takingitem">
              <OurServiceItem>
                <Image
                  src="/assets/images/nsplash.jpg"
                  alt="slider image"
                  width={814}
                  height={548}
                />
                <ButtonBlock>
                  <Button
                    content="Take a service"
                    type="submit"
                    disabled={false}
                    loading={false}
                  ></Button>
                </ButtonBlock>
              </OurServiceItem>
            </Div>
            <Div className="Takingitem">
              <OurServiceItem>
                <Image
                  src="/assets/images/nsplash.jpg"
                  alt="slider image"
                  width={814}
                  height={548}
                />
                <ButtonBlock>
                  <Button
                    content="Take a service"
                    type="submit"
                    disabled={false}
                    loading={false}
                  ></Button>
                </ButtonBlock>
              </OurServiceItem>
            </Div>
            <Div className="Takingitem">
              <OurServiceItem>
                <Image
                  src="/assets/images/nsplash.jpg"
                  alt="slider image"
                  width={814}
                  height={548}
                />
                <ButtonBlock>
                  <Button
                    content="Take a service"
                    type="submit"
                    disabled={false}
                    loading={false}
                  ></Button>
                </ButtonBlock>
              </OurServiceItem>
            </Div>
          </OwlCarousel>
        </OwlCarouselBlock>
        <RightImg>
          <Image
            src="/assets/svgs/throfy.svg"
            alt="trophy icon"
            width={396}
            height={396}
          />
        </RightImg>
      </InnerContainer>
    </TakingOurService>
  );
};

export default ServiceSection;
