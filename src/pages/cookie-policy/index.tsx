import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import { InnerContainer, PageContainer, Text, Title } from 'styles/common.styles';
import Markdown from 'markdown-to-jsx';

const CookiePolicy = () => {

  const [content, setContent] = useState<string>('');

  const getTermsData = async function () {
    const response = await fetch(`/api/kids/cookie`)
    const res = await response.json()
    return setContent(res?.content)
  }

  useEffect(() => {
    getTermsData()
  }, [])
  return <>
    <Layout title={'Cookie Policy'} >
    <PageContainer style={{ backgroundColor: '#f7f7f7' }} className="content">
      <InnerContainer>
        <Title>How Talent Kids Uses Cookies </Title>
          <Markdown>{content && content}</Markdown>
      </InnerContainer>
    </PageContainer>
    </Layout>
  </>;
};

export default CookiePolicy;
