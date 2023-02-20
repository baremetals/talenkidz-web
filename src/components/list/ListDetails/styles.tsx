import styled from 'styled-components';

export const ActivitiesDetails = styled.div`
  margin: 70px auto;
  align-items: center;
  max-width: 1074px;
  .pageTitle {
    font-size: 48px;
    span {
      display: inline-block;
    }
    @media (max-width: 992px) {
      text-align: center;
    }
  }
  @media (max-width: 992px) {
    justify-content: flex-start;
  }
  .offerDay {
    display: flex;
    align-items: center;
  }
  .day {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 123.1%;
    letter-spacing: -0.01em;
    color: #39007e;
    margin-left: 90px;
  }
  .clockBlock {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 300px;
    .clocktext {
      text-align: left;
      display: flex;
      flex-direction: column;
      min-width: 260px;
    }
    .iconImg {
      margin-right: 20px;
    }
  }
  .mapBlock {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 300px;
    margin-top: 36px;
    .mapText {
      text-align: left;
      display: flex;
      flex-direction: column;
      max-width: 66%;
      min-width: 260px;
      @media (max-width: 992px) {
        max-width: 100%;
      }
    }
    .iconImg {
      margin-right: 20px;
      min-width: 50px;
    }
  }

  .addressBlock {
    display: flex;
    flex-direction: column;
    align-items: end;
    @media (max-width: 992px) {
      align-items: center;
    }
  }
  .durationBlock {
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: space-between;
    max-width: 600px;
    @media (max-width: 992px) {
      justify-content: center;
      flex-direction: column;
    }
    .duration {
      color: #0f021f;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    }
    .tagOnline {
      background: rgba(57, 0, 126, 0.2);
      border-radius: 20px;
      color: rgba(57, 0, 126, 0.59);
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 123.1%;
      text-align: center;
      padding-left: 15px;
      padding-right: 15px;
      min-width: 102px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 50px;
      @media (max-width: 992px) {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
  .coachSection {
    margin: 90px 0 75px;
    button {
      max-width: 275px;
    }
  }
`;
export const Visitor = styled.div``;
export const Visitors = styled.div`
  display: flex;
  align-items: center;
`;
export const Fee = styled.div`
  background: rgba(57, 0, 126, 0.2);
  border-radius: 20px;
  margin-left: 90px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  font-weight: 500;
  font-size: 14px;
  line-height: 123.1%;
  text-align: center;
  letter-spacing: -0.01em;
  color: rgba(57, 0, 126, 0.59);
  min-width: 72px;
  min-height: 40px;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
  margin-left: 90px;
`;

export const VisitorInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  label {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(15, 2, 31, 0.7);
    margin-left: 10px;
  }
`;
export const EventButton = styled.div`
  text-align: right;
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
  }
`;
export const ImageIcon = styled.div`
  .iconImg {
    maring-left: 10px;
  }
`;

export const SportCoach = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .coachSpe {
    display: flex;
    align-items: center;
    span {
      width: 27px !important;
      height: 27px !important;
      overflow: hidden !important;
      border-radius: 50px;
      margin-right: 10px !important;
    }
  }
  .comments {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 132.9%;
    text-align: center;
    color: #000000;
    span {
      margin-right: 10px !important;
    }
  }
  .star {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 132.9%;
    text-align: center;
    color: #000000;
    span {
      margin-right: 10px !important;
    }
  }
`;

export const AboutActivities = styled.div`
  margin: 70px auto;
  align-items: center;
  max-width: 1074px;
  h2 {
    color: #39007e;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.1%;
    margin-bottom: 44px;
  }
  h3 {
    margin-bottom: 30px;
  }
  p {
    color: #000000;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 138%;
    margin-bottom: 30px;
  }
  .infomationBlock {
    h3 {
      margin-bottom: 10px;
    }
    .column-8 {
      width: 75%;
      flex: auto;
      @media (max-width: 992px) {
        max-width: 100%;
        width: 100%;
      }
    }
    .column-4 {
      width: 25%;
      flex: auto;
    }
  }
`;

export const ActivitiesAction = styled.div`
  margin: 70px auto;
  align-items: center;
  max-width: 1074px;
`;
export const CommentBox = styled.div`
  margin-top: 90px;
  margin-bottom: 190px;
`;

export const ActivitiesList = styled.div`
  .Column-3 {
    max-width: 33.33%;
    width: 100%;
    flex: auto;
    @media (max-width: 992px) {
      max-width: 100%;
    }
  }
  .pageTitle {
    max-width: 1024px;
    margin: 0 auto 50px;
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
  .mb90 {
    margin-bottom: 90px;
  }
`;

export const CategoriesBlock = styled.div`
  margin-bottom: 93px;
`;

export const EventTime = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 93px auto;
  max-width: 1024px;
  flex-wrap: wrap;
`;

export const LinkBlock = styled.a`
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
