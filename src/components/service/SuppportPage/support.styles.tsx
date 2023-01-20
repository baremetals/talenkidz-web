import styled from "styled-components";

export const SupportCardWrapper = styled.div`
    padding: 5px;
    align-items: center;
    justify-content: space-between;
`;

export const FAQTitle = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0 10px;
    padding-top: 1.25rem;
`;

export const TextWrap = styled.div`
    margin: 10px 10px;
`;

export const ContactCardWrap = styled.div`
    padding-top: 1.25rem;
`;

export const ContactCard = styled.div`
    display: flex;
    padding-top: 10px;
    margin: 10px 10px;
    border-radius: 5px;
    border-style: solid #000000;
`;

export const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const SupportMainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 60px;
    width: 30vw;
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;

export const SupportInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 25%;
    width: 100%;
    margin: 25px;
    grid-gap: 10px;
`;

export const SupportButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SupportInput = styled.input`
    border-radius: .5rem;
    width: 80%;
    height: 1rem;
    padding: 1rem;
    border: 1px solid rgba(31, 38, 135, 0.5);
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
        display: inline-block;
        backdrop-filter: blur(12rem);
        border-radius: .5rem;
    }
    &:placeholder {
        color: #3c1a9899;
        font-weight: 100;
        font-size: 1rem;
    }
`;

export const SupportTextArea = styled.textarea`
    border-radius: 0.5rem;
    border: 1px solid rgba(31, 38, 135, 0.5);
    width: 80%;
    height: 90px;
    padding: 1rem;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
        display: inline-block;
        backdrop-filter: blur(12rem);
        border-radius: .5rem;
    }
    &:placeholder {
        color: #3c1a9899;
        font-weight: 100;
        font-size: 1rem;
    }
`;