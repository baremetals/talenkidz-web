import React from 'react';
import Button from 'components/users/Auth/Button';
import { ChangingFieldWrapper, ChangingFieldModal } from './style';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
import { InnerContainer } from 'styles/common.styles';
//import DeleteIcon from 'public/assets/icons/DeleteOutline';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';

const ChangingUserName: React.FC = () => {
  const dispatch = useAppDispatch();

  //   console.log(body)
  return (
    <InnerContainer>
      <ChangingFieldModal>
        <ChangingFieldWrapper>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <h2>Changing usersname</h2>
          <div className="current-name">
            <label>Current usersname</label>
            <p>@talentkids</p>
          </div>
          <div className="current-name">
            <label>New name</label>
            <input className="text" type={'text'}></input>
            <span>Write a new usersname</span>
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

export default ChangingUserName;
