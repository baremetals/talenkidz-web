import styled from 'styled-components';

export const CommentWrapper = styled.div`
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 20px 40px;
  max-width: 90%;
  margin-bottom: 60px;
  width: 100%;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #0f021f;
    margin-bottom: 20px;
  }
`;

export const CommentUserWrap = styled.div`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  display: flex;
  .BlockIcon {
    display: flex;
  }
  .likeicon {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 132.9%;
    text-align: center;
    text-transform: lowercase;
    color: #000000;
    svg {
      height: 32px;
      margin-left: 10px;
    }
  }
  .StarIcon {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 132.9%;
    text-align: center;
    text-transform: lowercase;
    color: #000000;
    margin-left: 30px;
    svg {
      height: 32px;
      margin-right: 5px;
    }
  }
`;

export const CommentUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  h3 {
    margin-left: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #0f021f;
  }
`;

export const CommentUserImg = styled.div`
  display: flex;
  border-radius: 50px;
  overflow: hidden;
`;

export const CommentActionWrap = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icons-block {
    display: flex;
    .block-icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-left: 30px;
      svg {
        background: transparent;
        path {
          stroke: rgba(15, 2, 31, 0.8);
        }
      }
    }
  }
`;

export const DayBlock = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: rgba(15, 2, 31, 0.7);
`;

export const ReplyBlock = styled.div`
  label {
    margin-right: 20px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.7);
  }
  display: flex;
  align-items: center;
`;
