
import { EventItemBlock, EventItemImg,EventInfo,TimeBlock,CourseItem,Visitor,VisitorInner,Visitors, EditButton, SeeMore } from './styles';
import Image from 'next/image';
import PencilTwo from 'public/assets/icons/PencilTwo';
const EventItem = ({ date, title, tag, courseType, edit, eventImg,  ...props }: any) => {
  return (
    <EventItemBlock {...props}>
      <EventItemImg>
        <Image
            src={eventImg}
            alt="article image"
            width={1170}
            height={601}
          />
      </EventItemImg>
      <EventInfo>
        <h2>{title}</h2>
        <TimeBlock>
          <label>{date }</label>
          <span className='tag'>{tag}</span>
        </TimeBlock>
        <CourseItem>
          <span>{courseType}</span>
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
             { edit    
              ? <EditButton>Edit<PencilTwo /></EditButton>
              :<SeeMore href='#'>See More</SeeMore>
              }
          </VisitorInner>
         </Visitor>
      </EventInfo>
    </EventItemBlock>
  );
};

export default EventItem;
