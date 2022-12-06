
import {
  ArticleEntity,
} from 'generated/graphql';
export const INITIAL_STATE = {
  articles: [],
  articlesLength: 0,
  hasMore: false,
  total: 0,
};

interface IArticleState {
  articles: ArticleEntity[];
  articlesLength?: number;
  hasMore?: boolean;
  total?: number;
}

interface IArticleAction {
  type: string;
  payload: IArticleState;
}

export const articleReducer = (state: IArticleState, action: IArticleAction) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        articles: action.payload.articles,
        articlesLength: action.payload.articlesLength,
        total: action.payload.total,
      };
    case 'SET_FILTERED_ARTICLES':
      return {
        ...state,
      };
    default:
      return {
        ...state,
        articles: action.payload.articles,
      };
  }
};
