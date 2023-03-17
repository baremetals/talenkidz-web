import React from 'react';
import Button from 'components/users/Auth/Button';
import { DeleteCommentWrapper } from '../styles';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal, modalSelector } from 'src/features/modal';
import { InnerContainer, DeleteCommentInputModal } from 'styles/common.styles';
import DeleteIcon from 'public/assets/icons/Delete';

const DeleteCommentInput: React.FC = () => {
  const dispatch = useAppDispatch();
  //   console.log(body)
  return (
    <InnerContainer>
      <DeleteCommentInputModal>
        <DeleteCommentWrapper>
          Do you really want to delete the comment?
          <Button
            content=""
            type="submit"
            disabled={false}
            loading={false}
            onClick={() => dispatch(closeModal())}
          >
            <DeleteIcon />
            Delete
          </Button>
        </DeleteCommentWrapper>
      </DeleteCommentInputModal>
    </InnerContainer>
  );
};

export default DeleteCommentInput;
