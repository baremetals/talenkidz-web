import React from 'react'

import Button from 'components/users/Auth/Button';
import {
    InnerContainer,
    Heading,
    SubTitle,
    Title,
    Row,
    Column,
    Image,

    OurCompany,
    OurCompanyThumb,
    Text,
    Listings,
    ListingsItem,
    ButtonOutLine,
} from "styles/common.styles";

const Company = () => {
  return (
      <OurCompany>
          <InnerContainer>
              <Heading style={{ textAlign: "center" }}>
                  <SubTitle>About Our Company</SubTitle>
                  <Title>Child Care and Kindergarten</Title>
              </Heading>
              <Row>
                  <Column className='column-3'>
                      <OurCompanyThumb>
                          <Image src="/about-us.png" alt="" />
                      </OurCompanyThumb>
                  </Column>
                  <Column>
                      <Text>Authoritatively formulate out-of-the-box bandwidth for backward-compatible metrics. Competently deploy multifunctional e-tailers with user friendly e-commerce. Uniquely build bricks-and-clicks systems before emerging interfaces. Credibly monetize resource sucking platforms vis-a-vis pandemic mindshare. Credibly evolve economically sound e-commerce before performance based opportunities.</Text>
                      <Listings>
                          <ListingsItem>Easy To Handle Our Kids For Getting More Quality</ListingsItem>
                          <ListingsItem>Quick Learning Facilities Everything Happen</ListingsItem>
                          <ListingsItem>Professional Mentors Provide Quality Study</ListingsItem>
                      </Listings>
                      <Button content='Schedule a Tour' type="button" disabled={false} loading={false} />
                      <ButtonOutLine>Join Our Class</ButtonOutLine>
                  </Column>
              </Row>
          </InnerContainer>
      </OurCompany>
  )
}

export default Company
