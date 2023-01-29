import styled from "styled-components";
import { Link } from "react-scroll"
// import Spinner from "components/Layout/Spinner";

export const EventItemBlock = styled.div`
  background: #F1FAFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding:14px 16px;
  margin-bottom:15px;
`;
export const EventItemImg = styled.div`
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:30px;
    img {
    }
`;

export const EventInfo = styled.div`
  padding-left:15px;
  padding-right:15px;
  margin-bottom: 15px;
  h2 {
    color: #39007E;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 110.1%;
    margin-bottom:15px;
  }
`;

export const TimeBlock = styled.div`
display:flex;
align-items: center;
 label {
  color: #CC0000;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
 }
 span {
  background: rgba(57, 0, 126, 0.2);
  border-radius: 20px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  font-weight: 500;
  font-size: 14px;
  line-height: 123.1%;
  text-align: center;
  letter-spacing: -0.01em;
  color: rgba(57, 0, 126, 0.59);
  width: 72px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:30px;
  
 }
`;

export const CourseItem = styled.div`
margin: 15px 0;
    display: flex;
    align-items: center;
span {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: rgba(15, 2, 31, 0.7);
  &.dot {
      width: 10px;
      height: 10px;
      background: rgba(57,0,126,0.2);
      margin-left: 15px;
      margin-right: 15px;
      border-radius: 50px;
  }
}
`;
export const Visitor = styled.div``;

export const Visitors = styled.div`
  display: flex;
  align-items: center;
`;
export const SeeMore = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #0F021F;
  border-bottom: 1px solid #000000;
`;

export const VisitorInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(15, 2, 31, 0.7);
    margin-left:10px;
  }
`;






