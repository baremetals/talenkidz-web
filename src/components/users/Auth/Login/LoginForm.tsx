import React, { useContext, useState } from 'react';
import { Formik } from 'formik';

import {
  InnerContainer,
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
} from 'styles/common.styles';

import Button from 'components/users/Auth/Button';
import { Error, ErrorMsg } from 'components/widgets/Input';
import { getLoginValidationSchema } from 'src/utils/formValidation';
import Provider from '../Provider';
import { Lock } from 'public/assets/icons/Lock';
import { Message } from 'public/assets/icons/Message';
import { AuthContext } from 'src/features/auth/AuthContext';
import Link from 'next/link';


export interface ILoginForm {
  formProps?: LoginUserProps;
  errorMsg?: boolean;
}

type LoginUserProps = {
  usernameOrEmail: string;
  password: string;
  error?: string;
};


const initialValues = {
  usernameOrEmail: '',
  password: '',
  error: '',
};
const LoginForm: React.FC<ILoginForm> = () => {
  const { loginUser } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState(false);


  const handleSubmit = async ({ ...values }: LoginUserProps) => {
    // console.log('wayveyKiD');
    try {
      const res = await loginUser(
        values.usernameOrEmail,
        values.password,
      );
      if (res?.error as string) {
        initialValues.error = res?.error as string;
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 20000);
      }
    } catch (err) {
      console.log('error: ', err);
    }
  };
  return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={getLoginValidationSchema}
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
                  Sign In
                </Title>
                <FormWrap>
                  <FormGroup>
                    <Icon>
                      <Message />
                    </Icon>
                    <FormInput
                      type="text"
                      placeholder="username or email"
                      name="usernameOrEmail"
                    />
                    {errors.usernameOrEmail && touched.usernameOrEmail && (
                      <Error>{errors.usernameOrEmail}</Error>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Icon>
                      <Lock />
                    </Icon>
                    <FormInput
                      type="password"
                      placeholder="your password"
                      name="password"
                    />
                    {errors.password && touched.password && (
                      <Error>{errors.password}</Error>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <FlexGroup>
                      <Checkbox>
                        <FormInput
                          id="RememberMe"
                          className="checkbox"
                          type="checkbox"
                        />
                        <FormLabel htmlFor="RememberMe">Remember Me</FormLabel>
                      </Checkbox>
                      <Link href={'/auth/forgot-password'}>
                        Forgot Password?
                      </Link>
                    </FlexGroup>
                  </FormGroup>
                  <FormGroup className="submit-button">
                    <Button
                      content="Sign in"
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
                    >
                      Don’t have an account?{' '}
                      <Link href={'/auth/register'}>
                        <a style={{ color: '#A35193' }}>Sign up</a>
                      </Link>
                    </Text>
                  </FormGroup>
                </FormWrap>
              </LoginInner>
            </LoginWrapper>
          </InnerContainer>
        )}
      </Formik>
  );
};

export default LoginForm;
