import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1012px;
  margin: 90px auto 0;
  @media (max-width: 991px) {
    width: 90%;
  }
  .tabs-component {
    max-width: 878px;
    .tabsBlock {
      background: rgba(57, 0, 126, 0.05);
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      button {
        background-color: transparent;
        border: none;
        font-family: 'Syne';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #0f021f;
        &.active {
          background: #d3c7e0;
          border-radius: 10px;
        }
        @media (max-width: 1024px) {
          width: 100%;
        }
      }
    }
    .tabpanel {
      margin-top: 50px;
    }
  }
`;

export const Headers = styled.h1`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #0f021f;
  margin-bottom: 30px;
`;
