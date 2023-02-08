
import React from 'react'

// import { SocialDropDownIcon } from "public/assets/icons/SocialDropDownIcon";
import { FaceBook } from "../../../../public/assets/icons/FaceBook";
import { Twitter } from "../../../../public/assets/icons/Twitter";
import { LinkedIn } from "../../../../public/assets/icons/LinkedIn";
import { WhatsApp } from "../../../../public/assets/icons/WhatsApp";
import { Email } from "../../../../public/assets/icons/Email";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { SocialDropDown, SocialDropDownItem, SocialDropDownList, SocialShareWrap } from './styles';
// import { Tiktok } from '../../../../public/assets/icons/Tiktok';

type shareProps = {
  pathname: string;
};

const SocialShare = ({ pathname }: shareProps) => {
  const url: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
  const shareUrl: string = `${url}${pathname}`;
  return (
    <SocialShareWrap>
      <h2>Share This Article</h2>
      <SocialDropDown>
        <SocialDropDownList className="opened">
          <SocialDropDownItem>
            <FacebookShareButton url={shareUrl}>
              <FaceBook />
            </FacebookShareButton>
          </SocialDropDownItem>
          <SocialDropDownItem>
            <TwitterShareButton url={shareUrl}>
              <Twitter />
            </TwitterShareButton>
          </SocialDropDownItem>
          <SocialDropDownItem>
            <LinkedinShareButton url={shareUrl}>
              <LinkedIn />
            </LinkedinShareButton>
          </SocialDropDownItem>
          <SocialDropDownItem>
            <WhatsappShareButton url={shareUrl}>
              <WhatsApp />
            </WhatsappShareButton>
          </SocialDropDownItem>
          <SocialDropDownItem>
            <EmailShareButton url={shareUrl}>
              <Email />
            </EmailShareButton>
          </SocialDropDownItem>
        </SocialDropDownList>
      </SocialDropDown>
    </SocialShareWrap>
  );
};

export default SocialShare
