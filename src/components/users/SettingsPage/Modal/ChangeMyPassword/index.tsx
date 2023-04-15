// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { ChangeEvent, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CrossRounded } from 'public/assets/icons/CrossRounded';

import Button from 'components/widgets/Button';
import Spinner from 'components/utilities/Spinner';

import { ModalContainer } from 'components/utilities/Modal/modal.styles';
import { useAppDispatch } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
// import { isUser } from 'src/features/auth';
import {
  ActionGroup,
  ProfileInformationWrapper,
  FormGroup,
  Input,
} from 'components/users/EditProfile/editProfile.styles';
import { DismissIcon } from 'components/users/Auth/auth-styles';

export type FileType = {
  lastModified: any;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const ChangeMyPassword = () => {
  const dispatch = useAppDispatch();
  // const { user: user } = useAppSelector(isUser);
  const [profile, setProfile] = useState({
    password: '',
    currentPassword: '',
    passwordConfirmation: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true);
    const data = {
      currentPassword: profile.currentPassword,
      password: profile.password,
      passwordConfirmation: profile.password,
    };

    if (profile.passwordConfirmation === profile.password && profile.password !== "") {
      await axios
        .post('/api/auth/change-password', {
          data,
        })
        .then((response) => {
          // console.log(response)
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
      setLoading(false);
      if (profile.password !== '') {
        setErrorMsg('please provide a new password');
      } else setErrorMsg('passwords do not match');
      setShowError(true);
    }
  };

  return (
    <>
      <ModalContainer style={{ maxWidth: '715px' }}>
        <ProfileInformationWrapper onSubmit={handlePasswordSubmit}>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          <h1>Password information</h1>
          {showError && (
            <p style={{ color: 'red', alignItems: 'center' }}>{errorMsg}</p>
          )}
          <FormGroup className="form-group">
            <label>Current Password</label>
            <Input
              name="currentPassword"
              placeholder="Provide current password"
              type="password"
              onChange={handleChange}
              required
            />
            {/* <div className="input-info">
                  <p>Appears on your Profile page.</p>
                </div> */}
          </FormGroup>
          <FormGroup className="form-group">
            <label>New Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Provide your new password"
              onChange={handleChange}
              required
            />
            {/* <div className="input-info">
                  <p>Appears on your Profile Page.</p>
                  <span>0/160</span>
                </div> */}
          </FormGroup>
          <FormGroup className="form-group">
            <label>confirm Password</label>
            <Input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm your new password"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <ActionGroup>
            <div className="action">
              <Button
                className="CancelButton"
                type="button"
                onClick={() => dispatch(closeModal())}
              >
                Cancel
              </Button>
              <Button type="submit" className="SaveButton">
                {loading ? 'Saving...' : 'Save'}
                {loading && (
                  <Spinner
                    style={{
                      position: 'relative',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                    }}
                  />
                )}
                {/* Save */}
              </Button>
            </div>
          </ActionGroup>
        </ProfileInformationWrapper>
      </ModalContainer>
      <ToastContainer />
    </>
  );
};

export default ChangeMyPassword;
