import React, { useContext, useState } from 'react';
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
import { closeModal, openModal } from 'src/features/modal/reducers';
import {
  FormGroup,
  FormInput,
  FormWrap,
  Icon,
  LoginInner,
  LoginWrapper,
  ForgotPassword,
  Divider,
} from '../auth-styles';
import LinkWrapper from '../LinkWrapper';
import AuthHeaders from '../AuthHeaders';
import ModalCloseIcon from '../ModalCloseIcon';

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
      } else {
        dispatch(closeModal());
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
              <ModalCloseIcon />
              {errorMsg && (
                <>
                  <ErrorMsg>{initialValues.error}</ErrorMsg>
                  <br />
                </>
              )}
              <AuthHeaders subheading={'Get Started'} />
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
                    <ForgotPassword
                      onClick={() => dispatch(openModal('FORGOTPASSWORD_FORM'))}
                    >
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
                  <br />
                  <Link href="#">
                    <a
                      style={{
                        color: '#39007E',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      }}
                      onClick={() => dispatch(openModal('TERMS_MODAL'))}
                    >
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
