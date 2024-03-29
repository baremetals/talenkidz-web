// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { ChangeEvent, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CrossRounded } from 'public/assets/icons/CrossRounded';
import {
  ActionGroup,
  FormGroup, Input, ProfileInformationWrapper,
} from './editProfile.styles';

import Button from 'components/widgets/Button';
import Spinner from 'components/utilities/Spinner';

import { ModalContainer } from 'components/utilities/Modal/modal.styles';
import { DismissIcon } from '../Auth/auth-styles';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
import { isUser } from 'src/features/auth';

export type FileType = {
  lastModified: any;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const MyProfile = () => {
  const dispatch = useAppDispatch();
  const { user: user } = useAppSelector(isUser);
  const [profile, setProfile] = useState({
    fullName: user?.fullName || '',
    username: user?.username || '',
    bio: user?.bio || '',
  });

  // console.log(user);

  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async () => {
    setLoading(true);

    const data = {
      fullName: profile?.fullName,
      username: profile?.username,
      bio: profile?.bio,
    };

    await axios
      .post('/api/user/update', {
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
        console.log(err.response.data.error);
        setErrorMsg(err.response.data.error);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 100000);
      });
  };

  return (
    <>
      <ModalContainer style={{ maxWidth: '715px' }}>
        <ProfileInformationWrapper onSubmit={handleSubmit}>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
            <h1>Profile information</h1>
            {showError && (
              <p style={{ color: 'red', alignItems: 'center' }}>{errorMsg}</p>
            )}
            <FormGroup className="form-group">
              <label>Full Name</label>
              <Input
                id=""
                name="fullName"
                value={profile?.fullName}
                type="text"
                onChange={handleChange}
              />
              <div className="input-info">
                <p>Appears on your Profile page.</p>
                {/* <span>12/50</span> */}
              </div>
            </FormGroup>
            <FormGroup className="form-group">
              <label>Username</label>
              <Input
                id=""
                type="text"
                name="username"
                value={profile?.username}
                onChange={handleChange}
              />
              <div className="input-info">
                <p>Appears on your Profile Page.</p>
                {/* <span>0/160</span> */}
              </div>
            </FormGroup>
            <FormGroup className="form-group">
              <label>Bio</label>
              <Input
                id=""
                type="text"
                name="bio"
                value={profile?.bio}
                onChange={handleChange}
              ></Input>
              <div className="input-info">
                <p>Appears on your profile, as your byline.</p>
                {/* <span>0/160</span> */}
              </div>
            </FormGroup>
            {/* <FormGroup className="form-group">
          <label>Email</label>
          <Input
            id=""
            type="email"
            name="email"
            value={profile?.email}
            onChange={handleChange}
          />
          <div className="input-info">
            <p>Appears on your profile, as your byline.</p>
            <span>0/160</span>
          </div>
        </FormGroup> */}
            <ActionGroup>
              <div className="action">
                <Button
                  type="button"
                  className="CancelButton"
                  onClick={() => dispatch(closeModal())}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="SaveButton"
                  onClick={() => handleSubmit()}
                >
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

export default MyProfile;
