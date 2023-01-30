import React, { ReactElement } from 'react'

import { Column, Row, } from 'styles/common.styles';

import { Copyright } from '../styles';
import NavLinks from '../NavLinks';
import ServiceLinks from '../ServiceLinks';
import LogoBlock from '../LogoBlock';


function UserFooter(): ReactElement {

    return (
      <>
        <LogoBlock route="/account" />
        <Row className="footerSecondRow">
          <Column>
            <NavLinks />
          </Column>
          <Column>
            <Copyright className="copy">
              Talentkids Ltd © {new Date().getFullYear()}
            </Copyright>
          </Column>
          <Column>
            <ServiceLinks class_name="footerLinks" />
          </Column>
        </Row>
      </>
    );
}

export default UserFooter
