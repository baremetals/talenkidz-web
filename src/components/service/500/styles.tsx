import styled from 'styled-components';

export const NotFoundPage = styled.div`
  .pageTitle {
    font-family: 'Syne';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: rgba(15, 2, 31, 0.8);
    margin-bottom: 20px;
    @media (max-width: 991px) {
      margin-top: 90px;
    }
  }
`;

export const ImgBox = styled.div`
  &.not-found {
    text-align: center;
    margin-bottom: 90px;
  }
`;
