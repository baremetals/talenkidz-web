/* eslint-disable no-unused-vars */
import styled from "styled-components"

import { MdExpandMore } from "react-icons/md";

import { Link } from 'react-scroll';
// import Spinner from "components/Layout/Spinner";

export const CommentContainer = styled.div`
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

export const ShowMoreWrap = styled.div`
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



