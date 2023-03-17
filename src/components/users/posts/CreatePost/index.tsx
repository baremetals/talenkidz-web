import React, { useContext, useState } from 'react';
import Button from 'components/widgets/Button';
import { AuthContext } from 'src/features/auth/AuthContext';
import { AlignCentered } from '../createpost.styles';
import { InnerContainer, PageContainer } from 'styles/common.styles';
import Link from 'next/link';

type TCreatePostProps = {
  children: React.ReactNode;
  formType: string;
};

const CreatePost: React.FC<TCreatePostProps> = ({ children, formType }) => {
  const { user } = useContext(AuthContext);
  return (
    <PageContainer>
      <InnerContainer>
        <AlignCentered>
          <Link passHref href={'/account/create/activities'}>
            <Button
              className={
                formType !== 'activity' ? 'primary-outline' : 'activity'
              }
              style={{ margin: '0 .5rem', minWidth: '180px' }}
            >
              List An Activity
            </Button>
          </Link>

          <Link passHref href={'/account/create/events'}>
            <Button
              className={formType !== 'event' ? 'primary-outline' : 'event'}
              style={{ margin: '0 .5rem', minWidth: '180px' }}
            >
              List An Event
            </Button>
          </Link>
        </AlignCentered>
        {children}
      </InnerContainer>
    </PageContainer>
  );
};

export default CreatePost;
