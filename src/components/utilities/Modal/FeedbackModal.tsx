import React, { useCallback } from 'react';
import { FeedbackModalContainer } from 'components/utilities/Modal/modal.styles';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal/reducers';

export default function FeedbackModal() {
  const dispatch = useAppDispatch();

  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <FeedbackModalContainer>
      <div className="feedback-content">
        <DismissIcon className="dismiss-icon">
          <CrossRounded onClick={handleModalClose} />
        </DismissIcon>
        <h1>Thank you for leaving a comment!</h1>
        <p>We do appreciate the feedback you leave</p>
      </div>
    </FeedbackModalContainer>
  );
}
