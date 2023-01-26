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

