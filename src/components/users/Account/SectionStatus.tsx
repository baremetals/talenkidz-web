import React from 'react';
import { NoteWrapper } from '../ProfilePage/profile.styles';

type props = {
  status?: string;
};

const SectionStatus = ({ status }: props) => {
  return (
    <NoteWrapper>
      <div className="primary">
        On standard status it is possible to write only{' '}
        <span>&nbsp;10 {status}&nbsp;</span>in all
      </div>
      <div className="secondary">Limit: 7 {status}</div>
    </NoteWrapper>
  );
};

SectionStatus.defaultProps = {
  status: 'articles', // Possible Values: articles, events, activities
};

export default SectionStatus;
