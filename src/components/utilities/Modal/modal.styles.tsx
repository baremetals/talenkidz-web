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
    overflow-y: scroll;
    height: 100%;
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
  overflow: scroll
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

