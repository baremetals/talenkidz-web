import React from "react";
import Login from "components/Auth/Login";
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
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
