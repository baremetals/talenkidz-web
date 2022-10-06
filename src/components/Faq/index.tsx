import React, { useState } from 'react'
import Button from 'components/Button';
import Modal from 'components/Modal';
import { Column, InnerBanner, InnerContainer, Row, Text, Title, PageContainer, Accordion, PostCardThumb, PostCardSummary, PostCardTitle, PostCardText, Input, NewsletterBox, ButtonOutLine } from 'styles/common.styles';

function Faqs() {

    const [isActive, setActive] = useState(0);

    const toggleClass = (id) => {
        if(id === isActive){
            setActive(null);
            return    
        }

        setActive(id);
    };

  
    return (
        <>

            <PageContainer style={{backgroundColor: 'rgb(0 0 0 / 4%)'}}>
                <InnerContainer>
                    <Title style={{marginBottom: '2rem'}}>Frequently Asked Questions</Title>
                    <Title style={{fontSize: '1.75rem', marginBottom: '2rem'}}>Payment Process</Title>
                    {[0,1,2,3,4,5,6,7,8,9].map((faq) => {
                        return <>
                            <Accordion className={isActive === faq ? "open" : null}>
                            <Title className='accordion-title' onClick={() => toggleClass(faq)}>Why have I been sent to a third-party link?</Title>
                            <div className='accordion-body'>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quaerat. Aperiam perferendis ipsum quasi sit delectus asperiores at iure. Fugit debitis esse maxime dolorum itaque est? Velit, non. Eaque, nemo.</Text>
                            </div>
                        </Accordion>
                        </>
                    })}
                </InnerContainer>
            </PageContainer>

        </>
    );
}

export default Faqs