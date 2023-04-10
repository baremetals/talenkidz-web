import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';
import { closeModal, openModalWithContent } from 'src/features/modal';
import { SettingHeader, SettingItem, Wrapper } from './styles';
import Button from 'components/users/Auth/Button';


const Notifications = () => {
  const dispatch = useAppDispatch();
  const { user: user } = useAppSelector(isUser);
  const [loading, setLoading] = useState<boolean>(false);
  const mySettings = user?.notificationsSettings;
  const [profile, setProfile] = useState({
    likes: mySettings?.likes,
    account: mySettings?.account,
    comments: mySettings?.comments,
    mailingList: mySettings?.mailingList,
    bookmarkList: mySettings?.bookmarkList,
    publishedPosts: mySettings?.publishedPosts,
    publishedEvents: mySettings?.publishedEvents,
    recommendations: mySettings?.recommendations,
    publishedActivities: mySettings?.publishedActivities,
  });
  // console.log(profile);
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      likes: profile?.likes,
      account: profile?.account,
      comments: profile?.comments,
      mailingList: profile?.mailingList,
      bookmarkList: profile?.bookmarkList,
      publishedPosts: profile?.publishedPosts,
      publishedEvents: profile?.publishedEvents,
      recommendations: profile?.recommendations,
      publishedActivities: profile?.publishedActivities,
    };
    await axios
      .post('/api/user/update', {
        data: {
          notificationsSettings: data,
        },
      })
      .then((response) => {
        // console.log(response)
        if (response.status === 200) {
          setLoading(false);
          toast.success("Settings successfully saved! ", { position: 'top-center' });
          setTimeout(() => {
            dispatch(closeModal());
          }, 4000);
        }
      })
      .catch((err) => {
        setLoading(false);
        let errorMessage = err.response.data.error;
        if (errorMessage === undefined) {
          errorMessage = 'Something is wrong, please try again later or contact us for support!';
        }
          dispatch(
            openModalWithContent({
              modalComponent: 'MESSAGE_MODAL',
              content: 'Error!',
              entityId: errorMessage,
            })
          );
        // console.log(err.response.data.error);
        setTimeout(() => {
          dispatch(closeModal());
        }, 100000);
      });
  };
  return (
    <Wrapper>
      <SettingHeader>Social activity</SettingHeader>
      <SettingItem>
        <div>
          <h2>Comments </h2>
        </div>
        <Checkbox
          name="comments"
          checked={profile.comments || false}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Likes </h2>
        </div>
        <Checkbox
          name="likes"
          checked={profile.likes || false}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Bookmark List</h2>
        </div>
        <Checkbox
          name="bookmarkList"
          checked={profile.bookmarkList || false}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Mailing List </h2>
        </div>
        <Checkbox
          name="mailingList"
          checked={profile.mailingList}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </SettingItem>
      <SettingHeader>Published content </SettingHeader>
      <SettingItem>
        <div>
          <h2>Posts, Articles & Resources</h2>
        </div>
        <Checkbox
          name="publishedPosts"
          checked={profile.publishedPosts}
          onChange={handleChange}
        />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Activities </h2>
        </div>
        <Checkbox
          name="publishedActivities"
          checked={profile.publishedActivities}
          onChange={handleChange}
        />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Events </h2>
        </div>
        <Checkbox
          name="publishedEvents"
          checked={profile.publishedEvents}
          onChange={handleChange}
        />
      </SettingItem>
      <SettingHeader>From talentkids </SettingHeader>
      <SettingItem>
        <div>
          <h2>Account </h2>
        </div>
        <Checkbox
          name="account"
          checked={profile.account}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          disabled
        />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Recommendations </h2>
        </div>
        <Checkbox
          name="recommendations"
          checked={profile.recommendations}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </SettingItem>
      {/* <SettingItem>
        <div>
          <h2>Notify of coming plunned events and activities </h2>
        </div>
        <Checkbox />
      </SettingItem> */}
      {/* <SettingItem className="active">
        <div>
          <h2>Notify of ending of the status* </h2>
        </div>
        <Checkbox />
      </SettingItem> */}
      <Button
        content={'Save'}
        type="button"
        disabled={false}
        loading={loading}
        onClick={() => handleSubmit()}
      />
      <ToastContainer />
    </Wrapper>
  );
};

export default Notifications;
