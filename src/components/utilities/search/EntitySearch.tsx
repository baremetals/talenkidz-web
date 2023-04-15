import {
  useSearch,
} from 'src/hooks/useSearch';
import React, { useState } from 'react';

// import { SearchContext } from './SearchContext';
// import { useSearchDispatch, useSearchState } from './searchReducer';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { searchValueSelector,  } from 'src/features/search/selectors';
import { getValue } from 'src/features/search/reducers';
import { SearchWrapper, StyledInput } from './search.styles';
import { ISearch } from 'src/interfaces';
import { setArticles } from 'src/features/articles';
import SearchButton from './SearchButton';




const EntitySearch: React.FC<ISearch> = ({
  entities,
  // placeholder,
}) => {
  const value = useAppSelector(searchValueSelector);
  const dispatch = useAppDispatch();
  const [showReset, setShowReset] = useState(false)

  // console.log(entities)

  const search = useSearch({
    searchValue: value,
    entities,
  });


  return (
    <SearchWrapper>
      <StyledInput
        placeholder={'Search'}
        name="search"
        type="text"
        onChange={async (e) => {
          setShowReset(true);
          dispatch(
            getValue({
              searchValue: e.target.value,
              searching: true,
            })
          );
          const res = search;
          console.log(res);
          dispatch(
            setArticles({
              // total: res.length,
              articles: res,
            })
          );
        }}
      />
      <SearchButton showReset={showReset} />
    </SearchWrapper>
  );
};

export default EntitySearch;
