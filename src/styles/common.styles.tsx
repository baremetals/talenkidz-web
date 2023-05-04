// import { POSITION } from 'react-toastify/dist/utils';
import styled from 'styled-components';
import { Field, Form } from 'formik';

export const PageContainer = styled.section`
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
  position: relative;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .space-bottom {
    margin-bottom: 6.25rem;
    @media (max-width: 991px) {
      margin-bottom: 1.25rem;
    }
  }
`;

export const InnerContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const SiteHeader = styled.header`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  z-index: 100;
  @media (max-width: 991px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Content = styled.div`
  svg {
    @media (max-width: 991px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const PageHeading = styled.h1``;

export const Logo = styled.div`
  margin-right: auto;
  font-weight: bold;
  font-size: 1rem;
  line-height: 0.5;
  img {
    width: 200px;
    aspect-ratio: inherit;
    object-fit: contain;
    @media (max-width: 991px) {
      width: 120px;
    }
  }
`;

export const NavBarItemLink = styled.a`
  cursor: pointer;
  display: block;
  position: relative;
  &:hover {
    color: #bc70ad;
  }

  &:after {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    background-color: #bc70ad;
    top: calc(100% + 0.25rem);
    left: 50%;
    margin-left: -4px;
    border-radius: 100%;
    opacity: 0;
  }

  &:not(.signup) {
    &:hover {
      &:after {
        opacity: 1;
      }
    }
  }
`;

// Default

export const Heading = styled.div`
  margin-bottom: 3.75rem;
  @media (max-width: 991px) {
    margin-bottom: 2.25rem;
  }
`;

export const SubTitle = styled.span`
  font-size: 1.375rem;
  display: block;
  margin-bottom: 1rem;
  color: #bc70ad;
  @media (max-width: 991px) {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  color: #1e0a3c;
  @media (max-width: 991px) {
    font-size: 2rem;
  }
`;

export const H2Title = styled.h2`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  color: #1e0a3c;
  @media (max-width: 991px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  color: #74787c;
  line-height: 1.6;
  margin-bottom: 1rem;
  svg {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const ButtonOutLine = styled.button`
  background-color: transparent;
  color: #bc70ad;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 0.875rem 2rem;
  border: 1px solid #bc70ad;
  cursor: pointer;
  line-height: 1;
  font-weight: 400;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  margin-left: 0.5rem;
  &:hover {
    background-color: #bc70ad;
    color: #fff;
  }
  @media (max-width: 991px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
`;

export const Listings = styled.ul`
  color: #74787c;
  line-height: 1.6;
  list-style: none;
  margin-top: 0;
  margin-bottom: 2rem;
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const ListingsItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
  &:before {
    content: '';
    border: 1px dashed #c4c4c4;
    width: 1.375rem;
    height: 1.375rem;
    position: absolute;
    left: -2.5rem;
    top: 0.125rem;
    border-radius: 100%;
  }
  &:after {
    content: '';
    border-left: 1px solid;
    border-bottom: 1px solid;
    width: 0.625rem;
    height: 0.375rem;
    position: absolute;
    transform: rotate(-45deg);
    left: -2.125rem;
    top: 0.475rem;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

// Hero Banner

export const Hero = styled.section`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #06283d;
  height: 520px;
  display: flex;
  align-items: center;
  transform: translate(0);
  @media (max-width: 991px) {
    height: 400px;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
`;

export const HeroSubTitle = styled.span`
  font-size: 1.125rem;
  display: block;
  margin-bottom: 1.25rem;
  @media (max-width: 991px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.75rem;
  margin-bottom: 1.875rem;
  @media (max-width: 991px) {
    font-size: 2.875rem;
    line-height: 1.1;
    margin-bottom: 1.25rem;
  }
`;

// Our Services

export const OurService = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const PostCard = styled.div`
  padding: 1.25rem;
  background-color: #fff;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.13);
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const PostCardThumb = styled.div`
  margin-bottom: 1.5rem;
  span {
    width: 100% !important;
    img {
      object-fit: cover;
    }
  }
`;

export const PostCardSummary = styled.div`
  padding: 0;
`;

export const PostCardTitle = styled.div`
  margin-bottom: 0.625rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  @media (max-width: 991px) {
    font-size: 1.25rem;
  }
`;

export const PostCardText = styled.div`
  margin-bottom: 0.625rem;
  font-size: 12px;
  font-weight: normal;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
  &.row-reverse {
    flex-direction: row-reverse;
  }
  &.horizontal {
    margin: 0 -1rem;
  }
  &.g-6 {
    margin: -0.375rem;
    .col {
      padding: 0.375rem;
    }
  }
  &.g-10 {
    margin: -0.375rem;
    .col {
      padding: 0.375rem;
    }
  }
  &.g-20 {
    margin: -0.625rem;
    .col {
      padding: 0.625rem;
    }
  }
`;

export const Column = styled.div`
    padding: 1rem;
    flex: 1 0 0%;
    &.column-7 {
        min-width: 65%;
        max-width: 65%;
        @media (max-width: 991px) {
            min-width: 100%;
            max-width: 100%;
        }
    }
    &.column-8 {
        min-width: 75%;
        max-width: 75%;
        @media (max-width: 991px) {
            min-width: 100%;
            max-width: 100%;
        }
    }
    &.column-4 {
        min-width: 25%;
        max-width: 25%;
        @media (max-width: 991px) {
            min-width: 100%;
            max-width: 100%;
        }
    }
    &.column-6 {
        min-width: 50%;
        max-width: 50%;
        @media (max-width: 991px) {
            min-width: 100%;
            max-width: 100%;
        }
    }
    &.column-3 {
        min-width: 33.33%;
        max-width: 33.33%;
        @media (max-width: 991px) {
            min-width: 100%;
            max-width: 100%;
        }
    }
    &.column-full {
        min-width: 100%;
        max-width: 100%;
        @media (max-width: 991px) {
            min-width: 100%;
            max-width: 100%;
        }
    @media (max-width: 991px) {
        min-width: 100% !important;
    }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #103741b2;
  color: #fff;
  button {
    border-color: #fff;
    background-color: transparent;
    &:hover {
      border-color: #bc70ad;
      background-color: #bc70ad;
      color: #fff;
    }
  }
`;

export const CardThumb = styled.div`
  height: 438px;
  display: block;
  position: relative;
  span {
    height: 100% !important;
  }
  &:before {
    content: '';
    background-color: #103741;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
  }
  img {
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 991px) {
    height: 350px;
  }
`;

export const CardBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.75rem;
  @media (max-width: 991px) {
    padding: 1.75rem;
  }
`;

export const CardImage = styled.img`
  width: auto;
`;

export const CardTitle = styled.h3`
  font-size: 1.875rem;
  margin-top: 1.375rem;
  margin-bottom: 1.375rem;
  @media (max-width: 991px) {
    font-size: 1.5rem;
  }
`;

// About

export const OurCompany = styled.section`
  background-color: #f9f6ef;
  padding-top: 6rem;
  padding-bottom: 7rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const OurCompanyThumb = styled.div``;

// Classes

export const Classes = styled.div`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const ImageContent = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #f9f6ef;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

// Benefits

export const Benefits = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

// Footer

export const SiteFooter = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #130429;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const FooterTitle = styled.h4`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const MediaObject = styled.div``;

export const MediaObjectItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const MediaObjectThumb = styled.div`
  width: 5rem;
  min-width: 5rem;
  height: 5rem;
  margin-right: 1.25rem;
  border-radius: 0.25rem;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

export const MediaObjectBody = styled.div``;

export const MediaObjectDate = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #a40a52;
  display: block;
  margin-bottom: 0.2rem;
`;

export const MediaObjectSpan = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: #74787c;
  display: block;
  margin-bottom: 0.1rem;
`;

export const MediaObjectTitle = styled.h4`
  color: #fff;
  font-size: 1rem;
  /* font-size: 14px; */
  font-weight: 450;
  line-height: 1.4;
`;

// Posts

export const InnerBanner = styled.section`
  background-color: #ffe6e1;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Post = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostThumb = styled.div`
  margin-bottom: 1.125rem;
  span {
    width: 100% !important;
    img {
      object-fit: cover;
    }
  }
`;

export const PostBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  color: #39364f;
`;

export const Top = styled.div`
  flex: 1;
`;

export const Bottom = styled.div`
  display: flex;
`;

export const PostDate = styled.div`
  font-size: 0.75rem;
  color: #74787c;
  svg {
    vertical-align: middle;
    margin-right: 0.5rem;
  }
`;

export const PostMedia = styled.div`
  display: flex;
  margin-left: auto;
  a {
    margin-left: 1rem;
  }
  svg {
    display: block;
  }
`;

export const SearchBar = styled.div`
  background-color: #e4ec8b;
  padding: 1.875rem;
  border-radius: 0.625rem;
  margin-bottom: 1.875rem;
  position: relative;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: #fff;
  border-radius: 0.625rem;
  height: 3.125rem;
  padding: 0.625rem 1.25rem 0.625rem 3rem;
  outline: none;
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 1.875rem;
  top: 1.875rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  width: 3.125rem;
  border: none;
  background-color: transparent !important;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png);
  padding: 0;
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 991px) {
    top: 1.25rem;
    left: 1.25rem;
  }
`;

export const WidgetPanel = styled.div`
  margin-bottom: 1.875rem;
  border-radius: 0.625rem;
  overflow: hidden;
  border: 1px solid #d9d9d9;
  h4 {
    color: #000000;
  }
`;

export const WidgetPanelTitle = styled.div`
  padding: 0.875rem 1.875rem;
  font-size: 1.375rem;
  font-weight: 600;
  background-color: #86a6b4;
  color: #ebebeb;
  @media (max-width: 991px) {
    padding: 0.75rem 1.25rem;
    font-size: 1.125rem;
  }
`;

export const WidgetPanelListing = styled.div`
  padding: 1.875rem;
  background-color: #f4f1f1;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const WidgetPanelLink = styled.div`
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  & > span {
    vertical-align: middle;
    margin-right: 10px !important;
  }
  img {
    display: inline;
    width: 20px;
    height: 20px;
    border-radius: 0;
  }
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const Blockquote = styled.blockquote`
  margin: 2rem 0;
  display: flex;
  &:before {
    content: '“';
    font-size: 14.5rem;
    height: 4rem;
    font-family: sans-serif;
    line-height: 0.8;
    margin-right: 1rem;
    @media (max-width: 991px) {
      font-size: 5rem;
      height: 1.5rem;
    }
  }
  p {
    font-style: italic;
    margin-bottom: 0;
  }
`;

export const BlockquoteName = styled.span`
  display: block;
  margin-top: 1rem;
  font-style: normal;
`;

export const FormWrap = styled(Form)``;

export const FlexGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const FormLabel = styled.label`
  line-height: 1.2;
  padding-left: 1.75rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid #e4dfdf;
    border-radius: 0.25rem;
  }
  &:after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    width: 0.625rem;
    height: 0.375rem;
    transform: rotate(-45deg);
    left: 0.25rem;
    top: 0.25rem;
  }
`;

// Listing

export const ListCard = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 0.625rem;
  padding: 2.25rem;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListIcon = styled.div`
  display: inline-flex;
  margin-top: -4.625rem;
  margin-bottom: 1.875rem;
  margin-left: auto;
  margin-right: auto;
  width: 4.625rem;
  height: 4.625rem;
  border-radius: 10rem;
  svg {
    display: block;
    margin: auto;
  }
`;

export const ListBody = styled.div``;

// Searice boxes

export const ServiceCard = styled.div``;

export const ServiceIcon = styled.div`
  display: inline-flex;
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  svg {
    margin-top: 1.75rem;
    margin-left: 1.25rem;
    margin-right: -1.25rem;
  }
`;

export const Widget = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  padding: 1.875rem;
  border-radius: 0.625rem;
  margin-bottom: 1.875rem;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
  background-color: #f9f9f9;
`;

export const WidgetTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
`;

export const WidgetHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1.875rem;
  h3 {
    margin-bottom: 0;
  }
`;

export const WidgetBody = styled.div``;

export const WidgetText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.02em;
  margin: 0;
  color: #74787c;
`;

export const WidgetHeaderLink = styled.a`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  transition: 0.2s;
`;

export const DropdownMenu = styled.ul`
  display: none;
  padding: 0.5rem 0;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 120px;
  &.opened {
    display: block;
  }
`;

export const DropdownMenuItem = styled.li`
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  transition: 0.2s;
  cursor: pointer;
  svg {
    vertical-align: -3px;
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: #e9e9e9;
    svg {
      fill: #bc70ad;
    }
  }
`;

export const FooterContact = styled.div`
  p {
    display: flex;
  }
  svg {
    min-width: 1.25rem;
    margin-top: 0.375rem;
  }
`;

export const Inbox = styled.div``;

export const InboxContent = styled.div`
  background-color: #1e0a3c;
  color: #fff;
  max-width: 30rem;
  border-radius: 0.75rem;
  margin: auto;
  padding: 3rem;
  text-align: center;
  svg {
    width: 3rem;
    height: 3rem;
    fill: #fff;
    position: relative;
    margin-bottom: 1rem;
  }
`;

export const InboxTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const InboxDes = styled.div`
  a {
    text-decoration: underline;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
  }
`;

export const AvatarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-top: 1rem;
  > div {
    font-size: inherit;
    &:before {
      content: '•';
      margin: 0 1rem;
    }
    &:first-child:before {
      display: none;
    }
  }
`;

export const AddressMap = styled.div`
  display: block;
  border-radius: 0.625rem;
  overflow: hidden;
  position: relative;
  margin-top: 3rem;
  div {
    color: white;
    font-size: 1rem;
  }
`;
export const Iframe = styled.iframe`
  width: 100%;
  border: none;
  border-radius: 0.625rem;
`;

export const AddressCard = styled.div`
  position: absolute;
  background: #bc70ade3;
  top: 30px;
  right: 30px;
  bottom: 30px;
  width: 310px;
  color: #fff;
  padding: 1.5rem;
  border-radius: 0.625rem;
  z-index: 2;
`;

// Payment Details

export const AlignCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentOuter = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const CardStyle = styled.div`
  padding: 1.875rem;
  box-shadow: 0 0 40px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
  border-radius: 1.25rem;
  margin-bottom: 1.875rem;
`;

export const PaymentInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const PaymentDetail = styled.div`
  margin-right: 5%;
  width: 47.5%;
  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const PaymentForm = styled.div`
  width: 47.5%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const H6 = styled.h6`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.625rem;
  color: inherit;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  opacity: 0.5;
`;

export const H3 = styled.h3`
  margin-bottom: 0.75rem;
  line-height: 1.6;
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 0.875rem;
  color: inherit;
  line-height: 1.6;
  opacity: 0.7;
`;

export const StepTabs = styled.div`
  display: flex;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

export const StepItem = styled.div`
  width: 25%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
  position: relative;
  h3 {
    margin-bottom: 0;
    @media (max-width: 767px) {
      display: none;
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 60%;
    height: 1px;
    background-color: #bc70ad;
    top: 1.125rem;
    left: 70%;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
`;

export const StepHead = styled.div`
  cursor: pointer;
  width: 2.25rem;
  height: 2.25rem;
  line-height: 2.25rem;
  text-align: center;
  border-radius: 100%;
  margin: 0 auto 1rem;
  background-color: #bc70ad;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 0 0px 6px rgb(188 112 173 / 20%);
  position: relative;
`;

export const LabelText = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
  label {
    color: red;
  }
`;

export const Input = styled.input`
  height: 46px;
  border-radius: 0.357rem;
`;

export const ContactSection = styled.section`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const AdvertiseSection = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const InputRadio = styled.input`
  display: none;
  & + label {
    &:before {
      border-radius: 100%;
    }
    &:after {
      display: none;
    }
  }
  &:checked {
    & + label {
      &:before {
        background-color: #fff;
        border-color: #bc70ad;
        border-width: 6px;
      }
    }
  }
`;

export const NewsletterBox = styled.div`
  display: flex;
  input {
    height: 52px;
  }
`;

export const Quote = styled.div`
  margin-bottom: 1rem;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: #fff;
  }
`;

export const SwitchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0.5rem 0;
  p {
    margin-bottom: 0;
    flex: 1 0 0;
    text-align: left;
    color: white;
  }
`;

export const Switch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 1rem;
  input {
    display: none;
    &:checked + label {
      &:before {
        -webkit-transform: translateX(14px);
        -ms-transform: translateX(14px);
        transform: translateX(14px);
      }
      &:after {
        background-color: #2196f3;
      }
    }
  }
  label {
    padding-left: 2.5rem;
    margin-bottom: 0;
    line-height: 20px;
    text-transform: none;
    letter-spacing: 0;
    color: #000;
    &:after {
      position: absolute;
      content: '';
      height: 20px;
      width: 34px;
      left: 0;
      bottom: 0;
      border-radius: 10rem;
      background-color: #7c7c7c;
      -webkit-transition: 0.4s;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    &:before {
      position: absolute;
      content: '';
      height: 14px;
      width: 14px;
      left: 3px;
      bottom: 3px;
      border-radius: 50%;
      z-index: 1;
      background-color: white;
      -webkit-transition: 0.4s;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Accordion = styled.div`
  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 30px;
  padding-bottom: 30px;
  .accordion-title {
    font-size: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 0;
    position: relative;
    &:after {
      content: '';
      float: right;
      border-right: 2px solid;
      border-bottom: 2px solid;
      width: 12px;
      height: 12px;
      transform: rotate(45deg);
      margin-right: 5px;
      margin-top: 2px;
    }
  }
  &.open {
    .accordion-title {
      &:after {
        transform: rotate(-135deg);
        margin-top: 8px;
      }
    }
    .accordion-body {
      padding-top: 20px;
      display: block;
    }
  }
`;

export const AdBlock = styled.div`
  background-color: #464646;
  display: inline-block;
  position: relative;
  top: 0;
`;

export const Question = styled.section`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  @media (max-width: 991px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .row {
      display: flex;
      flex-direction: column;
    }
    button {
      margin: 0 auto;
    }
    p {
      max-width: 100%;
    }
  }
  button {
    background: #0f021f;
    border-radius: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    font-family: 'Syne', sans-serif;
    max-width: 271px;
    width: 100%;
  }
`;

export const SerchBlocks = styled.div`
  margin-bottom: 50px;
`;

export const EditCommentInputModal = styled.div`
  border-radius: 20px;
  max-width: 967px;
  margin: 0 auto;
  textarea {
    &:focus {
      outline:none;
      box-shadow: none;
    }
  }
}
`;

export const DeleteCommentInputModal = styled.div`
  border-radius: 20px;
  max-width: 967px;
  margin: 0 auto;
  textarea {
    &:focus {
      outline:none;
      box-shadow: none;
    }
  }
}
`;

export const DeleteNotificationInputModal = styled.div`
  border-radius: 20px;
  max-width: 967px;
  margin: 0 auto;
  textarea {
    &:focus {
      outline:none;
      box-shadow: none;
    }
  }
}
`;
