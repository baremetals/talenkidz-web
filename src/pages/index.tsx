import React from 'react'
import Home from 'components/Home';
import Layout from 'components/Layout';

// import { withApollo } from "utils/withApollo";

function HomePage() {

    const description = "Talentkids.io"
    const url = "https://talentkids.io"
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
            type='home'
        >
            <Home />
        </Layout>
    );
}
// export default withApollo({ ssr: true })(Home);
export default HomePage;
