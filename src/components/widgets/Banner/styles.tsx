import styled from "styled-components";
import { Link } from "react-scroll"
// import Spinner from "components/Layout/Spinner";

export const BannerBlock = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;  
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
export const BannerInfo = styled.div`
 position: absolute;
 padding: 0 40px;
 div {
   margin-bottom: 40px;
   @media (max-width: 962px) { 
    margin-bottom: 15px;
  }
 }
 h2 {
    font-weight: 800;
    font-size: 42px;
    line-height: 104.6%;
    color: #FFFFFF;
    text-shadow: 20px 25px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    margin-bottom:10px;
    @media (max-width: 962px) { 
        font-size: 22px;
        margin-bottom: 10px;
    }
  }
  h3 {
    width: 100%;
    position: relative;
    display: block;
    font-weight: 700;
    font-size: 20px;
    line-height: 104.6%;
    text-align: right;
    letter-spacing: -0.01em;
    text-transform: capitalize;
    color: #FFFFFF;
  }
`;

export const SerchBlock = styled.div`
  max-width:774px;
  margin:0 auto;
  @media (max-width: 962px) { 
     margin:0 auto 20px;
  }
`;


