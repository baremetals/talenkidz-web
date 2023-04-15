import { createContext, useReducer, Dispatch } from 'react';
import {
  searchReducer,
  INITIAL_STATE,
  ISearchState,
  ISearchAction,
} from './searchReducer';

const SearchContext = createContext<{
  state: ISearchState;
  dispatch: Dispatch<ISearchAction>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

 const SearchProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchProvider, SearchContext };