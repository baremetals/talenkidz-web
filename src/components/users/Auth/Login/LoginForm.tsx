import React, { useCallback, useContext, useState } from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';

import {
  InnerContainer,
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
import { useAppDispatch } from 'src/app/hooks';
import { openModal, closeModal } from 'src/features/modal/reducers';
import {
  FormGroup,
  FormInput,
  FormWrap,
  Icon,
  LoginInner,
  LoginWrapper,
  Headline,
  SubHeadline,
  ForgotPassword,
  DismissIcon,
  Divider,
} from '../auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import LinkWrapper from '../LinkWrapper';

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
  const router = useRouter();
  const { loginUser } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async ({ ...values }: LoginUserProps) => {
    // console.log('wayveyKiD');
    try {
      const res = await loginUser(values.usernameOrEmail, values.password);
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

  const handleModal = useCallback(
    (type: string) => {
      if (type === 'pass') {
        dispatch(openModal('FORGOTPASSWORD_FORM'));
      } else if (type === 'terms') {
        dispatch(openModal('TERMS_MODAL'));
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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getLoginValidationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <InnerContainer>
          <LoginWrapper>
            <LoginInner>
              <DismissIcon>
                <CrossRounded onClick={handleModalClose} />
              </DismissIcon>
              {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
              <Headline>
                <span className="title secondary">SING UP</span>
                <span className="divider">or</span>
                <span className="title primary">SING IN</span>
              </Headline>
              <SubHeadline>to take a class</SubHeadline>

              <FormWrap>
                <FormGroup>
                  <Icon>
                    <Message />
                  </Icon>
                  <FormInput
                    type="text"
                    placeholder="abc@email.com"
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
                    placeholder="Your password"
                    name="password"
                  />
                  {errors.password && touched.password && (
                    <Error>{errors.password}</Error>
                  )}
                </FormGroup>
                <FormGroup className="remember-me">
                  <FlexGroup>
                    <Checkbox>
                      <FormInput
                        id="RememberMe"
                        className="checkbox"
                        type="checkbox"
                      />
                      <FormLabel htmlFor="RememberMe">Remember Me</FormLabel>
                    </Checkbox>
                    <ForgotPassword onClick={() => handleModal('pass')}>
                      <Link href={`${router.pathname}?modal=true`}>
                        Forgot Password?
                      </Link>
                    </ForgotPassword>
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
                <Divider>or</Divider>
                <Provider />
                <LinkWrapper>
                  <Link href={`${router.pathname}?modal=true`}>
                    <a style={{ color: '#39007E', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleModal('reg')}>Sign up</a>
                  </Link>{' '}
                  if you don’t have an account <br />
                  By creating an account you agree to the
                  <br />
                  <Link href="#">
                    <a style={{ color: '#39007E', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => handleModal('terms')}>
                      terms and privacy policy.
                    </a>
                  </Link>
                </LinkWrapper>
              </FormWrap>
            </LoginInner>
          </LoginWrapper>
        </InnerContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
