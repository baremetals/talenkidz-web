import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategoryState } from './categorySpec';

export const initialState: ICategoryState = {
  categories: [],
  category: 'all',
  tags: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        categories: action.payload.categories,
      };
    },
    setCategory: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        category: action.payload.category,
      };
    },
    setTags: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        tags: action.payload.tags,
      };
    },
  },
});

export const { setCategories, setTags, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
