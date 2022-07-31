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
`

export const ImageWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 12.5rem;
    height: 12.5rem;
    object-fit: cover;
    object-position: center center;
  }
`
export const ImageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ActionButton = styled.div`
  line-height: 1;
  border: 1px solid #bbb;
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  svg {
    transition: 0.3s;
    fill: #7e7e7e;
  }

  &:hover {
    background-color: #BC70AD;
    border: 1px solid #BC70AD;

    svg {
      fill: #fff;
    }
  }
`

export const PersonalInformation = styled.div`

  h3 {
    font-weight: 400;
    font-size: 1.125rem;
    color: #333;
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

  input {
    padding: 10px 14px;

    &:focus {
      box-shadow: none;
    }
  }
`