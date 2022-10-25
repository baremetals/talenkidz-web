import Faqs from 'components/Faq';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';


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
    <NavBar />
    <Faqs data={data?.data} />
    <Footer />
  </>
};

export default FaqPage;
