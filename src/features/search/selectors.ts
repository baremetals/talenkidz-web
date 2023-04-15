import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootReducer';

const selectSearch = (state: RootState) => state.search;

export const searchSelector = createSelector(selectSearch, (state) => state);
export const searchValueSelector = createSelector(
  selectSearch,
  (state) => state.searchValue
);
export const searchingSelector = createSelector(
  selectSearch,
  (state) => state.searching
);

export const titleSelector = createSelector(
  selectSearch,
  (state) => state.title
);