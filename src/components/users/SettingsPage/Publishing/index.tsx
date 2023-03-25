import { Wrapper, SettingItem } from './styles';
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';
import RightArrow from 'public/assets/icons/RightArrow';

const Publishing = () => {
  return (
    <Wrapper>
      <SettingItem>
        <div>
          <h2>Allow readers to leave private notes on your stories</h2>
          <label>They are visible to you and other people</label>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Allow email replies </h2>
          <label>
            Let readers and followers reply to your stories directly from their
            email
          </label>
        </div>
        <Checkbox />
      </SettingItem>
      <SettingItem>
        <div>
          <h2>Archived publications </h2>
          <label>Your hidden publications. You can republish them </label>
        </div>
        <div className="link-block">
          <Link href="/" passHref>
            <span>
              <RightArrow />
            </span>
          </Link>
        </div>
      </SettingItem>
      <SettingItem>
        <div>
          <h2>General publications </h2>
          <label>Those which are opened for everyone </label>
        </div>
        <div className="link-block">
          <Link href="/" passHref>
            <span>
              <RightArrow />
            </span>
          </Link>
        </div>
      </SettingItem>
      <SettingItem className="active">
        <div>
          <h2>Premium publications * </h2>
          <label>For premium usres</label>
        </div>
        <div className="link-block">
          <Link href="/" passHref>
            <span>
              <RightArrow />
            </span>
          </Link>
        </div>
      </SettingItem>
    </Wrapper>
  );
};

export default Publishing;
