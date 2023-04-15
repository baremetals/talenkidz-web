import React from 'react';
import Button from 'components/users/Auth/Button';
import { DeleteCommentWrapper } from '../styles';
import { deleteAComment } from 'src/helpers/firebase';
import { updateStrapiEntity } from 'src/helpers';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal, modalSelector } from 'src/features/modal';
import { InnerContainer, DeleteCommentInputModal } from 'styles/common.styles';
// import DeleteIcon from 'public/assets/icons/DeleteOutline';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';

const DeleteCommentInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const { content, entityId } = useAppSelector(modalSelector);
  const totalComments = Number(entityId.split('-')[1]);
  const firebaseCommentId = entityId.split('-')[0];

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // console.log('starting', content);
    try {
      await deleteAComment(firebaseCommentId);
      await updateStrapiEntity('articles', content, {
        totalComments: totalComments - 1,
      });
      dispatch(closeModal());
    } catch (err) {
      console.log(err);
    }
  };
  //   console.log(body)
  return (
    <InnerContainer>
      <DeleteCommentInputModal>
        <DeleteCommentWrapper>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <h2>Do you really want to delete the comment?</h2>
          <p>You cannot return it after that</p>
          <Button
            onClick={(e) => handleDelete(e)}
            content={''}
            type="submit"
            disabled={false}
            loading={false}
          >
            Delete
          </Button>
          <div className="cancel">
            <Button
              onClick={() => dispatch(closeModal())}
              content={''}
              type="button"
              disabled={false}
              loading={false}
            >
              Cancel
            </Button>
          </div>
        </DeleteCommentWrapper>
      </DeleteCommentInputModal>
    </InnerContainer>
  );
};

export default DeleteCommentInput;
