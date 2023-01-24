import React from 'react'
import Image from 'next/image';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), {
  ssr: false,
});

import {
  InnerContainer,
  Row,
  Column,
} from 'styles/common.styles';
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

const BestPlaceSection: React.FC = () => {
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
          </OwlCarousel>
        </OwlCarouselBlock>
      </InnerContainer>
    </BestPlaceService>
  );
}

export default BestPlaceSection;
