import styled from "styled-components";

export const SiteHeader = styled.header`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  z-index: 100;
  @media (max-width: 991px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
  }
`;

export const PageContainer = styled.h1``;

export const ProfileSetting = styled.div`
  position: relative;
  @media (max-width: 991px) {
    margin: 1rem 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 4rem;
  border: 1px solid #cacaca;
  object-fit: cover;
  cursor: pointer;
  display: block;
  overflow: hidden;
  @media (max-width: 991px) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
  }
`;

export const ProfileDropdown = styled.ul`
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
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 0.75rem;
    position: initial;
    text-align: center;
  }
`;

export const ProfileItem = styled.li`
  a {
    text-decoration: none;
    font-size: 1.125rem;
    color: #000;
    font-weight: 500;
    display: block;
    cursor: pointer;
    padding: 0.625rem 1.5rem;
    &:hover {
      background-color: rgb(237 237 237 / 50%);
    }
    @media (max-width: 991px) {
      font-size: 0.875rem;
      padding: 0.5rem 1.25rem;
    }
  }
`;

export const NavBarHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarCollapse = styled.div`
  max-width: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 991px) {
    margin-top: 60px;
    position: fixed;
    background-color: #fff;
    top: 0;
    bottom: 0;
    width: 20rem;
    right: 0;
    box-shadow: 0 0.25rem 0.625rem rgb(0 0 0 / 8%);
    transition: transform 0.25s ease;
    transform: translateX(100%);
  }
  &.opened {
    @media (max-width: 991px) {
      transform: none;
    }
  }
`;

export const NavBarNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: 992px) {
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    height: 100%;
    overflow: auto;
  }
`;

export const NavBarItem = styled.div`
  margin-right: 2rem;
  a {
    display: block;
    font-weight: 600;
    font-size: 18px;
    color: #0f021f;
    @media (max-width: 991px) {
      padding: 0.75rem 1.375rem;
    }
  }
  &:last-child {
    margin-right: 0;
  }
  &.Mobilesignup {
    button {
      background: #0f021f;
      color: #fff;
      padding: 19px 1.375rem;
      min-width: 210px;
      width: 100%;
      border-radius: 20px;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      &:hover {
        background: #0f021f;
        color: #fff;
      }
      @media (max-width: 990px) {
        padding: 19px 10px;
        min-width: max-content;
      }
      @media (min-width: 991px) {
        display: none;
      }
    }
  }
  &.signup {
    /* list-style: none; */
    button {
      background: #0f021f;
      color: #fff;
      padding: 19px 1.375rem;
      min-width: 210px;
      width: 100%;
      border-radius: 20px;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      &:hover {
        background: #0f021f;
        color: #fff;
      }
      @media (max-width: 991px) {
        border-radius: 0;
        padding: 0.75rem 1.375rem;
      }
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  @media (max-width: 991px) {
    margin-right: 0;
    width: 100%;
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

export const ToggleBar = styled.button`
  @media (min-width: 992px) {
    display: none;
  }
  width: 1.75rem;
  max-width: 1.75rem;
  padding: 0;
  border: none;
  background-color: transparent;
  display: block;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: transparent;
  }
  span {
    display: block;
    border-radius: 0.25rem;
    height: 4px;
    background-color: #bc70ad;
    margin: 0.25rem 0;
  }
`;

export const LogoBlock = styled.div`
  max-width: 25%;
`;