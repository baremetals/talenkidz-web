import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Formik } from "formik";
import axios from 'axios';



import { getRegisterValidationSchema } from "src/utils/formValidation";
import TermsModal from "components/utilities/Modal/TermsModal"
import { Error, ErrorMsg } from 'components/widgets/Input';
import Provider from "../Provider"

type registerUserProps = {
    email: string;
    username: string;
    fullName: string;
    userType: string;
    password: string;
    confirmPassword?: string;
};

const initialValues = {
    fullName: "",
    username: "",
    userType: "candidate",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
};

import Button from 'components/users/Auth/Button';
import TermsButton from 'components/widgets/Button';

import {
    PageContainer,
    InnerContainer,
    Title,
    Text,
    LoginWrapper,
    LoginInner,
    FormWrap,
    FormGroup,
    Icon,
    Image,
    FormInput,
    Row,
    Column,
} from 'styles/common.styles';

import { RadioFormInput, RadioFormGroup } from '../auth-styles'

import { Message } from "public/assets/icons/Message";
import { Lock } from "public/assets/icons/Lock";
import { Profile } from "public/assets/icons/Profile";


const Register = () => {
    const router = useRouter();
    const [errorMsg, setErrorMsg] = useState<boolean>(false); 
    const [openTerms, setOpenTerms] = useState(false);  

    const handleSubmit = async ({ ...values }: registerUserProps) => {
        // console.log(values)
        await axios
            .post("/api/auth", {
                data: {
                    fullName: values.fullName,
                    username: values.username,
                    email: values.email,
                    userType: values.userType,
                    password: values.password,
                    flag: "REGISTER"
                }
            })
            .then((res) => {
                // console.log(res.data)
                if (res.data.resp === false) {
                    router.push("/auth/register/activate-email");
                }
            })
            .catch((error) => {
                initialValues.error = error.response.data.message;
                setErrorMsg(true);
                setTimeout(() => {
                    setErrorMsg(false);
                }, 10000);
            });
    };

    const handleterms = () => {
        return setOpenTerms(!openTerms);
    };
    const handleAccept = () => {
        return setOpenTerms(!openTerms);
    };

    return (
        <>
            {openTerms && <TermsModal openTerms={openTerms} >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <TermsButton style={{ width: '12rem', marginLeft: 'auto' }} onClick={() => handleAccept()}>Accept</TermsButton>
                </div>
                </TermsModal>}
            <PageContainer style={{ minHeight: '100vh' }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={getRegisterValidationSchema}
                >
                    {/* eslint-disable-next-line no-unused-vars */}
                    {({ isSubmitting, errors, touched, values }) => (
                        <InnerContainer>
                            <LoginWrapper>
                                <LoginInner>
                                    {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                                    <Title style={{ lineHeight: '1.6', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>Sign Up</Title>
                                    <FormWrap>
                                        <RadioFormGroup style={{ justifyContent: 'center', alignItems: 'center' }}>

                                            {/* <Icon><Profile /></Icon> */}
                                            <RadioFormInput type='radio' name='userType' value='candidate' 
                                            />
                                            <label>Candidate</label>
                                           
                                            <RadioFormInput type='radio' name='userType' value='organisation' 
                                            />
                                            <label>Organisation</label>
                                            {errors.userType && touched.userType && (
                                                <Error>{errors.userType}</Error>
                                            )}
                                        </RadioFormGroup>
                                        <Row>
                                            <Column>
                                                <FormGroup>

                                                    <Icon><Profile /></Icon>
                                                    <FormInput type='text' placeholder='Full name' name='fullName' />
                                                    {errors.fullName && touched.fullName && (
                                                        <Error>{errors.fullName}</Error>
                                                    )}
                                                </FormGroup>
                                            </Column>
                                            <Column>
                                                <FormGroup>
                                                    <Icon><Profile /></Icon>
                                                    <FormInput type='text' placeholder='username' name='username' />
                                                    {errors.username && touched.username && (
                                                        <Error>{errors.username}</Error>
                                                    )}
                                                </FormGroup>
                                            </Column>
                                        </Row>
                                        {/* {values.userType === 'organisation' && <FormGroup>
                                            <Icon><Profile /></Icon>
                                            <FormInput type='text' placeholder='Organisation Name' name='organisationName' values=""/>
                                            {errors.organisationName && touched.organisationName && (
                                                <Error>{errors.organisationName}</Error>
                                            )}
                                        </FormGroup>
                                        } */}
                                        
                                        <FormGroup>

                                            <Icon><Message /></Icon>
                                            <FormInput type='email' placeholder='abc@email.com' name='email' />
                                            {errors.email && touched.email && (
                                                <Error>{errors.email}</Error>
                                            )}
                                        </FormGroup>
                                        <FormGroup>

                                            <Icon><Lock /></Icon>
                                            <FormInput type='password' placeholder='Your password' name='password' />
                                            {errors.password && touched.password && (
                                                <Error>{errors.password}</Error>
                                            )}
                                        </FormGroup>
                                        <FormGroup>
                                            <Icon><Lock /></Icon>
                                            <FormInput type='password' placeholder='Confirm password' name='confirmPassword' />
                                            {errors.confirmPassword && touched.confirmPassword && (
                                                <Error>{errors.confirmPassword}</Error>
                                            )}
                                        </FormGroup>
                                        <FormGroup className='submit-button'>
                                            <Button content="Sign up" type="submit"
                                                disabled={isSubmitting} loading={isSubmitting}/>
                                        </FormGroup> 
                                        <div style={{ textAlign: 'center', margin: '2rem' }}>
                                            OR
                                        </div>
                                    
                                        <Provider />                               
                                        <FormGroup style={{ marginBottom: '0', textAlign: 'center' }}>
                                            <Text style={{ marginBottom: '0', color: '#120D26', fontSize: '.875rem' }}>Already have an account? <Link href={'/auth/login'}><a style={{ color: '#A35193' }}>Sign In</a></Link></Text>
                                            <div onClick={() => handleterms()}>
                                                <Text style={{ marginBottom: '0', color: '#120D26', fontSize: '.875rem', cursor: 'pointer' }}>By creating your account you agree to the<span style={{ color: '#A35193' }}> terms and privacy policy.</span></Text>
                                            </div>
                                        </FormGroup>
                                    </FormWrap>
                                </LoginInner>
                            </LoginWrapper>
                        </InnerContainer>
                    )}
                </Formik>
                <Image style={{ position: 'absolute', width: '20rem', bottom: '0', right: '0', zIndex: '-1' }} src="/login.png" alt="image of a parent and child" />
            </PageContainer>
            {/* <FormGroup className=''>
                <div onClick={() => {
                    const backendUrl = process.env.NEXT_PUBLIC_API_URL
                    // console.log(`${backendUrl}/connect/${}`, provider)
                    router.push(`https://1101-83-146-9-36.eu.ngrok.io/api/connect/google`)
                }}>
                    <Provider
                        provider={'google'} />
                </div>
                
            </FormGroup> */}
        </>
    );
};

export default Register;
