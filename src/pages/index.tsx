import Layout from 'components/Layout';
import Home from 'components/service/Home';

// import { withApollo } from "utils/withApollo";

function HomePage() {
  const description = `Talentkids provides ideas on activity-based learning and technology games for kids.
  Discover events and activities for kids. Find career building activities and learn how to build and use technology. 
  It's the platform that prepare your kids for the future`;
  const url = 'https://www.talentkids.io/';
  // console.log(cats?.data?.categories?.data);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.talentkids.io',
    maintainer: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Talentkids Ltd',
      email: 'talentkids@talentkids.io',
      sameAs: [
        'https://twitter.com/talentkids_join',
        'https://www.facebook.com/jointalentkids',
        'https://www.tiktok.com/@join_talentkids',
        'https://www.linkedin.com/company/join-talentkids',
        'https://www.instagram.com/join__talentkids',
      ],
    },
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
