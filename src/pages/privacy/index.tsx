import Layout from 'components/Layout';
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { InnerContainer, PageContainer, Title } from 'styles/common.styles';

const PrivacyPage = () => {
  const [content, setContent] = useState<string>('');

  const getPrivacyData = async function () {
    const response = await fetch(`/api/kids/privacy`);
    const res = await response.json();
    return setContent(res?.content);
  };

  useEffect(() => {
    getPrivacyData();
  }, []);

  const description = "Talentkids Pookie Policy";
  const url = 'https://www.talentkids.io/privacy';
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
            <Markdown>{content}</Markdown>
          </InnerContainer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default PrivacyPage;
