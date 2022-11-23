import Layout from 'components/Layout';
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { InnerContainer, PageContainer, Title } from 'styles/common.styles';

const CookiePolicy = () => {
  const [content, setContent] = useState<string>('');

  const getTermsData = async function () {
    const response = await fetch(`/api/kids/cookie`);
    const res = await response.json();
    return setContent(res?.content);
  };

  useEffect(() => {
    getTermsData();
  }, []);

  const description = `
    Our website uses cookies, as almost all websites do, to help provide you with the best experience 
    we can. Cookies are small text files that are placed on your computer or mobile phone when you 
    browse websites.
  `;
  const url = 'https://talentkids.io/cookie-policy';
  return (
    <>
      <Layout
        title={'Talentkids | Cookie Policy'}
        metaDescription={description}
        canonicalUrl={url}
        pageUrl={url}
        type="cookie policy"
      >
        <PageContainer
          style={{ backgroundColor: '#f7f7f7' }}
          className="content"
        >
          <InnerContainer>
            <Title>How Talent Kids Uses Cookies </Title>
            <Markdown>{content && content}</Markdown>
          </InnerContainer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default CookiePolicy;
