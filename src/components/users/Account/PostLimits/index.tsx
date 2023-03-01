import React from 'react';
import { NoteWrapper } from '../../ProfilePage/profile.styles';

type props = {
  status?: string;
  content?: string;
  limit: string;
};

const PostLimits = ({ status, content, limit }: props) => {
  return (
    <NoteWrapper>
      <div className="primary">
        {content}{' '}
        <span>
          &nbsp;{limit} {status}&nbsp;
        </span>
        for free.
      </div>
      <div className="secondary">
        Limit: {limit} {status}
      </div>
    </NoteWrapper>
  );
};

PostLimits.defaultProps = {
  status: 'articles',
  content:  'With premium membership you can create'// Possible Values: articles, events, activities
};

export default PostLimits;
