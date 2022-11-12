import React, { useState } from 'react'
import Markdown from "markdown-to-jsx";
import { InnerContainer, Text, Title, PageContainer, Accordion } from 'styles/common.styles';



function Faqs({...data}) {
    // console.log(data.data)
    const [isActive, setActive] = useState < number | null >(0);

    const toggleClass = (id: React.SetStateAction<number>) => {
        if(id === isActive){
            setActive(null);
            return    
        }
        setActive(id as number);
    };

    return (
        <>

            <PageContainer style={{backgroundColor: 'rgb(0 0 0 / 4%)'}}>
                <InnerContainer>
                    <Title style={{marginBottom: '2rem'}}>Frequently Asked Questions</Title>
                    {/* <Title style={{fontSize: '1.75rem', marginBottom: '2rem'}}>Payment Process</Title> */}
                    {data.data?.map((faq: { id: string; attributes: { question: string; answer: string; } }) => {
                        return (
                            <Accordion key={faq?.id} className={isActive === parseInt(faq?.id) ? "open" : ''}>
                                <Title className='accordion-title' onClick={() => toggleClass(parseInt(faq?.id))}>{faq?.attributes?.question}</Title>
                                <div className='accordion-body' key={faq?.id}>
                                    <Markdown>{faq?.attributes?.answer}</Markdown>
                            </div>
                        </Accordion>)
                    })}
                </InnerContainer>
            </PageContainer>

        </>
    );
}

export default Faqs
