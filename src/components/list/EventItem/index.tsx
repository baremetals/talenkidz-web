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
import { IEventCard } from 'src/interfaces';
import { cutTextToLength, formatTimeAndDate } from 'src/utils';
import BookMarkIcon from '../../widgets/BookMarkIcon';
import Tooltip from 'components/widgets/Tooltip';
// import { BsTag } from 'react-icons/bs';

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
  category,
  hostImage,
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
        <IconBlock>
          <BookMarkIcon
            id={id as string}
            title={title}
            slug={slug as string}
            image={image as string}
            width={20}
            height={20}
            userImage={hostImage as string}
            userName={hostName as string}
            date={starDate}
            readingTimeOrPrice={price}
            venueName={venueName as string}
            time={starTime}
            venue={venue as string}
            location={location as string}
            category={category as string}
            type={'event'}
          />
        </IconBlock>
      </EventItemImg>

      <EventInfo>
        <Link passHref href={route}>
          <h2 data-tooltip-id="my-tooltip" data-tooltip-content={title}>
            {cutTextToLength(title, 45)}
          </h2>
        </Link>
        <Tooltip />
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
      </EventInfo>
    </EventItemBlock>
  );
};

export default EventItem;
