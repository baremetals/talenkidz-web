import styled from 'styled-components';

export const Wrapper = styled.div`
  .setting-item {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #0f021f;
    .active {
      color: #39007e;
      text-decoration: underline;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }
    @media (max-width: 991px) {
      flex-direction: column;
    }
    a {
      text-decoration: underline;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      text-decoration-line: underline;
      &:hover {
        color: #39007e;
      }
    }
    .standard {
      color: #39007e;
      @media (max-width: 991px) {
        margin: 10px 0;
      }
    }
  }
`;
