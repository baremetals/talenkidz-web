import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootReducer';

const selectModal = (state: RootState) => state.modal;

export const modalSelector = createSelector(selectModal, (state) => state);
export const openSelector = createSelector(selectModal, (state) => state.isOpen);
export const componentSelector = createSelector(
  selectModal,
  (state) => state.modalComponent
);
