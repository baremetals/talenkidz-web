import Faqs from 'components/service/Faq';
import Layout from 'components/Layout';

export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const faq = await fetch(`${baseUrl}/faqs`);
  const res = await faq.json();

  // console.log(res)

  return {
    props: { ...res }, // will be passed to the page component as props
  };
}

type faqType = {
  '@type': string;
  name: string;
  acceptedAnswer: {
    '@type': string;
    text: string;
  };
};

const FaqPage = ({ ...data }) => {
  // console.log(data?.data)
  let mainEntity: faqType[] = [];
  // console.log('empty', mainEntity)
  data?.data.forEach(
    (e: { attributes: { question: string; answer: string } }) => {
      const entity = {
        '@type': 'Question',
        name: e?.attributes?.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: e?.attributes?.answer,
        },
      };
      mainEntity.push(entity);
    }
  );

  // console.log('full', mainEntity)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };

  const description = 'Talentkids faqs';
  const url = 'https://www.talentkids.io/faqs';
  // console.log(cats?.data?.categories?.data);
  // console.log(data.data)
  return (
    <>
      <Layout
        title={`Talentkids | FAQs`}
        metaDescription={description}
        canonicalUrl={url}
        pageUrl={url}
        data={JSON.stringify(structuredData)}
        imageHeight={'auto'}
        imageWidth={'100%'}
        type="faqs"
      >
        <Faqs data={data?.data} />
      </Layout>
    </>
  );
};

export default FaqPage;
