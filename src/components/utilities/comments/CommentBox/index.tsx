import React, { useState } from 'react';
import { updateStrapiEntity } from 'src/helpers';
import {
  addToFirebaseArticle,
  addToFirebaseComment,
} from 'src/helpers/firebase';

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

  // console.log(articleFirebaseId);
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
    if (!entityFirebaseId && totalComments === 0) {
      try {
        await addToFirebaseArticle(entitySlug, entityId, totalComments, data);
        setBody('');
      } catch (err) {
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
        console.log(err);
      }
    }
  };
  return (
    <div>
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
      <button type="button" onClick={(e) => handleSubmit(e)}>
        send
      </button>
    </div>
  );
};

export default CommentBox;