import React from 'react';
import Register from 'components/Auth/Register';
import Footer from 'components/Layout/Footer';
import NavBar from 'components/Layout/NavBar';
// import { withApollo } from 'utils/withApollo';

function RegisterPage() {
  return (
    <>
      <NavBar />
      <Register></Register>
      <Footer />
    </>
  );
}
export default RegisterPage;

// export default withApollo({ ssr: false })(SignUp);
