import React from 'react'

import { FaceBook } from 'public/assets/icons/FaceBook';
import { Tiktok } from 'public/assets/icons/Tiktok';
import { LinkedIn } from 'public/assets/icons/LinkedIn';
import { Twitter } from 'public/assets/icons/Twitter';
import { Instagram } from 'public/assets/icons/Instagram';
import { YouTube } from 'public/assets/icons/YouTube';

const SocialLinks = () => {
  return (
    <div className="footer_social">
      <a
        href={'https://www.linkedin.com/company/join-talentkids'}
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn />
      </a>
      <a
        href={'https://www.instagram.com/join__talentkids'}
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram />
      </a>
      <a
        href={'https://www.facebook.com/jointalentkids'}
        aria-label="FaceBook"
        target="_blank"
        rel="noreferrer"
      >
        <FaceBook />
      </a>
      <a
        href={'https://twitter.com/talentkids_join'}
        aria-label="Twitter"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
      </a>

      <a
        href={'https://web.whatsapp.com/'}
        aria-label="YouTube"
        target="_blank"
        rel="noreferrer"
      >
        <YouTube />
      </a>

      <a
        href={'https://www.tiktok.com/@join_talentkids'}
        aria-label="Tiktok"
        target="_blank"
        rel="noreferrer"
      >
        <Tiktok />
      </a>
    </div>
  );
}

export default SocialLinks