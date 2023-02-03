
import React from 'react'



// import CommentBox from 'components/utilities/comments/CommentBox';
import { CommentContainer, LinkBlock, ShowMoreWrap } from './comment.styles';
import CommentThread from 'components/utilities/comments/CommentThread';

type Props = {
  children: React.ReactNode;
  firebaseId: string;
};

export const Comments = ({ children, firebaseId }: Props) => {
  return (
    <CommentContainer>
      <h2>Comments </h2>
      <CommentThread firebaseId={firebaseId} />
      <ShowMoreWrap>
        <LinkBlock href={'#'}>See more comments</LinkBlock>
      </ShowMoreWrap>
      {children}
      {/* <CommentBox userId={0} username={''} avatar={''} entityId={''} entitySlug={''} totalComments={0} entityFirebaseId={''} /> */}
    </CommentContainer>
  );
};
