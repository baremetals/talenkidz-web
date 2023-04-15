import React from 'react'
// import Link from 'next/link';
import Image from 'next/image';
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

// import Button from 'components/Auth/Button';
import PageTitle from 'components/widgets/PageTitle';


import { AboutPage, GameType, ImgBox, SectionBlock, KeepScrolling, ShapeImageBlock, ShapeImage } from './styles';

import {
  Column,
  InnerContainer,
  Row,
  PageContainer,
} from 'styles/common.styles';
import Markdown from 'markdown-to-jsx';



type Attributes = {
  data: {
    spanKey: string
    mainTitle: string;
    puzzleImage: string;
    cloudImage: string;
    graphImage: string;
    firstBlock: {
      partOne: string;
      partTwo: string;
      partThree: string;
      partFour: string;
      partFive: string;
    };
    secondBlock: {
      title: string;
      partOne: string;
      partTwo: string;
      partThree: string;
      partFour: string;
      partFive: string;
    };
    thirdBlock: {
      title: string;
      start: string;
      in: string;
      birth: string;
      year: number;
      partOne: string;
      partTwo: string;
      partThree: string;
    };
    fourthBlock: string;
    fithBlock: {
      title: string;
      partOne: string;
      partTwo: string;
      partThree: string;
    };
    lastBlock: {
      partOne: string;
      partTwo: string;
      partThree: string;
      partFour: string;
      partFive: string;
    };
    firstQuote: string;
    firstQuoteAuthor: string;
    secondQuote: string;
    secondQuoteAuthor: string;
  };
};

const AboutUs = ({data}: Attributes) => {
    // console.log(data.firstBlock)
    return (
      <PageContainer>
        <AboutPage>
          <InnerContainer style={{ maxWidth: '1130px' }}>
            <PageTitle
              className="pageTitle aboutpage"
              text={[<span key={data?.spanKey}>{data?.mainTitle}</span>]}
            />

            <Row className="gametypeBlock">
              <Column>
                <GameType>
                  <ImgBox className="gameImg">
                    <Image
                      width={259}
                      height={259}
                      src="/assets/svgs/game-one.svg"
                      alt="puzzle icon"
                    />
                  </ImgBox>
                  <p>{data.puzzleImage}</p>
                </GameType>
              </Column>
              <Column>
                <GameType>
                  <ImgBox className="gameImg">
                    <Image
                      width={259}
                      height={259}
                      src="/assets/svgs/game-two.svg"
                      alt="cloud icon"
                    />
                  </ImgBox>
                  <p>{data?.cloudImage}</p>
                </GameType>
              </Column>
              <Column>
                <GameType>
                  <ImgBox className="gameImg">
                    <Image
                      width={198}
                      height={224}
                      src="/assets/images/game-three.png"
                      alt="graph icon"
                    />
                  </ImgBox>
                  <p>{data?.graphImage}</p>
                </GameType>
              </Column>
            </Row>

            <SectionBlock className="TalentedKidBlock">
              <Row className="pageHeader">
                <PageTitle
                  className="pageTitle"
                  text={[
                    data?.firstBlock?.partOne,
                    <span key={data?.spanKey}>
                      {data?.firstBlock?.partTwo}
                    </span>,
                    data?.firstBlock?.partThree,
                  ]}
                />
              </Row>
              <Row className="row">
                <Column>
                  <div className="TalentedKidInfo">
                    <p style={{ maxWidth: '400px' }}>
                      {data?.firstBlock?.partFour}
                    </p>
                  </div>
                </Column>
                <Column>
                  <div className="TalentedKidInfo">
                    <p>{data?.firstBlock?.partFive}</p>
                  </div>
                </Column>
              </Row>
            </SectionBlock>

            <SectionBlock className="WhyCreativeCareer">
              <ImgBox className="WhyCreativeCareerIcon">
                <Image
                  width={275}
                  height={275}
                  src="/assets/svgs/creativeCareer.svg"
                  alt="toy cube icon"
                />
              </ImgBox>
              <Row>
                <Column>
                  <PageTitle
                    className="pageTitle"
                    text={[data?.secondBlock?.title]}
                  />
                  <p>{data?.secondBlock?.partOne}</p>
                </Column>
                <Column>
                  <p>{data?.secondBlock?.partTwo}</p>
                  <p>{data?.secondBlock?.partThree}</p>
                  <p className="blue">{data?.secondBlock?.partFour}</p>
                  <p className="blue">{data?.secondBlock?.partFive}</p>
                </Column>
              </Row>
            </SectionBlock>

            <SectionBlock className="AllStart">
              <Row className="pageHeader">
                <PageTitle
                  className="pageTitle"
                  text={[
                    data?.thirdBlock?.title,
                    <span key={data?.spanKey}>{data?.thirdBlock?.start}</span>,
                  ]}
                />
              </Row>
              <Row>
                <Column>
                  <div className="inYears">
                    <div className="">
                      {data?.thirdBlock?.in}{' '}
                      <span>{data?.thirdBlock?.birth}</span>
                    </div>
                    <div className="">{data?.thirdBlock?.year}</div>
                  </div>
                  <KeepScrolling>
                    <label>Keep scrolling</label>
                    <ImgBox className="downArrow">
                      <Image
                        width={47}
                        height={47}
                        src="/assets/svgs/downArrow.svg"
                        alt=""
                      />
                    </ImgBox>
                  </KeepScrolling>
                </Column>
                <Column>
                  <div className="AllStarInfo">
                    <p>{data?.thirdBlock?.partOne}</p>
                  </div>
                  <div className="AllStarInfo">
                    <p>{data?.thirdBlock?.partTwo}</p>
                  </div>
                  <div className="AllStarInfo">
                    <p>{data?.thirdBlock?.partThree}</p>
                  </div>
                </Column>
              </Row>
            </SectionBlock>

            <SectionBlock className="TestimonialBlock">
              <Row className="row">
                <Column className="column-7">
                  <div className="TestimonialInfo">
                    <Image
                      width={82}
                      height={73}
                      src="/assets/svgs/quotes.svg"
                      alt=""
                    />
                    <p>{data?.firstQuote}</p>
                    <label>{data?.firstQuoteAuthor}</label>
                  </div>
                </Column>
                <Column className="column-5">
                  <ShapeImageBlock>
                    <ShapeImage>
                      <Image
                        src="/assets/images/image92.jpg"
                        alt="question"
                        width={400}
                        height={400}
                      />
                    </ShapeImage>
                  </ShapeImageBlock>
                </Column>
              </Row>

              <Row className="TestimonialInfoRow">
                <Column className="column-5">
                  <ShapeImageBlock>
                    <ShapeImage>
                      <Image
                        src="/assets/images/image90.png"
                        alt="question"
                        width={400}
                        height={400}
                      />
                    </ShapeImage>
                  </ShapeImageBlock>
                </Column>
                <Column className="column-7">
                  <div className="TestimonialText">
                    <Markdown>{data?.fourthBlock}</Markdown>
                  </div>
                </Column>
              </Row>

              <Row className="row">
                <Column className="column-7">
                  <div className="TestimonialInfo">
                    <Image
                      width={82}
                      height={73}
                      src="/assets/svgs/quotes.svg"
                      alt=""
                    />
                    <p>{data?.secondQuote}</p>
                    <label>{data?.secondQuoteAuthor}</label>
                  </div>
                </Column>
                <Column className="column-5">
                  <ShapeImageBlock>
                    <ShapeImage>
                      <Image
                        src="/assets/images/image91.png"
                        alt="question"
                        width={400}
                        height={400}
                      />
                    </ShapeImage>
                  </ShapeImageBlock>
                </Column>
              </Row>
            </SectionBlock>

            {/*  */}
            <SectionBlock className="CapacityBlock">
              <ImgBox className="CapacityIcon">
                <Image
                  width={389}
                  height={382}
                  src="/assets/svgs/trophy.svg"
                  alt=""
                />
              </ImgBox>
              <Row>
                <Column>
                  <h2>{data?.fithBlock?.title}</h2>
                </Column>
              </Row>
              <Row>
                <Column>
                  <p>{data?.fithBlock?.partOne}</p>
                </Column>
                <Column>
                  <p>{data?.fithBlock?.partTwo}</p>
                </Column>
              </Row>
              <Row>
                <Column>
                  <p className="ColorBlue">{data?.fithBlock?.partThree}</p>
                </Column>
              </Row>
            </SectionBlock>

            {/*  */}

            <SectionBlock className="TalentKidsApproach">
              <Row className="pageHeader">
                <PageTitle
                  className="pageTitle"
                  text={[
                    data?.lastBlock?.partOne,
                    <span key={data?.spanKey}>{data?.lastBlock?.partTwo}</span>,
                  ]}
                />
              </Row>
              <Row>
                <Column className="column-6">
                  <div className="ApproachStep">
                    <span>1</span>
                    <p>{data?.lastBlock?.partThree}</p>
                  </div>
                </Column>
                <Column className="column-6">
                  <div className="ApproachStep">
                    <span>2</span>
                    <p>{data?.lastBlock?.partFour}</p>
                  </div>
                </Column>
              </Row>
              <Row className="LastStep">
                <Column>
                  <div className="ApproachStep">
                    <span>3</span>
                    <p>{data?.lastBlock?.partFive}</p>
                  </div>
                </Column>
              </Row>
            </SectionBlock>
          </InnerContainer>
        </AboutPage>
      </PageContainer>
    );
}

export default AboutUs
