import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';


import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import Form from './Form';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';


import {
    InnerContainer,
    Row,
    Column,
    PageContainer,
    WidgetPanel,
    WidgetPanelTitle,
} from 'styles/common.styles';





const CreateListing = () => {

    const [formType, setFormType] = useState('activity')
    const { user: user } = useAppSelector(isUser);
    
    return (
        <>
            <NavBar />
            <PageContainer style={{ minHeight: '100vh' }}>
                <InnerContainer>
                    <Row>
                        <Column>
                            <Row>
                                <WidgetPanel onClick={() => setFormType('activity')}>
                                    <WidgetPanelTitle>List An Activity</WidgetPanelTitle>
                                </WidgetPanel>
                            </Row>
                        </Column>
                        <Column>
                            <Row>
                                <WidgetPanel onClick={() => setFormType('event')}>
                                    <WidgetPanelTitle>List An Event</WidgetPanelTitle>
                                </WidgetPanel>
                            </Row>
                        </Column>
                    </Row>
                </InnerContainer>
                <Form formType={formType} id={user?.id as string}/>
            </PageContainer>
            <Footer />
        </>
    )
}

export default CreateListing
