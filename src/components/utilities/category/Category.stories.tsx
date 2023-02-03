import { ComponentStory, ComponentMeta } from '@storybook/react';
import Category, { ICategory } from '.';
// import { mockCategoryProps } from './Category.mock';

export default {
  title: 'category/Category',
  component: Category,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Category>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Category> = (args) => (
  <Category  />
);

export const Categories = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// Categories.args = {
//   ...mockCategoryProps.base,
// } as ICategory;
