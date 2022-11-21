import React from 'react'
import ForgotPassword from 'components/Auth/ForgotPassword';
import Layout from 'components/Layout';
// import { withApollo } from "utils/withApollo";

function ForgotPasswordPage() {

    const description = `
        Please use the forgot password page to reset your password. 
        You will need to provide your account email address.
        If you cannot remember your email address please use the contact us form to reach us.
    `;
    const url = 'https://talentkids.io/auth/forgot-password';
    return (
      <Layout
        title={`Talentkids | Forgot Password`}
        metaDescription={description}
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
