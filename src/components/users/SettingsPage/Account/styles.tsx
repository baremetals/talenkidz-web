import styled from 'styled-components';

export const Wrapper = styled.div``;
export const DeleteLink = styled.div`
  margin-top: 50px;
  a {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #cc0000;
    margin-bottom: 5px;
    display: inherit;
  }
  p {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(15, 2, 31, 0.6);
    margin-bottom: 0;
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  .user-block {
    display: flex;
    align-items: center;
    cursor: pointer;
    label {
      font-family: 'Syne';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #0f021f;
      cursor: pointer;
    }
    .user-img {
      width: 48px;
      height: 48px;
      border-radius: 50px;
      overflow: hidden;
      margin-left: 10px;
    }
    svg {
      margin-right: 20px;
      width: 14px;
      height: 14px;
      path {
        fill: #0f021f !important;
      }
    }
  }
`;

export const AccountInfomation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: center;
  font-family: 'Syne';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #0f021f;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  label {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(15, 2, 31, 0.6);
  }
  .change {
    label {
      cursor: pointer;
    }
    cursor: pointer;
    svg {
      margin-left: 20px;
      width: 14px;
      height: 14px;
      path {
        fill: #0f021f !important;
      }
    }
  }
  .col-4 {
    min-width: 33.33%;
    &:last-child {
      display: flex;
      align-items: center;
      justify-content: end;
    }
    @media (max-width: 991px) {
      min-width: 100%;
      margin: 10px 0;
    }
  }
`;
