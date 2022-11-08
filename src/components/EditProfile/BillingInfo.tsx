import React from 'react';

import { UsersPermissionsUser } from 'generated/graphql';

import { EditProfileTab, HeaderLine } from './editProfile.styles';

type Props = {
  user: UsersPermissionsUser
}

const BillingInfo = (props: Props) => {
  return (
    <>
     <EditProfileTab>
        <h3>Billing Information</h3>
        <HeaderLine />
     </EditProfileTab>
    </>
  );
};

export default BillingInfo;