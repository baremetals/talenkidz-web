import styled from 'styled-components';


export const ChildServices = styled.section`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  .container {
    max-width:1260px;
  }
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  @media (max-width: 891px) {
    .ChildSectionRow {
      flex-direction: column;
    }
  }
  .col-4 {
    max-width:33.33%;
    @media (max-width: 891px) {
      max-width:100%;
    }
  }
`;

export const ChildServiceItem = styled.div`
  text-align: right;
  .label {
    .undeline {
          background: url(../underline.svg);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          background-repeat: no-repeat;
          background-position: 0 30px;
          background-size: contain;
          min-height: 42px;
          display: inline-block;
        }
    .undelineSecond {
      background: url(..//underlineSecond.svg);
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      background-repeat: no-repeat;
      background-position: 0 30px;
      background-size: contain;
      min-height: 42px;
      display: inline-block;
    }
    }
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: right;
    margin: 30px 0;
    font-family: 'Montserrat', sans-serif;
    postion:relative:
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

export const ShapeImageBlock = styled.div`
  border-radius: 50% 50% 0% 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding:8px 8px 0px;
  padding-bottom: 0;
  border: solid 3px #39007e;
  border-bottom: 0;
  border-left: 0;
  width:388px;
  height:388px;
  position: relative;
  margin:0 auto;
    @media (max-width: 991px) {
      width:328px;
      height:328px;
    }
`;

export const ShapeImage = styled.div`
  border-radius: 50% 50% 0% 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  width:370px;
  height:370px;
   @media (max-width: 991px) { 
     width:320px;
      height:320px;
   }
`;
