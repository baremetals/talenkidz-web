import styled from 'styled-components';


export const ChildServices = styled.section`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  @media (max-width: 891px) {
    .ChildSectionRow {
      flex-direction: column;
    }
  }
`;

export const ChildServiceItem = styled.div`
  text-align: right;
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: right;
    margin: 30px 0;
    font-family: 'Montserrat', sans-serif;
    .undeline {
      background: url(/underline.svg);
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      background-repeat: no-repeat;
      background-position: 0 30px;
      background-size: contain;
      min-height: 42px;
      display: inline-block;
    }
    .undelineSecond {
      background: url(/underlineSecond.svg);
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      background-repeat: no-repeat;
      background-position: 0 30px;
      background-size: contain;
      min-height: 42px;
      display: inline-block;
    }
    @media (max-width: 1024px) {
      min-height: 72px;
    }
    @media (max-width: 691px) {
      min-height: auto;
    }
  }
  button {
    background: #39007e !important;
    font-weight: 600 !important;
    font-size: 20px !important;
    line-height: 24px;
    max-width: 279px !important;
    font-family: 'Syne', sans-serif;
  }
`;
export const ChildHeader = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 123.1%;
  font-family: 'Syne', sans-serif;
  color: #0f021f;
  max-width: 914px;
  margin: 0 auto 90px;
  @media (max-width: 991px) {
    font-size: 42px;
    text-align: center;
    &.WhiteBg::after {
      width: 100%;
      left: 0px;
      top: 0;
    }
  }
`;