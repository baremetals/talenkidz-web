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
    PageContainer,
    AlignCentered,
} from 'styles/common.styles';
import Button from 'components/Button';





const CreateListing = () => {

    const [formType, setFormType] = useState('activity')
    const { user: user } = useAppSelector(isUser);
    
    return (
        <>
            <NavBar />
            <PageContainer style={{ minHeight: '100vh' }}>
                <InnerContainer>
                    <AlignCentered>
                        <Button className={formType !== 'activity' ? 'primary-outline' : ''} style={{ margin: '0 .5rem', minWidth: '180px' }} onClick={() => setFormType('activity')}>List An Activity</Button>
                        <Button className={formType !== 'event' ? 'primary-outline' : ''} style={{ margin: '0 .5rem', minWidth: '180px' }} onClick={() => setFormType('event')}>List An Event</Button>
                    </AlignCentered>
                </InnerContainer>
                <Form formType={formType} id={user?.id as string}/>
            </PageContainer>
            <Footer />
        </>
    )
}

export default CreateListing
