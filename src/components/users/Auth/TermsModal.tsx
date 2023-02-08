import React, { useCallback, useEffect, useState } from 'react';
import TermsButton from 'components/widgets/Button';
import Markdown from 'markdown-to-jsx';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal, openModal } from 'src/features/modal/reducers';
import { ModalContainer } from 'components/utilities/Modal/modal.styles';
import { DismissIcon, Headline, SubHeadline, TermsFooter } from './auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';

export default function TermsModal() {
  const dispatch = useAppDispatch();
  const [content, setContent] = useState<string>('');

  const getTermsData = async function () {
    // const baseUrl = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`/api/kids/terms`);
    const res = await response.json();
    // console.log(res.content)
    return setContent(res?.content);
  };

  useEffect(() => {
    getTermsData();
  }, []);

  const handleModal = useCallback(() => {
    dispatch(openModal('REGISTER_FORM'));
  }, [dispatch]);

  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <>
      <ModalContainer
        style={{ textAlign: 'center' }}
        // className="modal-style"
        // id="terms-modal"
      >
        <DismissIcon>
          <CrossRounded onClick={handleModalClose} />
        </DismissIcon>
        <Headline>
          <span className="title primary">
            COOKIE <span>and</span> PRIVACY
          </span>
        </Headline>
        <SubHeadline className="consent">consent</SubHeadline>
        <div className="minh minh-styled">
          <Markdown>{content}</Markdown>
        </div>
        <TermsFooter>
          <TermsButton onClick={() => handleModal()}>Accept all</TermsButton>

          <div className="private-policy">
            By pushing the button you agree to use of your <br />
            personal information as set out in <a href='#' className='link'>private policy</a>
          </div>

          <a href="#" className='cookie-policy'>Read the Cookie Policy</a>
        </TermsFooter>
      </ModalContainer>
    </>
  );
}
