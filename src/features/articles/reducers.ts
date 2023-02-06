import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticleState } from './articleSpec';

export const initialState: IArticleState = {
  articles: [],
  articlesLength: 0,
  hasMore: false,
  total: 0,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        articles: action.payload.articles,
        articlesLength: action.payload.articlesLength,
        total: action.payload.total,
      };
    },
    addArticles: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        articles: action.payload.articles,
        articlesLength: state.articles.length,
        hasMore:
          (state.articlesLength as number) >= (state.total as number)
            ? false
            : true,
      };
    },
    setFilteredArticles: (state) => {
      return {
        ...state,
      };
    },
  },
});

export const { setFilteredArticles, setArticles } = articleSlice.actions;

export default articleSlice.reducer;
