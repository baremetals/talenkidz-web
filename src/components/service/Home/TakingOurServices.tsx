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

import { InnerContainer,Div, TakingOurService, OurServiceItem,ButtonBlock,OwlCarouselBlock,OurServicePageHeading,LeftImg,RightImg } from 'styles/common.styles';

const TakingOurServices = () => {
  const router = useRouter();
    return (
        <TakingOurService>
             
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
           
                <OurServicePageHeading>
                    expand your child’s circle <span className='WhiteBg'> taking our service </span>
                </OurServicePageHeading>
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
                        <OurServiceItem>
                                <Image
                                    src="/nsplash.jpg"
                                    alt="creative activity card image"
                                    width={814}
                                    height={548}
                                />
                                <ButtonBlock>
                                    <Button
                                        content="Take a service"
                                        type="submit" disabled={false} loading={false}>
                                    </Button>
                                </ButtonBlock>
                        </OurServiceItem>    
                    </Div>
                    <Div className="Takingitem">
                        <OurServiceItem>
                            <Image
                                src="/nsplash.jpg"
                                alt="creative activity card image"
                                width={814}
                                height={548}
                                />
                                <ButtonBlock>
                                    <Button
                                        content="Take a service"
                                        type="submit" disabled={false} loading={false}>
                                    </Button>
                                </ButtonBlock>
                        </OurServiceItem>
                    </Div>
                    <Div className="Takingitem">
                        <OurServiceItem>
                            <Image
                                src="/nsplash.jpg"
                                alt="creative activity card image"
                                width={814}
                                height={548}
                                />
                            <ButtonBlock>
                                    <Button
                                        content="Take a service"
                                        type="submit" disabled={false} loading={false}>
                                    </Button>
                                </ButtonBlock>
                        </OurServiceItem>
                    </Div>
                    </OwlCarousel>
                </OwlCarouselBlock>
                   
                 <RightImg>
                    <Image
                        src="/throfy.svg"
                        alt="creative activity card image"
                        width={396}
                        height={396}
                    />
                </RightImg>
             </InnerContainer>
       </TakingOurService>
          );
}

export default TakingOurServices