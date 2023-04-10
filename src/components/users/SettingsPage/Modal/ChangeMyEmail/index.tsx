import React, { useState } from 'react';
import axios from 'axios';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Button from 'components/users/Auth/Button';
import { ChangingFieldWrapper, ChangingFieldModal } from './style';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
import { InnerContainer } from 'styles/common.styles';
//import DeleteIcon from 'public/assets/icons/DeleteOutline';
import { DismissIcon } from 'components/users/Auth/auth-styles';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import { isUser } from 'src/features/auth';

const ChangingEmail: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user: user, firebaseUser } = useAppSelector(isUser);
  const [email, setEmail] = useState(user?.email as string)
  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // console.log(firebaseUser)
   const handleSubmit = async () => {
    setLoading(true);

    const data = {
      email,
      fUid: firebaseUser?.uid,
    };

    if(user?.provider !== "local") {
      setErrorMsg(`Please change your email with your provider: ${user?.provider}`);
      setShowError(true);
      return setTimeout(() => {
        setShowError(false);
        dispatch(closeModal());
      }, 100000);
      
    }

    if(email !== user?.email) {
      await axios
        .post('/api/user/email', {
          data,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setLoading(false);
            toast.success(response?.data?.message, { position: 'top-center' });
            setTimeout(() => {
              dispatch(closeModal());
            }, 4000);
          }
        })
        .catch((err) => {
          setLoading(false);
          // console.log(err.response.data.error);
          setErrorMsg(err.response.data.error);
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 100000);
        });
    } else {
      setErrorMsg("The email address provided is the same as current email!");
      setShowError(true);
    }
  };
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
            <p>{email}</p>
          </div>
          {showError && (
            <p style={{ color: 'red', alignItems: 'center' }}>{errorMsg}</p>
          )}
          <div className="current-name">
            <label>New email</label>
            <input
              className="text"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>Enter new email address</span>
          </div>
          <div className="changing-action">
            <div className="cancel">
              <Button
                onClick={() => dispatch(closeModal())}
                content={'Cancel'}
                type="button"
                disabled={false}
                loading={false}
              />
            </div>
            <Button
              content={loading?"": "Change"}
              type="button"
              disabled={false}
              loading={loading}
              onClick={handleSubmit}
            />
          </div>
        </ChangingFieldWrapper>
      </ChangingFieldModal>
      <ToastContainer />
    </InnerContainer>
  );
};

export default ChangingEmail;
