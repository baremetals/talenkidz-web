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
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  .user-name {
    label {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #0f021f;
      margin-bottom: 14px;
      display: flex;
    }
    p {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 79.5%;
      color: #574e62;
      margin-bottom: 0;
    }
  }
  .time {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 79.5%;
    color: #766b83;
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
  }
  margin-bottom: 20px;
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
