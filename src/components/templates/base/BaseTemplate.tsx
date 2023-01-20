import {
  InnerBanner,
  InnerContainer,
  Title,
  Text,
  PageContainer,
} from 
// '../../../styles/common.styles';
'styles/common.styles';

export interface IBaseTemplate {
  sampleTextProp: string;
  title: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp, title }) => {

  return (
    <>
      <InnerBanner style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
        <InnerContainer>
          <Title>
            {title}
          </Title>
          <Text style={{ marginBottom: '0', color: '#000000' }}>
            {sampleTextProp}
          </Text>
        </InnerContainer>
      </InnerBanner>
      <PageContainer style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
        
      </PageContainer>
    </>
  );
};

export default BaseTemplate;
