import styled from 'styled-components';

export const Question = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;

  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    .row {
      display: flex;
      flex-direction: column;
    }

    button {
      margin: 0 auto;
    }

    p {
      max-width: 100%;
    }
  }

  button {
    background: #0f021f;
    border-radius: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    font-family: 'Syne', sans-serif;
    max-width: 271px;
    width: 100%;
  }
`;

export const QuestionHeader = styled.h2`
  font-size: 52px;
  color: #0f021f;
  font-family: 'Syne', sans-serif;
  position: relative;
  z-index: 0;
  max-width: 897px;
  margin: 0 auto 24px;
  font-weight: 700;
  line-height: 123.1%;
  .questionsblock {
    position: relative;
    color: #fff;
    font-family: 'Syne', sans-serif !important;
    &::after {
      content: '';
      background: #39007e;
      position: absolute;
      width: 103%;
      min-height: 61.58px;
      height: 100%;
      top: -1px;
      left: -5px;
      z-index: -1;
      border-radius: 20px;
      transform: rotate(-1.97deg);
    }
  }
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

export const QuestionInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  margin-bottom: 40px;
  max-width: 400px;
  font-family: 'Montserrat', sans-serif;
`;