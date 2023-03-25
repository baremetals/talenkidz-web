import { Wrapper, SettingItem, SettingHeader } from './styles';
import Checkbox from '@mui/material/Checkbox';

const Notifications = () => {
  return (
    <Wrapper>
      <SettingHeader>Social activity</SettingHeader>
      <SettingItem>
        <div>
          <h2>Notify of comments </h2>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Notify of likes </h2>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Notify of replies in the content </h2>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Notify of replies in general </h2>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingHeader>For writers and publishers </SettingHeader>
      <SettingItem>
        <div>
          <h2>Notify of your published stories </h2>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Notify of your content positions </h2>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingHeader>Others from talentkids </SettingHeader>
      <SettingItem>
        <div>
          <h2>Notify of coming popular events and activities </h2>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Notify of coming plunned events and activities </h2>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingItem className="active">
        <div>
          <h2>Notify of ending of the status* </h2>
        </div>
        <Checkbox />
      </SettingItem>
    </Wrapper>
  );
};

export default Notifications;
