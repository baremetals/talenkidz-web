
import { EventItemBlock, EventItemImg,EventInfo,TimeBlock,CourseItem,Visitor,VisitorInner,Visitors, SeeMore } from './styles';
import Image from 'next/image';
import { BsTag } from 'react-icons/bs';

const EventItem = () => {
  return (
    <EventItemBlock>
      <EventItemImg>
        <Image
            src={'/assets/images/event.png'}
            alt="article image"
            width={1170}
            height={601}
          />
      </EventItemImg>
      <EventInfo>
        <h2>How to communicate with a child properly </h2>
        <TimeBlock>
          <label>Tomorrow at 10:00 AM</label>
          <span className='tag'>Online</span>
        </TimeBlock>
        <CourseItem>
          <span>School of psychology </span>
          <span className='dot'></span>
          <span>Free</span>
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
                <label>250 more visitors</label>
            </Visitors>
             <SeeMore href='#'>See more</SeeMore>
          </VisitorInner>
         </Visitor>
      </EventInfo>
    </EventItemBlock>
  );
};

export default EventItem;
