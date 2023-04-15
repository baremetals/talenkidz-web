import PasswordReset from 'components/users/Auth/PasswordReset';
import Layout from 'components/Layout';
import { withApollo } from 'src/utils/withApollo';

const ResetPassword = () => {

  const url = 'https://www.talentkids.io/auth/reset-password';
  return (
    <Layout
      title={`Talentkids | Reset Password`}
      // metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      type="reset password"
    >
      <PasswordReset />
    </Layout>
  );
};

export default withApollo({ ssr: false })(ResetPassword);
