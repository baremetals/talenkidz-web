import { Field, Form } from 'formik';
import styled from 'styled-components';

export const RadioFormInput = styled(Field)`
  width: 15px;
  height: 15px;
  padding: 0;
  margin: 5px;
  &:checked {
    border-width: 2px;
    border-color: #e4dfdf;
    background-color: #bc70ad;
    padding: 3px;
    & + label {
    }
  }
`;

export const RadioFormGroup = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const LoginWrapper = styled.div`
  max-width: 31.5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const LoginInner = styled.div`
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.13);
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 2rem 1.875rem;
  /* margin-top: .2rem; */
`;

export const FormWrap = styled(Form)``;

export const FormInput = styled(Field)`
  font-family: 'Syne', sans-serif !important;
  display: block;
  width: 100%;
  border: 2px solid #39007e;
  border-radius: 10px;
  height: 46px;
  padding: 0.75rem 1.25rem 0.75rem 3.5rem;
  margin: 0;
  &.checkbox {
    display: none;
  }
  &:checked ~ label {
    font-size: 14px;
    font-weight: 600;
    color: #39007e;
    &:before {
      background-color: #39007e;
      border-color: #39007e;
    }
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
  &.submit-button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: center;
    margin-top: 31px;

    button {
      color: #fff;
      font-family: 'Syne', sans-serif !important;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      background: #39007e;
      border-radius: 20px;
      width: 100%;
      max-width: 169px;
      height: 51px;
    }
  }
  &.remember-me {
    margin: 0 14px;
  }
  &.social-button {
    button {
      max-width: 255px;
      width: 100%;
      height: 46px;
      border: 2px solid #39007e;
      border-radius: 10px;
      background: #ffffff;
      color: #39007e;
      font-family: 'Syne', sans-serif !important;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-align: left;
      display: flex;
      align-items: center;
      margin: auto;

      span {
        padding: 5px;
        margin-right: 10px;
        float: left;
      }
    }
  }
  &.question-button {
    text-align: center;
    
    button {
      background: transparent;
      position: relative;
      font-family: 'Syne', sans-serif !important;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      position: relative;
      z-index: 1;

      &:hover {
        border: 0;
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 35px;
        top: 10px;
        left: -3px;
        z-index: -1;
        border-radius: 10px;
        background: #39007e;
        transform: rotate(-1.55deg);
      }
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 46px;
  width: 46px;
  display: flex;
  svg {
    margin: auto;
  }
`;

export const Headline = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  span.title {
    font-family: 'Syne', sans-serif !important;
    position: relative;
    z-index: 1;
    &::after {
      content: '';
      position: absolute;
      width: 106%;
      min-height: 43.5px;
      height: 100%;
      top: 0;
      left: -7px;
      z-index: -1;
      border-radius: 10px;
    }
  }

  .primary {
    color: #fff;
    padding: 5px 15px;
    &::after {
      content: '';
      background: #39007e;
      transform: rotate(-1.55deg);
    }
    span {
      font-family: 'Syne', sans-serif !important;
      font-size: 20px;
    }
  }

  .divider {
    margin: 0 12px;
    font-family: 'Syne', sans-serif !important;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #0f021f;
  }

  .secondary {
    color: #39007e;
    padding: 5px 12px;
    &::after {
      content: '';
      background: #fff;
      border: 2px solid #39007e;
      transform: rotate(1.55deg);
    }
  }
`;

export const SubHeadline = styled.h3`
  font-family: 'Syne', sans-serif !important;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: rgba(15, 2, 31, 0.7);
  text-align: center;
  margin-bottom: 40px;

  &.sm {
    font-size: 14px;
    line-height: 17px;
  }

  &.consent {
    font-size: 24px;
    line-height: 93.5%;
    color: #39007e;
  }
  
  &.questions {
    font-size: 20px;
    color: #39007e;
  }
`;

export const ForgotPassword = styled.div`
  a {
    font-family: 'Syne', sans-serif !important;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #39007e;
    border-bottom: 1px solid #39007e;
  }
`;

export const DismissIcon = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

export const Divider = styled.div`
  font-family: 'Syne', sans-serif !important;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #0f021f;
  margin: 10px 0;
`;

export const TermsFooter = styled.div`
  margin-top: 50px;
  
  button {
    border: 2px solid #39007E;
    border-radius: 10px;
    max-width: 134px;
    width: 100%;
    height: 35px;
    font-family: 'Syne';
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #39007E;
    background: white;
  }
  
  button:hover {
    border: 2px solid #39007E;
    color: #39007E;
    background: white;
  }

  .private-policy {
    margin: 10px 0 30px 0;
    font-family: 'Syne';
    font-weight: 600;
    font-size: 8px;
    line-height: 10px;
    color: rgba(57, 0, 126, 0.7);

    .link {
      font-weight: 700;
      text-decoration: underline;
    }
  }

  .cookie-policy {
    font-family: 'Syne';
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: rgba(57, 0, 126, 0.6);
    text-decoration: underline;
    margin-bottom: 51px;
  }
`;
