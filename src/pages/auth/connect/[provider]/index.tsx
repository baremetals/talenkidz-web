import ConnectProvider from 'components/users/Auth/Connect';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';

const ConnectWithProvider = () => {
  const router = useRouter();
  const { provider } = router.query;
  const url = `https://www.talentkids.io/auth/connect/${provider}`;
  return (
    <Layout
      title={`Talentkids | ${provider} Login`}
      // metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      type={`${provider} login`}
    >
      <ConnectProvider />
    </Layout>
  );
};

export default ConnectWithProvider;
