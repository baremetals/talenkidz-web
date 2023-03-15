import Image from 'next/image';
import {
  ActivitiesInfo,
  ActivitiesItemImg,
  ActivitiestemBlock,
  IconBlock,
  SeeMore,
  SportCoach,
  TimeBlock,
  Visitor,
  VisitorInner,
  Visitors,
} from './styles';
// import {  useState } from 'react';
import Link from 'next/link';
import { IActivityCard } from 'src/interfaces';
import { cutTextToLength, formatTimeAndDate } from 'src/utils';
import BookMarkIcon from '../../widgets/BookMarkIcon';

const ActivitiesItem: React.FC<IActivityCard> = ({
  id,
  hostName,
  hostImage,
  title,
  slug,
  image,
  starTime,
  startDate,
  venueName,
  price,
  route,
  venue,
  location,
  category,
}) => {
  // const [bookedMarked, setActives] = useState(false);

  return (
    <ActivitiestemBlock>
      <ActivitiesItemImg>
        <Image
          src={image || '/assets/images/sport.png'}
          alt="activity image"
          width={340}
          height={195}
        />
        <IconBlock>
          <BookMarkIcon
            id={id}
            title={title}
            slug={slug as string}
            image={image as string}
            width={20}
            height={20}
            userImage={hostImage as string}
            userName={hostName as string}
            date={startDate}
            category={category as string}
            type={'listing'}
            readingTimeOrPrice={price}
            venueName={venueName as string}
            time={starTime}
            venue={venue as string}
            location={location as string}
          />
        </IconBlock>
      </ActivitiesItemImg>
      <ActivitiesInfo>
        <Link passHref href={route}>
          <h2>{cutTextToLength(title, 45)}</h2>
        </Link>
        <TimeBlock>
          {/* <label>Sun, Thus at 10:00 AM</label> */}
          <label>{formatTimeAndDate(startDate, starTime)}</label>
          <span className="tag">{venue === 'online' ? venue : location}</span>
        </TimeBlock>
        <SportCoach>
          <div className="coachSpe">
            <Image
              src={hostImage || '/assets/images/user.png'}
              alt="host image"
              width={35}
              height={35}
            />{' '}
            {hostName}
          </div>
          <div className="freeTag">
            <span className="dot"></span> {price}
          </div>
        </SportCoach>
        <Visitor>
          <VisitorInner>
            <Visitors>
              <Image
                src={'/assets/svgs/visitor.svg'}
                alt="visitors icon"
                width={16}
                height={20}
              />
              {/* <Image
                src={'/assets/svgs/participants.svg'}
                alt="article image"
                width={16}
                height={20}
              /> */}
              {/* <label>10-15 participants</label> */}

              {venue === 'online' ? (
                <label>{venue}</label>
              ) : (
                <label>{venueName}</label>
              )}
            </Visitors>
            <Link passHref href={route}>
              <SeeMore href="#">See more</SeeMore>
            </Link>
          </VisitorInner>
        </Visitor>
      </ActivitiesInfo>
    </ActivitiestemBlock>
  );
};

export default ActivitiesItem;
