import styled from "styled-components";
import { Link } from "react-scroll"
// import Spinner from "components/Layout/Spinner";

export const Button = styled(Link)`
    background-color: #7755E2;
    color: #fff;
    font-size: 1rem;
    border-radius: 10rem;
    padding: 1.125rem 2.5rem;
    border: none;
    cursor: pointer;
    line-height: 1;
    font-weight: 500;
    display: inline-block;
    text-transform: capitalize;
    box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #7755E2;
        background-color: #fff;
    }
    @media (max-width: 991px) {
        padding: 1rem 2rem;
    }
`;

export const FieldBlock = styled.div`

`;

export const Title = styled.h1`
    text-align: right;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 123.1%;
    color: #39007E;
    margin-bottom:20px;
    font-family: 'Syne', sans-serif;    
`;

export const FieldGroup = styled.div`
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    column-gap: 10px;
    row-gap: 10px;
    justify-content: flex-end;
        li {
            border: 1px solid #39007E;
               border-radius: 5px;
                padding: 9px 36px;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 123.1%;
                font-family: 'Syne',sans-serif;
                height: 39.22px;
                text-align: center;
                cursor: pointer;
            &.active {
                border: 1px solid #39007E;
                color: #fff;
                background-color: #39007E;
            }
            &:hover {
                border: 1px solid #39007E;
                color: #fff;
                background-color: #39007E;
            }
        }
  }
`;

export const FieldAction = styled.div`
  margin-top:30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        background: #0F021F !important;
        border: 1px solid #0F021F!important;
        border-radius: 15px;
        font-weight: 500;
        font-size: 14px;
        line-height: 123.1%;
    }
    a {
        color: #39007E !important;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 123.1%;
    }
`;








