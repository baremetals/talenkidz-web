import React from 'react'
import { useRouter } from 'next/router';

import Button from 'components/users/Auth/Button';
import Image from 'next/image';

import { ChildServices,InnerContainer,PageHeading,StillDoutsCard,SubHeading,Question,ChildServiceItem, Row, Column 
  
  // Image,
} from 'styles/common.styles';

const ChildService = () => {
  const router = useRouter();
  return (
    <ChildServices>
      <InnerContainer>
        <Row>
           <Column>
            <ChildServiceItem>
                <Image
                    src="/child1.png"
                    alt="question"
                    width={807}
                    height={853}
                          />
                <h3>Put more into kid’s creativity</h3>          
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
                    src="/child2.png"
                    alt="question"
                    width={807}
                    height={853}
                  />
                <h3>Advance their sport skills  </h3>           
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
                    src="/child3.png"
                    alt="question"
                    width={807}
                    height={853}
                 />
                <h3>Put more into education</h3>             
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

export default ChildService