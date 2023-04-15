import { Wrapper } from './styles';
import Link from 'next/link';
import { SettingItem } from '../Publishing/styles';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';

const Activities = () => {
  const { user: user } = useAppSelector(isUser);
  return (
    <Wrapper>
      <SettingItem className="setting-item">
        <div>Current membership </div>
        <div className="standard">
          {user?.membership === 'basic' ? 'Standard' : user?.membership}
        </div>
        {/* <Link href={'#'} passHref>
          Premium Membership
        </Link> */}
      </SettingItem>
      {user?.membership === 'basic' && user?.userType !== "organisation" ? <SettingItem className="setting-item ">
        <div>Get unlimited posting, and more on talenkids</div>
        <Link href={'/account/subscribe'} passHref>
          <span className="active"> Upgrade Membership</span>
        </Link>
      </SettingItem>: null}
      
    </Wrapper>
  );
};

export default Activities;
