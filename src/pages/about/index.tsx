import React from 'react';
import Layout from 'components/Layout';
import About from 'components/About';

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const about = await fetch(`${baseUrl}/about-us`)
  const res = await about.json()

  // console.log(res?.data?.attributes)

  return {
    props: { ...res?.data }, // will be passed to the page component as props
  };
}

const AboutUs = ({ ...attributes }) => {
  // console.log(attributes.attributes)

  const description = "Talentkids.io/about"
  const url = "https://talentkids.io/about"
  // console.log(cats?.data?.categories?.data);

  // const structuredData = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Events',
  //   // headline: meta?.title,
  //   // description: meta?.description,
  //   // author: [
  //   //     {
  //   //         '@type': 'Person',
  //   //         name: author?.fullName,
  //   //     },
  //   // ],
  //   // image: meta?.image,
  //   // datePublished: article?.attributes?.updatedAt,
  // };
  return (
    <Layout 
      title={`Talentkids | About Us`}
      metaDescription={description}
      canonicalUrl={url}
      pageUrl={url}
      // image={'/yung-buck.jpg'}
      // data={JSON.stringify(structuredData)}
      // imageHeight={'auto'}
      // imageWidth={'100%'}
      type='about'    
    >
      <About data={attributes.attributes}/>

    </Layout>
  )
};

export default AboutUs;
