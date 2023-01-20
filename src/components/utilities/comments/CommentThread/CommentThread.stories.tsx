import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentThread, { ICommentThread } from './index';
import { mockCommentThreadProps } from './CommentThread.mock';

export default {
  title: 'comment/CommentThread',
  component: CommentThread,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CommentThread>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommentThread> = (args) => (
  <CommentThread {...args} />
);

export const Thread = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Thread.args = {
  ...mockCommentThreadProps.base,
} as ICommentThread;
