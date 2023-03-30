import React from 'react';
import {
  Wrapper,
  DeleteLink,
  ProfileInformation,
  AccountInfomation,
} from './styles';
import Image from 'next/image';
import Link from 'next/link';
import PencilIcon from 'components/users/Account/PencilIcon';
import { openModal } from 'src/features/modal';
import { useAppDispatch } from 'src/app/hooks';

const Account = () => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <AccountInfomation>
        <div className="col-4">Email address</div>
        <div className="col-4">
          <label>current email</label>
          <div>talentkids@gmail.com </div>
        </div>
        <div className="change col-4">
          <div onClick={() => dispatch(openModal('CHANGINGEMAIL_MODAL'))}>
            <label>Change an email </label> <PencilIcon />
          </div>
        </div>
      </AccountInfomation>
      <AccountInfomation>
        <div className="col-4">Username </div>
        <div className="col-4">
          <label>Change the name</label>
          <div>@talentkids</div>
        </div>
        <div className="change col-4">
          <div onClick={() => dispatch(openModal('CHANGINGNAME_MODAL'))}>
            <label>Change the name</label>
            <PencilIcon />
          </div>
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
      <DeleteLink onClick={() => dispatch(openModal('DEACTIVEACCOUNT_MODAL'))}>
        <Link href={'#'}>Deactivate account </Link>
        <p>Deactivating will suspend your account until you sign back in</p>
      </DeleteLink>
      <DeleteLink onClick={() => dispatch(openModal('DELETEACCOUNT_MODAL'))}>
        <Link href={'#'}>Delete account</Link>
        <p>Permanently delete your account and all of your content </p>
      </DeleteLink>
    </Wrapper>
  );
};

export default Account;
