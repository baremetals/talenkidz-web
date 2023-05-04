import React from 'react'
// import Link from 'next/link'
import Image from 'next/image';
import Button from 'components/users/Auth/Button';
import {
  InnerContainer,
  Row,
  Column,
} from 'styles/common.styles';
import {ShapeImageBlock, ShapeImage, ChildHeader, ChildServiceItem, ChildServices } from './as.styles';
import { useRouter } from 'next/router';



const ActivitySection: React.FC = () => {
  const router = useRouter()
  const goToPage = (route: string) => {
    router.push(route);
  }
    
    return (
      <ChildServices>
        <InnerContainer className="container">
          <ChildHeader>
            Choose the most appropriate service for your child{' '}
          </ChildHeader>
          <Row className="ChildSectionRow">
            <Column className="col-4">
              <ChildServiceItem>
                <ShapeImageBlock>
                  <ShapeImage>
                    <Image
                      src="/assets/images/child1.png"
                      alt="question"
                      width={400}
                      height={400}
                    />
                  </ShapeImage>
                </ShapeImageBlock>
                <h3 className="label">
                  Put more into kid’s{' '}
                  <span className="undeline">creativity</span>
                </h3>
                <Button
                  content="Choose an activity"
                  type="button"
                  BtnNames="BtnPrimery"
                  disabled={false}
                  loading={false}
                  onClick={() => goToPage('/activities')}
                />
              </ChildServiceItem>
            </Column>
            <Column className="col-4">
              <ChildServiceItem>
                <ShapeImageBlock>
                  <ShapeImage>
                    <Image
                      src="/assets/images/child2.png"
                      alt="question"
                      width={370}
                      height={370}
                    />
                  </ShapeImage>
                </ShapeImageBlock>
                <h3 className="label">
                  Advance their sports{' '}
                  <span className="undelineSecond">skills</span>
                </h3>
                <Button
                  content="Choose an event"
                  type="button"
                  BtnNames="BtnPrimery"
                  disabled={false}
                  loading={false}
                  onClick={() => goToPage('/events')}
                />
              </ChildServiceItem>
            </Column>
            <Column className="col-4">
              <ChildServiceItem>
                <ShapeImageBlock>
                  <ShapeImage>
                    <Image
                      src="/assets/images/child3.png"
                      alt="question"
                      width={370}
                      height={370}
                    />
                  </ShapeImage>
                </ShapeImageBlock>
                <h3 className="label">
                  Put more into <span className="undeline">education</span>
                </h3>
                <Button
                  content="Read an article"
                  type="button"
                  BtnNames="BtnPrimery"
                  disabled={false}
                  loading={false}
                  onClick={() => goToPage('/articles')}
                />
              </ChildServiceItem>
            </Column>
          </Row>
        </InnerContainer>
      </ChildServices>
    );
}

export default ActivitySection;
