import React from 'react'
import { useRouter } from 'next/router';

import Button from 'components/users/Auth/Button';
import Image from 'next/image';
import { StillDout,InnerContainer,PageHeading,StillDoutsCard,SubHeading,Question 
  
  // Image,
} from 'styles/common.styles';

const StillDouts = () => {
  const router = useRouter();
  return (
    <StillDout>
      <InnerContainer>
        <StillDoutsCard>
          <Question className='leftImg'>
            <Image
              src="/Question.svg"
              alt="question"
              width={650}
              height={450}
            />
          </Question>
          <Question className='RightImg'>
            <Image
              src="/Question.svg"
              alt="question"
              width={650}
              height={450}
            />
          </Question>
          <PageHeading className='WhiteBg'>Still have douts?</PageHeading>
          <SubHeading>Click here and get a free personal consultation </SubHeading>
          <Button
                content="Get a consultation"
                 type="button"
                 BtnNames="BtnPrimery"
                disabled={false}
                loading={false}
            />
        </StillDoutsCard>
       </InnerContainer>
    </StillDout>
  );
}

export default StillDouts
