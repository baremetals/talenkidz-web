import React from 'react';
import {
  InnerContainer,
  Title,
  PageContainer,
} from 'styles/common.styles';

function Resources() {
  return (
    <PageContainer style={{ backgroundColor: 'rgb(0 0 0 / 4%)' }}>
      <InnerContainer>
        <Title style={{ margin: '4rem 0 2rem 0', }}>Resources</Title>
      </InnerContainer>
    </PageContainer>
  );
}

export default Resources;
