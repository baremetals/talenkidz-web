import Register from 'components/users/Auth/Register';
import Layout from 'components/Layout';
// import { withApollo } from 'utils/withApollo';

function RegisterPage() {
  const description = `Register - Events and activities for kids`;
  const url = 'https://www.talentkids.io/auth/register';
  return (
    <Layout
      title={`Talentkids | Register`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      type="register"
    >
      <Register></Register>
    </Layout>
  );
}
export default RegisterPage;

// export default withApollo({ ssr: false })(SignUp);
