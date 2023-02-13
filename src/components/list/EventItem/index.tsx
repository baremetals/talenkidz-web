import Image from 'next/image';
import Link from 'next/link';
import {
  CourseItem,
  EventInfo,
  EventItemBlock,
  EventItemImg,
  IconBlock,
  SeeMore,
  TimeBlock,
  Visitor,
  VisitorInner,
  Visitors,
} from './styles';
// import {  useState } from 'react';
import BookMarkIcon from '../../widgets/BookMarkIcon';
import { cutTextToLength, formatTimeAndDate } from 'src/utils';
// import { BsTag } from 'react-icons/bs';

export interface IEventCard {
  id: string;
  hostName: string | undefined;
  title: string;
  slug: string | undefined;
  location: string | undefined;
  venue: string | undefined;
  venueName: string | undefined;
  route: string;
  starDate: string;
  starTime: string;
  price: string;
  image: string | undefined;
  className?: string | undefined;
}

const EventItem: React.FC<IEventCard> = ({
  id,
  slug,
  title,
  hostName,
  image,
  price,
  location,
  venue,
  venueName,
  route,
  starDate,
  starTime,
}) => {
  return (
    <EventItemBlock>
      <EventItemImg>
        <Image
          src={image as string}
          alt="article image"
          width={1170}
          height={601}
        />
        <IconBlock style={{ cursor: 'pointer' }}>
          <BookMarkIcon
            id={id}
            title={cutTextToLength(title, 45)}
            slug={slug as string}
            image={image as string}
            width={20}
            height={20}
          />
        </IconBlock>
      </EventItemImg>

      <EventInfo>
        <Link passHref href={route}>
          <h2>{title}</h2>
        </Link>
        <TimeBlock>
          <label>{formatTimeAndDate(starDate, starTime)}</label>
          <span className="tag">{venue === 'online' ? venue : location}</span>
        </TimeBlock>
        <CourseItem>
          <span>{hostName}</span>
          <span className="dot"></span>
          <span>{price}</span>
        </CourseItem>
        <Visitor>
          <VisitorInner>
            <Visitors>
              <Image
                src={'/assets/svgs/visitor.svg'}
                alt="visitors icon"
                width={16}
                height={20}
              />
              {/* <label>250 more visitors</label> */}
              <label>{venueName}</label>
            </Visitors>
            <Link passHref href={route}>
              <SeeMore href="#">See more</SeeMore>
            </Link>
          </VisitorInner>
        </Visitor>
      </EventInfo>
    </EventItemBlock>
  );
};

export default EventItem;
