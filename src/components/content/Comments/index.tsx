
import React from 'react'



// import CommentBox from 'components/utilities/comments/CommentBox';
import { CommentContainer, ShowMoreWrap } from './comment.styles';
import CommentThread from 'components/utilities/comments/CommentThread';

type Props = {
  children: React.ReactNode;
  firebaseId: string;
  totalComments: number;
};

export const Comments = ({ children, firebaseId, totalComments }: Props) => {
  return (
    <CommentContainer>
      <h2>Comments </h2>
      <CommentThread firebaseId={firebaseId} totalComments={totalComments} />
      <ShowMoreWrap>
        {/* <LinkBlock href={'#'}>See more comments</LinkBlock> */}
      </ShowMoreWrap>
      {children}
    </CommentContainer>
  );
};
