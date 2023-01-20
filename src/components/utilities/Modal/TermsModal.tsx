import React, { useEffect, useState } from 'react'

import Modal from '../Modal';

import {
    Title,
} from "../../../styles/common.styles";
import Markdown from 'markdown-to-jsx';

type Terms = {
    openTerms: boolean;
    children: React.ReactNode
}

export default function TermsModal({ openTerms, children }: Terms) {

    const [terms,] = useState(openTerms);
    const [content, setContent] = useState<string>('');

    const getTermsData = async function() {
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(`/api/kids/terms`)
        const res = await response.json()
        // console.log(res.content)
        return setContent(res?.content)
    }

    useEffect(() => {
        getTermsData()
    }, [])

    return (
        <>
            <Modal showModal={terms} style={{ textAlign: 'center' }} className="modal-style" id="terms-modal">
                <Title style={{ fontSize: '2rem' }}>Terms and conditions</Title>
                <div className='minh'>
                    <Markdown>{content}</Markdown>
                </div>
                {children}
            </Modal>
        </>
    )
}

