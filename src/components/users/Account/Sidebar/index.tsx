import React from 'react';
import { UnlimitedAccess } from './styles';
import Event from './Event';
import Calendar from './Calendar';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';

const Sidebar = () => {
  const { user: user } = useAppSelector(isUser);
  return (
    <>
      {/* Get unlimited access */}
      {user?.membership !== 'premium' || user?.userType !== 'organisation' ? (<UnlimitedAccess>
        Get unlimited access to all of TALENTKIDS
      </UnlimitedAccess>): null}
      

      {/* Events */}
      <Event eventName="Events to visit" eventDay="15" status="status-1" />
      <Event eventName="Organised events" eventDay="1" status="status-2" />

      {/* TODO: Create calendar design */}
      <Calendar />
    </>
  );
};

export default Sidebar;
