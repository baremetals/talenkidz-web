import React from 'react';
import Register from 'components/Auth/Register';
import Footer from 'components/Layout/Footer';
import NavBar from 'components/Layout/NavBar';
import Layout from 'components/Layout';
// import { withApollo } from 'utils/withApollo';

function RegisterPage() {
  const description = `
        Please use the register page to sign up for an account. 
        You will need to provide an email address and password.
        You can also use your existing Google or Facebook account to register for an account.
    `;
  const url = 'https://talentkids.io/auth/register';
  return (
    <Layout
      title={`Talentkids | Register`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      type="register"
    >
      <Register></Register>
    </Layout>
  );
}
export default RegisterPage;

// export default withApollo({ ssr: false })(SignUp);
