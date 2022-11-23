import React from 'react'
import CreateListing from 'components/list/Create'
import { requireAuthentication } from 'lib/requireAuthentication';
import { GetServerSideProps } from 'next';
import { useIsAuth } from 'lib/isAuth';

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);

const CreatePage = () => {
  useIsAuth();
  return (
    <CreateListing />
  )
}

export default CreatePage
