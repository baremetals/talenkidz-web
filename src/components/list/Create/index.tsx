import React, { useState } from 'react'
// import Link from 'next/link';
// import { useRouter } from 'next/router';


import { useAppSelector } from "src/app/hooks";
import { isUser } from "src/features/auth/selectors";

import Form from './Form';
import Footer from 'components/Layout/Footer';
import NavBar from 'components/Layout/NavBar';


import {
    InnerContainer,
    PageContainer,
    AlignCentered,
} from 'styles/common.styles';
import Button from 'components/widgets/Button';





const CreateListing = () => {

    const [formType, setFormType] = useState('activity')
    const { user: user } = useAppSelector(isUser);
    console.log(user)

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
                <Form formType={formType} id={user?.orgId as string} />
            </PageContainer>
            <Footer />
        </>
    )
}

export default CreateListing
