import { ArticleEntity } from 'generated/graphql';

export interface IArticleState {
  articles: ArticleEntity[];
  articlesLength?: number;
  hasMore?: boolean;
  total?: number;
}

export interface IArticleAction {
  type: string;
  payload: IArticleState;
}
