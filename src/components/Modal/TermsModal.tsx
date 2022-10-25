import React, { useState } from 'react'

import Modal from 'components/Modal';
import Button from 'components/Button';
import {
    Title,
    Text,
    Input,
    LabelText,
    SwitchBox,
    Switch,
} from "../../styles/common.styles";

type Terms = {
    openTerms: boolean;
    // onClick: () => void
}

export default function TermsModal({ openTerms }: Terms) {
    const [terms, setterms] = useState(openTerms);
    const handleterms = () => {
        return setterms(!terms);
    };
    return (
        <>
            <Modal showModal={terms} style={{ textAlign: 'center' }} className="modal-style">
                <Title style={{ fontSize: '2rem' }}>Terms and conditions</Title>
                <div className='minh'>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error qui perferendis cumque esse! Nulla, accusantium! Rem reiciendis, dolorum facilis corporis in numquam necessitatibus id, cum, iste quo dicta. Officiis.</Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <Button style={{ width: '12rem', marginLeft: 'auto' }} onClick={() => handleterms()}>Accept</Button>
                </div>
            </Modal>
        </>
    )
}

