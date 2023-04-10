import React, { useCallback } from 'react';
import { FeedbackModalContainer } from 'components/utilities/Modal/modal.styles';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal } from 'src/features/modal/reducers';
import { modalSelector } from 'src/features/modal';

export default function MessageModal() {
  const dispatch = useAppDispatch();
  const { content, entityId } = useAppSelector(modalSelector);

  const handleModalClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <FeedbackModalContainer>
      <div className="feedback-content">
        <DismissIcon className="dismiss-icon">
          <CrossRounded onClick={handleModalClose} />
        </DismissIcon>
        <h3>{content}</h3>
        <p>{entityId}</p>
      </div>
    </FeedbackModalContainer>
  );
}
