import { ILoginForm } from './LoginForm';

const base: ILoginForm = {
  formProps: {
    usernameOrEmail: 'yahwey@test.com',
    password: 'firebaseman100',
    error: 'Email or username is invalid',
  },
  errorMsg: true,
};

export const mockLoginProps = {
  base,
};
