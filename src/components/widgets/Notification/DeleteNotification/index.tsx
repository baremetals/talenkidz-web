import React from 'react';
import Button from 'components/users/Auth/Button';
import { DeleteNotificationWrapper } from '../styles';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal, modalSelector } from 'src/features/modal';
import {
  InnerContainer,
  DeleteNotificationInputModal,
} from 'styles/common.styles';
//import DeleteIcon from 'public/assets/icons/DeleteOutline';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { deleteNotification } from 'src/helpers/firebase';

const DeleteNotification: React.FC = () => {
  const dispatch = useAppDispatch();
  const { entityId } = useAppSelector(modalSelector);

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await deleteNotification(entityId);
      dispatch(closeModal());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <InnerContainer>
      <DeleteNotificationInputModal>
        <DeleteNotificationWrapper>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <h2>Do you really want to delete the notification?</h2>
          <p>You cannot return it after that</p>
          <Button
            onClick={(e) => handleDelete(e)}
            content=""
            type="submit"
            disabled={false}
            loading={false}
          >
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
