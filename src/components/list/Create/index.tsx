import React, { useContext, useState } from 'react'
// import Link from 'next/link';
// import { useRouter } from 'next/router';

import Form from './Form';
import Footer from 'components/Layout/Footer';
import NavBar from 'components/Layout/NavBar';


import {
    InnerContainer,
    PageContainer,
    AlignCentered,
} from 'styles/common.styles';
import Button from 'components/widgets/Button';
import { AuthContext } from 'src/context/AuthContext';





const CreateListing = () => {

    const [formType, setFormType] = useState('activity')
    const { state } = useContext(AuthContext);
    const user = state.user;


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
