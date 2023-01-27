import styled from "styled-components";
import Button from 'components/users/Auth/Button';
import Image from 'next/image';

const Search = ({ placeholder, type, name, ...props }: any) => {
  return (
    <SearchBlock>
      <StyledInput placeholder={placeholder} name={name} type={type} />
      <Button
        content=""
        type="submit"
        disabled={false}
        loading={false}
      >
        <Image
          src="/assets/svgs/search.svg"
          alt="location icon"
          className="bookmar"
          width={20}
          height={20}
        />

      </Button>
    </SearchBlock>
  );
};

export default Search;

export const SearchBlock = styled.div`
 position:relative;
 button {
   background: #39007E;
    border-radius: 0px 20px 20px 20px;
   position: absolute;
    top: 0;
    right: 0;
    width: 62px;
    height: 57px;
    padding: 0;
  }
`;

export const StyledInput = styled.input`
  background: #F1FAFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  width: 100%;
  height: 57px;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
     border-radius: 20px;
  }
  &::placeholder {
    color: #3c1a9899;
    font-weight: 100;
    font-size: 1rem;
  }
`;

