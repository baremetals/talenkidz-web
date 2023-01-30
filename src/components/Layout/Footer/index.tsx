import React, { ReactElement, useContext } from 'react'
import { AuthContext } from 'src/features/auth/AuthContext';
import MainFooter from './MainFooter';
import UserFooter from './UserFooter';
import { SiteFooter } from './styles';
import { InnerContainer } from 'styles/common.styles';

function Footer(): ReactElement {
    const { user } = useContext(AuthContext); 
    return (
      <SiteFooter>
        <InnerContainer>
          {!user ? <MainFooter /> : <UserFooter />}
        </InnerContainer>
      </SiteFooter>
    );
}

export default Footer
