import Login from 'components/users/Auth/Login';
import Layout from 'components/Layout';
// import { withApollo } from "../../../utils/withApollo";

function LoginPage() {
  const description = `
        Please use the login page to access your account. 
        You will need to provide your account email address and password.
        If you cannot remember your email address please use the forgot password form.
    `;
  const url = 'https://talentkids.io/auth/login';
  return (
    <Layout
      title={`Talentkids | Login`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      type="login"
    >
      <Login />
    </Layout>
  );
}

export default LoginPage;

// export default withApollo({ ssr: false })(SignIn);
