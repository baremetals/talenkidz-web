import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  min-height: 320px;
  padding: 30px;
`;

export const PageTitle = styled.div`
  color: #39007e;
  font-weight: 700;
  font-size: 32px;
  span {
    line-height: 123.1%;
    text-align: center;
    position: relative;
    color: #fff;
    font-family: 'Syne', sans-serif !important;
    padding: 2px 10px;
    margin-left: 10px;
    margin-right: 10px;
    @media (max-width: 991px) {
      color: #39007e;
      margin-left: 0;
      margin-right: 10px;
      padding: 0;
    }
    &::after {
      content: '';
      background: #39007e;
      position: absolute;
      width: 103%;
      min-height: 100%;
      height: 100%;
      top: 0px;
      left: -5px;
      z-index: -1;
      padding-top: 10px;
      border-radius: 10px;
      -webkit-transform: rotate(-1.97deg);
      -ms-transform: rotate(-1.97deg);
      transform: rotate(-1.97deg);
      display: flex;
      @media (max-width: 991px) {
        display: none;
      }
    }
  }
`;
export const Notification = styled.div`
  background: #e5d7f5;
  border-radius: 10px;
  padding: 10px 10px;
  display: flex;
  min-height: 72px;
  justify-content: space-between;
  &.inactive {
    background: #f9f3ff;
  }
  @media (max-width: 991px) {
    flex-direction: column;
  }
  .user-name {
    min-width: 80px;
    display: flex;
    justify-content: end;
    flex-direction: column;
    label {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #0f021f;
      margin-bottom: 6px;
      display: flex;
    }
    p {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: normal;
      color: #574e62;
      margin-bottom: 0;
      span {
        color: #39007e;
      }
    }
  }
  .time {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: normal;
    color: #766b83;
    min-width: 80px;
    display: flex;
    justify-content: end;
    @media (max-width: 991px) {
      margin-top: 10px;
    }
  }
  .user-image {
    width: fit-content;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    margin-right: 10px;
  }
  .notification {
    display: flex;
    align-items: center;
    @media (max-width: 991px) {
      align-items: flex-start;
    }
  }
  margin-bottom: 20px;
  .notification-action {
    display: flex;
    .today {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 79.5%;
      color: #766b83;
    }
  }
  .notification-time {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    small {
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      color: rgba(57, 0, 126, 0.65);
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .notification-icon {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      display: flex;
      svg {
        cursor: pointer;
      }
    }
    .DeleteOutline {
      svg {
        cursor: pointer;
        path {
          stroke: #39007e;
        }
      }
    }
  }
`;
export const SeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: rgba(57, 0, 126, 0.65);
    border-bottom: 1px solid rgba(57, 0, 126, 0.65);
  }
`;

export const DeleteNotificationWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  position: relative;
  max-width: 90%;
  max-width: 431px;
  min-height: 298px;
  padding: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #39007e;
    margin-bottom: 10px;
    max-width: 90%;
  }
  p {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.7);
  }

  button {
    width: 123px;
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
`;
