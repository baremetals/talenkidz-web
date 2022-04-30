import React from 'react';
import Head from "next/head";
import EmailTemplate from 'components/EmailTemplate'
// import { useNoAuth } from "lib/noAuth";


const message: string =
    "We've just sent you a link to verify your email address. Any problems?";
const ActivateEmail = () => {
    // useNoAuth();
    return (
        <>
            <Head>
                <title>Talentkids | Activate Account</title>
                <meta
                    property="og:title"
                    content="Talentkids | Activate Account"
                    key="title"
                />
                <meta
                    name="description"
                    content="check your email to verify the email address."
                />
                <meta property="og:type" content="activate-account" />
                <link
                    rel="canonical"
                    href="https://talentkids.io/auth/signup/activate-email"
                />
                <meta
                    property="og:url"
                    content="https://talentkids.io/auth/signup/activate-email"
                />
            </Head>
            <EmailTemplate message={message}></EmailTemplate>
        </>
    );
};

export default ActivateEmail;
