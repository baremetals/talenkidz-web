import Button from 'components/users/Auth/Button';
import Image from 'next/image';
import { SearchWrapper, StyledInput } from 'components/utilities/search/search.styles';

const Search = ({ placeholder, type, name }: any) => {
  return (
    <SearchWrapper>
      <StyledInput placeholder={placeholder} name={name} type={type} />
      <Button
        content=""
        type="submit"
        disabled={false}
        loading={false}
        aria-label="Search icon"
      >
        <Image
          src="/assets/svgs/search.svg"
          alt="location icon"
          className="bookmar"
          width={20}
          height={20}
        />

      </Button>
    </SearchWrapper>
  );
};

export default Search;


