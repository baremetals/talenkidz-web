import styled from 'styled-components';

export const UnlimitedAccess = styled.div`
  background: #0f021f;
  border: 1px solid #0f021f;
  border-radius: 20px;
  padding: 15px 10px;
  min-height: 42px;
  height: auto;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
`;

export const EventWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    font-weight: 500;
    font-size: 20px;
    color: #373737;
    margin: 0;
  }

  .event-calendar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .event-calendar-day {
    width: 25px;
    height: 25px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.11);
    border-radius: 7px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin-right: 10px;

    &.status-1 {
      background: #c7daf5;
      color: #000000;
    }

    &.status-2 {
      background: #ffffff;
      color: #63cdff;
    }
  }

  .event-calendar-label {
    font-weight: 500;
    font-size: 10px;
    line-height: 9px;
    text-transform: lowercase;
    color: #373737;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    color: rgba(57, 0, 126, 0.65);
    text-decoration: underline;
  }
`;

export const Calendarwrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  Button {
    background: linear-gradient(271.03deg, #d0e4ff 0.52%, #cacafd 104.32%);
    border-radius: 15px;
    width: 38px;
    height: 38px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Month = styled.label`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const CalendarDays = styled.div`
  margin-top: 30px;
  table {
    width: 100%;
    tr {
      margin-bottom: 20px;
      &:last-child {
        span {
          margin-bottom: 0;
          display: block;
        }
      }
      td {
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
        width: 40px;
        min-height: 22px;
        &.not-current {
          color: rgba(0, 0, 0, 0.3);
        }
        &.today {
          color: #63cdff;
        }
        &.active {
          span {
            background: #c7daf5;
            box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.11);
            border-radius: 10px;
          }
        }
        span {
          margin-bottom: 20px;
          display: flex;
          width: 35px;
          height: 35px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
  }
`;
