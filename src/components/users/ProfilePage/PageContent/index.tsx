import React, { useState } from 'react';
import ArticlesTitle from '../../Account/PencilIcon';
import Sidebar from '../../Account/Sidebar';
import ArticleSection from '../ArticleSection';
import {
  ProfileContainer,
  ProfileSidebar,
  ProfileTabs,
  ProfileTimeline,
} from '../profile.styles';

import Tabs from '../../Account/Tabs/Tabs';
import ActivitiesSection from '../ActivitiesSection';
import EventSection from '../EventSection';

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
  icon?: any;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: 'Articles',
    index: 1,
    icon: ArticlesTitle,
    Component: ArticleSection,
  },
  {
    label: 'Events',
    index: 2,
    icon: ArticlesTitle,
    Component: EventSection,
  },
  {
    label: 'Activities',
    index: 3,
    icon: ArticlesTitle,
    Component: ActivitiesSection,
  },
];

const PageContent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <>
      <ProfileContainer>
        {/* Timeline section */}
        <ProfileTimeline>
          <ProfileTabs>
            <Tabs
              selectedTab={selectedTab}
              onClick={setSelectedTab}
              tabs={tabs}
            />
          </ProfileTabs>
        </ProfileTimeline>
        {/* Sidebar section */}
        <ProfileSidebar>
          <Sidebar />
        </ProfileSidebar>
      </ProfileContainer>
    </>
  );
};

export default PageContent;
