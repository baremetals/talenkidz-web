import Layout from 'components/Layout';
import Resources from 'components/service/Resources';

const ResourcesPage = () => {
  const description = 'Talentkids Resources';
  const url = 'https://www.talentkids.io/resources';
  
  return (
    <>
      <Layout
        title={`Talentkids | Resources`}
        metaDescription={description}
        canonicalUrl={url}
        pageUrl={url}
        imageHeight={'auto'}
        imageWidth={'100%'}
        type="resources"
      >
        <Resources />
      </Layout>
    </>
  );
};

export default ResourcesPage;
