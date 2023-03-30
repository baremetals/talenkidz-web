import styled from 'styled-components';

export const ChangingFieldWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;
  max-width: 90%;
  max-width: 487px;
  min-height: 439px;
  padding: 40px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #0f021f;
  button {
    background: #39007e;
    border-radius: 10px;
    padding: 0 10px;
    min-width: 105px;
    height: 29px;
    margin-top: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 4px;
      background: transparent;
    }
  }
  .dismiss-icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  h2 {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 29px;
    text-align: left;
    color: #0f021f;
    margin-bottom: 20px;
    width: 100%;
  }
  p {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.7);
    width: 100%;
    max-width: 315.67px;
    text-align: left;
    margin-bottom: 30px;
  }
  button {
    width: 159px;
    height: 51px;
    border-radius: 20px;
    font-family: 'Syne';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }
  .cancel {
    button {
      color: #39007e;
      border: 2px solid #39007e;
      background: #fff;
    }
  }
  .changing-action {
    justify-content: space-between;
    width: 100%;
    display: flex;
  }
  .current-name {
    width: 100%;
    max-width: 315.67px;
    text-align: left;
    margin-bottom: 38px;
    label {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: normal;
      text-transform: capitalize;
      color: #39007e;
    }
    span {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      margin-top: 11px;
      display: block;
    }
    .text {
      border-bottom: 1px solid #000000;
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      padding: 0;
    }
  }
`;

export const ChangingFieldModal = styled.div`
  border-radius: 20px;
  max-width: 967px;
  margin: 0 auto;
  textarea {
    &:focus {
      outline:none;
      box-shadow: none;
    }
  }
}
`;

export const ChangingEmailModal = styled.div``;
