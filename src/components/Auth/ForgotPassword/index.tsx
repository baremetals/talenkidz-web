import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import { Formik } from "formik";
import axios from 'axios';
import { getForgotPasswordValidationSchema } from "utils/formValidation";


import { Error, ErrorMsg } from "../../Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    PageContainer,
    InnerContainer,
    Logo,
    Title,
    Text,
    Image,
    LoginWrapper,
    LoginInner,
    FormWrap,
    FormGroup,
    Icon,
    FormInput,
} from 'styles/common.styles';
import Button from 'components/Auth/Button';

import { Message } from "../../../../public/assets/icons/Message";

const initialValues = {
    email: "",
    error: "",
};
const ForgotPassword = () => {
    const router = useRouter();
    const [errorMsg, setErrorMsg] = useState(false);

    const handleSend = async ({ ...values }) => {
        await axios
            .post("/api/auth/password", {
                data: {
                    email: values.email,
                    flag: "FORGOTPASSWORD",
                },
            })
            .then((res) => {
                // console.log(res);
                if (res.status === 200) {
                    router.push("/auth/forgot-password/reset-link");
                }
            })
            .catch((err) => {
                // console.log(err.response.data.message);
                const msg: string = err.response.data.message;
                setErrorMsg(true);
                initialValues.error = msg;
                toast.error(msg);
                setTimeout(() => {
                    setErrorMsg(false);
                }, 12000);
            });
    }

    return (
        <>
            <PageContainer style={{ minHeight: '100vh' }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSend}
                    validationSchema={getForgotPasswordValidationSchema}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <InnerContainer>
                            <LoginWrapper>
                                <Link href={'/'} passHref>
                                    <Logo>
                                        <Image style={{ margin: 'auto' }} src='/logo.png' alt='site logo' />
                                    </Logo>
                                </Link>
                                <LoginInner>
                                    {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                                    <Title style={{ lineHeight: '1.6', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>Forgot Password</Title>
                                    <FormWrap>
                                        <FormGroup>
                                            <Icon><Message /></Icon>
                                            <FormInput type='email' placeholder='email address' name="email" />
                                            {errors.email && touched.email && (
                                                <Error>{errors.email}</Error>
                                            )}
                                        </FormGroup>
                                        <FormGroup className='submit-button'>
                                            <Button content="Send" type="submit"
                                                disabled={isSubmitting} loading={isSubmitting} />
                                        </FormGroup>
                                        <FormGroup style={{ marginBottom: '0', textAlign: 'center' }}>
                                            <Text style={{ marginBottom: '0', color: '#120D26', fontSize: '.875rem' }}>Return to <Link href={'/auth/login'}><a style={{ color: '#A35193' }}>Sign In</a></Link> &nbsp; | &nbsp; <Link href={'/auth/register'}><a style={{ color: '#A35193' }}>Sign up</a></Link></Text>
                                        </FormGroup>
                                    </FormWrap>
                                </LoginInner>
                            </LoginWrapper>
                        </InnerContainer>
                    )}
                </Formik>
                <Image style={{ position: 'absolute', width: '20rem', bottom: '0', right: '0', zIndex: '-1' }} src="/login.png" alt="image of a parent and child" />
            </PageContainer>
            <ToastContainer />
        </>
    );
}

export default ForgotPassword;
