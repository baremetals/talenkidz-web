import styled from "styled-components";

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
