// import Button from 'components/users/Auth/Button';
import { Column, Row } from 'styles/common.styles';

import {
  // ActivityDec,
  // ActivityHeader,
  // ActivityNowWrapper,
} from '../../../ProfilePage/profile.styles';

const SelectAnActivity = () => {
  return (
    <Row>
      <Column className="column-12">
        {/* <ActivityNowWrapper>
          <ActivityHeader>Be more active with new people</ActivityHeader>
          <ActivityDec>You haven’t chosen activities yet</ActivityDec>
          <Button
            content="Choose an activity now"
            type="submit"
            disabled={false}
            loading={false}
          />
        </ActivityNowWrapper> */}
      </Column>
    </Row>
  );
};

export default SelectAnActivity;
