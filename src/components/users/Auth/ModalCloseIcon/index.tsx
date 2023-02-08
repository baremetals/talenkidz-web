import React from 'react'
import { DismissIcon } from '../auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { closeModal } from 'src/features/modal';
import { useAppDispatch } from 'src/app/hooks';

const ModalCloseIcon = () => {
  const dispatch = useAppDispatch();
  return (
    <DismissIcon>
      <CrossRounded onClick={() => dispatch(closeModal())} />
    </DismissIcon>
  );
}

export default ModalCloseIcon