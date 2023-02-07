import { IQuestionsForm } from './QuestionsForm';

const base: IQuestionsForm = {
  formProps: {
    phone: '+123-456-7890',
    datetime: '10 December, 12.30',
    error: 'Phone or datetime is invalid',
  },
  errorMsg: true,
};

export const mockQuestionsProps = {
  base,
};
