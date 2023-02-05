import styled from "styled-components";

export const Contactblock = styled.div`
margin-bottom:200px;
.pageTitle {
  font-size: 64px;
  display: flex;
  justify-content: center;
  margin-bottom:90px;
  margin-top:100px;
  span {
    width:100%;
    max-width:600px;
    display: block;
    &::after {
      max-width:100%;
      width:100%;
      border-radius: 20px;
    }
  }
}
.submit {
  button {
    background: #39007E;
    border-radius: 20px;
    color:#fff;
    width: 100% !important;
    min-height: 51px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
  }
}
.mb30 {
  margin-bottom:30px;
}
`;

export const Header = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 81.1%;
letter-spacing: -0.01em;
color: #0F021F;
margin-bottom:50px;
`;

export const FormInput = styled.input`
  border: 2px solid #39007E;
  border-radius: 10px; 
  height: 46px;  
  &::-webkit-input-placeholder { /* Edge */
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.5);
    font-family: 'Montserrat', sans-serif;
  }
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.5);
    font-family: 'Montserrat', sans-serif;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.5);
    font-family: 'Montserrat', sans-serif;
  }
`;

export const FormTextarea = styled.textarea`
 border: 2px solid #39007E;
  border-radius: 10px; 
  min-height: 96px;
  &::-webkit-input-placeholder { /* Edge */
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.5);
    font-family: 'Montserrat', sans-serif;
  }
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.5);
    font-family: 'Montserrat', sans-serif;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.5);
    font-family: 'Montserrat', sans-serif;
  }
`;

export const FormRadio = styled.input`
.formRadio {
  margin: 0.5rem;
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        background: $color1;
        border-radius: 100%;
        border: 1px solid darken($color1, 25%);
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        position: relative;
        top: -0.2em;
        margin-right: 1em; 
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color: $color2;
          box-shadow: inset 0 0 0 4px $color1;
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: $color2;
        }
      }
    }
    &:disabled {
      + .radio-label {
        &:before {
          box-shadow: inset 0 0 0 4px $color1;
          border-color: darken($color1, 25%);
          background: darken($color1, 25%);
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
}
`;

export const FlexGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  margin-bottom: 20px;
  @media (max-width: 991px) {
        flex-direction: column;
    align-items: flex-start;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 90px;
   @media (max-width: 991px) {
     margin-bottom: 20px;
   }
`;


export const InputRadio = styled.input`
  display: none;
  & + label {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      color: #0F021F;
          padding-left: 40px;
    padding-top: 3px;
    &:before {
      border-radius: 100%;
      width: 26px;
      height: 26px;
      border-color: #39007E;
      border: solid 8px #39007E;
    }
    &:after {
      display: none;
    }
  }
  &:checked {
    & + label {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      color: #0F021F;
          padding-left: 40px;
    padding-top: 3px;
      &:before {
        background-color: #39007E;
        border-color: #39007E;
        border-width: 6px;
        width: 26px;
        height: 26px;
      }
    }
  }
`;





