import Home from 'components/service/Home';
import Layout from 'components/Layout';

// import { withApollo } from "utils/withApollo";

function HomePage() {
  const description = `Talentkids provides ideas on activity-based learning and technology games for kids.
  Discover events and activities for kids. Find career building activities and learn how to build and use technology. 
  It's the platform that prepare your kids for the future`;
  const url = 'https://talentkids.io/';
  // console.log(cats?.data?.categories?.data);

  const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      // headline: meta?.title,
      // description: meta?.description,
      // author: [
      //     {
      //         '@type': 'Person',
      //         name: author?.fullName,
      //     },
      // ],
      // image: meta?.image,
      // datePublished: article?.attributes?.updatedAt,
  };
  return (
    <Layout
      title={`Talentkids | Discover events and activities for kids`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      image={'/yung-buck.jpg'}
      data={JSON.stringify(structuredData)}
      imageHeight={'auto'}
      imageWidth={'100%'}
      type="home"
    >
      <Home />
    </Layout>
  );
}
// export default withApollo({ ssr: true })(Home);
export default HomePage;
