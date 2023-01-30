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

export const TalentedKidBlock = styled.div`
 margin-bottom:160px;
  .rowblock {
    margin-bottom:15px;
  }
`;

export const TalentedKidsBlock = styled.div`
max-width:650px;
  a {
    color: #39007E;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }
 .kidsRow {
  margin-bottom:40px;
 }
`;

export const LinkBlock = styled.div`
     margin-bottom:20px;
     text-align: right;
`;
export const SerchBlock = styled.div`
     margin-bottom:50px;
`;



export const PageTitle = styled.h1`
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





