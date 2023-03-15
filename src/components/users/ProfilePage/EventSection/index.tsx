import PremiumBanner from 'components/users/Account/PremiumBanner';
import React, { useState } from 'react';
import Editor from '../../Account/Editor';
import PostLimits from '../../Account/PostLimits';
import Tabs from '../../Account/Tabs/Tabs';
import SelectAnEvent from '../../Account/events/SelectAnEvent';
import MyEvent from '../../Account/events/MyEvent';
import { TabsBlock } from '../profile.styles';

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: 'My events',
    index: 1,
    Component: MyEvent,
  },
  {
    label: '',
    index: 2,
    Component: SelectAnEvent,
  },
];

const EventSection = () => {
  const [selectedTab] = useState<number>(tabs[0].index);
  
  return (
    <>
      {/* Account status notes */}
      <PostLimits status="events" limit={'2'} />

      {/* Become a premium member */}
      <PremiumBanner />

      {/* Write a new event */}
      <Editor
        status="events"
        placeholder="Create an event"
        companentName={'EVENT_FORM_MODAL'}
      />
      {/*  */}
      <TabsBlock>
        <Tabs selectedTab={selectedTab} onClick={() => null} tabs={tabs} />
      </TabsBlock>
      {/* Event cards */}
    </>
  );
};

export default EventSection;
