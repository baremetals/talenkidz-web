import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

// import Button from 'components/Auth/Button';
import PageTitle from 'components/widgets/PageTitle';

import { NotFoundPage, ImgBox } from './styles';

import {
  Column,
  InnerContainer,
  Row,
  PageContainer,
} from 'styles/common.styles';

const NotFound = () => {
  // console.log(data.firstBlock)
  return (
    <PageContainer>
      <NotFoundPage>
        <InnerContainer style={{ maxWidth: '1130px' }}>
          <PageTitle
            className="pageTitle"
            text={'Sorry, this page is not available now'}
          />
          <Row>
            <Column className="col-12">
              <ImgBox className="not-found">
                <Image
                  width={659}
                  height={230}
                  src="/assets/svgs/not-found-404.svg"
                  alt="toy cube icon"
                />
              </ImgBox>
            </Column>
          </Row>
        </InnerContainer>
      </NotFoundPage>
    </PageContainer>
  );
};

export default NotFound;
