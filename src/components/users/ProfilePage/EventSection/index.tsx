import PremiumBanner from 'components/users/Account/PremiumBanner';
import React, { useState } from 'react';
import Editor from '../../Account/Editor';
import PostLimits from '../../Account/PostLimits';
import Tabs from '../../Account/Tabs/Tabs';
import SelectAnEvent from '../../Account/events/SelectAnEvent';
import MyEvent from '../../Account/events/MyEvent';
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
  const router = useRouter();
  const { user: user } = useAppSelector(isUser);
  const [selectedTab] = useState<number>(tabs[0].index);
  const pageOwner = router.query.username
    ? router.query.username
    : user?.username;
  
  return (
    <>
      {/* Account status notes */}

      {user?.membership == 'basic' &&
      pageOwner == (user?.username as string) ? (
        <>
          {/* Account status notes */}
          <PostLimits status="events" limit={'2'} />

          {/* Become a premium member */}
          <PremiumBanner />

          {/* Write a new article */}
          <Editor
            status="events"
            placeholder="Create an event"
            componentName={'EVENT_FORM_MODAL'}
          />
        </>
      ) : null}
      {/*  */}
      <TabsBlock>
        <Tabs selectedTab={selectedTab} onClick={() => null} tabs={tabs} />
      </TabsBlock>
      {/* Event cards */}
    </>
  );
};

export default EventSection;
