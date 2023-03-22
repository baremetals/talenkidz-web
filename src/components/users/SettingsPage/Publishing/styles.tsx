import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 50px;
  color: #0f021f;
  svg {
    color: #39007e;
  }
`;

export const SettingItem = styled.div`
  &.active {
    color: #39007e;
  }
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  h2 {
    font-weight: 500;
    font-size: 18px;
  }
  label {
    font-size: 12px;
    line-height: 14px;
    color: rgba(15, 2, 31, 0.6);
  }
  .link-block {
    cursor: pointer;
  }
`;
