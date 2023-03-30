import React from 'react';
import Button from 'components/users/Auth/Button';
import { ChangingFieldWrapper, ChangingFieldModal } from './style';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
import { InnerContainer } from 'styles/common.styles';
//import DeleteIcon from 'public/assets/icons/DeleteOutline';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';

const DeleteAccount: React.FC = () => {
  const dispatch = useAppDispatch();

  //   console.log(body)
  return (
    <InnerContainer>
      <ChangingFieldModal>
        <ChangingFieldWrapper>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <h2>Do you want to delete an account?</h2>
          <p>Permanently delete your account and all of your content </p>
          <div className="current-name">
            <label>
              To delete an account totally write down the word “delete”
            </label>
            <input className="text" type={'text'}></input>
          </div>
          <div className="changing-action">
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
            <Button content="" type="submit" disabled={false} loading={false}>
              Delete
            </Button>
          </div>
        </ChangingFieldWrapper>
      </ChangingFieldModal>
    </InnerContainer>
  );
};

export default DeleteAccount;
