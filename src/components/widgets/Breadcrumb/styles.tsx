import styled from "styled-components";

export const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  margin-left:60px;
  & > li:after {
    content: "";
    width: 10px;
    height: 10px;
    margin: 0 20px;
    background: rgba(57, 0, 126, 0.2);
    display: inherit;
    border-radius: 50px;
  }
`;

export const Crumb = styled.li`
  display: inline-block;
  &:last-of-type:after {
    content: "";
    padding: 0;
     display: none;
  }

  a {
      color: #0F021F;
      text-decoration: none;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`;
