import styled from "styled-components";
import { Link } from "react-scroll"
// import Spinner from "components/Layout/Spinner";

export const BannerBlock = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top:120px;
  input {
   background: #fff;
  }
`;
export const BannerImg = styled.div`
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
    }
`;
export const Icon = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #fff;
  top: 10px;
  right: 10px;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;


