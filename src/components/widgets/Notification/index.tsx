import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
dayjs.extend(relativeTime);

import { DocumentData } from 'src/lib/firebase';

import { Notification, SeeMore, Wrapper } from './styles';

type TProps = {
  notifications: DocumentData;
};
const NotificationPage: React.FC<TProps> = ({ notifications }) => {
  return (
    <Wrapper>
      {notifications?.map(
        (item: {
          id: string;
          messageImage: string;
          message: string;
          sender: string;
          createdAt: { seconds: number };
        }) => (
          <Link passHref href={'#'} key={item.id}>
            <Notification>
              <div className="notification">
                <div>
                  <div className="user-image">
                    <Image
                      src={item.messageImage || '/assets/images/avatar.png'}
                      alt="hero image"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div className="user-name">
                  <label>{item.sender} </label>
                  <p>{item.message}</p>
                </div>
              </div>
              <div className="time">
                {dayjs.unix(item.createdAt?.seconds).fromNow()}
              </div>
            </Notification>
          </Link>
        )
      )}
      {notifications.length > 10 ?<SeeMore>
        <Link href={'#'}>See more</Link>
      </SeeMore>: null}
      
    </Wrapper>
  );
};

export default NotificationPage;
