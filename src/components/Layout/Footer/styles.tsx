import styled from "styled-components";

export const SiteFooter = styled.footer`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #130429;
  @media (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .footer_social {
    margin-top: 0;
    text-align: right;
    margin-bottom: 68px;
    @media (max-width: 768px) {
      text-align: center;
    }
    a {
      opacity: 1;
      svg {
        &.youtube {
           height: 30px;
           width:auto !important;
        }
        width: 27px;
        height: 27px;
        display: inline-block;
      }
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  a {
    color: #ffffff;
    text-decoration: none;
    display: table;
    line-height: 1;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    &:hover {
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const FooterTitle = styled.h4`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const NewsletterBox = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 100 !important%;
  }
  input {
    height: 52px;
    border-radius: 20px;
  }
  Button {
    border-radius: 20px !important;
    min-width: 139px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    min-height: 52px;
    line-height: 17px;
    color: #000000;
    border: none;
    &:hover {
      background-color: #fff;
    }
    @media (max-width: 767px) {
      margin-top: 20px;
    }
  }
`;

export const NewsLetterTitle = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 25px;
  @media (max-width: 991px) {
    font-size: 2rem;
  }
`;

export const NewsLetterText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 25px;
  svg {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const Copyright = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;