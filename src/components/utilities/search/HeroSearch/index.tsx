import { useState } from 'react';
import {
  SearchWrapper,
  StyledInput,
} from 'components/utilities/search/search.styles';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { getValue, searchValueSelector } from 'src/features/search';
import { useSearch } from 'src/hooks/useSearch';
import { ISearch } from 'src/interfaces';

import { setEvents } from 'src/features/events';
import SearchButton from '../SearchButton';

interface TSearchProps extends ISearch {
  placeholder: string;
}
const HeroSearch: React.FC<TSearchProps> = ({ placeholder, entities }) => {
  const value = useAppSelector(searchValueSelector);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');
  const [showReset, setShowReset] = useState(false);

  const search = useSearch({
    searchValue: value,
    entities,
  });
  return (
    <SearchWrapper>
      <StyledInput
        placeholder={placeholder}
        name="search"
        type="text"
        onChange={async (e) => {
          setShowReset(true);
          // console.log(e.target.value);
          setInputValue(e.target.value);
          dispatch(
            getValue({
              searchValue: inputValue,
              searching: true,
            })
          );
          const res = search;
          dispatch(
            setEvents({
              events: res,
            })
          );
        }}
      />
      <SearchButton showReset={showReset} />
    </SearchWrapper>
  );
};

export default HeroSearch;
