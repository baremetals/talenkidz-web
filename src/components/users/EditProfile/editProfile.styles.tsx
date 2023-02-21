import styled from 'styled-components';

export const Menu = styled.div`
  padding: 0.625rem 0;
  margin-bottom: 0.625rem;
`;

export const Image = styled.img``;

export const MenuLink = styled.a<{ isActive: boolean }>`
  margin-right: 15px;
  padding: 5px;
  display: inline-block;
  color: ${(props) => (props.isActive ? '#BC70AD' : 'initial')};
  transition: 0.3s color;
  cursor: pointer;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 5px;
    display: block;
    width: ${(props) => (props.isActive ? 'calc(100% - 10px)' : '0')};
    transition: 0.3s;
    height: 2px;
    background-color: #bc70ad;
    margin: 0 auto;
  }

  &:hover {
    color: #bc70ad;

    &::after {
      width: calc(100% - 10px);
    }
  }
`;

export const TabContent = styled.div`
  margin: 1rem auto 0;
  max-width: 100%;
  width: 900px;
  max-width: 100%;
`;

export const ProfilePicturePlaceHolder = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #989898;
  font-size: 0.875rem;
  color: #eaeaea;
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;

  img {
    width: 12.5rem;
    height: 12.5rem;
    object-fit: cover;
    object-position: center center;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0);
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    .overlay {
      opacity: 0.6;
    }
  }
`;
export const ImageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const ActionButton = styled.div`
  line-height: 1;
  border: 1px solid #bbb;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  svg {
    transition: 0.3s;
    fill: #7e7e7e;
    width: 14px;
    height: 14px;
  }

  &:hover {
    background-color: #bc70ad;
    border: 1px solid #bc70ad;

    svg {
      fill: #fff;
    }
  }
`;

export const EditProfileTab = styled.div`
  h3 {
    font-weight: 400;
    font-size: 1.125rem;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 991px) {
    margin-top: 1rem;

    h3 {
      text-align: center;
    }
  }
`;

export const HeaderLine = styled.hr`
  color: white;
  background-color: #ccc;
  height: 1px;
  border: none;
`;

export const PersonalInformationForm = styled.form`
  margin-top: 2rem;

  .MuiFormControl-root {
    margin-bottom: 1.5rem;
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    width: 100%;
    padding: 0.625rem 0.875rem;

    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 0;
    }
  }

  input {
    padding: 10px 14px;

    &:focus {
      box-shadow: none;
    }
  }
`;

export const InnerSidebar = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Navigation = styled.div`
  width: 100%;
  border: 1px solid rgb(188 112 173 / 40%);
  border: 1px solid #ccc;
  border-radius: 0 0 4px 4px;

  button {
    opacity: 0.8;
    transition: 0.3s;

    &:hover {
      background-color: rgb(188 112 173 / 25%);
      color: #333;
    }

    &:last-child {
      border-radius: 0 0 3px 3px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }

    &.Mui-selected {
      color: #bc70ad;
      background-color: #eee;
    }
  }
`;

export const FormItem = styled.div`
  flex: 1 0 0%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 575px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const SubmitButton = styled.button`
  transition: 0.3s;
  padding: 0.75rem 2.1875rem;
`;

export const CoverPictureUploaderWrapper = styled.div`
  padding: 1rem 0.875rem 0.625rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  position: relative;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position: top center;

    &.contain {
      object-fit: contain;
      object-position: center center;
    }
  }
`;

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.00938em;
  padding: 0 7px;
  position: relative;
  display: block;
  transform-origin: top left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(133% - 24px);
  position: absolute;
  top: 0;
  left: -5px;
  transform: translate(14px, -9px) scale(0.75);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 1;
  pointer-events: auto;
  user-select: none;
  background-color: #fff;
  line-height: 1.2;
`;

export const CoverPictureWrapper = styled.div`
  position: relative;
  display: flex;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0);
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    .overlay {
      opacity: 0.6;
    }
  }
`;

export const NoCoverPictureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const SelectCoverPictureButton = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s;

  svg {
    font-size: 4rem;
  }

  &:hover {
    color: #bc70ad;
  }
`;

export const EditButton = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// Modal

export const ProfileInformationWrapper = styled.form`
  @media (max-width: 991px) {
    font-size: 22px;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #0f021f;
    margin-bottom: 50px;
  }
  .input-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 11px;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 0;
    }
  }
  .form-group {
    margin-bottom: 50px;
    label {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: #373737;
    }
  }
`;

export const ProfileInfo = styled.div`
  @media (max-width: 991px) {
    padding: 0px !important;
  }
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  margin-bottom: 50px;
  display: flex;
  align-items: center;

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

export const UserProfileImage = styled.img`
  border: 5px solid #ffffff;
  border-radius: 50%;
  width: 153px;
  height: 153px;
  object-fit: cover;
  object-position: center center;
  margin-right: 2.1875rem;
  @media (min-width: 991px) {
    margin-left: 0;
  }

  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

export const UserProfileWapper = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 20px !important;
  }
  width: 153px;
  height: 153px;
  min-width: 153px;
  position: relative;
  &.premium {
    img {
      border: 5px solid #ffb800;
    }
    .premium-tag {
      display: flex;
    }
  }
  .EditButton {
    background: #39007e;
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

export const UserDescription = styled.div`
  @media (max-width: 991px) {
    margin-left: 0px !important;
  }
  margin-left: 30px;
  display: flex;
  align-items: flex-start;
  .user-description {
    max-width: 258px;
    h2 {
      margin-bottom: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: #373737;
    }
    p {
      margin-bottom: 0;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 129.5%;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .user-tag {
    margin-left: 59px;
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 129.5%;
      color: #39007e;
    }
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #000000;
  border-left: none;
  border-radius: 0;
  border-top: none;
  border-right: none;
  padding-left: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #0f021f;
`;

export const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  .action {
    @media (max-width: 991px) {
      text-align: center;
      margin-top: 15px;
    }
    Button {
      margin-left: 30px;
      @media (max-width: 991px) {
        margin-left: 0;
        margin: 15px 0;
      }
      &.CancelButton {
        border: 1px solid #39007e;
        border-radius: 20px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #39007e;
        min-height: 51px;
        min-width: 159px;
        &:hover {
          color: #fff;
        }
      }
      &.SaveButton {
        background: #39007e;
        border-radius: 20px;
        min-height: 51px;
        min-width: 159px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #ffffff;
      }
    }
  }
`;

export const LinkAction = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 129.5%;
  color: #39007e;
  text-decoration: underline;
  cursor: pointer;
`;
