import Login from 'components/users/Auth/Login';
import Layout from 'components/Layout';
// import { useIsAuth } from 'src/lib/isAuth';
// import { withApollo } from "src/utils/withApollo";

function LoginPage() {
  // useIsAuth();
  const description = "Talentkids - Login";
  const url = 'https://www.talentkids.io/auth/login';
  return (
    <Layout
      title={`Welcome to Talentkids | Login`}
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
