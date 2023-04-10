import styled from 'styled-components';
import Spinner from 'components/utilities/Spinner';

type buttonProps = {
  content: string;
  type: any;
  disabled: boolean;
  loading: boolean;
  bgColor?: string;
  BtnNames?: string;
  children?: React.ReactNode;
  onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (_event: any) => void;
};

export default function AuthButton({
  content,
  BtnNames,
  type,
  disabled,
  loading,
  bgColor,
  children,
  onClick,
}: buttonProps) {
  return (
    <StyledButton
      style={{ backgroundColor: bgColor, borderColor: bgColor }}
      type={type}
      className={BtnNames}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children} {content}
      {loading && (
        <Spinner
          style={{
            position: 'relative',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        />
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  &.BtnPrimery {
    background: #0f021f;
    border-radius: 20px;
    font-weight: 600;
    font-size: 24px;
    font-family: 'Syne', sans-serif;
    min-height: 70px;
    max-width: 365px;
    width: 100%;
  }
  background-color: #39007e;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.375rem;
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
