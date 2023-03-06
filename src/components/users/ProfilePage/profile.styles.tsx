import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

export const Dashboard = styled.div``;

export const ProfileTabs = styled.div`
  .tabs-component {
    div.tabsBlock {
      border: none;
      button {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #0f021f;
        background: transparent;
        border-radius: 10px;
        border: none;
        margin-right: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {
          background: rgba(57, 0, 126, 0.2);
        }
        svg {
          width: 14px;
          height: 14px;
          margin-left: 10px;
          path {
            fill: #0f021f !important;
            transition: all 0.2s ease-in-out;
          }
        }
      }
    }
  }
`;

export const TabsBlock = styled.div`
  .tabs-component {
    div.tabsBlock {
      border-bottom: none;
      justify-content: space-between;
      button {
        min-width: calc(50% - 10px);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        padding: 10px 0;
        color: #0f021f;
        font-weight: 600;
        font-size: 20px;
        min-height: 53px;
        border: none;
        background: #fff;
        margin-right: 0;
        &.active {
          background: #d3c7e0;
          color: #0f021f;
        }
      }
    }
  }
`;

export const PageSpacer = styled.div`
  margin-top: 60px;
`;

export const ProfileCoverImage = styled.img`
  border-radius: 20px;
  height: 18.75rem;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

export const UserProfileImage = styled.img`
  border: 4px solid #ffffff;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center center;
  margin-right: 2.1875rem;
  margin-top: -6rem;

  @media (min-width: 991px) {
    margin-left: 0.625rem;
  }

  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const EditIconButton = styled.label`
  background: #39007e;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  svg {
    width: 14px;
    height: 14px;
    path {
      fill: #fff;
    }
  }
  .inputTag {
    display: none;
  }
`;

export const ProfileInfo = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  position: relative;
  margin-bottom: 2.5rem;
  margin-top: -8rem;
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  box-shadow: 0 4px 10px rgb(0 0 0 / 8%);
  padding: 1.875rem 2.5rem;

  @media (max-width: 991px) {
    padding: 1.25rem;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const ProfileActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 991px) {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const ProfileBasicInfo = styled.div`
  flex: 1;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
  margin-bottom: 0.125rem;
`;

export const Username = styled.div`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;
`;

export const UserDescription = styled.div``;

export const ProfileButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 20px;
  span {
    width: 49px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    border: 1px solid #ffb800;
    background: #f1faff;
    border-radius: 10px;
  }
  svg {
    cursor: pointer;
  }
`;

export const FollowButton = styled.button`
  background-color: #bc70ad;
  color: #fff;
  font-size: 1rem;
  border: 0.0625rem solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0.9375rem 1.9531rem;
  gap: 0.625rem;
  border-radius: 6.25rem;
  line-height: 1;
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  @media (max-width: 991px) {
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  }
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export const SendButton = styled(FollowButton)`
  color: #000;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: transparent;
    color: #000;
    opacity: 0.6;
  }
`;

export const ActiveUsers = styled.div`
  display: flex;
  justify-content: end;
  img {
    width: 3.125rem;
    height: 3.125rem;
    border: 3px solid #fff;
    border-radius: 100%;
    margin-left: -1rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    object-fit: cover;
    object-position: center center;
  }
`;

export const Image = styled.img``;

export const ActiveUsersCounter = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #fff;
  border-radius: 100%;
  background-color: rgba(16, 55, 65, 0.7);
  margin-left: -1rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  color: #fff;
  letter-spacing: 0.02em;
  line-height: 1;
  font-weight: 600;
`;

export const ProfileContent = styled.div`
  display: none;
`;

export const ShareContainer = styled.div`
  box-shadow: 0 0 10px rgb(0 0 0 / 8%);
  border-radius: 0.375rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;
`;

export const ShareWrapper = styled.div`
  padding: 0;
`;

export const ShareTop = styled.div`
  display: flex;
  padding: 1.5625rem 1.875rem;
  align-items: flex-start;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const ProfileImage = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 10rem;
  object-fit: cover;
  margin-right: 1.375rem;

  @media (max-width: 991px) {
    width: 2.25rem;
    height: 2.25rem;
    margin-right: 0.5rem;
  }
`;

export const InputLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Input = styled.input`
  border: none;
  flex: auto;
  background-color: transparent;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled(TextareaAutosize)`
  border: none;
  flex: auto;
  background-color: transparent;
  padding: 0.5rem;
  resize: none;
  align-self: center;
  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const Body = styled.select`
  border: none;
  width: 80%;
  &:focus {
    outline: none;
  }
`;

export const SelectOptions = styled.option`
  border: none;
  width: 80%;
  &:focus {
    outline: none;
  }
`;

export const ShareHr = styled.hr`
  margin: 0;
  opacity: 0.2;
`;

export const ShareBottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.875rem;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const ShareOptions = styled.div`
  display: flex;
  transition: 0.2s;
  &:hover {
    opacity: 0.6;
  }
`;

export const ShareOptionItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ShareOptionsIcon = styled.label`
  font-size: 1rem;
  margin-right: 0.75rem;
  @media (max-width: 991px) {
    font-size: 0.75rem;
    margin-right: 0.25rem;
  }
  svg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    @media (max-width: 991px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const ShareOptionstext = styled.span`
  font-size: 1rem;
  @media (max-width: 991px) {
    font-size: 0.75rem;
  }
`;

export const ShareButton = styled.button`
  border: none;
  background-color: #bc70ad;
  color: white;
  font-weight: 500;
  border-radius: 10rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.375rem 2rem;
  line-height: 1.5;
  transition: 0.2s;
  @media (max-width: 991px) {
    font-size: 0.75rem;
    padding: 0.25rem 1rem;
  }
`;

export const ViewMore = styled.button`
  background-color: transparent;
  color: #7755e2;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  padding: 0;
  border: none;
  cursor: pointer;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 600;
`;

export const PostDropdown = styled.div`
  position: relative;
  .DropDownIcon {
    cursor: pointer;
    svg {
      transition: 0.2s;
      display: block;
    }
    &:hover svg {
      fill: #bc70ad;
    }
  }
`;

export const LikeGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const PostLeftWrap = styled.div`
  display: flex;
  align-items: flex-end;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 10rem;
    margin-right: 1rem;
  }
`;

export const PostDate = styled.span`
  font-size: 0.8125rem;
  line-height: 1;
  letter-spacing: 0.025em;
  color: #66676b;
`;

export const PostTopRightWrap = styled.div``;

export const PostCenterWrap = styled.div`
  button {
    display: block;
    border: none;
    background-color: #04aa6d;
    border-radius: 5px;
    padding: 0.875px 1.75px;
    font-size: 10px;
    cursor: pointer;
    text-align: center;
  }
`;

export const PostMedia = styled.div`
  width: calc(100% + 60px);
  margin: 0 -30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const PostTextWrapper = styled.div`
  font-size: 0.875rem;
  line-height: 1.3125rem;
  margin-bottom: 2.25rem;
`;

export const PostMediaImage = styled.img`
  margin-top: 1rem;
  width: 100%;
  max-height: 31.25rem;
  object-fit: contain;
  display: block;
`;

export const PostMediaVideo = styled.video`
  margin-top: 1rem;
  width: 100%;
  max-height: 31.25rem;
  object-fit: contain;
  display: block;
`;

export const PostBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.875rem;
`;

export const BottomLeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeCounter = styled.span`
  margin-left: 0.5rem;
`;

export const ViewCounter = styled.span``;

export const BottomRightWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const PhotoGallery = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8125rem;
  img {
    border-radius: 0.625rem;
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    object-position: center center;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const VideoGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    object-position: center center;
    border-radius: 0.625rem;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 991px) {
      width: calc(50% - 1.5rem);
      flex: 1;
    }
  }

  @media (max-width: 991px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const PostStatsWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: 15px;
    line-height: 22px;
    color: #66676b;
    cursor: pointer;
    transition: 0.2s;

    @media (max-width: 991px) {
      font-size: 0.875rem;
    }

    &:hover {
      color: #333;
    }
  }
`;

export const PostStatsReactions = styled.div`
  display: flex;
  align-items: center;
`;

export const PostStatsCommentsShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  button {
    display: block;
    border: none;
    background-color: #04aa6d;
    border-radius: 5px;
    padding: 0.875px 1.75px;
    font-size: 10px;
    cursor: pointer;
    text-align: center;
  }
`;

export const PostActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 1.25rem;
  border-top: 0.0625rem solid #cfd0d4;
  margin-top: 1.25rem;
`;

export const PostAction = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  color: #66676b;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  transition: 0.2s;
  cursor: pointer;
  flex: 1;
  position: relative;

  & > div {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 100%;
  }

  @media (max-width: 991px) {
    font-size: 0.875rem;
  }

  svg {
    @media (max-width: 991px) {
      width: 1rem;
    }
  }

  &:hover {
    color: #bc70ad;

    svg {
      path {
        stroke: #bc70ad;
      }
    }
  }
`;

export const GivenReactionsWrapper = styled.div`
  margin-right: 0.9375rem;
  display: flex;
`;

export const AccountStatus = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    color: #39007e;
    margin-right: 30px;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    color: rgba(57, 0, 126, 0.65);
    text-decoration: underline;
  }
`;

export const Followers = styled.div`
  font-family: 'Syne';
  font-weight: 500;
  font-size: 14px;
  color: #39007e;
  margin-bottom: 20px;

  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const EditProfileButton = styled.button`
  outline: none;
  border: 1px solid #39007e;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #0f021f;
  height: 30px;
  width: 124px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: white;
    color: #0f021f;
  }
`;

export const BellWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 0;
    bottom: 3px;
    width: 11px;
    height: 11px;
    background: #39007e;
    font-weight: 700;
    font-size: 7px;
    line-height: 8px;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
  }
`;

export const ProfileCoverWrapper = styled.div`
  position: relative;
  .actions {
    position: absolute;
    top: 30px;
    right: 45px;
  }
  @media (max-width: 991px) {
    margin-top: 130px;
  }
`;

export const EditCoverButton = styled.label`
  outline: none;
  height: 23px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #39007e;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding-right: 26px;
  cursor: pointer;
  &:hover {
    color: #39007e;
    background: #ffffff;
  }

  span {
    position: absolute;
    top: -8px;
    right: -20px;
    width: 40px;
    height: 40px;
    background: #39007e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      width: 30px;
      height: 30px;
      top: -3px;
      right: -9px;
    }
  }
  .inputTag {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  margin: 90px 0;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ProfileTimeline = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.8;
  margin-right: 40px;
`;

export const ProfileSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const ProfileMenus = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 40px;
`;

export const ProfileMenu = styled.button`
  outline: none;
  min-width: 123px;
  height: 28px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #0f021f;
  display: flex;
  align-items: center;
  background: #f4f4f4;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    background: rgba(57, 0, 126, 0.2);
  }

  svg path {
    fill: #0f021f !important;
    transition: all 0.2s ease-in-out;
  }

  &:hover svg path {
    fill: white !important;
  }

  svg {
    width: 14px !important;
    height: 14px !important;
    margin-left: 10px;
  }

  &.active {
    background: rgba(57, 0, 126, 0.2);
  }
`;

export const NoteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  .primary {
    min-height: 43px;
    border: 2px solid #39007e;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #0f021f;
    width: 100%;

    span {
      font-weight: 700;
      color: #39007e;
    }
  }

  .secondary {
    min-height: 43px;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    max-width: 195px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #39007e;
    text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

export const PremiumMember = styled.div`
  min-height: 107px;
  background: #39007e;
  border-radius: 10px;
  padding: 28px;

  p {
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 5px;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    text-decoration: underline;
  }
`;

export const EditorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  height: 43px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  .primary {
    display: flex;
    align-items: center;
    flex: 1;

    svg {
      margin: 15px;
    }

    svg path {
      fill: rgba(57, 0, 126, 0.59) !important;
    }

    input {
      padding: 0 18px 0 10px;
      border: 0;
      font-family: 'Syne';
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: rgba(57, 0, 126, 0.59);
      border-radius: 0;
      width: 100%;
      display: flex;

      ::placeholder {
        font-family: 'Syne';
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: rgba(57, 0, 126, 0.59);
      }
    }
  }
`;

export const SendArticleButton = styled.button`
  outline: none;
  background: #39007e;
  height: 43px;
  width: 59px;
  border-top-left-radius: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 23px;
  padding: 10px;

  &:hover {
    background: #39007e;
  }
`;
export const BellWrapperCard = styled.div`
  position: relative;
  width: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BellDropdown = styled.div`
  position: absolute;
  top: 60px;
  min-width: 387px;
  width: 100%;
  right: -40px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 0.5rem 0;
  list-style: none;
  margin-top: 1.5rem;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.625rem;
  z-index: 10;
  display: none;
  padding: 15px;
  &.opened {
    display: block;
  }
  @media (max-width: 991px) {
    right: -40px;
    min-width: 300px;
  }
`;

export const NotificationWrapper = styled.div`
  background: #e5d7f5;
  border-radius: 10px;
  min-height: 72px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const User = styled.div`
  width: 38px;
  height: 38px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50px;
  display: flex;
  align-items: center;
  min-width: 38px;
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UserName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  color: #0f021f;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-style: normal;
    font-weight: 500;
    width: auto;
    height: auto;
    font-size: 10px;
    line-height: 79.5%;
    color: #766b83;
  }
`;

export const UserDec = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 79.5%;
  color: #574e62;
  span {
    font-weight: 700;
    width: auto;
    height: auto;
    display: contents;
  }
`;

export const ActivityNowWrapper = styled.div`
  text-align: center;
  margin-top: 70px;
  button {
    background: #0f021f;
    border: 1px solid #0f021f;
    border-radius: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
  }
`;

export const ActivityHeader = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #0f021f;
  margin-bottom: 20px;
`;

export const ActivityDec = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 129.5%;
  text-align: center;
  color: #373737;
  margin-bottom: 30px;
`;

export const CommentBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 90px auto auto;
  width: calc(100% - 160px);
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #0f021f;
    margin-bottom: 50px;
  }
`;

export const BookmarkWrapper = styled.div`
  position: relative;
  width: 49px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookmarkDropdown = styled.ul`
  position: absolute;
  top: 80px;
  min-width: 298px;
  width: 100%;
  right: -110px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 0.5rem 0;
  list-style: none;
  margin-top: 1.5rem;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.625rem;
  z-index: 10;
  display: none;
  padding: 20px;
  &.opened {
    display: block;
  }
  @media (max-width: 991px) {
    right: -40px;
    min-width: 300px;
  }
`;

export const BookmarkListWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BookmarkList = styled.ul`
  max-width: 298px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 0.5rem 0;
  list-style: none;
  margin-top: 0;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.625rem;
  z-index: 0;
  padding: 20px;
  &.opened {
    display: block;
  }
  @media (max-width: 991px) {
    margin: 0 auto 40px;
  }
`;

export const BoomarkItem = styled.li`
  margin-bottom: 10px;
  &:hover {
    span {
      color: #373737;
      background: #d3c7e0;
    }
  }
  &.active {
    border: none;
    span{
      color: #373737;
      background: #d3c7e0;
    }
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 129.5%;
    border-radius: 10px;
    min-height: 53px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
`;

export const PaymentStatusCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 50px;
  text-align: center;
  max-width: 469px;
  margin: 0 auto;
  .PaymentStatus {
    label {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 129.5%;
      text-align: center;
      color: #595959;
      margin-bottom: 20px;
      display: block;
    }
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 43px;
      text-align: center;
      color: #0f021f;
      margin-bottom: 20px;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 129.5%;
      text-align: center;
      text-transform: capitalize;
      color: #272727;
      margin-bottom: 20px;
      span {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 129.5%;
        text-align: center;
        color: #39007e;
      }
    }
    Button {
      background: #39007e;
      border-radius: 20px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

export const PaymentStatusWrapper = styled.div`
    max-width: calc(100% - 140px);
    margin: 90px auto 0 auto;
    @media (max-width: 991px) {
        max-width: calc(100% - 20px);
       margin: 60px auto 0 auto;
    }
}`;

export const UserProfileImageBlock = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-top: -6rem;
  margin-right: 2.1875rem;
  display: flex;
  justify-content: center;
  img {
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
  }
  &.premiumStatus {
    .premium-tag {
      display: flex;
      right: 12px;
      bottom: 12px;
    }
    img {
      border: 5px solid #ffb800;
    }
  }
`;

export const Premium = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50px;
  background: #ffb800;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;
`;

export const BookmarkBlock = styled.div`
  margin: 90px auto auto;
  width: calc(100% - 160px);
  margin-top: 80px;
  @media (max-width: 991px) {
    width: calc(100% - 10px);
  }
  .activityBlock {
    display: flex;
    justify-content: center;
    button {
      background: #0f021f;
      border-radius: 15px;
      max-width: 310.94px;
      width: 100%;
    }
  }
  .row {
    @media (max-width: 991px) {
      min-width: 100%;
      flex-direction: column-reverse;
    }
  }
  .BreadcrumbsBookmark {
    display: flex;
    align-items: center;
    margin-bottom: 47px;
    .cricle {
      width: 10px;
      height: 10px;
      margin: 0 20px;
      background: rgba(57, 0, 126, 0.2);
      display: inherit;
      border-radius: 50px;
    }
    .category {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #574e62;
    }
  }
  .column-7 {
    min-width: 71%;
    max-width: 71%;
    @media (max-width: 991px) {
      min-width: 100%;
      max-width: 100%;
    }
  }
  .ArticleRow {
    .kidsRow {
      margin-bottom: 44px;
      max-width: 681px;
    }
  }
`;
