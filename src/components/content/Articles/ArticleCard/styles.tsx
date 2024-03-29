import styled from "styled-components";

export const ArticleInfo = styled.div`
  margin-right: 20px;
  max-width: 60%;
  h3 {
    color: #39007e;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 123.1%;
    margin-bottom: 20px;
  }
  .active {
    .bookmark {
      display:none;
    }
  }
  .inactive {
    .bookmarkActive {
       display:none;
    }
  }
`;

export const ArticleImageColumn = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
`;

export const Date = styled.div`
  display:flex;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: rgba(15, 2, 31, 0.7);
  margin-right:14px;
`;

export const Time = styled.div`
  display:flex;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: rgba(15, 2, 31, 0.7);
   margin-left:14px;
`;

export const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  max-width: 260px;
  justify-content: space-between;
  cursor: pointer;
`;

export const ArticleBlurb = styled.p`
font-weight: 500;
font-size: 18px;
line-height: normal;
color: #574E62;
`;

export const ArticleImageBlock = styled.div`
  text-align: center;
  border-radius: 50% 50% 0% 50%;
  overflow: hidden;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CategoryBtn = styled.div`
  button {
    background: rgba(57, 0, 126, 0.2) !important;
    border-radius: 50px !important;
    padding: 6px 15px;
    color: rgba(57, 0, 126, 0.59);
    font-weight: 500;
    font-size: 14px;
    min-width: 80.91px;
    margin-left: 50px;
    &:hover {
      background: rgba(57, 0, 126, 0.2) !important;
      color: rgba(57, 0, 126, 0.59);
      border-color: rgba(57, 0, 126, 0.59);
    }
  }
`;









 

