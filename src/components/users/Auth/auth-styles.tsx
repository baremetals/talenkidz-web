import { Field, Form } from "formik";
import styled from "styled-components";

export const RadioFormInput = styled(Field)`
    width: 15px;
    height: 15px;
    padding: 0;
    margin: 5px;
    &:checked {
        border-width: 2px;
        border-color: #E4DFDF;
        background-color: #BC70AD;
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
  display: block;
  width: 100%;
  border: 1px solid #e4dfdf;
  border-radius: 0.75rem;
  height: 3.5rem;
  padding: 0.75rem 1.25rem 0.75rem 4rem;
  margin: 0;
  &.checkbox {
    display: none;
  }
  &:checked ~ label {
    &:before {
      background-color: #bc70ad;
      border-color: #bc70ad;
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
    button {
      color: #fff;
      border-radius: 0.75rem;
      padding: 1.25rem 2rem;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      box-shadow: 0 0.625rem 2.25rem rgb(111 126 201 / 25%);
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  svg {
    margin: auto;
  }
`;