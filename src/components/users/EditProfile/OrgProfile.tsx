
import React, { useState, ChangeEvent } from 'react';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from 'components/utilities/Spinner';
import { CrossRounded } from 'public/assets/icons/CrossRounded';
import Button from 'components/widgets/Button';
import {
    FormGroup,
    ProfileInformationWrapper,
    ActionGroup,
    LinkAction,
    ProfileInfo,
    Input
} from './editProfile.styles';



import axios from 'axios';
import { ModalContainer } from 'components/utilities/Modal/modal.styles';
import { DismissIcon } from '../Auth/auth-styles';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { closeModal } from 'src/features/modal';
import { isUser } from 'src/features/auth';


const OrgProfile = () => {
  const dispatch = useAppDispatch();
  const { user: user } = useAppSelector(isUser);
    const [loading, setLoading] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [showPasswordForm, setShowPasswordForm] = useState<boolean>(false);

    const [profile, setProfile] = useState({
      fullName: user?.fullName || '',
      orgName: user?.orgName || '',
      username: user?.username || '',
      email: user?.email || '',
      website: user?.website || '',
      organisationType: user?.orgType || '',
      password: '',
      currentPassword: '',
      passwordConfirmation: '',
    });

    console.log(user)

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //   console.log(e.target.value);
      setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
      setLoading(true);

      const data = {
        fullName: profile?.fullName,
        email: profile?.email,
        username: profile?.username,
        organisation: {
          name: profile.orgName,
          organisationType: profile?.organisationType,
          website: profile?.website,
        },
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
          console.log(err);
          setErrorMsg('Issue updating details please try again later');
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 100000);
        });
    };

    const handlePasswordSubmit = async () => {
      setLoading(true);
      const data = {
        currentPassword: profile?.currentPassword,
        password: profile?.password,
        passwordConfirmation: profile?.password,
      };

      if (profile.passwordConfirmation === profile.password) {
        await axios
          .post('/api/user/change-password', {
            data,
          })
          .then((response) => {
            // console.log(response)
            if (response.status === 200) {
              setLoading(false);
              toast.success(response?.data?.message, {
                position: 'top-center',
              });
              setTimeout(() => {
                dispatch(closeModal());
              }, 4000);
            }
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            setErrorMsg('Issue updating password please try again later');
            setShowError(true);
            setTimeout(() => {
              setShowError(false);
            }, 100000);
          });
      } else {
        setLoading(false);
        setErrorMsg('passwords do not match');
        setShowError(true);
      }
    };

    return (
      <ModalContainer style={{ maxWidth: '715px' }}>
        <ProfileInformationWrapper onSubmit={handleSubmit}>
          <DismissIcon className="dismiss-icon">
            <CrossRounded onClick={() => dispatch(closeModal())} />
          </DismissIcon>
          {!showPasswordForm ? (
            <>
              <h1>Organisation Information</h1>
              <ProfileInfo>
                <ActionGroup>
                  {user?.provider === 'local' ? (
                    <LinkAction
                      className="LinkButton"
                      onClick={() => setShowPasswordForm(!showPasswordForm)}
                    >
                      Update Password
                    </LinkAction>
                  ) : null}
                </ActionGroup>
              </ProfileInfo>
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
                <label>Organisation Name</label>
                <Input
                  id=""
                  name="orgName"
                  value={profile?.orgName}
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
                <label>Organisation Type</label>
                <Input
                  id=""
                  type="text"
                  name="organisationType"
                  value={profile?.organisationType}
                  onChange={handleChange}
                ></Input>
                <div className="input-info">
                  <p>Appears on your profile, as your byline.</p>
                  {/* <span>0/160</span> */}
                </div>
              </FormGroup>
              <FormGroup className="form-group">
                <label>Website</label>
                <Input
                  id=""
                  type="text"
                  name="organisationType"
                  value={profile?.website}
                  onChange={handleChange}
                />
                <div className="input-info">
                  <p>Appears on your profile.</p>
                  {/* <span>0/160</span> */}
                </div>
              </FormGroup>
              <FormGroup className="form-group">
                <label>Email</label>
                <Input
                  id=""
                  type="email"
                  name="email"
                  value={profile?.email}
                  onChange={handleChange}
                  disabled={(user?.provider as string) === "local" ? false: true}
                />
                <div className="input-info">
                  <p>Does not Appear on your profile.</p>
                  {/* <span>0/160</span> */}
                </div>
              </FormGroup>
              <ActionGroup>
                {user?.provider === 'local' ? (
                  <LinkAction
                    className="LinkButton"
                    onClick={() => setShowPasswordForm(!showPasswordForm)}
                  >
                    Update Password
                  </LinkAction>
                ) : null}
                <div className="action">
                  <Button type="button" className="CancelButton">
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
            </>
          ) : (
            <>
              <h1>Password information</h1>
              {showError && (
                <p style={{ color: 'red', alignItems: 'center' }}>{errorMsg}</p>
              )}
              <ProfileInfo>
                <ActionGroup
                  onClick={() => setShowPasswordForm(!showPasswordForm)}
                >
                  <LinkAction className="LinkButton">Update Profile</LinkAction>
                </ActionGroup>
              </ProfileInfo>
              <FormGroup className="form-group">
                <label>Current Password</label>
                <Input
                  name="currentPassword"
                  placeholder="Please provide your current password"
                  type="password"
                  onChange={handleChange}
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
                  placeholder="Please provide your new password"
                  onChange={handleChange}
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
                  placeholder="Please confirm your new password"
                  onChange={handleChange}
                />
              </FormGroup>
              <ActionGroup>
                <LinkAction
                  className="LinkButton"
                  onClick={() => setShowPasswordForm(!showPasswordForm)}
                >
                  Update Profile
                </LinkAction>
                <div className="action">
                  <Button
                    className="CancelButton"
                    type="button"
                    onClick={() => dispatch(closeModal())}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    className="SaveButton"
                    onClick={() => handlePasswordSubmit()}
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
            </>
          )}
        </ProfileInformationWrapper>
        <ToastContainer />
      </ModalContainer>
    );
};

export default OrgProfile;
