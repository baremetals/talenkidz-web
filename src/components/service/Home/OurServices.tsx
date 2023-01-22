import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from 'components/users/Auth/Button';
import {
  InnerContainer,
  OurService,
  Heading,
  SubTitle,
  H2Title,
  Row,
  Column,
  Card,
  CardThumb,
  CardBody,
  // CardImage,
  CardTitle,
  // Image,
} from 'styles/common.styles';

const OurServices = () => {
  const router = useRouter();
  return (
    <OurService>
      <InnerContainer>
        <Heading>
          <SubTitle>Our Services</SubTitle>
          <H2Title>
            Post Your Event Or Activity
            <br />
            Register Today
          </H2Title>
        </Heading>
        <Row>
          <Column>
            <Card>
              <CardThumb>
                <Image
                  src="/creative.jpg"
                  alt="creative activity card image"
                  width={420}
                  height={500}
                />
              </CardThumb>
              <CardBody>
                {/* <CardImage src='/sr-1.png' /> */}
                <CardTitle>Creative Activities </CardTitle>
                <div onClick={() => router.push('/auth/register')}>
                  <Button
                    content="Register"
                    type="button"
                    disabled={false}
                    loading={false} BtnNames={''}                  />
                </div>
              </CardBody>
            </Card>
          </Column>
          <Column>
            <Card>
              <CardThumb>
                <Image
                  src="/sport.jpg"
                  alt="sports activity card image"
                  width={420}
                  height={500}
                />
              </CardThumb>
              <CardBody>
                {/* <CardImage src='/sr-2.png' /> */}
                <CardTitle>Sporting Activities</CardTitle>
                <div onClick={() => router.push('/auth/register')}>
                  <Button
                    content="Register"
                    type={undefined}
                    disabled={false}
                    loading={false} BtnNames={''}                  />
                </div>
              </CardBody>
            </Card>
          </Column>
          <Column>
            <Card>
              <CardThumb>
                <Image
                  src="/baby-edu.jpg"
                  alt="education activity card image"
                  // width="400%"
                  // height="250%"
                  width={400}
                  height={250}
                />
              </CardThumb>
              <CardBody>
                {/* <CardImage src='/sr-3.png' /> */}
                <CardTitle>Educational Activities</CardTitle>
                <div onClick={() => router.push('/auth/register')}>
                  <Button
                    content="Register"
                    type="button"
                    disabled={false}
                    loading={false} BtnNames={''}                  />
                </div>
              </CardBody>
            </Card>
          </Column>
        </Row>
      </InnerContainer>
    </OurService>
  );
};

export default OurServices;
