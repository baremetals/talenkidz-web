import styled from 'styled-components';


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

export const Date = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: rgba(15, 2, 31, 0.7);
  margin-right: 14px;
`;

export const Time = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: rgba(15, 2, 31, 0.7);
  margin-left: 14px;
`;

export const ArticleMediaIcons = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
`;

export const ArticleLikeIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
  h3 {
    margin-left: 10px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ArticleCommentIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;
  h3 {
    margin-left: 10px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const BookMarkIconWrap = styled.div`
  margin-left: 70px;
`;

export const Readmore = styled.div`
  margin-top: 90px;
  margin-bottom: 50px;
  a {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.1%;
    letter-spacing: -0.01em;
    color: #39007e;
  }
`;
export const CardWrapper = styled.div`
  max-width: 650px;
  a {
    color: #39007e;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }
  .kidsRow {
    margin-bottom: 40px;
  }
`;

export const TalentedKidsBlock = styled.div`
  max-width: 650px;
  a {
    color: #39007e;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }
  .kidsRow {
    margin-bottom: 40px;
  }
`;

export const LinkWrapper = styled.div`
  margin-bottom: 20px;
  text-align: right;
`;
export const SearchWrapper = styled.div`
  margin-bottom: 50px;
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 52px;
  color: #39007e;
  margin-bottom: 92px;
  max-width: 700px;
  font-family: 'Syne', sans-serif !important;
  position: relative;
  line-height: 123.1%;
  span {
    position: relative;
    font-family: 'Syne', sans-serif !important;
    color: #fff;
    margin-left: 6px;
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
    }
  }
`;