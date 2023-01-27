import styled from "styled-components";
import { Link } from "react-scroll"
// import Spinner from "components/Layout/Spinner";


export const ArticlesComment = styled.div`
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.1%;
    color: #39007E;
    margin-bottom:50px;
  }
`;

export const CommentBox = styled.div`
    background: #F1FAFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding:20px;
    max-width: 611px;
    margin-bottom:60px;
    width:100%;
     p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #0F021F;
          margin-bottom:20px;
     }
`;

export const CommentAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Reply = styled.div`
    label {
      margin-right:20px;   
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
    display:flex;
    align-items: center;
   margin-bottom:20px;
    h3 {
        margin-left:10px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #0F021F;
    }
`;

export const CommentImg = styled.div`
   display:flex;
   border-radius: 50px;
    overflow: hidden;
`;





export const StyledInput = styled.input`
  background: #F1FAFF;
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
 position:relative;
 max-width: 611px;
 button {
   background: #39007E;
   border-radius: 0px 20px 20px 20px;
   position: absolute;
    top: 0;
    right: 0;
    width: 62px;
    height: 57px;
    padding: 0;
  }
`;





