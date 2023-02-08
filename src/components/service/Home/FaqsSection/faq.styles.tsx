import styled from 'styled-components';

export const FaqQuestions = styled.div`
  background: #f9fdff;
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const FaqQuestionsInner = styled.div`
  max-width: 814px;
  margin: 0 auto;
  position: relative;
`;

export const ImageBlock = styled.div`
  position: absolute;
  top: -14px;
  left: -332px;
  max-width: 602px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const FaqSectionHeader = styled.h2`
  font-size: 52px;
  color: #0f021f;
  font-family: 'Syne', sans-serif;
  position: relative;
  z-index: 0;
  font-weight: 700;
  line-height: 123.1%;
  text-align: center;
  margin-bottom: 90px;
  @media (max-width: 991px) {
    font-size: 42px;
    text-align: center;
    .WhiteBg::after {
      width: 123%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
`;