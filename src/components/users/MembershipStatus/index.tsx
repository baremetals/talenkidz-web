import React, { useCallback } from 'react';
import { UsersPermissionsUser } from 'generated/graphql';

import { Row, Column } from 'styles/common.styles';
import Link from 'next/link';
import {
  PaymentStatusCard,
  PaymentStatusWrapper,
} from '../ProfilePage/profile.styles';
import { useAppSelector } from 'src/app/hooks';
import { isUser } from 'src/features/auth/selectors';

// import { useAppDispatch } from 'src/app/hooks';
// import { openModal } from 'src/features/modal/reducers';

import Button from 'components/users/Auth/Button';
import ProfileBase from '../ProfilePage/ProfileBase';
import { upperCase } from 'src/utils';
import { createFirebaseNotification } from 'src/helpers/firebase';
import { useRouter } from 'next/router';
// import { UserProfileWapper } from 'components/utilities/Modal/modal.styles';

function MembershipStatus(props: { props: UsersPermissionsUser }) {
  const { user: user } = useAppSelector(isUser);
  // const [dropdown, setDropdown] = useState(false);
  // const dropdownRef = useRef<any>(null);
  const {
    username,
    fullName,
    email,
    avatar,
    backgroundImg,
    bio,
    membership,
    userType,
    createdAt,
    organisation,
    subscription,
  } =
    // eslint-disable-next-line no-unsafe-optional-chaining
    props?.props;
  // const dispatch = useAppDispatch();
  const router = useRouter()
  // console.log(subscription);

  const handleCancel = useCallback(async () => {
    const cancelSubsMessage = {
      sender: 'Admin',
      recipientEmail: email,
      recipientName: fullName?.split(' ')[0] || username,
      subject: 'Subscription Cancelled!',
      message:
        'Your subscription has been cancelled. You can restart at anytime.',
      messageType: 'subscription',
      messageImage: 'TK-logo',
      entityType: 'subscription',
      entityId: user?.id as number,
      // emailNotificationsOn: booleanstring,
      // appNotificationsOn: booleanstring,
    };
    const response = await fetch('/api/subscriptions/cancel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscriptionId: subscription?.data?.id,
        stripeSubscriptionId:
          subscription?.data?.attributes?.stripeSubscriptionId,
      }),
    });
    const data = await response.json();
    if (!data.error) {
      await createFirebaseNotification(cancelSubsMessage);
      router.push(router.asPath)
    }

  },[email, fullName, router, subscription?.data?.attributes?.stripeSubscriptionId, subscription?.data?.id, user?.id, username])

  return (
    <ProfileBase
      username={username}
      fullName={fullName as string}
      avatar={avatar as string}
      backgroundImg={backgroundImg as string}
      bio={bio as string}
      membership={membership as string}
      userType={userType as string}
      createdAt={createdAt as string}
      orgName={organisation?.name as string}
    >
      <PaymentStatusWrapper>
        <Row>
          {/* <Column className="column-6">
            <PaymentStatusCard>
              <div className="PaymentStatus selected">
                <label>Current status</label>
                <h1>{upperCase(userType)}</h1>
                <p>
                  Expiration date: <span>24 March 2023</span>
                </p>
                <Button
                  content={'Extend'}
                  type="button"
                  disabled={false}
                  loading={false}
                />
              </div>
            </PaymentStatusCard>
          </Column> */}
          <Column className="column-6">
            <PaymentStatusCard>
              <div className="PaymentStatus selected">
                <label>Current Status</label>
                <h1>{upperCase(membership as string)}</h1>
                <p>Do you want to go back to standard?</p>
                {(membership as string) === 'basic' ? (
                  <Link passHref href={'/account/subscribe'}>
                    <Button
                      content={'Upgrade'}
                      type="button"
                      disabled={false}
                      loading={false}
                      // onClick={router.}
                    />
                  </Link>
                ) : (
                  <Button
                    content={'Cancel'}
                    type="button"
                    disabled={false}
                    loading={false}
                    onClick={handleCancel}
                  />
                )}
              </div>
            </PaymentStatusCard>
          </Column>
        </Row>
      </PaymentStatusWrapper>
    </ProfileBase>
  );
}

export default MembershipStatus;
