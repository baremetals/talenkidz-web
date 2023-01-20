import React from 'react'
import Image from 'next/image';
import Button from 'components/users/Auth/Button';
import { useRouter } from 'next/router';
import { Question, InnerContainer,  Row,
  Column, QuestionHeader,QuestionInfo
} from 'styles/common.styles';

const Questions = () => {
  const router = useRouter();
  return (
    <Question>
      <InnerContainer>
        <Row className='row'>
          <Column>
            <Image
              src="/questions.png"
              alt="creative activity card image"
              width={468}
              height={482}
            ></Image>
          </Column>
          <Column>
            <QuestionHeader>Do you have any more <span className='questionsblock'>questions</span> ?</QuestionHeader>
            <QuestionInfo>
              Our managers are ready to connect with you and answer all the questions you have. They also can give a hand with choosing an appropriate service for your child according to his interests.
            </QuestionInfo>
              <Button
                content="Connect"
                type="button"
                disabled={false}
                loading={false}
              />
          </Column>
        </Row>
      </InnerContainer>
    </Question>
  );
}

export default Questions
