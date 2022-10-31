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
  return <>
    <Layout title={'Terms and Conditions'} >
    <PageContainer style={{ backgroundColor: '#f7f7f7' }} className="content">
      <InnerContainer>
        <Title>Terms and Conditions </Title>
        <Markdown>{content && content}</Markdown>
      </InnerContainer>
    </PageContainer>
    </Layout>
  </>;
};

export default TermsPage;
