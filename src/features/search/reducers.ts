import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './searchSpec';


const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getValue: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        searchValue: action.payload.searchValue,
        searching: action.payload.searching,
      };
    },
  },
});

export const { getValue } = searchSlice.actions;

export default searchSlice.reducer;
