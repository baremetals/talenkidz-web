
import { ActivitiestemBlock, ActivitiesItemImg, ActivitiesInfo,TimeBlock,SportCoach,Visitor,VisitorInner,Visitors, SeeMore, IconBlock } from './styles';
import Image from 'next/image';
import {  useState } from 'react';
const ActivitiesItem = () => {

const [bookedMarked, setActives] = useState(false);
 const toggleClass = () => {
    setActives(!bookedMarked);
  };

  return (
    <ActivitiestemBlock>
      <ActivitiesItemImg>
        <Image
            src={'/assets/images/sport.png'}
            alt="article image"
            width={340}
            height={195}
        />
        <IconBlock>
           <div
            className={bookedMarked ? 'active' : 'inactive'}
              onClick={toggleClass}
          >
            {bookedMarked ? (
              <div className="bookmarkActive">
                <Image
                  src="/assets/svgs/bookmark-active.svg"
                  alt="bookmark icon"
                  width={20}
                  height={20}
                />
              </div>
            ) : (
              <div className="bookmark">
                <Image
                  src="/assets/svgs/bookmar.svg"
                  alt="bookmark icon"
                  width={20}
                  height={20}
                />
              </div>
            )}
          </div>
        </IconBlock>
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
