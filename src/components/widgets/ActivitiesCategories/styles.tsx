import styled from "styled-components";

export const Categorie = styled.div`
   max-width: 1024px;
   margin:0 auto;
`;
export const PageTitleBlock = styled.div`
 max-width: 488px;
 margin-bottom:50px;
`;
export const CategorieList = styled.div`
 
`;

export const LinkBlock = styled.div`
 text-align:right;
 a {
  color: #39007E;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 123.1%;
 }
`;
export const CategorieRow = styled.div`
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 992px) {
   flex-wrap: wrap;
   justify-content: center;
  }
`;

export const Categoriecolumn = styled.div`
  border: 2px solid #39007E;
  border-radius: 5px;
  padding:13px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 123.1%;
  color: #39007E;
  width: 100%;
  text-align: center;
  margin: 10px 0;
  max-width: fit-content;
  min-width: 236px;
  cursor: pointer;
  &:first-child {
    margin-left:0;
  }
   &:last-child {
    margin-right:0;
  }
  &:hover {
    background-color:#39007E;
     color: #fff; 
  }
  &.active {
    background-color:#39007E;
     color: #fff;
  }
  @media (max-width: 992px) {
    margin-right:15px;
   &:last-child {
    margin-right:15px;
  }
  }
`;






