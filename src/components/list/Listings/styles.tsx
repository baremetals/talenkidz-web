import styled from "styled-components";

export const CategoriesBlock = styled.div`
margin-bottom: 93px;
`;

export const BreadcrumbBlock = styled.div`
  @media (max-width: 992px) {  
     margin-top: 93px;
   }
`;



export const ActivitiesList = styled.div`
    .Column-3 {
        max-width: 33.33%;
        width: 100%;
        flex: auto;
      @media (max-width: 992px) {  
            max-width: 100%;
        }
    }
   .pageTitle {
      max-width:1024px;
      margin:0 auto 50px;
   }
   .buttonRow {
      text-align:center;
      margin-top:54px;
      Button {
         background: #0F021F !important; 
         border: 1px solid #0F021F !important;
         border-radius: 15px !important;
         max-width: 310.94px;
         width:100%;
         font-style: normal;
         font-weight: 500;
         font-size: 16px;
         line-height: 123.1%;
         color: #FFFFFF;
      }
   }
`;
