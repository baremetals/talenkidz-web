import React, { useState } from 'react'
import Image from 'next/image';
import Button from 'components/users/Auth/Button';
import { EditCommentWrapper, StyledEditInput } from '../styles';
import { updateAComment } from 'src/helpers/firebase';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal, modalSelector } from 'src/features/modal';
import ModalCloseIcon from 'components/users/Auth/ModalCloseIcon';
import { InnerContainer } from 'styles/common.styles';



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
      dispatch(
        closeModal()
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <InnerContainer>
      <ModalCloseIcon />
      <EditCommentWrapper>
        {/* <EditCommentInner></EditCommentInner> */}
        <StyledEditInput
          id="review"
          placeholder={'Leave a comment'}
          aria-multiline="true"
          rows={14}
          cols={50}
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <Button
          content=""
          type="submit"
          disabled={false}
          loading={false}
          aria-label="submit button"
          onClick={(e) => handleSubmit(e)}
        >
          <Image
            src="/assets/svgs/send.svg"
            alt="location icon"
            className="bookmar"
            width={20}
            height={20}
          />
        </Button>
      </EditCommentWrapper>
    </InnerContainer>
  );
};

export default EditCommentInput