
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik } from "formik";
import axios from 'axios';
import { getLoginValidationSchema } from "utils/formValidation";

// Redux imports
import { useAppDispatch } from "app/hooks";
import { setSuccess, setError } from "features/ui/reducers";
import { setUser } from "features/auth";

import Button from 'components/Auth/Button';
import { Error, ErrorMsg } from "../../Input";
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

    FlexGroup,
    Checkbox,
    FormLabel,
    Image
} from 'styles/common.styles';

import { Message } from "../../../../public/assets/icons/Message";
import { Lock } from "../../../../public/assets/icons/Lock";
import Provider from '../Provider';


type logingProps = {
    usernameOrEmail: string;
    password: string;
}
const initialValues = {
    usernameOrEmail: "",
    password: "",
    error: "",
};

const Login = () => {
    const [errorMsg, setErrorMsg] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleSubmit = async ({ ...values }: logingProps) => {
        let err: string;
        // console.log(values)

        await axios.post("/api/auth", {
            data: {
                usernameOrEmail: values.usernameOrEmail,
                password: values.password,
                flag: "LOGIN"
            }
        })
            .then((res) => {
                // console.log(res);
                if (res.data.data === null) {
                    // console.log('I am the data', res.data.error);
                    const errMsgData = res.data.error
                    if (errMsgData.name === 'ValidationError') {
                        err = "incorrect details provided"
                        initialValues.error = err;
                        setErrorMsg(true);
                        dispatch(setError(err));
                    } else {
                        err = "something went wrong please try again later"
                        initialValues.error = err;
                        setErrorMsg(true);
                        dispatch(setError(err));
                    }                   
                }
                if (res.status === 200 && res.data.id){
                    dispatch(setSuccess('login successful'));
                    dispatch(setUser(res.data));
                    if (res.data.userType === 'organisation'){
                        router.push(`/account/${res.data.username}`);
                    }
                    router.push(`/user-profile/${res.data.username}`);
                }
            })
            .catch((error) => {
                // console.log(error)
                err = "something went wrong please try again later"
                initialValues.error = err;
                setErrorMsg(true);
                dispatch(setError(err));
            })
    };
    return (
        <>
            <PageContainer style={{ minHeight: '100vh' }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={getLoginValidationSchema}
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
                                    <Title style={{ lineHeight: '1.6', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>Sign In</Title>
                                    <FormWrap>
                                        <FormGroup>
                                            <Icon><Message /></Icon>
                                            <FormInput type='text' placeholder='username or email' name='usernameOrEmail' />
                                            {errors.usernameOrEmail && touched.usernameOrEmail && (
                                                <Error>{errors.usernameOrEmail}</Error>
                                            )}
                                        </FormGroup>
                                        <FormGroup>
                                            <Icon><Lock /></Icon>
                                            <FormInput type='password' placeholder='your password' name='password' />
                                            {errors.password && touched.password && (
                                                <Error>{errors.password}</Error>
                                            )}
                                        </FormGroup>
                                        <FormGroup>
                                            <FlexGroup>
                                                <Checkbox>
                                                    <FormInput id='RememberMe' className='checkbox' type="checkbox" />
                                                    <FormLabel htmlFor="RememberMe">Remember Me</FormLabel>
                                                </Checkbox>
                                                <Link href={'/auth/forgot-password'}>
                                                    Forgot Password?
                                                </Link>
                                            </FlexGroup>
                                        </FormGroup>
                                        <FormGroup className='submit-button'>
                                            <Button content="Sign in" type="submit"
                                                disabled={isSubmitting} loading={isSubmitting} />
                                        </FormGroup>
                                        <div style={{ textAlign: 'center', margin: '2rem' }}>
                                            OR
                                        </div>
                                        <Provider />
                                        <FormGroup style={{ marginBottom: '0', textAlign: 'center' }}>
                                            <Text style={{ marginBottom: '0', color: '#120D26', fontSize: '.875rem' }}>Don’t have an account?  <Link href={'/auth/register'}><a style={{ color: '#A35193' }}>Sign up</a></Link></Text>
                                        </FormGroup>
                                    </FormWrap>
                                </LoginInner>
                            </LoginWrapper>
                        </InnerContainer>
                    )}
                </Formik>
                <Image style={{ position: 'absolute', width: '20rem', bottom: '0', right: '0', zIndex: '-1' }} src="/login.png" alt="image of a parent and child" />
            </PageContainer>
        </>
    );
}

export default Login
