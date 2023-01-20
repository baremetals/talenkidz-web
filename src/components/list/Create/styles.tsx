import styled from "styled-components"
import { BsUpload } from "react-icons/bs";

export const FormWrapper = styled.div`
    /* display: flex; */
    max-width: 50rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const FormWrap = styled.form`
  input, .MuiSelect-select {
    padding: 10px 14px;

    &:focus {
      box-shadow: none;
    }
  }

  .MuiInputBase-root button {
    &:hover {
      color: #BC70AD !important;
    }
  }
`;

export const InnerFormWrapper = styled.div`
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.13);
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 2rem 1.875rem;
  margin-top: 2rem;
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
            color: #FFF;
            border-radius: .75rem;
            padding: 1.25rem 2rem;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: .2rem;
            box-shadow: 0 .625rem 2.25rem rgb(111 126 201 / 25%);
        }
    }
`;

export const FormInput = styled.input`

`;

export const Select = styled.select`
  
`;

export const CategoryOptions = styled.option``;

export const TextArea = styled.textarea`
    
`;

export const UploadWrapper = styled.div`
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

export const UploadInput = styled.input`

`;

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

