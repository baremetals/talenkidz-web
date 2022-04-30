import styled from "styled-components";
import Spinner from "components/Spinner";

export default function AuthButton({ content, type, disabled, loading }: any) {
    return (
        <StyledButton type={type} disabled={disabled || loading}>
            {content}
            {loading && <Spinner />}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    background-color: #BC70AD;
    color: #fff;
    font-size: 1rem;
    border-radius: 10rem;
    padding: .875rem 2rem;
    border: 1px solid transparent;
    cursor: pointer;
    line-height: 1;
    font-weight: 400;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    @media (max-width: 991px) {
        font-size: .875rem;
        padding: .75rem 1.5rem;
    }
    &:hover {
        background-color: #333;
        color: #FFF;
    }
    &.submit {
        color: red;
    }
`;
