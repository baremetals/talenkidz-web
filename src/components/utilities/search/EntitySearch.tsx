import {
  useSearch,
} from 'src/hooks/useSearch';
import React from 'react';
import { Entities } from 'src/types';

import Button from 'components/users/Auth/Button';
import Image from 'next/image';
// import { SearchContext } from './SearchContext';
// import { useSearchDispatch, useSearchState } from './searchReducer';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { searchValueSelector,  } from 'src/features/search/selectors';
import { getValue } from 'src/features/search/reducers';
import { SearchWrapper, StyledInput } from './search.styles';

export interface ISearch {
  entities: Entities[];
  setFilteredEntities: React.Dispatch<React.SetStateAction<Entities[]>>;
  // placeholder?: string;
}

const EntitySearch: React.FC<ISearch> = ({
  entities,
  setFilteredEntities,
  // placeholder,
}) => {
  const value = useAppSelector(searchValueSelector);
  const dispatch = useAppDispatch();

  const search = useSearch({
    searchValue: value,
    entities,
    setFilteredEntities,
  });


  return (
    <SearchWrapper>
      <StyledInput
        placeholder={'Search'}
        name="search"
        type="text"
        onChange={async (e) => {
          dispatch(
            getValue({
              searchValue: e.target.value,
              searching: true,
            })
          );
          // dispatch({
          //   type: 'GET_VALUE',
          //   payload: {
          //     ...state,
          //     searchValue: e.target.value,
          //     searching: true,
          //   },
          // });
          await search();
        }}
      />
      <Button
        content=""
        type="submit"
        disabled={false}
        loading={false}
        aria-label="Search icon"
        onChange={async (e) => {
          dispatch(
            getValue({
              searchValue: e.target.value,
              searching: true,
            })
          );
          // dispatch({
          //   type: 'GET_VALUE',
          //   payload: {
          //     ...state,
          //     searchValue: e.target.value,
          //     searching: true,
          //   },
          // });
          await search();
        }}
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

export default EntitySearch;
