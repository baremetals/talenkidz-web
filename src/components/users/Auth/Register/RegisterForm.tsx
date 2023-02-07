import React, { useCallback, useContext, useState } from 'react';
import { Formik } from 'formik';

import {
  DismissIcon,
  FormGroup,
  FormInput,
  FormWrap,
  Headline,
  Icon,
  LoginInner,
  LoginWrapper,
  SubHeadline,
  Divider,
} from '../auth-styles';
import Button from 'components/users/Auth/Button';
import { Error, ErrorMsg } from 'components/widgets/Input';
import { getRegisterValidationSchema } from 'src/utils/formValidation';
import Provider from '../Provider';
import { Lock } from 'public/assets/icons/Lock';
import { Message } from 'public/assets/icons/Message';
import { Profile } from 'public/assets/icons/Profile';
import { AuthContext } from 'src/features/auth/AuthContext';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'src/app/hooks';
import { openModal, closeModal } from 'src/features/modal/reducers';
import { Column, InnerContainer, Row } from 'styles/common.styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import LinkWrapper from '../LinkWrapper';
import ToggleSwitch from '../ToggleSwitch';

export interface IRegisterForm {
  formProps?: registerUserProps;
  errorMsg?: boolean;
}

type registerUserProps = {
  email: string;
  username: string;
  fullName: string;
  userType: string;
  password: string;
  confirmPassword?: string;
  error?: string;
};

const initialValues = {
  fullName: '',
  username: '',
  userType: 'candidate',
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
};

const RegisterForm: React.FC<IRegisterForm> = () => {
  const { signOutFirebaseUser, registerNewUser } = useContext(AuthContext);
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async ({ ...values }: registerUserProps) => {
    // console.log(values);
    const user = {
      fullName: values.fullName,
      username: values.username,
      email: values.email,
      userType: values.userType,
      password: values.password,
      membership: values.userType === 'candidate' ? 'basic' : 'organisation',
    };
    try {
      const res = await registerNewUser({ ...user });
      if (res?.error as string) {
        initialValues.error = res?.error as string;
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 10000);
      }
      if (res?.success as string) {
        signOutFirebaseUser();
        router.push('/auth/register/activate-email');
      }
    } catch (err) {
      console.log('error: ', err);
    }
  };

  const handleModal = useCallback(
    (type: string) => {
      if (type == 'terms') {
        dispatch(openModal('TERMS_MODAL'));
      } else {
        dispatch(openModal('LOGIN_FORM'));
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
        onSubmit={handleSubmit}
        validationSchema={getRegisterValidationSchema}
      >
        {/* eslint-disable-next-line no-unused-vars */}
        {({ isSubmitting, errors, touched, values }) => (
          <InnerContainer>
            <LoginWrapper>
              <LoginInner>
                <DismissIcon>
                  <CrossRounded onClick={handleModalClose} />
                </DismissIcon>
                {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                <Headline>
                  <span className="title primary">SING UP</span>
                  <span className="divider">or</span>
                  <span className="title secondary">SING IN</span>
                </Headline>
                <SubHeadline>to take a class</SubHeadline>

                <FormWrap>
                  <FormGroup>
                    <ToggleSwitch onLabel="Organisation" offLabel="Candidate" />
                    {errors.userType && touched.userType && (
                      <Error>{errors.userType}</Error>
                    )}
                  </FormGroup>
                  <Row>
                    <Column>
                      <FormGroup>
                        <Icon>
                          <Profile />
                        </Icon>
                        <FormInput
                          type="text"
                          placeholder="Full name"
                          name="fullName"
                        />
                        {errors.fullName && touched.fullName && (
                          <Error>{errors.fullName}</Error>
                        )}
                      </FormGroup>
                    </Column>
                    <Column>
                      <FormGroup>
                        <Icon>
                          <Profile />
                        </Icon>
                        <FormInput
                          type="text"
                          placeholder="User name"
                          name="username"
                        />
                        {errors.username && touched.username && (
                          <Error>{errors.username}</Error>
                        )}
                      </FormGroup>
                    </Column>
                  </Row>
                  <FormGroup>
                    <Icon>
                      <Message />
                    </Icon>
                    <FormInput
                      type="email"
                      placeholder="abc@email.com"
                      name="email"
                    />
                    {errors.email && touched.email && (
                      <Error>{errors.email}</Error>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Icon>
                      <Lock />
                    </Icon>
                    <FormInput
                      type="password"
                      placeholder="Your password"
                      name="password"
                    />
                    {errors.password && touched.password && (
                      <Error>{errors.password}</Error>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Icon>
                      <Lock />
                    </Icon>
                    <FormInput
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <Error>{errors.confirmPassword}</Error>
                    )}
                  </FormGroup>
                  <FormGroup className="submit-button">
                    <Button
                      content="Sign up"
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    />
                  </FormGroup>
                  <Divider>or</Divider>

                  <Provider />
                  <LinkWrapper>
                    Already have an account?{' '}
                    {/* <Link href={`${router.pathname}?modal=true`}> */}
                    <a style={{ color: '#39007E', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleModal('log')}>Sign In</a>
                    {/* </Link> */}
                    <br />
                    By creating your account you agree to the
                    <br />
                    <span style={{ color: '#39007E', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleModal('terms')}>
                      terms and privacy policy.
                    </span>
                  </LinkWrapper>
                </FormWrap>
              </LoginInner>
            </LoginWrapper>
          </InnerContainer>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
