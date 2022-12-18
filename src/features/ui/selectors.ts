import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/app/rootReducer";

export const selectUI= (state: RootState) => state.ui;

export const stateMsg = createSelector(selectUI, (state) => state.error);

export const successMsg = createSelector(selectUI, (state) => state.success);

export const isLoading = createSelector(selectUI, (state) => state.loading);
