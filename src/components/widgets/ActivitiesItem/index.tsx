
import { ActivitiestemBlock, ActivitiesItemImg, ActivitiesInfo,TimeBlock,SportCoach,Visitor,VisitorInner,Visitors, SeeMore } from './styles';
import Image from 'next/image';

const ActivitiesItem = () => {
  return (
    <ActivitiestemBlock>
      <ActivitiesItemImg>
        <Image
            src={'/assets/images/sport.png'}
            alt="article image"
            width={340}
            height={195}
          />
      </ActivitiesItemImg>
      <ActivitiesInfo>
        <h2>ValleyBall team games </h2>
        <TimeBlock>
          <label>Sun, Thus at 10:00 AM</label>
          <span className='tag'>Helly’s GYM</span>
        </TimeBlock>
        <SportCoach>
          <div className='coachSpe'>
            <Image
            src={'/assets/images/user.png'}
            alt="article image"
            width={35}
            height={35}
          /> Andrew Swann</div>
          <div className='freeTag'><span className='dot'></span> Free</div>
        </SportCoach>
        <Visitor>
          <VisitorInner>
             <Visitors>
                <Image
                        src={'/assets/svgs/participants.svg'}
                        alt="article image"
                        width={16}
                        height={20}
                />
                <label>10-15 participants</label>
            </Visitors>
             <SeeMore href='#'>See more</SeeMore>
          </VisitorInner>
         </Visitor>
      </ActivitiesInfo>
    </ActivitiestemBlock>
  );
};

export default ActivitiesItem;
