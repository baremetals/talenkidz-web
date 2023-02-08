import React, { useContext, useState, ChangeEvent } from 'react';
import { Formik } from 'formik';

import {
  FormGroup,
  FormInput,
  FormWrap,
  Icon,
  LoginInner,
  LoginWrapper,
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
import { closeModal, openModal } from 'src/features/modal/reducers';
import { Column, InnerContainer, Row } from 'styles/common.styles';
import LinkWrapper from '../LinkWrapper';
import ToggleSwitch from '../ToggleSwitch';
import AuthHeaders from '../AuthHeaders';
import ModalCloseIcon from '../ModalCloseIcon';

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
  userType: 'standard',
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
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  

  const handleSubmit = async ({ ...values }: registerUserProps) => {
    // console.log(values);
    const user = {
      fullName: values.fullName,
      username: values.username,
      email: values.email,
      userType: checked ? 'organisation' : 'standard',
      password: values.password,
      membership: checked ? 'organisation' : 'basic',
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
        dispatch(closeModal());
        // Signout the firebase user because the email must be confirmed
        signOutFirebaseUser();
        router.push('/auth/register/activate-email');
      }
    } catch (err) {
      console.log('error: ', err);
    }
  };

  return (
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
              <ModalCloseIcon />
              {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
              <AuthHeaders subheading={'Get Started'} />

              <FormWrap>
                <FormGroup>
                  <ToggleSwitch
                    onLabel="Organisation"
                    offLabel="Are you an organisation"
                    name="userType"
                    checked={checked}
                    onChange={handleChange}
                  />
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
                  By creating your account you agree to the
                  <br />
                  <span
                    style={{
                      color: '#39007E',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    onClick={() => dispatch(openModal('TERMS_MODAL'))}
                  >
                    terms and privacy policy.
                  </span>
                </LinkWrapper>
              </FormWrap>
            </LoginInner>
          </LoginWrapper>
        </InnerContainer>
      )}
    </Formik>
  );
};

export default RegisterForm;
