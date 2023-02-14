import React from 'react';
import EventItem from '../EventItem';
import {
  Row,
  Column,
} from 'styles/common.styles';

const MyEvent = () => {
  return (
    <Row>
        <Column className='column-6'>
          <EventItem
            title="How to communicate with a child properly"
            tag="online"
            date="5 Dec at 10:00 AM"
            courseType="5 Dec at 10:00 AM"
            edit
            eventImg="/assets/images/event.png"
          />
        </Column>
         <Column className='column-6'>
          <EventItem
            title="How to communicate with a child properly"
            tag="online"
            date="5 Dec at 10:00 AM"
           courseType="5 Dec at 10:00 AM"
           eventImg="/assets/images/event.png"
          />
        </Column>
     </Row>
  );
};

export default MyEvent;
