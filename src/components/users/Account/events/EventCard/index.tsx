
import { useRouter } from 'next/router';
import { EventItemBlock, EventItemImg,EventInfo,TimeBlock,CourseItem,Visitor,VisitorInner,Visitors, EditButton, SeeMore } from './styles';
import Image from 'next/image';
import PencilTwo from 'public/assets/icons/PencilTwo';
import { IEventCard } from 'src/interfaces';
import { cutTextToLength, formatTimeAndDate } from 'src/utils';
const EventCard: React.FC<IEventCard> = ({
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
  userId,
  hostId,
  slug,
  // eventId

}) => {
  const router = useRouter()
  return (
    <EventItemBlock>
      <EventItemImg>
        <Image
          src={image as string}
          alt="article image"
          width={1170}
          height={601}
        />
      </EventItemImg>
      <EventInfo>
        <h2>{cutTextToLength(title, 45)}</h2>
        <TimeBlock>
          <label>{formatTimeAndDate(starDate, starTime)}</label>
          <span className="tag">{venue === 'online' ? venue : location}</span>
        </TimeBlock>
        <CourseItem>
          <span>{hostName}</span>
          <span className="dot"></span>
          <span>{price === '0' ? 'Free' : `£${price}`}</span>
        </CourseItem>
        <Visitor>
          <VisitorInner>
            <Visitors>
              <Image
                src={'/assets/svgs/visitor.svg'}
                alt="article image"
                width={16}
                height={20}
              />
              {venue === 'online' ? (
                <label>{venue}</label>
              ) : (
                <label>{venueName}</label>
              )}
            </Visitors>
            {hostId === userId ? (
              <EditButton onClick={() => router.push(`/account/create/events/update/${slug}`)}>
                Edit
                <PencilTwo />
              </EditButton>
            ) : (
              <SeeMore href={route}>See More</SeeMore>
            )}
          </VisitorInner>
        </Visitor>
      </EventInfo>
    </EventItemBlock>
  );
};

export default EventCard;
