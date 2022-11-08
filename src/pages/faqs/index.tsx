import React from 'react';
import Faqs from 'components/Faq';
import Layout from 'components/Layout';



export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const faq = await fetch(`${baseUrl}/faqs`)
  const res = await faq.json()

  // console.log(res)

  return {
    props: { ...res }, // will be passed to the page component as props
  };
}


const FaqPage = ({ ...data }) => {
  // console.log(data.data)
  return <>
    <Layout title={'FAQs'} >
    <Faqs data={data?.data} />
    </Layout>
  </>
};

export default FaqPage;
