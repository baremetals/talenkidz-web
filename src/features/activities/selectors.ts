import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootReducer';

export const selectActivity = (state: RootState) => state.activity;

export const activitiesSelector = createSelector(
  selectActivity,
  (state) => state.activities
);

export const listTotalSelector = createSelector(selectActivity, (state) => state.total);

export const AllActivitiesSelectors = createSelector(selectActivity, (state) => state);
