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

        }
    },
};


import { InnerContainer, Div, HeroInfo, HeroSection, HeroItem, HeroButtonBlock, OwlCarouselsBlock, HeroHeading, LeftImg, RightImg } from 'styles/common.styles';

const  HeroSections = () => {
  const router = useRouter();
    return (
        <HeroSection>
            <InnerContainer>
                <LeftImg>
                        <Image
                        src="/cube.svg"
                        alt="creative activity card image"
                        className='cubeImg'
                        width={378}
                        height={378}
                    />
                </LeftImg>
                <HeroHeading>
                   find your child’s future <span className='WhiteBg'>career prospects</span>
                </HeroHeading>
                <HeroInfo>
                    stay responsible for shaping their path
                </HeroInfo>
                <OwlCarouselsBlock>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        items={ 1}
                        margin={1}
                        {...options}
                    > 
                    <Div className="Takingitem">
                        <HeroItem>
                                <Image
                                    src="/herobanner.png"
                                    alt="creative activity card image"
                                    width={814}
                                    height={548}
                                />
                                <HeroButtonBlock>
                                    <Button
                                        content="Start now"
                                        type="submit" disabled={false} loading={false}>
                                    </Button>
                                </HeroButtonBlock>
                        </HeroItem>    
                    </Div>
                    <Div className="Takingitem">
                        <HeroItem>
                            <Image
                                src="/herobanner.png"
                                alt="creative activity card image"
                                width={814}
                                height={548}
                                />
                                <HeroButtonBlock>
                                    <Button
                                        content="Start now"
                                        type="submit" disabled={false} loading={false}>
                                    </Button>
                                </HeroButtonBlock>
                        </HeroItem>
                    </Div>
                    <Div className="Takingitem">
                        <HeroItem>
                            <Image
                                src="/herobanner.png"
                                alt="creative activity card image"
                                width={814}
                                height={548}
                                />
                            <HeroButtonBlock>
                                    <Button
                                        content="Start now"
                                        type="submit" disabled={false} loading={false}>
                                    </Button>
                                </HeroButtonBlock>
                        </HeroItem>
                    </Div>
                    </OwlCarousel>
                </OwlCarouselsBlock>
                   
                 <RightImg>
                    <Image
                        src="/throfy.svg"
                        alt="creative activity card image"
                        width={396}
                        height={396}
                    />
                </RightImg>
             </InnerContainer>
       </HeroSection>
          );
}

export default HeroSections
