import React, { useState } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import axios from 'axios';
import { getForgotPasswordValidationSchema } from 'src/utils/formValidation';

import { Error, ErrorMsg } from 'components/widgets/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { InnerContainer, Title } from 'styles/common.styles';
import Button from 'components/users/Auth/Button';

import { Message } from 'public/assets/icons/Message';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal, openModal } from 'src/features/modal/reducers';
import {
  FormGroup,
  FormInput,
  FormWrap,
  Icon,
  LoginInner,
  LoginWrapper,
  SubHeadline,
} from '../auth-styles';
import LinkWrapper from '../LinkWrapper';
import ModalCloseIcon from '../ModalCloseIcon';

const initialValues = {
  email: '',
  error: '',
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
          dispatch(closeModal());
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
                <ModalCloseIcon />
                {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                <Title
                  style={{
                    lineHeight: '29px',
                    fontSize: '24px',
                    fontWeight: '700',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                    color: '#39007E',
                  }}
                >
                  Forgot the password?
                </Title>
                <SubHeadline className="sm">
                  We’ll send the instruction to your email
                </SubHeadline>
                <FormWrap>
                  <FormGroup>
                    <Icon>
                      <Message />
                    </Icon>
                    <FormInput
                      type="text"
                      placeholder="abc@email.com"
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
                  <LinkWrapper>
                    {/* <Link href={`${router.pathname}?modal=true`}> */}
                      <a
                        style={{
                          color: '#39007E',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                        onClick={() => dispatch(openModal('LOGIN_FORM'))}
                      >
                        Sign in
                      </a>
                    {/* </Link> */}
                  </LinkWrapper>
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
