import styled from "styled-components";


export const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 50%);
    z-index: 99999;
    display: flex;
    align-items: center;
    > div {
        width: 100%
    }
`;


export const PageContainer = styled.div`
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 50%);
    border-radius: 1rem;
    max-width: 45rem;
    padding: 3rem;
    backdrop-filter: blur(.25rem);
`;

export const LoginWith = styled.h5`
    cursor: pointer;
`;

export const HorizontalRule = styled.hr`
    width: 75%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    background-color: #ebd0d0;
    margin: 4rem 0 0;
    backdrop-filter: blur(25px);
`;

