import Home from 'components/service/Home';
import Layout from 'components/Layout';

// import { withApollo } from "utils/withApollo";

function HomePage() {
  const description = `Are you a parent looking for your child’s future career prospects? 
    Are you someone who believes in a child pursuing their dream and changing the redundant narrative of not following 
    a “creative career” like sports, music, arts, entertainment, and possibly anything that revolves around creativity?
    That’s it! Talentkids is what you are looking for. Talentkids is a solution for the future generation while reshaping the 
    current generation’s mindset, responsible for shaping their children’s future, 
    ultimately contributing to a better future tomorrow`;
  const url = 'https://talentkids.io';
  // console.log(cats?.data?.categories?.data);

  // const structuredData = {
  //     '@context': 'https://schema.org',
  //     '@type': 'Events',
  //     // headline: meta?.title,
  //     // description: meta?.description,
  //     // author: [
  //     //     {
  //     //         '@type': 'Person',
  //     //         name: author?.fullName,
  //     //     },
  //     // ],
  //     // image: meta?.image,
  //     // datePublished: article?.attributes?.updatedAt,
  // };
  return (
    <Layout
      title={`Talentkids | Home`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      image={'/yung-buck.jpg'}
      // data={JSON.stringify(structuredData)}
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
