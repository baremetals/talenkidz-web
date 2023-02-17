import React from 'react';
import { Row, Column } from 'styles/common.styles';
import Button from 'components/users/Auth/Button';

import {
  ActivityNowWrapper,
  ActivityHeader,
  ActivityDec,
} from '../../ProfilePage/profile.styles';

const ActivityNow = () => {
  return (
    <Row>
      <Column className="column-12">
        <ActivityNowWrapper>
          <ActivityHeader>Be more active with new people</ActivityHeader>
          <ActivityDec>You haven’t chosen activities yet</ActivityDec>
          <Button
            content="Choose an activity now"
            type="submit"
            disabled={false}
            loading={false}
          />
        </ActivityNowWrapper>
      </Column>
    </Row>
  );
};

export default ActivityNow;
