import React, { useState } from 'react';
import { PremiumMember, TabsBlock } from './profile.styles';
import MyEvent from '../Account/MyEvent';
import EventsVisit from '../Account/EventsVisit';
import SectionStatus from '../Account/SectionStatus';
import Editor from '../Account/Editor';
import Tabs from '../Account/Tabs/Tabs';

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
    label: 'Events to visit',
    index: 2,
    Component: EventsVisit,
  },
];

const EventSection = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <>
      {/* Account status notes */}
      <SectionStatus status="events" />

      {/* Become a premium member */}
      <PremiumMember>
        <p>Get unlimited access to all of TALENTKIDS for less than $1 a week</p>
        <a href="#">Become a Premium member</a>
      </PremiumMember>

      {/* Write a new event */}
      <Editor status="events" placeholder="Write a new event" />
      {/*  */}
      <TabsBlock>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </TabsBlock>
      {/* Event cards */}
    </>
  );
};

export default EventSection;
