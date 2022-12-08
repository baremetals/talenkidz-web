import { ComponentStory, ComponentMeta } from '@storybook/react';
import RegisterForm, { IRegisterForm } from './RegisterForm';
import { mockRegisterProps } from './RegisterForm.mock';

export default {
  title: 'auth/RegisterForm',
  component: RegisterForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RegisterForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <RegisterForm {...args} />
);

export const Register = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Register.args = {
  ...mockRegisterProps.base,
} as IRegisterForm;
