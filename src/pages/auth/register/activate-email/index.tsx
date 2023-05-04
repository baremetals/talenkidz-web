import React from 'react';
import Head from "next/head";
import EmailTemplate from 'components/utilities/EmailTemplate'
import { useRouter } from 'next/router';
// import { useNoAuth } from "lib/noAuth";


const message: string =
    "We've just sent you a link to verify your email address. Any problems?";
const ActivateEmail = () => {
    const router = useRouter()
    // useNoAuth();

    setTimeout(() => {
        router.push('/')
    }, 10000)
    return (
        <>
            <Head>
                <title>talentkids | Activate Account</title>
                <meta
                    property="og:title"
                    content="talentkids | Activate Account"
                    key="title"
                />
                <meta
                    name="description"
                    content="check your email to verify the email address."
                />
                <meta property="og:type" content="activate-account" />
                <link
                    rel="canonical"
                    href="https://www.talentkids.io/auth/signup/activate-email"
                />
                <meta
                    property="og:url"
                    content="https://www.talentkids.io/auth/signup/activate-email"
                />
            </Head>
            <EmailTemplate message={message}></EmailTemplate>
        </>
    );
};

export default ActivateEmail;
