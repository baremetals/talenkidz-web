import React from 'react';
import {
  Wrapper,
  // DeleteLink,
  ProfileInformation,
  AccountInfomation,
} from './styles';
import Image from 'next/image';
// import Link from 'next/link';
import PencilIcon from 'components/users/Account/PencilIcon';
import { openModal } from 'src/features/modal';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';

const Account = () => {
  const dispatch = useAppDispatch();
  const { user: user } = useAppSelector(isUser);
  return (
    <Wrapper>
      <AccountInfomation>
        <div className="col-4">Email address</div>
        <div className="col-4">
          <label>current email</label>
          <div>{user?.email}</div>
        </div>
        <div className="change col-4">
          <div onClick={() => dispatch(openModal('CHANGE_EMAIL_MODAL'))}>
            <label>Change an email </label> <PencilIcon />
          </div>
        </div>
      </AccountInfomation>
      <AccountInfomation>
        <div className="col-4">Username </div>
        <div className="col-4">
          <label>current username</label>
          <div>{user?.username}</div>
        </div>
        <div className="change col-4">
          <div onClick={() => dispatch(openModal('PROFILE_MODAL'))}>
            <label>Change username</label>
            <PencilIcon />
          </div>
        </div>
      </AccountInfomation>
      <AccountInfomation>
        <div className="col-4">Password </div>
        <div className="col-4">
          <label>current password</label>
          <div>{'*******'}</div>
        </div>
        <div className="change col-4">
          <div onClick={() => dispatch(openModal('CHANGE_PASSWORD_MODAL'))}>
            <label>Change password</label>
            <PencilIcon />
          </div>
        </div>
      </AccountInfomation>
      <ProfileInformation>
        <div>
          <h2>Profile information</h2>
          <p>Edit name, and bio.</p>
        </div>
        <div
          className="user-block"
          onClick={() => dispatch(openModal('PROFILE_MODAL'))}
        >
          <PencilIcon />
          <label>{user?.fullName}</label>
          <div className="user-img">
            <Image
              alt="user"
              src={user?.avatar ? (user?.avatar as string) : '/default.jpg'}
              width={30}
              height={30}
              layout="responsive"
            />
          </div>
        </div>
      </ProfileInformation>
      {/* <DeleteLink onClick={() => dispatch(openModal('DEACTIVEACCOUNT_MODAL'))}>
        <Link href={'#'}>Deactivate account </Link>
        <p>Deactivating will suspend your account until you sign back in</p>
      </DeleteLink> */}
      {/* <DeleteLink onClick={() => dispatch(openModal('DELETEACCOUNT_MODAL'))}>
        <Link href={'#'}>Delete account</Link>
        <p>Permanently delete your account and all of your content </p>
      </DeleteLink> */}
    </Wrapper>
  );
};

export default Account;
