import React from 'react';
import { EventWrapper } from './styles';

type props = {
  eventName: string;
  eventDay: string | number;
  status?: string;
};

const Event = ({ eventName, eventDay, status }: props) => {
  return (
    <EventWrapper>
      <p>{eventName}</p>
      <div className="event-calendar">
        <span className={`event-calendar-day ${status}`}>{eventDay}</span>
        <span className="event-calendar-label">
          in the
          <br />
          calendar
        </span>
      </div>
      <a>Open all</a>
    </EventWrapper>
  );
};

Event.defaultProps = {
  status: 'status-1',
};

export default Event;
