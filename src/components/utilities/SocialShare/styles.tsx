import styled from "styled-components";

export const SocialDropDown = styled.div`
  position: relative;
  float: right;
  display: flex;
  align-items: center;
  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: .75rem;
    border-radius: 2rem;
    height: 2.75rem;
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
  padding:.75rem;
  &:hover {
    opacity: .5;
  }
  svg {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-right: 0;
  }
`;

export const SocialDropDownList = styled.ul`
margin:0;
padding:0;
display:flex;
`;

export const SocialShareWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 90px;
  margin-bottom: 50px;
  color: #39007e;
`;
