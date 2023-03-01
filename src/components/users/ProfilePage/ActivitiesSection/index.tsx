import PremiumBanner from 'components/users/Account/PremiumBanner';
import React, { useState } from 'react';
import Editor from '../../Account/Editor';
import PostLimits from '../../Account/PostLimits';
import Tabs from '../../Account/Tabs/Tabs';
import SelectAnActivity from '../../Account/activities/SelectAnActivity';
import MyActivities from '../../Account/activities/MyActivities';
import { TabsBlock } from '../profile.styles';

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: 'Activities',
    index: 1,
    Component: MyActivities,
  },
  {
    label: '',
    index: 2,
    Component: SelectAnActivity,
  },
];

const ActivitiesSection = () => {
  const [selectedTab] = useState<number>(tabs[0].index);
  return (
    <>
      {/* Account status notes */}
      <PostLimits status="activities" limit={'2'} />

      {/* Become a premium member */}
      <PremiumBanner />

      {/* Create Content */}
      <Editor status="activities" placeholder="Create an activity" />
      {/*  */}
      <TabsBlock>
        <Tabs selectedTab={selectedTab} onClick={() => null} tabs={tabs} />
      </TabsBlock>
    </>
  );
};

export default ActivitiesSection;
