import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Accordion from './Accordion/Accordion';



import {
  InnerContainer,
  FaqQuestions,
  FaqQuestionsInner,
  FaqSectionHeader,
  ImageBlock,
} from 'styles/common.styles';

const FaqQuestion = () => {

    const accordionItems = [
    {
      title: 'Do you have individul classes or group ones only?   ',
      content: (
        <div>
           We have both - individual and group classes. You can choose an appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
    {
      title: 'May a parent visit the first class?',
      content: (
        <div>
           We have both - individual and group classes. You can choose an appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
    {
      title: 'Is it possible to purchase a season ticket?',
      content: (
        <div>
           We have both - individual and group classes. You can choose an appropriate one according your own and your child’s preferences.
        </div>
      ),
      },
    {
      title: 'Do you have individul classes or group ones only?',
      content: (
        <div>
           We have both - individual and group classes. You can choose an appropriate one according your own and your child’s preferences.
        </div>
      ),
      },
      {
      title: 'May a parent visit the first class?   ',
      content: (
        <div>
           We have both - individual and group classes. You can choose an appropriate one according your own and your child’s preferences.
        </div>
      ),
      },
        {
      title: 'Is it possible to purchase a season ticket?   ',
      content: (
        <div>
           We have both - individual and group classes. You can choose an appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
  ];

  const router = useRouter();
  return (
    <FaqQuestions>
       <InnerContainer>
         <FaqQuestionsInner>
              <FaqSectionHeader>Faq</FaqSectionHeader>
              <Accordion items={accordionItems} />
              <ImageBlock>
                    <Image
                      src="/questions.svg"
                      alt="sports activity card image"
                      width={723}
                      height={482}
                />
            </ImageBlock>
          </FaqQuestionsInner>
          </InnerContainer>
       </FaqQuestions>
  );
}

export default FaqQuestion