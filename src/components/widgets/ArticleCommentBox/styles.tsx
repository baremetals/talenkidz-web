import styled from 'styled-components';
import { Link } from 'react-scroll';
// import Spinner from "components/Layout/Spinner";

export const ArticlesComment = styled.div`
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.1%;
    color: #39007e;
    margin-bottom: 50px;
  }
  .star {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 132.9%;
    text-align: center;
    color: #000000;
    span {
      margin-right: 10px !important;
    }
  }
`;

export const CommentBox = styled.div`
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 20px;
  max-width: 100%;
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

export const CommentAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Reply = styled.div`
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

export const DayBlock = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: rgba(15, 2, 31, 0.7);
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

export const CommentImg = styled.div`
  display: flex;
  border-radius: 50px;
  overflow: hidden;
`;

export const StyledInput = styled.input`
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  width: 100%;
  height: 57px;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 20px;
  }
  &::placeholder {
    color: #3c1a9899;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const LeaveComment = styled.div`
  position: relative;
  max-width: 90%;
  button {
    background: #39007e;
    border-radius: 0px 20px 20px 20px;
    position: absolute;
    top: 0;
    right: 0;
    width: 62px;
    height: 57px;
    padding: 0;
  }
`;

export const CommentUserBox = styled.div`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  display: flex;
`;
export const ShowMore = styled.div`
  margin-top: -70px;
  height: 138px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 79%,
    rgba(77, 183, 157, 0) 100%
  );
  position: relative;
  z-index: 111;
  text-align: right;
  max-width: 90%;
  margin-bottom: 40px;
`;

export const LinkBlock = styled.a`
  top: 31px;
  position: relative;
`;
