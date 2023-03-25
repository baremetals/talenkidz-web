import React from 'react';
import Button from 'components/users/Auth/Button';
import { DeleteCommentWrapper } from '../styles';
import { deleteAComment } from 'src/helpers/firebase';
import { updateStrapiEntity } from 'src/helpers';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal, modalSelector } from 'src/features/modal';
import { InnerContainer, DeleteCommentInputModal } from 'styles/common.styles';
import DeleteIcon from 'public/assets/icons/DeleteOutline';

const DeleteCommentInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const {content, entityId}= useAppSelector(modalSelector);
  const totalComments = Number(entityId.split('-')[1]);
  const firebaseCommentId = entityId.split('-')[0];

  const handleDelete = async () => {
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
          Do you really want to delete the comment?
          <Button
            content=""
            type="submit"
            disabled={false}
            loading={false}
            onClick={() => handleDelete()}
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
