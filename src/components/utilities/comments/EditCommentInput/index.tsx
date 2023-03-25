import React, { useState } from 'react';
import Button from 'components/users/Auth/Button';
import {
  EditCommentWrapper,
  StyledEditInput,
  EditBlock,
  ButtonBlock,
  ButtonBlockClose,
} from '../styles';
import { updateAComment } from 'src/helpers/firebase';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal, modalSelector } from 'src/features/modal';
import { InnerContainer, EditCommentInputModal } from 'styles/common.styles';
import CloseIcon from 'public/assets/icons/Close';
import CheckMark from 'public/assets/icons/CheckMark';
import PencilIcon from 'components/users/Account/PencilIcon';

const EditCommentInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const { content, entityId } = useAppSelector(modalSelector);

  const [body, setBody] = useState(content);
  //   console.log(body)
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      await updateAComment(entityId as string, body);
      setBody('');
      dispatch(closeModal());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <InnerContainer>
      <EditCommentInputModal>
        <EditCommentWrapper>
          <EditBlock>
            <PencilIcon />
            Editing
          </EditBlock>
          <StyledEditInput
            id="review"
            placeholder={'Leave a comment d'}
            aria-multiline="true"
            rows={14}
            cols={50}
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <ButtonBlockClose onClick={() => dispatch(closeModal())}>
            <Button content="" type="submit" disabled={false} loading={false}>
              <CloseIcon />
              cancel
            </Button>
          </ButtonBlockClose>
          <ButtonBlock>
            <Button
              content=""
              type="submit"
              disabled={false}
              loading={false}
              aria-label="submit button"
              onClick={(e) => handleSubmit(e)}
            >
              <CheckMark />
              save edits
            </Button>
          </ButtonBlock>
        </EditCommentWrapper>
      </EditCommentInputModal>
    </InnerContainer>
  );
};

export default EditCommentInput;
