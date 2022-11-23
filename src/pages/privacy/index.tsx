import React, { useEffect, useState } from 'react';
import { InnerContainer, PageContainer, Title } from 'styles/common.styles';
import Layout from 'components/Layout';
import Markdown from 'markdown-to-jsx';

const PrivacyPage = () => {

  const [content, setContent] = useState<string>('');

  const getPrivacyData = async function () {
    const response = await fetch(`/api/kids/privacy`)
    const res = await response.json()
    return setContent(res?.content)
  }

  useEffect(() => {
    getPrivacyData()
  }, [])

  const description = `
    Our Privacy Policy explains how we collect, store and use the personal data you give to us. 
    We’ll keep this page updated so that you can be confident when sharing your data with us that 
    it will only be used in accordance with this policy. 
  `;
  const url = 'https://talentkids.io/privacy';
  return (
    <>
      <Layout
        title={'Talentkids | Privacy Policy'}
        metaDescription={description}
        canonicalUrl={url}
        pageUrl={url}
        type="privacy policy"
      >
        <PageContainer
          style={{ backgroundColor: '#f7f7f7' }}
          className="content"
        >
          <InnerContainer>
            <Title>Privacy policy</Title>
            <Markdown>{content && content}</Markdown>
          </InnerContainer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default PrivacyPage;

