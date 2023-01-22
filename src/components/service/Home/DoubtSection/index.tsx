import React from 'react'
import Image from 'next/image';
import {
  Section,
  SubHeading,
  DoubtsCard,
  Question,
  Container,
  Heading,
} from './styles';
import Button from 'components/users/Auth/Button';

const DoubtSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <DoubtsCard>
          <Question className="leftImg">
            <Image
              src="/Question.svg"
              alt="question"
              width={650}
              height={450}
            />
          </Question>
          <Question className="RightImg">
            <Image
              src="/Question.svg"
              alt="question"
              width={650}
              height={450}
            />
          </Question>
          <Heading className="WhiteBg">Still have douts?</Heading>
          <SubHeading>
            Click here and get a free personal consultation{' '}
          </SubHeading>
          <Button
            content="Get a consultation"
            type="button"
            BtnNames="BtnPrimery"
            disabled={false}
            loading={false}
          />
        </DoubtsCard>
      </Container>
    </Section>
  );
};

export default DoubtSection;