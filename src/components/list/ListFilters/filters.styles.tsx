import styled from 'styled-components';

export const EventTime = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  margin: 93px auto;
  max-width: 1024px;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    justify-content: flex-start;
  }
`;

export const LinkBlock = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #0f021f;
  padding: 2px 15px;

  &.active {
    background: rgba(57, 0, 126, 0.2);
    border-radius: 10px;
    min-width: 66px;
    text-align: center;
  }
  &.underline {
    color: #39007e;
    text-decoration: underline;
  }
  @media (max-width: 992px) {
    margin: 10px;
  }
`;


export const ActivityTime = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 93px auto;
  max-width: 1024px;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const ActivityLinkBlock = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #0f021f;
  padding: 2px 20px;
  margin-right: 20px;
  &:first-child {
    padding-left: 0;
  }
  &.active {
    background: rgba(57, 0, 126, 0.2);
    border-radius: 10px;
    min-width: 66px;
    text-align: center;
  }
  &.underline {
    color: #39007e;
    text-decoration: underline;
  }
  @media (max-width: 992px) {
    margin: 10px;
  }
`;