/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';


import { useAppSelector } from "src/app/hooks";
import { isUser } from "src/features/auth/selectors";
import StripeForm from './stripe-form';

import Footer from 'components/Layout/Footer';
import NavBar from 'components/Layout/NavBar';



import {
    InnerContainer,
    // Row,
    // Column,
    PageContainer,
    // WidgetPanel,
    // WidgetPanelTitle,
    AlignCentered,
    PaymentOuter,
    CardStyle,
    PaymentInner,
    // PaymentDetail,
    PaymentForm,
    // Paragraph,
    // H6,
    H3,
    StepTabs,
    StepItem,
    StepHead,
    Title,
} from 'styles/common.styles';

import Button from 'components/widgets/Button';





const CreateListing = () => {

    // const [formType, setFormType] = useState('activity')
    const { user: _user } = useAppSelector(isUser);

    return (
        <>
            <NavBar />
            <PageContainer style={{ minHeight: '100vh' }}>
                <InnerContainer>
                    <Title style={{ marginBottom: '2rem', textAlign: 'center' }}>Payment method</Title>
                    <PaymentOuter>
                        <AlignCentered style={{ minWidth: '100%' }}>
                            <CardStyle style={{ minWidth: '100%' }}>
                                <StepTabs>
                                    <StepItem>
                                        <StepHead>1</StepHead>
                                        <H3>Card Details</H3>
                                    </StepItem>
                                    <StepItem>
                                        <StepHead>2</StepHead>
                                        <H3>Form Reviews</H3>
                                    </StepItem>
                                    <StepItem>
                                        <StepHead>3</StepHead>
                                        <H3>Authenticate OPT</H3>
                                    </StepItem>
                                    <StepItem>
                                        <StepHead>4</StepHead>
                                        <H3>Create code</H3>
                                    </StepItem>
                                </StepTabs>
                                {/* <Button className={formType !=='activity' ? 'primary-outline' : ''} style={{margin:'0 .5rem', minWidth:'180px' }} onClick={() => setFormType('activity')}>
                                    List An Activity
                                </Button>
                                <Button className={formType !=='event' ? 'primary-outline' : ''}  style={{margin:'0 .5rem', minWidth:'180px'}} onClick={() => setFormType('event')}>
                                    List An Event
                                </Button> */}
                            </CardStyle>
                        </AlignCentered>

                        <PaymentInner>

                            {/* <PaymentDetail>
                                <CardStyle>
                                    <H6>Step 2</H6>
                                    <H3>Application reviews</H3>
                                    <Paragraph style={{margin: '0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
                                </CardStyle>
                            </PaymentDetail> */}

                            <PaymentForm style={{ minWidth: '100%' }}>
                                <CardStyle>
                                    <StripeForm />
                                </CardStyle>
                            </PaymentForm>

                        </PaymentInner>
                    </PaymentOuter>
                </InnerContainer>
            </PageContainer>
            <Footer />
        </>
    )
}

export default CreateListing
