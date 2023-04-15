import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from 'components/users/Auth/Button';


type TButtonProps = {
  showReset: boolean;
};

function SearchButton({ showReset }: TButtonProps) {
    const router = useRouter()
  return (
    <Button
      content=""
      type="submit"
      disabled={false}
      loading={false}
      aria-label="Search icon"
    >
      {!showReset ? (
        <Image
          src="/assets/svgs/search.svg"
          alt="reset icon"
          className="bookmar"
          width={20}
          height={20}
        />
      ) : (
        <a  href={router.asPath}>
          Reset
        </a>
      )}
    </Button>
  );
}

export default SearchButton