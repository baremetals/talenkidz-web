import React from 'react';
import { UnlimitedAccess } from './styles';
import Event from './Event';
import Calendar from './Calendar';

const Sidebar = () => {
  return (
    <>
      {/* Get unlimited access */}
      <UnlimitedAccess>
        Get unlimited access to all of TALENTKIDS
      </UnlimitedAccess>

      {/* Events */}
      <Event eventName="Events to visit" eventDay="15" status="status-1" />
      <Event eventName="Organized events" eventDay="1" status="status-2" />

      {/* TODO: Create calendar design */}
      <Calendar />
    </>
  );
};

export default Sidebar;
