import React, { useState } from 'react';
import Image from 'next/image';

import Accordion from '../Accordion/Accordion';

import {
  InnerContainer,
} from 'styles/common.styles';
import { FaqQuestions, FaqQuestionsInner, FaqSectionHeader, ImageBlock } from './faq.styles';
import { TFaq } from 'src/types';

const FaqsSection = (faqs: { faqs: TFaq[] }) => {
  // eslint-disable-next-line no-unused-vars
  const [accordionArray, setAccordionArray] = useState(faqs.faqs);

  return (
    <FaqQuestions>
      <InnerContainer>
        <FaqQuestionsInner>
          <FaqSectionHeader>FAQ</FaqSectionHeader>
          <Accordion items={accordionArray} />
          <ImageBlock>
            <Image
              src="/assets/svgs/question.svg"
              alt="question icon"
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
