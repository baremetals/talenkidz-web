import styled from 'styled-components';

export const CommentWrapper = styled.div`
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 20px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
