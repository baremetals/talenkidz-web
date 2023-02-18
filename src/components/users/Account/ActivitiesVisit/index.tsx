import React from 'react';
import ActivitiesItem from '../ActivitiesItem';
import { Row, Column } from 'styles/common.styles';

const ActivitiesVisit = () => {
  return (
    <Row>
      <Column className="column-6">
        <ActivitiesItem
          title="ValleyBall team games "
          tag="Helly’s GYM"
          date="Mon, Tus at 15:00 PM"
          participants="250 more visitors"
          edit
          eventImg="/assets/images/eventvisit.jpg"
        />
      </Column>
      <Column className="column-6">
        <ActivitiesItem
          title="ValleyBall team games "
          tag="Helly’s GYM"
          date="Mon, Tus at 15:00 PM"
          participants="10-15 participants "
          edit
          eventImg="/assets/images/eventvisit.jpg"
        />
      </Column>
      <Column className="column-6">
        <ActivitiesItem
          title="ValleyBall team games "
          tag="Helly’s GYM"
          date="Mon, Tus at 15:00 PM"
          participants="10-15 participants "
          eventImg="/assets/images/eventvisit.jpg"
        />
      </Column>
    </Row>
  );
};

export default ActivitiesVisit;
