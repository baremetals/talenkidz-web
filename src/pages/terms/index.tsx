import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';
import { InnerContainer, PageContainer, Text, Title } from 'styles/common.styles';

const TermsPage = () => {
  return <>
    <NavBar />
    <PageContainer style={{ backgroundColor: '#f7f7f7' }}>
      <InnerContainer>
        <Title>Terms of Service</Title>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate nemo, saepe molestiae tempore adipisci fugiat voluptatibus ab ratione hic consectetur tenetur repellendus nulla delectus nihil deserunt ipsam vero voluptas?</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate nemo, saepe molestiae tempore adipisci fugiat voluptatibus ab ratione hic consectetur tenetur repellendus nulla delectus nihil deserunt ipsam vero voluptas?</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate nemo, saepe molestiae tempore adipisci fugiat voluptatibus ab ratione hic consectetur tenetur repellendus nulla delectus nihil deserunt ipsam vero voluptas?</Text>
      </InnerContainer>
    </PageContainer>
    <Footer />
  </>;
};

export default TermsPage;
