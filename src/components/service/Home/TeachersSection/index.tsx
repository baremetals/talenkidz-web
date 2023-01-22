import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from 'components/users/Auth/Button';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), {
  ssr: false,
});

import {
  InnerContainer,
  TeachersService,
  TeacherItem,
  OwlCarouselBlock,
  TeacherHeading,
  TeacherInfo,
  TeacherExperience,
  StarBlock,
  ChessImageBlock,
} from 'styles/common.styles';
import { Div } from '../home.styles';

const TeachersSection = () => {
  const router = useRouter();

  const options = {
    margin: 30,
    responsiveClass: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <TeachersService>
      <ChessImageBlock>
        <Image
          src="/Chess.svg"
          alt="creative activity card image"
          width={485}
          height={485}
        />
      </ChessImageBlock>
      <InnerContainer>
        <TeacherHeading>
          Take classes with the teacher you{' '}
          <span className="blueBg">prefer</span>
        </TeacherHeading>
        <OwlCarouselBlock>
          <OwlCarousel
            {...options}
            className="owl-theme"
            loop
            items={2}
            margin={40}
            nav
            navText={[
              '<img src="/LeftArrow.svg">',
              '<img src="/RightArrow.svg">',
            ]}
          >
            <Div className="Takingitem">
              <TeacherItem>
                <Image
                  src="/teacher.png"
                  alt="creative activity card image"
                  width={417}
                  height={458}
                />
                <TeacherInfo>
                  <h2>Kate Smith</h2>
                  <p>bases on developing minors creative skills </p>
                </TeacherInfo>
                <TeacherExperience>
                  <div className="jobExprince">
                    <h3>10 years </h3>
                    <p>job experience </p>
                  </div>
                  <div className="ContentParent">
                    <h3>150 more</h3>
                    <p>content parents </p>
                  </div>
                </TeacherExperience>
                <StarBlock>
                  <div className="star">
                    <Image src="/Star.svg" alt="Star" width={44} height={44} />
                    <span>5,0</span>
                  </div>
                  <div className="userImg">
                    <ul>
                      <li>
                        <Image
                          src="/user4.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user2.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user3.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user4.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user1.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                    </ul>
                    <a href="#">
                      see more
                      <Image
                        src="/seemore.svg"
                        alt="use"
                        width={77}
                        height={4}
                      />
                    </a>
                  </div>
                </StarBlock>
                <Button
                  content="Take a class"
                  type="submit"
                  disabled={false}
                  loading={false}
                ></Button>
              </TeacherItem>
            </Div>
            <Div className="Takingitem">
              <TeacherItem>
                <Image
                  src="/teacher.png"
                  alt="creative activity card image"
                  width={417}
                  height={458}
                />
                <TeacherInfo>
                  <h2>Jaims Scott</h2>
                  <p>sport teacher with professional education</p>
                </TeacherInfo>
                <TeacherExperience>
                  <div className="jobExprince">
                    <h3>10 years </h3>
                    <p>job experience </p>
                  </div>
                  <div className="ContentParent">
                    <h3>150 more</h3>
                    <p>content parents </p>
                  </div>
                </TeacherExperience>
                <StarBlock>
                  <div className="star">
                    <Image src="/Star.svg" alt="Star" width={44} height={44} />
                    <span>5,0</span>
                  </div>
                  <div className="userImg">
                    <ul>
                      <li>
                        <Image
                          src="/user4.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user2.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user3.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user4.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user1.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                    </ul>
                    <a href="#">
                      see more
                      <Image
                        src="/seemore.svg"
                        alt="use"
                        width={77}
                        height={4}
                      />
                    </a>
                  </div>
                </StarBlock>
                <Button
                  content="Take a class"
                  type="submit"
                  disabled={false}
                  loading={false}
                ></Button>
              </TeacherItem>
            </Div>
            <Div className="Takingitem">
              <TeacherItem>
                <Image
                  src="/teacher.png"
                  alt="creative activity card image"
                  width={417}
                  height={458}
                />
                <TeacherInfo>
                  <h2>Kate Smith</h2>
                  <p>bases on developing minors creative skills </p>
                </TeacherInfo>
                <TeacherExperience>
                  <div className="jobExprince">
                    <h3>10 years </h3>
                    <p>job experience </p>
                  </div>
                  <div className="ContentParent">
                    <h3>150 more</h3>
                    <p>content parents </p>
                  </div>
                </TeacherExperience>
                <StarBlock>
                  <div className="star">
                    <Image src="/Star.svg" alt="Star" width={44} height={44} />
                    <span>5,0</span>
                  </div>
                  <div className="userImg">
                    <ul>
                      <li>
                        <Image
                          src="/user4.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user2.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user3.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user4.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                      <li>
                        <Image
                          src="/user1.png"
                          alt="use"
                          width={50}
                          height={50}
                        />
                      </li>
                    </ul>
                    <a href="#">
                      see more
                      <Image
                        src="/seemore.svg"
                        alt="use"
                        width={77}
                        height={4}
                      />
                    </a>
                  </div>
                </StarBlock>
                <Button
                  content="Take a class"
                  type="submit"
                  disabled={false}
                  loading={false}
                ></Button>
              </TeacherItem>
            </Div>
          </OwlCarousel>
        </OwlCarouselBlock>
      </InnerContainer>
    </TeachersService>
  );
};

export default TeachersSection;
