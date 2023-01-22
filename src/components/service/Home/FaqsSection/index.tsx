import React from 'react';
import Image from 'next/image';

import Accordion from '../Accordion/Accordion';

import {
  InnerContainer,
} from 'styles/common.styles';
import { FaqQuestions, FaqQuestionsInner, FaqSectionHeader, ImageBlock } from './faq.styles';

const FaqsSection = () => {
  const accordionItems = [
    {
      title: 'Do you have individul classes or group ones only?   ',
      content: (
        <div>
          We have both - individual and group classes. You can choose an
          appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
    {
      title: 'May a parent visit the first class?',
      content: (
        <div>
          We have both - individual and group classes. You can choose an
          appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
    {
      title: 'Is it possible to purchase a season ticket?',
      content: (
        <div>
          We have both - individual and group classes. You can choose an
          appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
    {
      title: 'Do you have individul classes or group ones only?',
      content: (
        <div>
          We have both - individual and group classes. You can choose an
          appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
    {
      title: 'May a parent visit the first class?   ',
      content: (
        <div>
          We have both - individual and group classes. You can choose an
          appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
    {
      title: 'Is it possible to purchase a season ticket?   ',
      content: (
        <div>
          We have both - individual and group classes. You can choose an
          appropriate one according your own and your child’s preferences.
        </div>
      ),
    },
  ];

  return (
    <FaqQuestions>
      <InnerContainer>
        <FaqQuestionsInner>
          <FaqSectionHeader>FAQ</FaqSectionHeader>
          <Accordion items={accordionItems} />
          <ImageBlock>
            <Image
              src="/question.svg"
              alt="sports activity card image"
              width={723}
              height={482}
            />
          </ImageBlock>
        </FaqQuestionsInner>
      </InnerContainer>
    </FaqQuestions>
  );
};

export default FaqsSection;
