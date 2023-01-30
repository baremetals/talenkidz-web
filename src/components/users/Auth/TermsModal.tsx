import React, { useCallback, useEffect, useState } from 'react'
import TermsButton from 'components/widgets/Button';
import Markdown from 'markdown-to-jsx';
import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';
import {
    Title,
} from "styles/common.styles";
import { ModalContainer } from 'components/utilities/Modal/modal.styles';


export default function TermsModal() {
  const dispatch = useAppDispatch();
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

    const handleModal = useCallback(
      () => {
        dispatch(openModal('REGISTER_FORM'));
      },
      [dispatch]
    );

    return (
      <>
        <ModalContainer
          style={{ textAlign: 'center' }}
          // className="modal-style"
          // id="terms-modal"
        >
          <Title style={{ fontSize: '2rem' }}>Terms and conditions</Title>
          <div className="minh">
            <Markdown>{content}</Markdown>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '2rem',
            }}
          >
            <TermsButton
              style={{ width: '12rem', marginLeft: 'auto' }}
              onClick={() => handleModal()}
            >
              Accept
            </TermsButton>
          </div>
        </ModalContainer>
      </>
    );
}

