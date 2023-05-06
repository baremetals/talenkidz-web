import React from 'react';
import Image from 'next/image';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), {
//   ssr: false,
// });

import { InnerContainer, Row, Column } from 'styles/common.styles';
import {
  Div,
  LocationImg,
  BestPlaceImg,
  BestPlaceInfo,
  BestPlaceService,
  BestPlaceHeading,
  OwlCarouselBlock,
  BestPlaceItem,
} from './bp.styles';
import { SliderLeft, SliderRight } from '../home.styles';

const BestPlaceSection: React.FC = () => {
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
    <BestPlaceService>
      <InnerContainer className="bestPlace">
        <BestPlaceHeading>
          CHOOSE THE <span className="blueBg">BEST PLACE</span> FOR YOUR CHILD
        </BestPlaceHeading>
        <LocationImg>
          <Image
            src="/assets/svgs/location.svg"
            alt="location icon"
            className="cubeImg"
            width={407}
            height={407}
          />
        </LocationImg>
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
              <BestPlaceItem>
                <Row className="rowItem">
                  <Column>
                    <BestPlaceImg>
                      <Image
                        src="/assets/images/child.png"
                        alt="slider image"
                        className="location"
                        width={365}
                        height={365}
                      />
                    </BestPlaceImg>
                  </Column>
                  <Column>
                    <BestPlaceInfo>
                      <h2>Athletic Section</h2>
                      <p>
                        Children will be stimulated by friendly competition with
                        their peers. Play spaces should be rich with subtle
                        opportunities for competition. It has been proven that a
                        development in active sports helps him or her learn
                        better in school.
                      </p>
                    </BestPlaceInfo>
                  </Column>
                </Row>
              </BestPlaceItem>
            </Div>
            <Div className="Takingitem">
              <BestPlaceItem>
                <Row className="rowItem">
                  <Column>
                    <BestPlaceImg>
                      <Image
                        src="/assets/images/child.png"
                        alt="slider image"
                        className="location"
                        width={365}
                        height={365}
                      />
                    </BestPlaceImg>
                  </Column>
                  <Column>
                    <BestPlaceInfo>
                      <h2>Athletic Section</h2>
                      <p>
                        Children will be stimulated by friendly competition with
                        their peers. Play spaces should be rich with subtle
                        opportunities for competition. It has been proven that a
                        development in active sports helps him or her learn
                        better in school.
                      </p>
                    </BestPlaceInfo>
                  </Column>
                </Row>
              </BestPlaceItem>
            </Div>
            <Div className="Takingitem">
              <BestPlaceItem>
                <Row className="rowItem">
                  <Column>
                    <BestPlaceImg>
                      <Image
                        src="/assets/images/child.png"
                        alt="slider image"
                        className="location"
                        width={365}
                        height={365}
                      />
                    </BestPlaceImg>
                  </Column>
                  <Column>
                    <BestPlaceInfo>
                      <h2>Athletic Section</h2>
                      <p>
                        Children will be stimulated by friendly competition with
                        their peers. Play spaces should be rich with subtle
                        opportunities for competition. It has been proven that a
                        development in active sports helps him or her learn
                        better in school.
                      </p>
                    </BestPlaceInfo>
                  </Column>
                </Row>
              </BestPlaceItem>
            </Div>
            {/* </OwlCarousel> */}
          </Slider>
        </OwlCarouselBlock>
      </InnerContainer>
    </BestPlaceService>
  );
};

export default BestPlaceSection;

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
