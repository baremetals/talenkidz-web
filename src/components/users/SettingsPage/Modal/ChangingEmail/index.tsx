import React from 'react';
import Button from 'components/users/Auth/Button';
import { ChangingFieldWrapper, ChangingFieldModal } from './style';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
import { InnerContainer } from 'styles/common.styles';
//import DeleteIcon from 'public/assets/icons/DeleteOutline';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';

const ChangingEmail: React.FC = () => {
  const dispatch = useAppDispatch();

  //   console.log(body)
  return (
    <InnerContainer>
      <ChangingFieldModal>
        <ChangingFieldWrapper>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <h2>Changing an email</h2>
          <div className="current-name">
            <label>Current email</label>
            <p>talentkids@gmail.com </p>
          </div>
          <div className="current-name">
            <label>New email</label>
            <input className="text" type={'text'}></input>
            <span>Write a new email </span>
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
              Change
            </Button>
          </div>
        </ChangingFieldWrapper>
      </ChangingFieldModal>
    </InnerContainer>
  );
};

export default ChangingEmail;
