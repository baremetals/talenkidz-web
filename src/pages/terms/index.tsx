import Layout from 'components/Layout';
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { InnerContainer, PageContainer, Title } from 'styles/common.styles';

const TermsPage = () => {
  const [content, setContent] = useState<string>('');

  const getTermsData = async function () {
    const response = await fetch(`/api/kids/terms`);
    const res = await response.json();
    return setContent(res?.content);
  };

  useEffect(() => {
    getTermsData();
  }, []);
  const description = "Talentkids terms and conditions";
  const url = 'https://www.talentkids.io/terms';
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
