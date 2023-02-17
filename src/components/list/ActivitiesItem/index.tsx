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
import { cutTextToLength, formatTimeAndDate } from 'src/utils';
import BookMarkIcon from '../../widgets/BookMarkIcon';

export interface IActivityCard {
  id: string;
  hostName: string | undefined;
  hostImage: string | undefined;
  title: string;
  slug: string | undefined;
  location: string | undefined;
  venue: string | undefined;
  venueName: string | undefined;
  route: string;
  startDate: string;
  starTime: string;
  price: string;
  image: string | undefined;
  // className?: string | undefined;
}
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
              <label>{venueName}</label>
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
