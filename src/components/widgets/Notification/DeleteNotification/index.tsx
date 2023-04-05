import React from 'react';
import Button from 'components/users/Auth/Button';
import { DeleteNotificationWrapper } from '../styles';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
import {
  InnerContainer,
  DeleteNotificationInputModal,
} from 'styles/common.styles';
//import DeleteIcon from 'public/assets/icons/DeleteOutline';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';

const DeleteNotification: React.FC = () => {
  const dispatch = useAppDispatch();

  //   console.log(body)
  return (
    <InnerContainer>
      <DeleteNotificationInputModal>
        <DeleteNotificationWrapper>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <h2>Do you really want to delete the notification?</h2>
          <p>You cannot return it after that</p>
          <Button content="" type="submit" disabled={false} loading={false}>
            Delete
          </Button>
          <div className="cancel">
            <Button
              onClick={() => dispatch(closeModal())}
              content={''}
              type={undefined}
              disabled={false}
              loading={false}
            >
              Cancel
            </Button>
          </div>
        </DeleteNotificationWrapper>
      </DeleteNotificationInputModal>
    </InnerContainer>
  );
};

export default DeleteNotification;
