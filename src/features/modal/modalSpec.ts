import { TArticleFormProps } from 'src/types';


export type TArticleFormContent = TArticleFormProps & {
  slug: string;
  articleId: string;
  categoryId: string;
};