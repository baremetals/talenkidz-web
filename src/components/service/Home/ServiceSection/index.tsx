import React from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import Button from 'components/users/Auth/Button';

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), {
//   ssr: false,
// });

import { InnerContainer } from 'styles/common.styles';
import {
  Div,
  LeftImg,
  RightImg,
  SliderLeft,
  SliderRight,
} from '../home.styles';
import {
  TakingOurService,
  OwlCarouselBlock,
  OurServicePageHeading,
  OurServiceItem,
  ButtonBlock,
} from './ss.styles';

const ServiceSection: React.FC = () => {
  // const router = useRouter();
  let settings = {
    nav: false,
    nextArrow: (
      <SampleNextArrow
        className={'rightImg'}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    responsiveClass: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          <Slider {...settings}>
            {/* <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            margin={1}
            nav
            navText={[
              '<img src="/assets/svgs/LeftArrow.svg">',
              '<img src="/assets/svgs/RightArrow.svg">',
            ]}
          > */}
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
          </Slider>
          {/* </OwlCarousel> */}
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

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, onClick } = props;
  return (
    <SliderRight className={className} onClick={onClick}>
      <Image
        className="rightImg"
        src="/assets/svgs/RightArrow.svg"
        alt="chess icon"
        width={44}
        height={24}
      />
    </SliderRight>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, onClick } = props;
  return (
    <SliderLeft className={className} onClick={onClick}>
      <Image
        className="rightImg"
        src="/assets/svgs/LeftArrow.svg"
        alt="chess icon"
        width={44}
        height={24}
      />
    </SliderLeft>
  );
}
