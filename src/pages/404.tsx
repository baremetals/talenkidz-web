import ErrorPage from 'components/ErrorPage';
import Layout from 'components/Layout';

export default function PageNotFound() {
  return (
    <Layout title={'404 | Talentkids'}>
      <ErrorPage statusCode={500} />
    </Layout>
  );
}
