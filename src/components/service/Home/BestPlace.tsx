import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from 'components/users/Auth/Button';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), {
  ssr: false,
});

import { InnerContainer,Div,LocationImg,BestPlaceImg, BestPlaceService, Row, Column, BestPlaceInfo, BestPlaceItem,OwlCarouselBlock,BestPlaceHeading, } from 'styles/common.styles';

const BestPlaceSection = () => {
  const router = useRouter();
    return (
        <BestPlaceService>
            <InnerContainer className='bestPlace'>
                <BestPlaceHeading>
                    CHOOSE THE <span className='blueBg'>BEST PLACE</span> FOR YOUR CHILD 
                </BestPlaceHeading>
                 <LocationImg>
                        <Image
                        src="/location.svg"
                        alt="creative activity card image"
                        className='cubeImg'
                        width={407}
                        height={407}
                    />
                </LocationImg>
                <OwlCarouselBlock>
                    <OwlCarousel
                        className="owl-theme"
                                loop
                                items={ 1}
                        margin={1}
                        nav
                        navText={['<img src="/LeftArrow.svg">','<img src="/RightArrow.svg">']}
                    > 
                    <Div className="Takingitem">
                        <BestPlaceItem>
                             <Row className='rowItem'>
                                <Column>
                                     <BestPlaceImg>
                                            <Image
                                            src="/child.png"
                                            alt="location"
                                            className='location'
                                            width={348}
                                            height={365}
                                        />
                                    </BestPlaceImg>          
                                </Column>
                                    <Column>
                                        <BestPlaceInfo>
                                            <h2>Athletic Section</h2>
                                            <p>Children will be stimulated by friendly competition with their peers. Play spaces should be rich with subtle opportunities for competition. It has been proven that a development in active sports helps him or her learn better in school.</p>
                                        </BestPlaceInfo>
                                    </Column>    
                            </Row>
                        </BestPlaceItem>    
                    </Div>
                    <Div className="Takingitem">
                        <BestPlaceItem>
                           <Row className='rowItem'>
                                 <Column>
                                         <BestPlaceImg>
                                            <Image
                                            src="/child.png"
                                            alt="location"
                                            className='location'
                                            width={348}
                                            height={365}
                                        />
                                    </BestPlaceImg>    
                                </Column>
                                    <Column>
                                        <BestPlaceInfo>
                                            <h2>Athletic Section</h2>
                                            <p>Children will be stimulated by friendly competition with their peers. Play spaces should be rich with subtle opportunities for competition. It has been proven that a development in active sports helps him or her learn better in school.</p>
                                        </BestPlaceInfo>
                                    </Column>    
                            </Row>
                        </BestPlaceItem>
                    </Div>
                    <Div className="Takingitem">
                        <BestPlaceItem>
                           <Row className='rowItem'>
                                <Column>
                                    <BestPlaceImg>
                                            <Image
                                            src="/child.png"
                                            alt="location"
                                            className='location'
                                            width={348}
                                            height={365}
                                        />
                                    </BestPlaceImg>              
                                </Column>
                                    <Column>
                                        <BestPlaceInfo>
                                            <h2>Athletic Section</h2>
                                            <p>Children will be stimulated by friendly competition with their peers. Play spaces should be rich with subtle opportunities for competition. It has been proven that a development in active sports helps him or her learn better in school.</p>
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

export default BestPlaceSection