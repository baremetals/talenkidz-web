import React from 'react'
import CreateListing from 'components/list/Create'
import { requireAuthentication } from 'src/lib/requireAuthentication';
import { GetServerSideProps } from 'next';
import { useIsAuth } from 'src/hooks/isAuth';

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
