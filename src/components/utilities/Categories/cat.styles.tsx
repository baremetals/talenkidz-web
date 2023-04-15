import styled from 'styled-components';

export const Categorie = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;
export const PageTitleBlock = styled.div`
  max-width: 488px;
  margin-bottom: 50px;
`;
export const CategorieList = styled.div``;
export const FieldBlock = styled.div``;

export const Title = styled.p`
  text-align: right;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 123.1%;
  color: #39007e;
  margin-bottom: 20px;
  font-family: 'Syne', sans-serif;
`;

export const FieldGroup = styled.div`
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    column-gap: 10px;
    row-gap: 10px;
    justify-content: flex-end;
    li {
      border: 1px solid #39007e;
      border-radius: 5px;
      padding: 9px 36px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 123.1%;
      font-family: 'Syne', sans-serif;
      height: 39.22px;
      text-align: center;
      cursor: pointer;
      &.active {
        border: 1px solid #39007e;
        color: #fff;
        background-color: #39007e;
      }
      &:hover {
        border: 1px solid #39007e;
        color: #fff;
        background-color: #39007e;
      }
    }
  }
`;

export const FieldAction = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background: #0f021f !important;
    border: 1px solid #0f021f !important;
    border-radius: 15px;
    font-weight: 500;
    font-size: 14px;
    line-height: 123.1%;
  }
  a {
    color: #39007e !important;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 123.1%;
  }
`;

export const LinkBlock = styled.div`
  text-align: right;
  margin-top: 20px;
  a {
    color: #39007e;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 123.1%;
  }
`;

export const CategorieRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  } */
`;

export const Categoriecolumn = styled.div`
  border: 2px solid #39007e;
  border-radius: 5px;
  padding: 13px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 123.1%;
  color: #39007e;
  max-width: 33.33%;
  text-align: center;
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 21%;

  @media (max-width: 992px) {
    margin-left: 10px;
    margin-top: 10px;
    max-width: 50%;
    flex: 1 0 40%;
  }
`;
