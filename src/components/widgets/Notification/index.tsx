import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';
import DeleteOutline from 'public/assets/icons/DeleteOutline';
import EyeIcon from 'public/assets/icons/EyeIcon';
import { openModal } from 'src/features/modal';
import { useAppDispatch } from 'src/app/hooks';

dayjs.extend(relativeTime);

import { DocumentData } from 'src/lib/firebase';

import { Notification, SeeMore, Wrapper } from './styles';

type TProps = {
  notifications: DocumentData;
};
const NotificationPage: React.FC<TProps> = ({ notifications }) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  // console.log(notifications)
  return (
    <Wrapper>
      {/* <Notification>
        <div className="notification">
          <div>
            <div className="user-image">
              <Image
                src={'/assets/images/avatar.png'}
                alt="hero image"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="user-name">
            <label>Andrew Swann </label>
            <p>
              liked your article “Raise good Humans” as other hundred users did
            </p>
          </div>
        </div>
        <div className="notification-time">
          <div className="time">2 hours ago</div>
          <small>Read more</small>
        </div>
      </Notification> */}
      {notifications?.map(
        (item: {
          id: string;
          messageImage: string;
          message: string;
          sender: string;
          subject: string;
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
                  <label>{item.sender}</label>
                  <p>
                    {item.subject} <span>{item.message}</span>
                  </p>
                  {show ? <p>{item.message}</p> : null}
                </div>
              </div>
              <div className="notification-time">
                <div className="time">
                  {dayjs.unix(item.createdAt?.seconds).fromNow()}
                </div>
                <small onClick={() => setShow(!show)}>{`${
                  show ? 'Hide' : 'Read more'
                }`}</small>
              </div>
            </Notification>
          </Link>
        )
      )}
      <Notification>
        <div className="notification">
          <div>
            <div className="user-image">
              <Image
                src={'/assets/images/avatar.png'}
                alt="hero image"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="user-name">
            <label>Andrew Swann </label>
            <p>
              liked your article “Raise good Humans” as other hundred users did
            </p>
          </div>
        </div>
        <div className="notification-action">
          <div className="notification-time">
            <div className="time">2 hours ago</div>
            <span className="today">seen today</span>
          </div>
          <div className="notification-icon">
            <span
              className="DeleteOutline"
              onClick={() => dispatch(openModal('DELETE_NOTIFICATION_MODAL'))}
            >
              <DeleteOutline />
            </span>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="notification">
          <div>
            <div className="user-image">
              <Image
                src={'/assets/images/avatar.png'}
                alt="hero image"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="user-name">
            <label>Andrew Swann </label>
            <p>
              liked your article “Raise good Humans” as other hundred users did
            </p>
          </div>
        </div>
        <div className="notification-action">
          <div className="notification-time">
            <div className="time">2 hours ago</div>
            <small>Read more</small>
          </div>
          <div className="notification-icon">
            <span
              className="DeleteOutline"
              onClick={() => dispatch(openModal('DELETE_NOTIFICATION_MODAL'))}
            >
              <DeleteOutline />
            </span>
          </div>
        </div>
      </Notification>
      <Notification className="inactive">
        <div className="notification">
          <div>
            <div className="user-image">
              <Image
                src={'/assets/images/avatar.png'}
                alt="hero image"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="user-name">
            <label>Andrew Swann </label>
            <p>
              liked your article “Raise good Humans” as other hundred users did
            </p>
          </div>
        </div>
        <div className="notification-action">
          <div className="notification-time">
            <div className="time">2 hours ago</div>
            <small>Read more</small>
          </div>
          <div className="notification-icon">
            <span
              className="DeleteOutline"
              onClick={() => dispatch(openModal('DELETE_NOTIFICATION_MODAL'))}
            >
              <DeleteOutline />
            </span>
            <span>
              <EyeIcon />
            </span>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="notification">
          <div>
            <div className="user-image">
              <Image
                src={'/assets/images/avatar.png'}
                alt="hero image"
                width={60}
                height={60}
              />
            </div>
          </div>
          <div className="user-name">
            <label>Andrew Swann </label>
            <p>
              Left a comment under your event “Paint”.
              <span>
                “It was an incredible event. Thank you! Rarely have I ever been
                to an exhibit where there was so much interaction between the
                viewers—people making comments to strangers, laughing, smiling
                at one another. That is what makes Rockwell such an important
                artist.”
              </span>
            </p>
          </div>
        </div>
        <div className="notification-action">
          <div className="notification-time">
            <div className="time">2 hours ago</div>
            <small>Hide</small>
          </div>
          <div className="notification-icon">
            <span
              className="DeleteOutline"
              onClick={() => dispatch(openModal('DELETE_NOTIFICATION_MODAL'))}
            >
              <DeleteOutline />
            </span>
          </div>
        </div>
      </Notification>
      {notifications.length > 10 ? (
        <SeeMore>
          <Link href={'#'}>See more</Link>
        </SeeMore>
      ) : null}
    </Wrapper>
  );
};

export default NotificationPage;
