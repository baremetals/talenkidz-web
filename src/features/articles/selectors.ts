import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootReducer';

export const selectArticle = (state: RootState) => state.article;

export const articlesSelector = createSelector(
  selectArticle,
  (state) => state.articles
);

export const totalSelector = createSelector(selectArticle, (state) => state.total);

export const AllSelectors = createSelector(selectArticle, (state) => state);
