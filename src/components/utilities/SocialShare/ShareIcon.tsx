import React from 'react'
import styled from "styled-components";

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
// import { SocialDropDown, SocialDropDownItem, SocialDropDownList } from './styles';

type shareProps = {
  pathname: string;
  toggle: any;
  socialDropdown: boolean;
  children: React.ReactNode
};

const SocialShareIcon = ({ pathname, toggle, socialDropdown, children }: shareProps) => {
  const url: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
  const shareUrl: string = `${url}${pathname}`;
  return (
    <SocialDropDown>
      <span onClick={toggle}>
        {/* <SocialDropDownIcon /> */}
        {children}
      </span>
      <SocialDropDownList
        className={`${socialDropdown ? "opened" : ""}`}
        onClick={toggle}
      >
        <SocialDropDownItem>
          <FacebookShareButton url={shareUrl}>
            <FaceBook />
            Facebook
          </FacebookShareButton>
        </SocialDropDownItem>
        <SocialDropDownItem>
          <TwitterShareButton url={shareUrl}>
            <Twitter />
            Twitter
          </TwitterShareButton>
        </SocialDropDownItem>
        <SocialDropDownItem>
          <LinkedinShareButton url={shareUrl}>
            <LinkedIn />
            LinkedIn
          </LinkedinShareButton>
        </SocialDropDownItem>
        <SocialDropDownItem>
          <WhatsappShareButton url={shareUrl}>
            <WhatsApp />
            Whatsapp
          </WhatsappShareButton>
        </SocialDropDownItem>
        <SocialDropDownItem>
          <EmailShareButton url={shareUrl}>
            <Email />
            Email
          </EmailShareButton>
        </SocialDropDownItem>
      </SocialDropDownList>
    </SocialDropDown>
  );
};

export default SocialShareIcon

export const SocialDropDown = styled.div`
  position: relative;
  float: right;
  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.625rem 1.25rem;
    border-radius: 2rem;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: normal;
    color: #000;
    svg {
      display: block;
      height: 100%;
      width: 100%;
      /* fill: #000; */
      margin-right: 0.5rem;
    }
  }
`;

export const SocialDropDownItem = styled.li`
  text-decoration: none;
  font-size: 1rem;
  color: #000;
  font-weight: 500;
  display: block;
  padding: 0.625rem 1.5rem;
  &:hover {
    background-color: rgb(237 237 237 / 50%);
  }
  svg {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-right: 0.75rem;
  }
`;

export const SocialDropDownList = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  width: 12rem;
  right: 0;
  background-color: #fff;
  padding: 0.5rem 0;
  list-style: none;
  margin-top: 1.5rem;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.625rem;
  z-index: 10;
  &.opened {
    display: block;
  }
`;
