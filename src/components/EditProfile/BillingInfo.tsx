import React from 'react';

import { UsersPermissionsUser } from 'generated/graphql';
import { Column } from 'styles/common.styles';

type Props = {
  user: UsersPermissionsUser
}

const BillingInfo = (props: Props) => {
  return (
    <>
      <Column className='col' style={{maxWidth: '24.438rem', paddingRight: '0.6875rem'}}>
        SIDEBAR
      </Column>
      <Column className='col' style={{paddingLeft: '0.6875rem'}}>
        <h2>Info billing</h2>
        <br />
        FORM
      </Column>
    </>
  );
};

export default BillingInfo;