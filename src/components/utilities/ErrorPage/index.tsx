import React, { useState } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
// import Link from 'next/link';

import {
    ErrorPageWrapper,
    ImgBox,
    NotFoundPage
} from 'styles/errors.styles'
import Button from 'components/users/Auth/Button';

import {
  Column,
  InnerContainer,
  Row,
  PageContainer,
} from 'styles/common.styles';
import PageTitle from 'components/widgets/PageTitle';
import { useRouter } from 'next/router';

export interface ErrorPageProps {
    statusCode?: number;
}

const getError = (statusCode?: number) => {
    switch (statusCode) {
        case 404:
            return {
              title: 'Page not found',
              message:
                "The page you are looking for doesn't exist or has been moved.",
              image: '/assets/svgs/not-found-404.svg',
            };
        case 500:
            return {
                title: "Server error",
                message:
                    "Something went wrong on our end. Please contact support or try again later.",
                image: "/assets/svgs/not-found-500.svg",
            };
        default:
            return {
                title: "Bad request",
                message:
                    "Something went wrong. Please contact support or try again later.",
                image: "/assets/svgs/not-found-500.svg",
            };
    }
};

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode = 400 }: any) => {
    const router = useRouter();
    const [errTitle] = useState(getError(statusCode).title);
    const [errMsg] = useState(getError(statusCode).message);
    const [image] = useState(getError(statusCode).image);
    // console.log(router)
    const goToHomePage = () => {
        // router.push('/');
        router.back()
    }
    // '/no-results.png'
    return (
      <>
        <ErrorPageWrapper>
          <PageTitle className="pageTitle" text={errTitle} />
          <PageContainer>
            <NotFoundPage>
              <InnerContainer style={{ maxWidth: '1130px' }}>
                <PageTitle className="pageTitle" text={errMsg} />
                <Row>
                  <Column className="col-12">
                    <ImgBox className="not-found">
                      <Image
                        width={659}
                        height={230}
                        src={image}
                        alt="toy cube icon"
                      />
                    </ImgBox>
                    <Button
                      content="Go back home"
                      type="button"
                      disabled={false}
                      loading={false}
                      onClick={goToHomePage}
                    />
                  </Column>
                </Row>
              </InnerContainer>
            </NotFoundPage>
          </PageContainer>
        </ErrorPageWrapper>
      </>
    );
};

export default ErrorPage

export const ErrorSubTitleText = styled.h2`
    font-size: 2rem; 
    font-weight: 300;
    color: inherit;
    margin-bottom: .5rem;
`;
