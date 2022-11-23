import {
  InnerBanner,
  InnerContainer,
  Row,
  Column,
  Title,
  Text,
  PageContainer,
  Post,
  PostThumb,
  PostBody,
  PostTitle,
  Top,
  Bottom,
  PostDate,
  PostMedia,
  Image,
  SearchBar,
  SearchInput,
  SearchButton,
  WidgetPanel,
  WidgetPanelTitle,
  WidgetPanelListing,
  WidgetPanelLink,
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
