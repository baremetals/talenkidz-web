import React, { useCallback, useContext, useState } from 'react';
import { Formik } from 'formik';

import {
  Column,
  InnerContainer,
  Row,
  Text,
  Title,
} from 'styles/common.styles';
import { FormGroup, FormInput, FormWrap, Icon, LoginInner, LoginWrapper, RadioFormGroup, RadioFormInput } from '../auth-styles';
import Button from 'components/users/Auth/Button';
import { Error, ErrorMsg } from 'components/widgets/Input';
import { getRegisterValidationSchema } from 'src/utils/formValidation';
import Provider from '../Provider';
import { Lock } from 'public/assets/icons/Lock';
import { Message } from 'public/assets/icons/Message';
import { Profile } from 'public/assets/icons/Profile';
import { AuthContext } from 'src/features/auth/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';


export interface IRegisterForm {
  handleterms?: () => void;
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

const RegisterForm: React.FC<IRegisterForm> = ({ handleterms }) => {
  const { signOutFirebaseUser, registerNewUser } = useContext(AuthContext);
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  // const [openModal, setOpenModal] = useState(false);
  // const [openLoginModal, setOpenLoginModal] = useState(false);
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
    () => {
      dispatch(openModal('LOGIN_FORM'));
    },
    [dispatch]
  );

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
                {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                <Title
                  style={{
                    lineHeight: '1.6',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  Sign Up
                </Title>
                <FormWrap>
                  <RadioFormGroup
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    {/* <Icon><Profile /></Icon> */}
                    <RadioFormInput
                      type="radio"
                      name="userType"
                      value="candidate"
                    />
                    <label>Candidate</label>

                    <RadioFormInput
                      type="radio"
                      name="userType"
                      value="organisation"
                    />
                    <label>Organisation</label>
                    {errors.userType && touched.userType && (
                      <Error>{errors.userType}</Error>
                    )}
                  </RadioFormGroup>
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
                          placeholder="username"
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
                  <div style={{ textAlign: 'center', margin: '2rem' }}>OR</div>

                  <Provider />
                  <FormGroup style={{ marginBottom: '0', textAlign: 'center' }}>
                    <Text
                      style={{
                        marginBottom: '0',
                        color: '#120D26',
                        fontSize: '.875rem',
                      }}
                      onClick={() => handleModal()}
                    >
                      Already have an account?{' '}
                      <Link href={`${router.pathname}?modal=true`}>
                        <a style={{ color: '#A35193' }}>Sign In</a>
                      </Link>
                    </Text>
                    <div onClick={handleterms}>
                      <Text
                        style={{
                          marginBottom: '0',
                          color: '#120D26',
                          fontSize: '.875rem',
                          cursor: 'pointer',
                        }}
                      >
                        By creating your account you agree to the
                        <span style={{ color: '#A35193' }}>
                          {' '}
                          terms and privacy policy.
                        </span>
                      </Text>
                    </div>
                  </FormGroup>
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
