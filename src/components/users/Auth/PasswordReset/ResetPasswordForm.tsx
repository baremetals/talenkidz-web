import React, { useState } from 'react'
import Link from 'next/link';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { getResetPasswordValidationSchema } from 'src/utils/formValidation';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Error, ErrorMsg } from 'components/widgets/Input';

import { Lock } from 'public/assets/icons/Lock';

import {
  InnerContainer,
  Title,
  Text,
} from 'styles/common.styles';
import Button from '../Button';
import {
  FormGroup,
  FormInput,
  FormWrap,
  Icon,
  LoginInner,
  LoginWrapper,
} from '../auth-styles';

const initialValues = {
  newPassword: '',
  confirmPassword: '',
  error: '',
};

const ResetPasswordForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [errorMsg, setErrorMsg] = useState(false);

  

  const handleSubmit = async ({ ...values }: any) => {
    const { code } = router.query;
    // console.log(values);

    await axios
      .post('/api/auth/password', {
        data: {
          password: values.newPassword,
          passwordConfirmation: values.confirmPassword,
          code,
          flag: 'RESETPASSWORD',
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
          const msg: string =
            'Your reset password link is no longer valid. Please make a new request.';
          initialValues.error = msg;
          toast.error(msg);
          setTimeout(() => {
            router.push(`/auth/forgot-password`);
          }, 5000);
        } else {
          const msg: string =
            'Sorry something went wrong please try again later.';
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
                <Title
                  style={{
                    color: '#39007E',
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '29px',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  Reset the password
                </Title>
                <Title
                  style={{
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '17px',
                    textAlign: 'center',
                    marginBottom: '27px',
                    color: 'rgba(15, 2, 31, 0.7)',
                  }}
                >
                  Make up a new password
                </Title>
                <FormWrap>
                  <FormGroup>
                    <Icon>
                      <Lock />
                    </Icon>
                    <FormInput
                      type="password"
                      placeholder="New password"
                      name="newPassword"
                    />
                    {errors.newPassword && touched.newPassword && (
                      <Error>{errors.newPassword}</Error>
                    )}
                  </FormGroup>
                  <FormGroup className="submit-button">
                    <Button
                      content="Confirm"
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: '0', textAlign: 'center' }}>
                    <Text
                      onClick={() => dispatch(openModal('LOGIN_FORM'))}
                      style={{
                        marginBottom: '0',
                      }}
                    >
                      <Link href={`${router.pathname}?modal=true`}>
                        <a style={{
                          fontFamily: 'Syne',
                          fontWeight: '600',
                          fontSize: '14px',
                          lineHeight: '17px',
                          color: '#39007E',
                          textDecoration: 'underline',
                        }}>Sign in</a>
                      </Link>
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

export default ResetPasswordForm;