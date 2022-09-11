import styled from 'styled-components';

export const Menu = styled.div`
  padding: 0.625rem 0;
  margin-bottom: 0.625rem;
`

export const Image = styled.img``

export const MenuLink = styled.a<{ isActive: boolean }>`
  margin-right: 15px;
  padding: 5px;
  display: inline-block;
  color: ${props => props.isActive ? '#BC70AD' : 'initial'};
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
    width: ${props => props.isActive ? 'calc(100% - 10px)' : '0'};;
    transition: 0.3s;
    height: 2px;
    background-color: #BC70AD;
    margin: 0 auto;
  }

  &:hover {
    color: #BC70AD;

    &::after {
      width: calc(100% - 10px);
    }
  }
`

export const TabContent = styled.div`
  margin: 1rem auto 0;
  max-width: 100%;
  width: 900px;
  max-width: 100%;
`

export const ProfilePicturePlaceHolder = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #989898;
  font-size: 0.875rem;
  color: #eaeaea;
`

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
`
export const ImageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`

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
    background-color: #BC70AD;
    border: 1px solid #BC70AD;

    svg {
      fill: #fff;
    }
  }
`

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
`

export const HeaderLine = styled.hr`
  color: white;
  background-color: #ccc;
  height: 1px;
  border: none;
`

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
`

export const InnerSidebar = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

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
      color: #BC70AD;
      background-color: #eee;
    }
  }
`

export const FormItem = styled.div`
  flex: 1 0 0%;
`

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 575px) {
    flex-direction: column;
    gap: 0;
  }
`

export const SubmitButton = styled.button`
  transition: 0.3s;
  padding: 0.75rem 2.1875rem;
`

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
  }
`

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
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  z-index: 1;
  pointer-events: auto;
  user-select: none;
  background-color: #fff;
  line-height: 1.2;
`

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
`

export const NoCoverPictureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`

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
    color: #BC70AD;
  }
`

export const EditButton = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
