import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import axios from 'axios';
import { getForgotPasswordValidationSchema } from 'src/utils/formValidation';

import { Error, ErrorMsg } from 'components/widgets/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { InnerContainer, Title, Text } from 'styles/common.styles';
import Button from 'components/users/Auth/Button';

import { Message } from 'public/assets/icons/Message';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal, openModal } from 'src/features/modal/reducers';
import {
  DismissIcon,
  FormGroup,
  FormInput,
  FormWrap,
  Icon,
  LoginInner,
  LoginWrapper,
  SubHeadline,
} from '../auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import LinkWrapper from '../LinkWrapper';

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

  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

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
                <DismissIcon>
                  <CrossRounded onClick={handleModalClose} />
                </DismissIcon>
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
                    <Link href={`${router.pathname}?modal=true`}>
                      <a
                        style={{ color: '#39007E', cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={() => handleModal('log')}
                      >
                        Sign in
                      </a>
                    </Link>
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
