import React from 'react'
import { AdvertiseSection, Column, InnerContainer, Row, Title, Text, } from 'styles/common.styles'
import Button from 'components/Button';

export default function index() {
  return (
      <AdvertiseSection style={{ backgroundImage: 'url(/inner-banner.jpg)' }}>
          <InnerContainer>
              <Row style={{ justifyContent: 'center' }}>
                  <Column></Column>
                  <Column style={{ textAlign: 'center' }}>
                      <Title style={{ fontSize: '2rem' }}>Advertise With Us</Title>
                      <Text>To learn about partnering with Talentkids.io to promote your brand or product, reach out to our Sales team.</Text>
                      <a href="/advertise"><Button style={{ width: '12rem' }} content="Learn more">Learn more</Button></a>
                  </Column>
                  <Column></Column>
              </Row>
          </InnerContainer>
      </AdvertiseSection>
  )
}


