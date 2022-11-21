import React from "react";
import PasswordReset from "components/Auth/PasswordReset";
import { withApollo } from "utils/withApollo";
import Layout from 'components/Layout';

const ResetPassword = () => {
  const description = `
        Please use this page to change your password. 
        You will need to provide a new password for your account.
    `;
  const url = 'https://talentkids.io/auth/reset-password';
  return (
    <Layout
      title={`Talentkids | Reset Password`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      type="reset password"
    >
      <PasswordReset />
    </Layout>
  );
};

export default withApollo({ ssr: false })(ResetPassword);
