import React from 'react';

import { useAppDispatch } from 'src/app/hooks';
import { openModal } from 'src/features/modal/reducers';

import PencilTwo from 'public/assets/icons/PencilTwo';
import SendIcon from 'public/assets/icons/SendIcon';
import PlusIcon from 'public/assets/icons/PlusIcon';
import {
  EditorWrapper,
  SendArticleButton,
} from '../ProfilePage/profile.styles';
import { useRouter } from 'next/router';

type iconProps = {
  status?: string;
};

type props = {
  componentName?: string;
  placeholder?: string;
  status?: string;
};

const Icon = ({ status, ...props }: iconProps) => {
  switch (status) {
    case 'article':
      return <SendIcon {...props} />;
    case 'basic':
      return <SendIcon {...props} />;

    default:
      return <PlusIcon {...props} />;
  }
};

const Editor = ({ componentName, placeholder, status }: props) => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const handleOnClick = () => {
    switch (status) {
      case 'article':
        return dispatch(openModal(componentName));
      case 'basic':
        return dispatch(openModal('PREMIUM_MODAL'));
      default:
        return router.push(`/account/create/${status}`);
    }
  }
  return (
    <EditorWrapper onClick={handleOnClick}>
      <div className="primary">
        <PencilTwo />
        <input type="text" placeholder={placeholder} disabled />
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
