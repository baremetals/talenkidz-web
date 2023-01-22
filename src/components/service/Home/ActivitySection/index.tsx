import React from 'react'
// import Link from 'next/link'
import Image from 'next/image';
import Button from 'components/users/Auth/Button';
import {
  InnerContainer,
  Row,
  Column,
} from 'styles/common.styles';
import { ChildHeader, ChildServiceItem, ChildServices } from './as.styles';



const ActivitySection: React.FC = () => {
    
    return (
      <ChildServices>
        <InnerContainer>
          <ChildHeader>
            Choose the most appropriate service for your child{' '}
          </ChildHeader>
          <Row className="ChildSectionRow">
            <Column>
              <ChildServiceItem>
                <Image
                  src="/assets/images/child1.png"
                  alt="question"
                  width={807}
                  height={853}
                />
                <h3>
                  Put more into kid’s{' '}
                  <span className="undeline">creativity</span>
                </h3>
                <Button
                  content="Choose an activity"
                  type="button"
                  BtnNames="BtnPrimery"
                  disabled={false}
                  loading={false}
                />
              </ChildServiceItem>
            </Column>
            <Column>
              <ChildServiceItem>
                <Image
                  src="/assets/images/child2.png"
                  alt="question"
                  width={807}
                  height={853}
                />
                <h3>
                  Advance their sport{' '}
                  <span className="undelineSecond">skills</span>
                </h3>
                <Button
                  content="Choose an activity"
                  type="button"
                  BtnNames="BtnPrimery"
                  disabled={false}
                  loading={false}
                />
              </ChildServiceItem>
            </Column>
            <Column>
              <ChildServiceItem>
                <Image
                  src="/assets/images/child3.png"
                  alt="question"
                  width={807}
                  height={853}
                />
                <h3>
                  Put more into <span className="undeline">education</span>
                </h3>
                <Button
                  content="Choose an activity"
                  type="button"
                  BtnNames="BtnPrimery"
                  disabled={false}
                  loading={false}
                />
              </ChildServiceItem>
            </Column>
          </Row>
        </InnerContainer>
      </ChildServices>
    );
}

export default ActivitySection;
