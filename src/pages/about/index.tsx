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
  return <>
    <Layout title={''}    
    >
      <About data={attributes.attributes}/>

    </Layout>
  </>
};

export default AboutUs;
