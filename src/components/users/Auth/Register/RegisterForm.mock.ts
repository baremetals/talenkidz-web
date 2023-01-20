import { IRegisterForm } from './RegisterForm';

const base: IRegisterForm = {
  formProps: {
    fullName: 'Yahwey Grace',
    username: 'yahwey',
    userType: 'candidate',
    email: 'yahwey@test.com',
    password: 'firebaseman100',
    confirmPassword: 'firebaseman100',
    error: 'Email or username is already taken',
  },
  errorMsg: true,
};

export const mockRegisterProps = {
  base,
};
