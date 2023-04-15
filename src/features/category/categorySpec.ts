import { TagEntity, CategoryEntity } from 'generated/graphql';

export interface ICategoryState {
  categories: CategoryEntity[];
  category:  string;
  tags: TagEntity[];
}

export interface ICategoryAction {
  type: string;
  payload: ICategoryState;
}
