import {
  useSearch,
} from 'components/utilities/hooks/useSearch';
import React from 'react';
import { Entities } from 'src/types';
import {
  SearchBar,
  SearchInput,
  SearchButton,
} from 'styles/common.styles';
// import { SearchContext } from './SearchContext';
import { useSearchDispatch, useSearchState } from './searchReducer';

export interface ISearch {
  entities: Entities[];
  setFilteredEntities: React.Dispatch<React.SetStateAction<Entities[]>>;
}

const EntitySearch: React.FC<ISearch> = ({
  entities,
  setFilteredEntities,
}) => {
  // const { state,  } = useContext(SearchContext);
  const state = useSearchState();
  const dispatch = useSearchDispatch();
  // console.log('testing this method: ', {...state});

  const search = useSearch({
    searchValue: state.searchValue,
    entities,
    setFilteredEntities,
  });


  return (
    <SearchBar>
      <SearchInput
        placeholder={state.title}
        type="text"
        name="search"
        onChange={async (e) => {
          dispatch({
            type: 'GET_VALUE',
            payload: { ...state, searchValue: e.target.value, searching: true },
          });
          await search()
        }}
      />
      <SearchButton aria-label="search icon button"></SearchButton>
    </SearchBar>
  );
};

export default EntitySearch;
