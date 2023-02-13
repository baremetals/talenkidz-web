import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootReducer';

export const selectActivity = (state: RootState) => state.activity;

export const articlesSelector = createSelector(
  selectActivity,
  (state) => state.activities
);

export const totalSelector = createSelector(selectActivity, (state) => state.total);

export const AllSelectors = createSelector(selectActivity, (state) => state);
