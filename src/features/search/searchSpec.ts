export interface ISearchState {
  searchValue: string;
  title: string;
  searching: boolean;
}

export interface ISearchAction {
  type: string;
  payload: { searchValue: string; searching: boolean };
}
export const initialState: ISearchState = {
  searchValue: '',
  title: 'Search',
  searching: false,
};
