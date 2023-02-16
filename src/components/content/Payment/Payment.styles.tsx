/* eslint-disable no-unused-vars */
import styled from 'styled-components';

export const Pageheader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 115%;
    text-align: center;
    color: #39007e;
    margin: 0 auto 30px;
    max-width: 545px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 129.5%;
    color: #0f021f;
    margin-bottom: 60px;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin-bottom: 10px;
      span {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 129.5%;
        color: #000000;
        margin-left: 10px;
      }
    }
  }
`;
export const PaymentTerms = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  max-width: 459px;
  width: 100%;
  min-height: 294px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .selected {
    button {
      background: rgba(57, 0, 126, 0.4);
      border: 1px solid #39007e;
      border-radius: 20px;
    }
  }
  button {
    background: #39007e;
    border-radius: 20px;
    min-width: 159px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
  .PaymentTerms {
    h1 {
      margin-bottom: 30px;
      text-align: center;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 129.5%;
      text-align: center;
      text-transform: capitalize;
      color: #272727;
      margin-bottom: 30px;
    }
  }
`;

export const PaymentCard = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
`;

export const PayCardWrapper = styled.div`
  max-width: 834px;
  min-height: 641px;
  margin: 0 auto 90px;
  .mb50 {
    margin-bottom: 50px;
  }
  .PayHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    @media (max-width: 767px) {
      flex-direction: column;
    }
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      color: #0f021f;
      @media (max-width: 767px) {
        margin-bottom: 30px;
      }
    }
    label {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      color: #0f021f;
    }
  }
  .FormGroup {
    label {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: #626262;
      margin-bottom: 10px;
    }
  }
  .note {
    max-width: 353px;
    margin: 0 auto 30px;
    text-align: center;
    color: #0f021f;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #0f021f;
      margin-bottom: 0;
    }
  }
`;

export const PayCard = styled.div`
  background: #ffffff;
  border: 1px solid #39007e;
  border-radius: 20px;
  width: 100%;
  max-width: 834px;
  min-height: 641px;
  margin: 0 auto 90px;
  padding: 50px;
  @media (max-width: 767px) {
    padding: 20px;
  }
  .PayCardHeader {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #0f021f;
    margin: 0 0 34px;
  }
  .PayCardAction {
    margin: 0 0 50px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
      flex-direction: column;
    }
    Button {
      background: #0f021f;
      border-radius: 20px;
      max-width: calc(50% - 10px);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 5px;
      }
      @media (max-width: 767px) {
        max-width: 100%;
        margin-bottom: 20px;
      }
    }
  }
`;
export const PayForm = styled.div`
  .PayFormHeader {
    margin-bottom: 23px;
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #0f021f;
    }
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #626262;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  height: 32px;
  padding-left: 0;
`;

export const PayAction = styled.div`
  display: flex;
  justify-content: center;
  button {
    background: #39007e;
    border-radius: 20px;
    max-width: 435px;
    width: 100%;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
`;
