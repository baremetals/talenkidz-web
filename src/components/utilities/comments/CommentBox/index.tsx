import React, { useState } from 'react';
import Image from 'next/image';
import { updateStrapiEntity } from 'src/helpers';
import {
  addToFirebaseArticle,
  addToFirebaseComment,
} from 'src/helpers/firebase';
import { LeaveComment, StyledInput } from '../styles';
import Button from 'components/users/Auth/Button';

export interface ICommentBox {
  userId: number;
  username: string;
  avatar: string;
  entityId: string;
  entitySlug: string;
  totalComments: number;
  entityFirebaseId: string;
}
const CommentBox: React.FC<ICommentBox> = ({
  userId,
  username,
  avatar,
  entityId,
  entitySlug,
  totalComments,
  entityFirebaseId,
}) => {
  const [body, setBody] = useState('');
  const [errorText, setErrorText] = useState('');
  const [showError, setShowError] = useState(false);

  // console.log(articleFirebaseId);
  const handleError = (err: string) => {
    setErrorText(err)
    setShowError(true);
    setTimeout(() => {
      setErrorText('');
      setShowError(false);
    }, 7000)
  }

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const data = {
      userId,
      username,
      avatar,
      entityStrapiId: entityId,
      entitySlug,
      body,
    };
    if (body === "" ) handleError('Text required');
    if (!entityFirebaseId && totalComments === 0) {
      try {
        await addToFirebaseArticle(entitySlug, entityId, totalComments, data);
        setBody('');
      } catch (err) {
        handleError('Something is wrong please try again later or contact support.');
        console.log(err);
      }
    } else {
      try {
        await addToFirebaseComment(entityFirebaseId as string, data);
        await updateStrapiEntity('articles', entityId, {
          totalComments: totalComments + 1,
        });
        setBody('');
      } catch (err) {
        handleError(
          'Something is wrong please try again later or contact support.'
        );
        console.log(err);
      }
    }
  };
  return (
    <>
      {/* <div>
        <label htmlFor="review">Review of Article:</label>
        <textarea
          id="review"
          rows={4}
          cols={50}
          aria-multiline="true"
          placeholder="leave a comment"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="button">send</button>
      </div> */}
      {showError ? <p style={{ color: 'red' }}>{errorText}</p>:null}
      
      <LeaveComment>
        <StyledInput
          id="review"
          placeholder={'Leave a comment'}
          aria-multiline="true"
          rows={4}
          cols={50}
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
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
      </LeaveComment>
    </>
  );
};

export default CommentBox;