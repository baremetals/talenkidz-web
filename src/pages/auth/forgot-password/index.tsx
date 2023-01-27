import ForgotPassword from 'components/users/Auth/ForgotPassword';
import Layout from 'components/Layout';
// import { withApollo } from "utils/withApollo";

function ForgotPasswordPage() {
  const url = 'https://www.talentkids.io/auth/forgot-password';
  return (
    <Layout
      title={`Talentkids | Forgot Password`}
      // metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      // data={JSON.stringify(structuredData)}
      type="forgot password"
    >
      <ForgotPassword></ForgotPassword>
    </Layout>
  );
}

// export default withApollo({ ssr: false })(ForgotPasswordPage);

export default ForgotPasswordPage;
