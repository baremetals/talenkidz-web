import React, { useCallback, useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import { Formik } from "formik";
import axios from 'axios';
import { getForgotPasswordValidationSchema } from "src/utils/formValidation";


import { Error, ErrorMsg } from "components/widgets/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    InnerContainer,
    Title,
    Text,
} from 'styles/common.styles';
import Button from 'components/users/Auth/Button';

import { Message } from "public/assets/icons/Message";
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';
import { FormGroup, FormInput, FormWrap, Icon, LoginInner, LoginWrapper } from '../auth-styles';

const initialValues = {
    email: "",
    error: "",
};
const ForgotPassword: React.FC<any> = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [errorMsg, setErrorMsg] = useState(false);

  const handleSend = async ({ ...values }) => {
    await axios
      .post('/api/auth/password', {
        data: {
          email: values.email,
          flag: 'FORGOTPASSWORD',
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          router.push('/auth/forgot-password/reset-link');
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
  };

  const handleModal = useCallback(
    (type: string) => {
      if (type === 'log') {
        dispatch(openModal('LOGIN_FORM'));
      } else {
        dispatch(openModal('REGISTER_FORM'));
      }
    },
    [dispatch]
  );

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSend}
        validationSchema={getForgotPasswordValidationSchema}
      >
        {({ isSubmitting, errors, touched }) => (
          <InnerContainer>
            <LoginWrapper>
              <LoginInner>
                {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                <Title
                  style={{
                    lineHeight: '1.6',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  Forgot Password
                </Title>
                <FormWrap>
                  <FormGroup>
                    <Icon>
                      <Message />
                    </Icon>
                    <FormInput
                      type="text"
                      placeholder="Full name"
                      name="email"
                    />
                    {errors.email && touched.email && (
                      <Error>{errors.email}</Error>
                    )}
                  </FormGroup>
                  <FormGroup className="submit-button">
                    <Button
                      content="Send"
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '0', textAlign: 'center' }}>
                    <Text
                      style={{
                        marginBottom: '0',
                        color: '#120D26',
                        fontSize: '.875rem',
                      }}
                    >
                      Return to{' '}
                      <span onClick={() => handleModal('log')}>
                        <Link href={`${router.pathname}?modal=true`}>
                          <a style={{ color: '#A35193' }}>Sign In</a>
                        </Link>{' '}
                        &nbsp; | &nbsp;{' '}
                      </span>
                      <span onClick={() => handleModal('reg')}>
                        <Link href={`${router.pathname}?modal=true`}>
                          <a style={{ color: '#A35193' }}>Sign up</a>
                        </Link>
                      </span>
                    </Text>
                  </FormGroup>
                </FormWrap>
              </LoginInner>
            </LoginWrapper>
          </InnerContainer>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
