import Spinner from 'components/utilities/Spinner';
import styled from 'styled-components';

type buttonProps = {
  content: string;
  type: any;
  disabled: boolean;
  loading: boolean;
  bgColor?: string;
  children?: React.ReactNode;
};

export default function AuthButton({
  content,
  type,
  disabled,
  loading,
  bgColor,
  children,
}: buttonProps) {
  return (
    <StyledButton
      style={{ backgroundColor: bgColor, borderColor: bgColor }}
      type={type}
      disabled={disabled || loading}
    >
      {children} {content}
      {loading && <Spinner />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: #bc70ad;
  color: #fff;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 0.875rem 2rem;
  border: 1px solid transparent;
  cursor: pointer;
  line-height: 1;
  font-weight: 400;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  @media (max-width: 991px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
  &:hover {
    background-color: #333;
    color: #fff;
  }
  &.submit {
    color: red;
  }
`;
