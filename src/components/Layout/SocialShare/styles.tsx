import styled from "styled-components";

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
      fill: #000;
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
