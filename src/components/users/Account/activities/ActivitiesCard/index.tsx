import Image from 'next/image';
import PencilTwo from 'public/assets/icons/PencilTwo';
import { IActivityCard } from 'src/interfaces';
import { cutTextToLength, formatTimeAndDate } from 'src/utils';
import { EditButton } from '../../events/EventCard/styles';
import {
  ActivitiesInfo,
  ActivitiesItemImg,
  ActivitiestemBlock,
  SeeMore,
  SportCoach,
  TimeBlock,
  Visitor,
  VisitorInner,
  Visitors,
} from './styles';

const ActivitiesCard: React.FC<IActivityCard> = ({
  startDate,
  starTime,
  title,
  price,
  hostName,
  hostImage,
  image,
  venue,
  location,
  venueName,
  userId,
  hostId,
  route,
}) => {
  // const [bookedMarked, setActives] = useState(false);
  //  const toggleClass = () => {
  //     setActives(!bookedMarked);
  //   };

  return (
    <ActivitiestemBlock>
      <ActivitiesItemImg>
        <Image
          src={image as string}
          alt="article image"
          width={340}
          height={195}
        />
      </ActivitiesItemImg>
      <ActivitiesInfo>
        <h2>{cutTextToLength(title, 45)}</h2>
        <TimeBlock>
          <label>{formatTimeAndDate(startDate, starTime)}</label>
          <span className="tag">{venue === 'online' ? venue : location}</span>
        </TimeBlock>
        <SportCoach>
          <div className="coachSpe">
            <Image
              src={hostImage as string}
              alt="article image"
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
                alt="article image"
                width={16}
                height={20}
              />
              <label>{venueName}</label>
            </Visitors>
            {hostId === userId ? (
              <EditButton>
                Edit
                <PencilTwo />
              </EditButton>
            ) : (
              <SeeMore href={route}>See More</SeeMore>
            )}
          </VisitorInner>
        </Visitor>
      </ActivitiesInfo>
    </ActivitiestemBlock>
  );
};

export default ActivitiesCard;
