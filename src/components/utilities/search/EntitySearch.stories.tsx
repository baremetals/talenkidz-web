import { ComponentStory, ComponentMeta } from '@storybook/react';
import EntitySearch from './EntitySearch';
import { mockSearchProps } from './EntitySearch.mock';
import { ISearch } from 'src/interfaces';

export default {
  title: 'search/EntitySearch',
  component: EntitySearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EntitySearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntitySearch> = (args) => (
  <EntitySearch {...args} />
);

export const Search = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Search.args = {
  ...mockSearchProps.base,
} as ISearch;
