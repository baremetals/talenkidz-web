import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  span {
    font-family: 'Syne', sans-serif !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.7);
  }
`;

export const Switch = styled.div`
  position: relative;
  width: 49px;
  height: 25px;
  background: gray;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    top: 50.5%;
    left: 5px;
    background: white;
    transform: translate(22px, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: rgba(57, 0, 126, 0.2);

    &:before {
      transform: translate(0, -50%);
      background: #39007e;
    }
  }
`;
