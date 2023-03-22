import { Wrapper } from './styles';
import Link from 'next/link';
import { SettingItem } from '../Publishing/styles';

const Activities = () => {
  return (
    <Wrapper>
      <SettingItem className="setting-item">
        <div>Current member status </div>
        <div className="standard">Standard</div>
        <Link href={'#'} passHref>
          Become a Premium
        </Link>
      </SettingItem>
      <SettingItem className="setting-item">
        <div>Get unlimited posting on TALENTKIDS</div>
        <Link href={'#'} passHref>
          Become a Premium
        </Link>
      </SettingItem>
    </Wrapper>
  );
};

export default Activities;
