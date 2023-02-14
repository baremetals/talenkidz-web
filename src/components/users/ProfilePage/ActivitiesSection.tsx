import React, { useState } from 'react';
import { PremiumMember, TabsBlock } from './profile.styles';
import MyActivities from '../Account/MyActivities';
import ActivitiesVisit from '../Account/ActivitiesVisit';
import ActivityNow from '../Account/ActivityNow';
import SectionStatus from '../Account/SectionStatus';
import Editor from '../Account/Editor';
import Tabs from '../Account/Tabs/Tabs';
import { Row, Column } from 'styles/common.styles';

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: 'My Activities',
    index: 1,
    Component: MyActivities,
  },
  {
    label: 'Activities to visit',
    index: 2,
    Component: ActivityNow,
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
