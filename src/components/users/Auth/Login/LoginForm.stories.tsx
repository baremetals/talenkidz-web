import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm, { ILoginForm } from './LoginForm';
import { mockLoginProps } from './LoginForm.mock';

export default {
  title: 'auth/LoginForm',
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Login = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Login.args = {
  ...mockLoginProps.base,
} as ILoginForm;
