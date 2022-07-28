import styled from 'styled-components';

export const Menu = styled.div`
  margin: 0.625rem 0 1.25rem;
`

export const MenuLink = styled.a<{ isActive: boolean }>`
  margin-right: 10px;
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
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
