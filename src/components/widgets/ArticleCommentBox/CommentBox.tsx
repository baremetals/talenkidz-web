import Image from 'next/image';
import {
  CommentImg,
  CommentUser,
  DayBlock,
  Reply,
  CommentAction,
  CommentBox,
  CommentUserBox,
} from './styles';

const comment = () => {
  return (
    <CommentBox>
      <CommentUserBox>
        <CommentUser>
          <CommentImg>
            <Image
              src="/assets/images/kid.png"
              alt="user image"
              className="bookmar"
              width={35}
              height={35}
            />
          </CommentImg>
          <h3>Abby Swhatson </h3>
        </CommentUser>
        {/* <div className='star'>  <Image
            src={'/assets/svgs/StarIcon.svg'}
            alt="article image"
            width={31}
            height={31}
          /> 5,0</div> */}
      </CommentUserBox>
      <p>
        Very much enjoying my time here. Joined in March 2021 and have zero
        regrets. The space is immaculately clean and their COVID protocols are
        impressive--hand sanitizer, temp checks, contact tracing, personalized
        sanitizing supplies as you move around gym, mandatory masks, very strong
        air filters, and immediate cleaning post classes. I feel very safe
        inside.
      </p>
      <p>
        And dont forget about the knowledgeable staff. My personal training
        sessions have always been top notch. I LOVE taking the classesits nice
        to have plenty of indoor and outdoor options. The classes always kick my
        butt in a good way. Plus their recorded classes are great, too. I feel
        like what I pay each month is an excellent value.
      </p>
      <p>
        Support a local Black-owned business, get into shape, and have fun while
        you do it!! No more waiting!
      </p>
      <CommentAction>
        <DayBlock>2 days ago</DayBlock>
        <Reply>
          <label>reply on</label>
          <Image
            src={'/assets/svgs/like.svg'}
            alt="article image"
            width={24}
            height={24}
          />
        </Reply>
      </CommentAction>
    </CommentBox>
  );
};

export default comment;
