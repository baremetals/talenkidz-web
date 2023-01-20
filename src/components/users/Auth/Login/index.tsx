
import React from 'react'

import {
    PageContainer,
    Image
} from 'styles/common.styles';
import LoginForm from './LoginForm';


const Login: React.FC = () => {
    
    return (
            <PageContainer style={{ minHeight: '100vh' }}>
                <LoginForm />
                <Image style={{ position: 'absolute', width: '20rem', bottom: '0', right: '0', zIndex: '-1' }} src="/login.png" alt="image of a parent and child" />
            </PageContainer>
    );
}

export default Login
