import React from 'react'
import ForgotPassword from 'components/Auth/ForgotPassword';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
// import { withApollo } from "utils/withApollo";

function ForgotPasswordPage() {
    return (
    <>
        <NavBar />
        <ForgotPassword></ForgotPassword>
        <Footer />
    </>);
}

// export default withApollo({ ssr: false })(ForgotPasswordPage);

export default ForgotPasswordPage;
