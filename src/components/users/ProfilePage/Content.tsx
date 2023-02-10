import React from 'react';
import {
  ProfileContainer,
  ProfileMenu,
  ProfileMenus,
  ProfileSidebar,
  ProfileTimeline,
} from './profile.styles';
import PencilTwo from 'public/assets/icons/PencilTwo';
import ArticleSection from './ArticleSection';
import Sidebar from '../Account/Sidebar';
import EventSection from './EventSection';

const Content = () => {
  return (
    <ProfileContainer>
      {/* Timeline section */}
      <ProfileTimeline>
        {/* Profile menus */}
        <ProfileMenus>
          <ProfileMenu className="active">
            Articles <PencilTwo />
          </ProfileMenu>
          <ProfileMenu>
            Events <PencilTwo />
          </ProfileMenu>
          <ProfileMenu>
            Activities <PencilTwo />
          </ProfileMenu>
        </ProfileMenus>

        {/* Article section */}
        {/* <ArticleSection /> */}

        {/* Event section */}
        <EventSection />
      </ProfileTimeline>

      {/* Sidebar section */}
      <ProfileSidebar>
        <Sidebar />
      </ProfileSidebar>
    </ProfileContainer>
  );
};

export default Content;
