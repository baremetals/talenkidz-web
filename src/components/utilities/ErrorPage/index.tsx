import React, { useState } from 'react'
import styled from 'styled-components';
// import NextImage from "next/image";
// import Link from 'next/link';

import {
    ErrorPageWrapper,
    ErrorCode,
    ErrorText,
    ErrorTextWrapper,
    ErrorMessage,
    ErrorMessageWrapper,
    GoBackButton,
    NotFoundIcon
} from 'styles/errors.styles'
import { useRouter } from 'next/router';

export interface ErrorPageProps {
    statusCode?: number;
}

const getError = (statusCode?: number) => {
    switch (statusCode) {
        case 404:
            return {
                title: "Page not found",
                message:
                    "The page you are looking for doesn't exist or has been moved.",
                image: "/no-results.png"
            };
        case 500:
            return {
                title: "Server error",
                message:
                    "Something went wrong on our end. Please contact support or try again later.",
                image: "/error.png",
            };
        default:
            return {
                title: "Bad request",
                message:
                    "Something went wrong. Please contact support or try again later.",
                image: "/error.png",
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
        <ErrorPageWrapper>
            <ErrorSubTitleText>{`${errTitle}`}</ErrorSubTitleText>
            <ErrorMessageWrapper>
                <NotFoundIcon src={image} alt="404 icon" />
                <ErrorMessage>
                    <ErrorCode>
                        {statusCode}
                    </ErrorCode>
                    <ErrorTextWrapper>
                        <ErrorText>
                            {errMsg}
                        </ErrorText>
                    </ErrorTextWrapper>
                </ErrorMessage>
            </ErrorMessageWrapper>
            <GoBackButton onClick={goToHomePage}>Go back home</GoBackButton>
        </ErrorPageWrapper>
    );
};

export default ErrorPage

export const ErrorSubTitleText = styled.h2`
    font-size: 2rem; 
    font-weight: 300;
    color: inherit;
    margin-bottom: .5rem;
`;
