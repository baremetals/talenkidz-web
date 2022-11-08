import Layout from 'components/Layout';
import ErrorPage from "components/ErrorPage";

export default function PageNotFound() {
  
  return <Layout title={'404 | Talentkids'}>
    <ErrorPage statusCode={500} />
  </Layout>
}
