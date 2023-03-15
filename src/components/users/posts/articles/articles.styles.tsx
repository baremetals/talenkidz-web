import styled from 'styled-components';
import { BsUpload } from 'react-icons/bs';

export const MainContainer = styled.div`
  display: block;
  width: 100%;
`;

export const FormWrap = styled.form`
  display: block;
`;

export const CloseButtonWrap = styled.span`
  cursor: pointer;
  float: right;
  svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: #fff;
  }
`;

export const CardText = styled.h2`
  margin-bottom: 1.5rem;
  color: #fff;
`;

export const InputFormGroupRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

export const InputFormGroup = styled.div`
  width: 50%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 0.75rem;
  }
`;

export const InputContainer = styled.div`
  border-top: 1px solid rgb(255 255 255 / 40%);
  padding-top: 1.5rem;
`;

export const BodyTextWrapper = styled.div``;

export const TitleInput = styled.input`
  background-color: rgb(0 0 0 / 20%);
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 0.5rem;
  width: calc(100% - 1rem);
  padding: 0.875rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  &:focus {
    border-color: rgb(255 255 255 / 20%);
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(to right, #9270bc 0%, #bc70ad 79%);
  cursor: pointer;
  padding: 0.75rem 3.5rem;
  font-size: 1rem;
  color: #fff;
  text-transform: capitalize;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgb(0 0 0 / 50%);
`;
export const CloseButton = styled.button`
  background: linear-gradient(to right, #4bd5dc 0%, #03497b 79%);
  cursor: pointer;
  padding: 0.75rem 3.5rem;
  font-size: 1rem;
  color: #fff;
  text-transform: capitalize;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgb(0 0 0 / 50%);
`;

export const UploadWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
export const Label = styled.label``;

export const UploadIcon = styled(BsUpload)``;

export const UploadInput = styled.input`
  background-color: rgb(0 0 0 / 20%);
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  display: block;
  &:focus {
    border-color: rgb(255 255 255 / 20%);
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
`;

export const Select = styled.select`
  background-color: #fff;
  border: 1px solid rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.25rem;
  color: #000;
  font-size: 1rem;
  @media (max-width: 991px) {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
  &:focus {
    border-color: rgb(0 0 0 / 10%);
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
`;

export const Category = styled.select`
  background-color: rgb(0 0 0 / 20%);
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 2rem;
  width: 50%;
  padding: 0.875rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
  &:focus {
    border-color: rgb(255 255 255 / 20%);
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
`;

export const CategoryOptions = styled.option``;

export const BodyText = styled.textarea`
  background-color: rgb(0 0 0 / 20%);
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 1rem;
  width: 100%;
  padding: 0.875rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
  display: block;
  height: 8rem;
  &:focus {
    border-color: rgb(255 255 255 / 20%);
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
`;
