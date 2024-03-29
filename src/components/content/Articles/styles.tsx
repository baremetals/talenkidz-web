import styled from "styled-components";

export const ArticleTitle = styled.div`
  padding: 90px 0 74px;
  .title {
    color: #39007E;
     span {
      color:#fff;
      font-family: 'Syne', sans-serif !important;
      position: relative;
      margin-right:10px;
       @media (max-width: 991px) {  
         color: #39007E;
        }
        &::after {
           content: '';
            background: #39007e;
            position: absolute;
            width: 106%;
            min-height: 72.77px;
            height: 100%;
            top: -6px;
            left: -8px;
            z-index: -1;
            border-radius: 20px;
           transform: matrix(1, -0.02, 0.01, 1, 0, 0);
            @media (max-width: 991px) {  
               display: none;
            }
        }
     }
  }
`;

export const TrendingBlock = styled.div`
 margin-bottom:160px;
  .rowblock {
    margin-bottom:15px;
    .column-4 {
      min-width:33.33%;
      max-width:33.33%;
    @media (max-width: 991px) { 
         min-width:100%;
      }
    }
  }
`;

export const MoreArticlesBlock = styled.div`
max-width:650px;
  p {
    color: #39007E;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }
 .kidsRow {
  margin-bottom:40px;
 }
`;

export const LinkBlock = styled.div`
     margin-bottom:20px;
     text-align: right;
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 52px;
  color: #39007E;
  margin-bottom:92px;
  max-width:700px;
  font-family: 'Syne', sans-serif !important;
  position: relative;
  line-height: 123.1%;
  span {
     position: relative;
     font-family: 'Syne', sans-serif !important;
     color:#fff;
     margin-left:6px;
       @media (max-width: 991px) {   color: #39007E; }
     &::after { 
       content: '';
        background: #39007e;
        position: absolute;
        width: 106%;
        border-radius: 10px;
        transform: matrix(1, -0.02, 0.01, 1, 0, 0);
        height: 100%;
        top: -1px;
        left: -8px;
        z-index: -1;
          @media (max-width: 991px) { 
            display:none;
          }
     }
  }
`;

//  Article Cards
export const CardWrapper = styled.div`
  padding: 18px;
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
`;

export const IconBlock = styled.div`
  margin-right: 20px;
`;

export const Datetime = styled.div`
  display: flex;
  align-items: center;
  span {
    background: rgba(57, 0, 126, 0.2);
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

export const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

export const AuthorWrap = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #0f021f;
    margin-left: 20px;
  }
`;




