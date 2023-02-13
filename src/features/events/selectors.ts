import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootReducer';

export const selectEvent = (state: RootState) => state.event;

export const eventsSelector = createSelector(
  selectEvent,
  (state) => state.events
);

export const totalSelector = createSelector(
  selectEvent,
  (state) => state.total
);

export const AllSelectors = createSelector(selectEvent, (state) => state);
