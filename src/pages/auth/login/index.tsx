import React from "react";
import Login from "components/Auth/Login";
// import { withApollo } from "../../../utils/withApollo";

function LoginPage() {
    return (
        <>
            <Login />
        </>
    );
}

export default LoginPage;

// export default withApollo({ ssr: false })(SignIn);