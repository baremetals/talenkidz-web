import * as Yup from "yup";


export const getRegisterValidationSchema = () => {
  return Yup.object().shape({
    fullName: Yup.string().required('FullName is Required!'),
    userType: Yup.string().required('user type is Required!'),
    username: Yup.string().required('Username is Required!'),
    // organisationName: Yup.string().required('Organisation Name is Required!'),
    email: Yup.string().required('Email is Required!'),
    password: Yup.string().required('Password is Required!'),
    confirmPassword: Yup.string().test(
      'passwords-match',
      'Passwords must match',
      function (value) {
        // eslint-disable-next-line no-invalid-this
        return this.parent.password === value;
      }
    ),
  });
};

export const getLoginValidationSchema = () => {
  return Yup.object().shape({
    usernameOrEmail: Yup.string().required('Username or Email is Required!'),
    password: Yup.string().required('Password is Required!'),
  });
};

export const getForgotPasswordValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().required("Email is Required!"),
  });
};

export const getResetPasswordValidationSchema = () => {
  return Yup.object().shape({
    newPassword: Yup.string().required("Password is Required!"),
    confirmPassword: Yup.string().test(
      "passwords-match",
      "Passwords must match",
      function (value) {
        // eslint-disable-next-line no-invalid-this
        return this.parent.newPassword === value;
      }
    ),
    // .oneOf([Yup.ref('newPassword'), null], "Passwords must match")
  });
};
