import ConnectProvider from 'components/Auth/Connect'
import Layout from 'components/Layout';
import React from 'react'
import { useRouter } from 'next/router';


const ConnectWithProvider = () => {
    const router = useRouter();
    const { provider } = router.query;
    const description = `
        Thiss page confirms login or registration using google or facebook.
    `;
    const url = `https://talentkids.io/auth/connect/${provider}`;
  return (
    <Layout
      title={`Talentkids | ${provider} Login`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      type={`${provider} login`}
    >
      <ConnectProvider />
    </Layout>
  );
}

export default ConnectWithProvider
