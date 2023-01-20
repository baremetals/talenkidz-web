import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentBox, { ICommentBox } from './index';
import { mockCommentBoxProps } from './CommentBox.mock';

export default {
  title: 'comment/CommentBox',
  component: CommentBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CommentBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommentBox> = (args) => (
  <CommentBox {...args} />
);

export const CommentInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

CommentInput.args = {
  ...mockCommentBoxProps.base,
} as ICommentBox;
