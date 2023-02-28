import React from 'react'
import Payment from 'components/service/Payment';
import Layout from 'components/Layout';
import { useIsAuth } from 'src/hooks/isAuth';

const Subscribe = () => {

    useIsAuth();
  return (
    <Layout
      title="Subscribe Page"
      canonicalUrl={`https://www.talentkids.io/account/subscribe`}
      type="account page"
      pageUrl={`https://www.talentkids.io/account/subscribe`}
    >
      <Payment />
    </Layout>
  );
}

export default Subscribe