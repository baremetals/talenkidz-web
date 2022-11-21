import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import Markdown from 'markdown-to-jsx';
import { InnerContainer, PageContainer, Title } from 'styles/common.styles';

const TermsPage = () => {

  const [content, setContent] = useState<string>('');

  const getTermsData = async function () {
    const response = await fetch(`/api/kids/terms`)
    const res = await response.json()
    return setContent(res?.content)
  }

  useEffect(() => {
    getTermsData()
  }, [])
  const description = `
    Please read the following terms and conditions carefully as they govern the use of this website. 
    By using the https://talentkids.io/website you accept these terms of use as from the date you 
    first access this website content.
  `;
  const url = 'https://talentkids.io/terms';
  return (
    <>
      <Layout
        title={'Talentkids | Terms and Conditions'}
        metaDescription={description}
        canonicalUrl={url}
        pageUrl={url}
        type="terms & conditions"
      >
        <PageContainer
          style={{ backgroundColor: '#f7f7f7' }}
          className="content"
        >
          <InnerContainer>
            <Title>Terms and Conditions </Title>
            <Markdown>{content && content}</Markdown>
          </InnerContainer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default TermsPage;
