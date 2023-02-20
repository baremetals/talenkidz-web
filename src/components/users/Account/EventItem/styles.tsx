import styled from 'styled-components';

export const EventItemBlock = styled.div`
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 14px 16px;
  margin-bottom: 15px;
  height: 100%;
`;
export const EventItemImg = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  img {
    height: auto !important;
    min-height: fit-content !important;
    max-height: inherit !important;
  }
`;

export const EventInfo = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  h2 {
    color: #39007e;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 110.1%;
    margin-bottom: 15px;
  }
`;

export const TimeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    color: #cc0000;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  span {
    background: rgba(57, 0, 126, 0.2);
    border-radius: 20px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    font-weight: 500;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 123.1%;
    text-align: center;
    letter-spacing: -0.01em;
    color: rgba(57, 0, 126, 0.59);
    min-width: 72px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
  }
`;

export const CourseItem = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.7);
    &.dot {
      width: 10px;
      height: 10px;
      background: rgba(57, 0, 126, 0.2);
      margin-left: 15px;
      margin-right: 15px;
      border-radius: 50px;
    }
  }
`;
export const Visitor = styled.div``;

export const Visitors = styled.div`
  display: flex;
  align-items: center;
`;
export const EditButton = styled.a`
  border: 1px solid #39007e;
  border-radius: 10px;
  display: flex;
  background-color: transparent;
  align-items: center;
  padding: 8px 20px;
  color: #0f021f;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
  &:hover {
    color: #0f021f;
  }
  svg {
    width: 12px;
    height: 12px;
    margin-left: 8px;
    path {
      fill: #0f021f !important;
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover svg path {
    fill: #0f021f !important;
  }
`;

export const VisitorInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(15, 2, 31, 0.7);
    margin-left: 10px;
  }
`;

export const EventTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 93px auto;
  max-width: 1024px;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    justify-content: flex-start;
  }
`;

export const LinkBlock = styled.a`
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
export const CategoriesBlock = styled.div`
  margin-bottom: 93px;
`;

export const EventList = styled.div`
  .pageTitle {
    max-width: 1024px;
    margin: 0 auto 50px;
  }
  &.thisWeek {
    margin-top: 90px;
    margin-bottom: 90px;
  }
  .buttonRow {
    text-align: center;
    margin-top: 54px;
    Button {
      background: #0f021f !important;
      border: 1px solid #0f021f !important;
      border-radius: 15px !important;
      max-width: 310.94px;
      width: 100%;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 123.1%;
      color: #ffffff;
    }
  }
`;

export const SeeMore = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #0f021f;
  border-bottom: 1px solid #000000;
`;