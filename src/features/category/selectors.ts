import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootReducer';

export const selectArticle = (state: RootState) => state.category;

export const selectCats = (state: RootState) => state.category;

export const categorySelector = createSelector(
  selectCats,
  (state) => state.category
);

export const tagsSelector = createSelector(selectCats, (state) => state.tags);