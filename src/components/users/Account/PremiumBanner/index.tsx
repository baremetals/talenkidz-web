import { PremiumMember } from 'components/users/ProfilePage/profile.styles';
import Link from 'next/link';
import React from 'react'
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';

const PremiumBanner = () => {
  const { user: user } = useAppSelector(isUser);
  // console.log(user)
  return (
    <>
    {user?.membership !== 'premium' || user?.userType !== 'organisation' ? (<PremiumMember>
        <p>Get unlimited access to TALENTKIDS for less than £1 a week</p>
        <Link href="/account/subscribe">Become A Premium Member</Link>
      </PremiumMember>): null}
      
    </>
  );
}

export default PremiumBanner