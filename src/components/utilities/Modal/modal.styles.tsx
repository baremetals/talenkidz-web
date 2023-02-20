import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0 0 0 / 50%);
  z-index: 99999;
  display: flex;
  align-items: center;
  > div {
    width: 100%;
  }
  .closeModal {
    display: flex;
    cursor: pointer;
  }
`;

export const ModalContainer = styled.div`
  margin: 2rem auto;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  max-width: 45rem;
  padding: 3rem;
  backdrop-filter: blur(0.25rem);

  &.participation-modal {
    max-width: 470px;
  }
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const HorizontalRule = styled.hr`
  width: 75%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 4rem 0 0;
  backdrop-filter: blur(25px);
`;

export const FeedbackModalContainer = styled(ModalContainer)`
  padding: 0;
  max-width: 488.13px;
  width: 100%;
  height: 297.37px;
  position: relative;
  background-color: transparent;
  z-index: 1;

  @media (max-width: 600px) {
    max-width: 300px;
  }

  &::before {
    content: '';
    max-width: 488.13px;
    width: 100%;
    height: 297.37px;
    position: absolute;
    top: 0;
    left: 0;
    background: #ddabfc;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    transform: matrix(1, -0.05, 0.06, 1, 0, 0);
    z-index: -1;

    @media (max-width: 600px) {
      max-width: 300px;
    }
  }

  &::after {
    content: '';
    max-width: 488.13px;
    width: 100%;
    height: 297.37px;
    position: absolute;
    top: 0;
    left: 0;
    background: #b099cc;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    transform: matrix(1, 0.05, -0.06, 1, 0, 0);
    z-index: -1;
    @media (max-width: 600px) {
      max-width: 300px;
    }
  }

  .feedback-content {
    background: rgb(255, 255, 255);
    height: 100%;
    border-radius: 1rem;
    padding: 19px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dismiss-icon {
      position: absolute;
      top: 19px;
      right: 19px;
    }

    h1 {
      font-family: 'Syne';
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: #39007e;
      margin-bottom: 19px;
    }

    p {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: rgba(15, 2, 31, 0.7);
      margin-bottom: 0;
    }
  }
`;

export const ProfileInformationWrapper = styled.div`
  @media (max-width: 991px) {
    font-size: 22px;
    height: 96vh;
    overflow-y: scroll;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #0f021f;
    margin-bottom: 50px;
  }
  .input-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 11px;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 0;
    }
  }
  .form-group {
    margin-bottom: 50px;
    label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: #373737;
    }
  }
`;

export const ProfileInfo = styled.div`
  @media (max-width: 991px) {
    padding: 0px !important;
  }
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  margin-bottom: 50px;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    padding: 1.25rem;
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const UserProfileImage = styled.img`
  border: 5px solid #ffffff;
  border-radius: 50%;
  width: 153px;
  height: 153px;
  object-fit: cover;
  object-position: center center;
  margin-right: 2.1875rem;
  @media (min-width: 991px) {
    margin-left: 0;
  }

  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const UserProfileWapper = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 20px !important;
  }
  width: 153px;
  height: 153px;
  min-width: 153px;
  position: relative;
  &.premium {
    img {
      border: 5px solid #ffb800;
    }
    .premium-tag {
      display: flex;
    }
  }
  .EditButton {
    background: #39007e;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    svg {
      width: 14px;
      height: 14px;
      path {
        fill: #fff;
      }
    }
  }
`;

export const Premium = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50px;
  background: #ffb800;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;
`;

export const UserDescription = styled.div`
  @media (max-width: 991px) {
    margin-left: 0px !important;
  }
  margin-left: 30px;
  display: flex;
  align-items: flex-start;
  .user-description {
    max-width: 258px;
    h2 {
      margin-bottom: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: #373737;
    }
    p {
      margin-bottom: 0;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .user-tag {
    margin-left: 59px;
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 129.5%;
      color: #39007e;
    }
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #000000;
  border-left: none;
  border-radius: 0;
  border-top: none;
  border-right: none;
  padding-left: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #0f021f;
`;

export const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  .action {
    @media (max-width: 991px) {
      text-align: center;
      margin-top: 15px;
    }
    Button {
      margin-left: 30px;
      @media (max-width: 991px) {
        margin-left: 0;
        margin: 15px 0;
      }
      &.CancelButton {
        border: 1px solid #39007e;
        border-radius: 20px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #39007e;
        min-height: 51px;
        min-width: 159px;
        &:hover {
          color: #fff;
        }
      }
      &.SaveButton {
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
    }
  }
`;

export const LinkAction = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 129.5%;
  color: #39007e;
  text-decoration: underline;
  cursor: pointer;
`;

export const EditButton = styled.label`
  background: #39007e;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  svg {
    width: 14px;
    height: 14px;
    path {
      fill: #fff;
    }
  }
  .inputTag {
    display: none;
  }
`;
