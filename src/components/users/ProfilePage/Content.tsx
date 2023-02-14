import React, { useState } from 'react';
import {
  ProfileContainer,
  ProfileMenu,
  ProfileMenus,
  ProfileSidebar,
  ProfileTimeline,
  ProfileTabs,
} from './profile.styles';
import PencilTwo from 'public/assets/icons/PencilTwo';
import ArticleSection from './ArticleSection';
import Sidebar from '../Account/Sidebar';
import ArticlesTitle from '../Account/ArticlesTitle';

import EventSection from './EventSection';
import ActivitiesSection from './ActivitiesSection';
import Tabs from '../Account/Tabs/Tabs';

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

const Content = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[2].index);
  return (
    <ProfileContainer>
      {/* Timeline section */}
      <ProfileTimeline>
        {/* Profile menus */}
        {/* <ProfileMenus>
          <ProfileMenu className="active">
            Articles <PencilTwo/>
          </ProfileMenu>
          <ProfileMenu>
            Events <PencilTwo/>
          </ProfileMenu>
          <ProfileMenu>
            Activities <PencilTwo/>
          </ProfileMenu>
        </ProfileMenus> */}
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
  );
};

export default Content;
