import { Wrapper, Notification, SeeMore } from './styles';
import Image from 'next/image';
import Link from 'next/link';

const NotificationPage = () => {
  return (
    <Wrapper>
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
        <div className="time">2 hours ago</div>
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
        <div className="time">2 hours ago</div>
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
        <div className="time">2 hours ago</div>
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
        <div className="time">2 hours ago</div>
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
        <div className="time">2 hours ago</div>
      </Notification>
      <SeeMore>
        <Link href={'#'}>See more</Link>
      </SeeMore>
    </Wrapper>
  );
};

export default NotificationPage;
