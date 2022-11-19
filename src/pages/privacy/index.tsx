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
  return <>
    <Layout title={'Privacy policy'} >
    <PageContainer style={{ backgroundColor: '#f7f7f7' }} className="content">
      <InnerContainer>
        <Title>Privacy policy</Title>
          <Markdown>{content && content}</Markdown>
      </InnerContainer>
    </PageContainer>
    </Layout>
  </>;
};

export default PrivacyPage;

