import React from 'react';
import PencilTwo from 'public/assets/icons/PencilTwo';
import SendIcon from 'public/assets/icons/SendIcon';
import PlusIcon from 'public/assets/icons/PlusIcon';
import {
  EditorWrapper,
  SendArticleButton,
} from '../ProfilePage/profile.styles';

type iconProps = {
  status?: string;
};

type props = {
  placeholder?: string;
  status?: string;
};

const Icon = ({ status, ...props }: iconProps) => {
  switch (status) {
    case 'article':
      return <SendIcon {...props} />;

    default:
      return <PlusIcon {...props} />;
  }
};

const Editor = ({ placeholder, status }: props) => {
  return (
    <EditorWrapper>
      <div className="primary">
        <PencilTwo />
        <input type="text" placeholder={placeholder} disabled/>
      </div>
      <SendArticleButton>
        <Icon status={status} />
      </SendArticleButton>
    </EditorWrapper>
  );
};

Editor.defaultProps = {
  placeholder: 'Write a new article',
  status: 'article',
};

export default Editor;
