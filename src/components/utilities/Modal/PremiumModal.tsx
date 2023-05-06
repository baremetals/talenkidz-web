import React from 'react'
import Button from 'components/users/Auth/Button';


import { useAppDispatch } from 'src/app/hooks';
import { closeModal} from 'src/features/modal';
import { InnerContainer, DeleteCommentInputModal } from 'styles/common.styles';

import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { DeleteCommentWrapper } from '../comments/styles';
import { useRouter } from 'next/router';

const PremiumModal = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()
  return (
    <InnerContainer>
      <DeleteCommentInputModal>
        <DeleteCommentWrapper>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <h2>To create a post you must upgrade your account!</h2>
          {/* <p>You cannot undo this action</p> */}
          <Button
            onClick={() => {
                dispatch(closeModal());
                router.push('/account/subscribe');
            }}
            content={''}
            type="submit"
            disabled={false}
            loading={false}
          >
            upgrade
          </Button>
          <div className="cancel">
            <Button
              onClick={() => dispatch(closeModal())}
              content={''}
              type="button"
              disabled={false}
              loading={false}
            >
              Cancel
            </Button>
          </div>
        </DeleteCommentWrapper>
      </DeleteCommentInputModal>
    </InnerContainer>
  );
}

export default PremiumModal