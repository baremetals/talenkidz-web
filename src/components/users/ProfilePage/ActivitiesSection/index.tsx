import PremiumBanner from 'components/users/Account/PremiumBanner';
import React, { useState } from 'react';
import Editor from '../../Account/Editor';
import PostLimits from '../../Account/PostLimits';
import Tabs from '../../Account/Tabs/Tabs';
import SelectAnActivity from '../../Account/activities/SelectAnActivity';
import MyActivities from '../../Account/activities/MyActivities';
import { TabsBlock } from '../profile.styles';
import { useRouter } from 'next/router';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth';

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
  const router = useRouter();
  const { user: user } = useAppSelector(isUser);
  const [selectedTab] = useState<number>(tabs[0].index);
  const pageViewer = router.query.username
    ? router.query.username
    : user?.username;
  return (
    <>
      {user?.membership == 'basic' &&
      pageViewer == (user?.username as string) ? (
        <>
          {/* Account status notes */}
          <PostLimits status="activities" limit={'2'} />

          {/* Become a premium member */}
          <PremiumBanner />

          {/* Write a new article */}
          <Editor
            status="activities"
            placeholder="Create an activity"
            componentName={'ACTIVITY_FORM_MODAL'}
          />
        </>
      ) : null}
      {/*  */}
      <TabsBlock>
        <Tabs selectedTab={selectedTab} onClick={() => null} tabs={tabs} />
      </TabsBlock>
    </>
  );
};

export default ActivitiesSection;
