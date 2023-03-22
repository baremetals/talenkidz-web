import {
  Wrapper,
  DeleteLink,
  ProfileInformation,
  AccountInfomation,
} from './styles';
import Image from 'next/image';
import Link from 'next/link';
import PencilIcon from 'components/users/Account/PencilIcon';

const Account = () => {
  return (
    <Wrapper>
      <AccountInfomation>
        <div className="col-4">Email address</div>
        <div className="col-4">
          <label>current email</label>
          <div>talentkids@gmail.com </div>
        </div>
        <div className="change col-4">
          <label>Change an email </label> <PencilIcon />
        </div>
      </AccountInfomation>
      <AccountInfomation>
        <div className="col-4">Username </div>
        <div className="col-4">
          <label>Change the name</label>
          <div>@talentkids</div>
        </div>
        <div className="change col-4">
          <label> Change an email </label>
          <PencilIcon />
        </div>
      </AccountInfomation>
      <ProfileInformation>
        <div>
          <h2>Profile information</h2>
          <p>Edit your photo, name, bio, etc.</p>
        </div>
        <div className="user-block">
          <PencilIcon />
          <label>Ally Blackmay</label>
          <div className="user-img">
            <Image
              alt="user"
              src={'/assets/images/kid.png'}
              width={30}
              height={30}
              layout="responsive"
            />
          </div>
        </div>
      </ProfileInformation>
      <DeleteLink>
        <Link href={'#'}>Deactivate account </Link>
        <p>Deactivating will suspend your account until you sign back in</p>
      </DeleteLink>
      <DeleteLink>
        <Link href={'#'}>Delete account</Link>
        <p>Permanently delete your account and all of your content </p>
      </DeleteLink>
    </Wrapper>
  );
};

export default Account;
