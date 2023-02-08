import { createCtx } from 'src/context';

export interface ISearchState {
  searchValue: string;
  title: string;
  searching: boolean;
}

export interface ISearchAction {
  type: string;
  payload: { searchValue: string; searching: boolean };
}
export const INITIAL_STATE = {
  searchValue: '',
  title: 'Search',
  searching: false,
};

export const searchReducer = (state: ISearchState, action: ISearchAction) => {
  switch (action.type) {
    case 'GET_VALUE':
      return {
        ...state,
        searchValue: action.payload.searchValue,
        searching: action.payload.searching,
      };
    // case 'SHOW_VALUE':
    //   return {
    //     ...state,
    //   };
    default:
      return {
        ...state,
      };
  }
};


const [useSearchState, useSearchDispatch, SearchProvider] = createCtx(
  INITIAL_STATE,
  searchReducer
);

export { useSearchState, useSearchDispatch, SearchProvider };