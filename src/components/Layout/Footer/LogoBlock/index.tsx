import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '../SocialLinks';

import { Column, Logo, Row } from 'styles/common.styles';
import { ContactBtn } from '../styles';

type Props = {
    route: string
}

const LogoBlock = ({route}: Props) => {
  return (
    <Row className="footerFirstRow">
      <Column>
        <Link href={route} passHref>
          <Logo>
            <Image
              src={'/talentkids.svg'}
              alt="talentkids logo"
              width={200}
              height={45.69}
            />
          </Logo>
        </Link>
      </Column>
      <Column>
        <SocialLinks />
      </Column>
      <Column>
        <ContactBtn>
          <Link href={'/contact'}>Contact</Link>
        </ContactBtn>
      </Column>
    </Row>
  );
}

export default LogoBlock