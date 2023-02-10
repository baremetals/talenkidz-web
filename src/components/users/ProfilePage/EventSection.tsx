import React from 'react';
import { PremiumMember } from './profile.styles';
import Article from '../Account/Article';
import SectionStatus from '../Account/SectionStatus';
import Editor from '../Account/Editor';

const EventSection = () => {
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

      {/* Event cards */}
      <Article />
      <Article />
      <Article />
    </>
  );
};

export default EventSection;
