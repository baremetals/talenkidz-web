import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuestionsForm, { IQuestionsForm } from './QuestionsForm';
import { mockQuestionsProps } from './QuestionsForm.mock';

export default {
  title: 'auth/QuestionsForm',
  component: QuestionsForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof QuestionsForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QuestionsForm> = (args) => (
  <QuestionsForm {...args} />
);

export const Questions = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Questions.args = {
  ...mockQuestionsProps.base,
} as IQuestionsForm;
