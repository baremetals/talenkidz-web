import Layout from 'components/Layout';
import NotFound from 'components/service/404';

const NotFound404 = () => {
  // console.log(attributes.attributes)

  const description = `
    Talentkids is a solution for the future generation while reshaping the 
    current generation’s mindset, responsible for shaping children’s future, 
    and ultimately contributing to a better tomorrow.
  `;
  const url = 'https://www.talentkids.io/about';

  return (
    <Layout
      title={`404`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      type="404"
    >
      <NotFound />
    </Layout>
  );
};

export default NotFound404;
