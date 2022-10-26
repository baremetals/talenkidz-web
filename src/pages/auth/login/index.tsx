import React from "react";
import Login from "components/Auth/Login";
import Footer from 'components/Layout/Footer';
import NavBar from 'components/Layout/NavBar';
// import { withApollo } from "../../../utils/withApollo";

function LoginPage() {
    return (
        <>
            <NavBar />
            <Login />
            <Footer />
        </>
    );
}

export default LoginPage;

// export default withApollo({ ssr: false })(SignIn);
