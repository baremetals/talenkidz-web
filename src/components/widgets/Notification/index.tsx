import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';
import DeleteOutline from 'public/assets/icons/DeleteOutline';
import EyeIcon from 'public/assets/icons/EyeIcon';
import { closeModal, openModalWithContent } from 'src/features/modal';
import { useAppDispatch } from 'src/app/hooks';

dayjs.extend(relativeTime);

import { DocumentData } from 'src/lib/firebase';

import { Notification, SeeMore, Wrapper } from './styles';
import { updateNotification } from 'src/helpers/firebase';
import { useRouter } from 'next/router';

type TProps = {
  notifications: DocumentData;
};
const NotificationPage: React.FC<TProps> = ({ notifications }) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // console.log(notifications)
  const deleteNotification = (docId: string): void => {
    dispatch(
      openModalWithContent({
        modalComponent: 'DELETE_NOTIFICATION_MODAL',
        entityId: docId,
      })
    );
  };

  const handleSubmit = async(
    e: React.MouseEvent<HTMLElement, MouseEvent>, id: string, isRead: boolean
  ) => {
    e.preventDefault();
    setShow(!show);
    if(!isRead) {
      try {
        await updateNotification(id as string);
        dispatch(closeModal());
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleRouter = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string,
    read: boolean,
    url: string
  ) => {
    e.preventDefault();
    if (!read) {
      try {
        await updateNotification(id as string);
        dispatch(closeModal());
      } catch (err) {
        console.log(err);
      }
    }
    router.push(url);
  };
  return (
    <Wrapper>
      {notifications?.map(
        (item: {
          id: string;
          messageImage: string;
          message: string;
          sender: string;
          subject: string;
          read: boolean;
          url: string;
          createdAt: { seconds: number };
        }) => (
          <Notification className={item.read ? 'inactive' : ''} key={item.id}>
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
            <div className="notification-action">
              <div className="notification-time">
                <div className="time">
                  {dayjs.unix(item.createdAt?.seconds).fromNow()}
                </div>
                {/* <span className="today">seen today</span> */}
                <small
                  onClick={(e) => handleSubmit(e, item.id, item?.read)}
                >{`${show ? 'Hide' : 'Read more'}`}</small>
              </div>
              <div className="notification-icon">
                <span
                  className="DeleteOutline"
                  onClick={() => deleteNotification(item?.id)}
                >
                  <DeleteOutline />
                </span>
                {item.url !== "" ?<span
                  onClick={(e) =>
                    handleRouter(e, item.id, item?.read, item.url)
                  }
                >
                  <EyeIcon />
                </span>: null}
              </div>
            </div>
          </Notification>
        )
      )}
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
      </Notification> */}
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
      </Notification> */}
      {/* <Notification className="inactive">
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
      </Notification> */}
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
      </Notification> */}
      {notifications.length > 10 ? (
        <SeeMore>
          <Link href={'#'}>See more</Link>
        </SeeMore>
      ) : null}
    </Wrapper>
  );
};

export default NotificationPage;
