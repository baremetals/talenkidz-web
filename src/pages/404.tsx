import ErrorPage from 'components/utilities/ErrorPage';
import Layout from 'components/Layout';

export default function PageNotFound() {
  return (
    <Layout title={'404 | Talentkids'}>
      <ErrorPage statusCode={404} />
    </Layout>
  );
}
