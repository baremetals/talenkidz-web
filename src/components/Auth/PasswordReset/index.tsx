import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from 'axios';
import { Formik } from "formik";
import { getResetPasswordValidationSchema } from "utils/formValidation";

// Redux imports
// import { useAppDispatch } from "app/hooks";
// import { setUser } from "features/auth";

import { Error, ErrorMsg } from "../../Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Lock } from "../../../../public/assets/icons/Lock";

import {
    PageContainer,
    InnerContainer,
    Logo,
    Title,
    Text,
    LoginWrapper,
    LoginInner,
    FormWrap,
    FormGroup,
    Icon,
    FormInput,
    Image
} from 'styles/common.styles';
import Button from '../Button';

const initialValues = {
    newPassword: "",
    confirmPassword: "",
    error: "",
};
const ResetPassword = () => {
    const router = useRouter();
    // const dispatch = useAppDispatch();
    const [errorMsg, setErrorMsg] = useState(false);

    const handleSubmit = async ({ ...values }: any) => {
        const { code } = router.query;
        // console.log(values);

        await axios
            .post("/api/auth/password", {
                data: {
                    password: values.newPassword,
                    passwordConfirmation: values.confirmPassword,
                    code,
                    flag: "RESETPASSWORD",
                },
            })
            .then((res) => {
                // console.log(res);
                if (res?.data && res.status === 200) {
                    toast.success('Your password has been reset');
                    setTimeout(() => {
                        router.push(`/auth/login`);
                    }, 5000);
                }
            })
            .catch((err) => {
                // console.log(err.response.data.message);
                if (err.response.data.message.includes('Incorrect code provided')) {
                    const msg: string = 'Your reset password link is no longer valid. Please make a new request.'
                    initialValues.error = msg;
                    toast.error(msg);
                    setTimeout(() => {
                        router.push(`/auth/forgot-password`);
                    }, 5000);
                } else {
                    const msg: string = "Sorry something went wrong please try again later.";
                    initialValues.error = msg;
                    setErrorMsg(true);
                    toast.error(msg);
                    setTimeout(() => {
                        setErrorMsg(false);
                        router.push(`/auth/forgot-password`);
                    }, 7000);
                }
            });
    };
    return (
        <>
            <PageContainer style={{ minHeight: '100vh' }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={getResetPasswordValidationSchema}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <InnerContainer>
                            <LoginWrapper>
                                <LoginInner>
                                    {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                                    <Title style={{ lineHeight: '1.6', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>Reset Password</Title>
                                    <FormWrap>
                                        <FormGroup>
                                            <Icon><Lock /></Icon>
                                            <FormInput type='password' placeholder='New Password' name='newPassword' />
                                            {errors.newPassword && touched.newPassword && (
                                                <Error>{errors.newPassword}</Error>
                                            )}
                                        </FormGroup>
                                        <FormGroup>
                                            <Icon><Lock /></Icon>
                                            <FormInput type='password' placeholder='Confirm Password' name='confirmPassword' />
                                            {errors.confirmPassword && touched.confirmPassword && (
                                                <Error>{errors.confirmPassword}</Error>
                                            )}
                                        </FormGroup>
                                        <FormGroup className='submit-button'>
                                            <Button content="Reset" type="submit"
                                                disabled={isSubmitting} loading={isSubmitting} />
                                        </FormGroup>
                                        <FormGroup style={{ marginBottom: '0', textAlign: 'center' }}>
                                            <Text style={{ marginBottom: '0', color: '#120D26', fontSize: '.875rem' }}>Back to login?  <Link href={'/auth/login'}><a style={{ color: '#A35193' }}>Sign in</a></Link></Text>
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
};

export default ResetPassword;
