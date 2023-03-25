import styled from 'styled-components';
import { BsUpload } from 'react-icons/bs';

export const AlignCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  .activity {
    background: #39007e;
    border-radius: 20px;
    min-height: 51px;
    min-width: 159px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
  .event {
    background: #39007e;
    border-radius: 20px;
    min-height: 51px;
    min-width: 159px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
  .primary-outline {
    border-radius: 20px;
    background: #fff;
    min-height: 51px;
    min-width: 159px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #1e0a3c;
  }
  .link-block {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    color: #0f021f;
    display: flex;
    align-items: center;
    margin-right: 35px;
    margin-left: 35px;
  }
  span {
    width: 28px;
    height: 28px;
    background: #39007e;
    display: flex;
    border-radius: 50px;
    margin-right: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      width: 16px;
      height: 16px;
      z-index: 11;
      position: relative;
      background-color: #fff;
      border-radius: 50px;
    }
  }
  .active {
    width: 28px;
    height: 28px;
    background: #39007e;
    display: flex;
    border-radius: 50px;
    &:after {
      display: none;
    }
  }
`;

export const FormWrapper = styled.div`
  /* display: flex; */
  max-width: 50rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const FormWrap = styled.form`
  input,
  .MuiSelect-select {
    padding: 10px 14px;

    &:focus {
      box-shadow: none;
    }
  }

  .MuiInputBase-root button {
    &:hover {
      color: #bc70ad !important;
    }
  }
`;

export const InnerFormWrapper = styled.div`
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.13);
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem 1.875rem;
  margin-top: 2rem;
  .note {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #39007e;
    margin-bottom: 30px;
  }
  select {
    border: 2px solid #39007e !important;
    position: relative;
  }
  input {
    border: 2px solid #39007e !important;
  }
  label {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #0f021f;
    text-transform: capitalize;
  }

  .only-horizontal-padding {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .horizontal {
    @media (max-width: 991px) {
      flex-direction: column;
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
    display: flex;
    justify-content: center;
    color: #ffffff;
    button {
      color: #fff;
      border-radius: 0.75rem;
      text-transform: capitalize;
      background: #39007e;
      border-radius: 20px;
      min-height: 51px;
      min-width: 169px;
      font-family: 'Syne';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

export const FormInput = styled.input``;

export const ArticlePostSelect = styled.select``;

export const ArticlePostCategoryOptions = styled.option``;

export const TextArea = styled.textarea``;

export const ArticlePostUploadWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const UploadLabel = styled.label`
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
  font-weight: 500;
  color: #555;
`;

export const UploadIcon = styled(BsUpload)``;

export const UploadInput = styled.input``;

export const EditorTextWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const FileUploadedGroup = styled.div`
  min-width: 50%;
  padding: 1rem;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const UploadImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 10rem;
  object-fit: cover;
  margin-right: 1.25rem;
  @media (max-width: 991px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const DismissIcon = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;
