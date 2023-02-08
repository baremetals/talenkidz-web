import Button from 'components/users/Auth/Button';
import Image from 'next/image';
import {StyledInput, LeaveComment, CommentImg, CommentUser, DayBlock, Reply, CommentAction, ArticlesComment,CommentBox,CommentUserBox ,ShowMore,LinkBlock} from './styles';

const comment = ({ type, name, ...props }: any) => {
  return (
    <ArticlesComment>
      <h2>Comments </h2>
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
        <p>Very much enjoying my time here. Joined in March 2021 and have zero regrets. The space is immaculately clean and their COVID protocols are impressive--hand sanitizer, temp checks, contact tracing, personalized sanitizing supplies as you move around gym, mandatory masks, very strong air filters, and immediate cleaning post classes. I feel very safe inside.</p>
        <p>And dont forget about the knowledgeable staff. My personal training sessions have always been top notch. I LOVE taking the classesits nice to have plenty of indoor and outdoor options. The classes always kick my butt in a good way. Plus their recorded classes are great, too. I feel like what I pay each month is an excellent value.</p>
        <p>Support a local Black-owned business, get into shape, and have fun while you do it!! No more waiting!</p>
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
       {/* <CommentBox>
        <CommentUserBox>
          <CommentUser>
              <CommentImg>
                <Image
                    src="/assets/images/kid.png"
                    alt="location icon"
                    className="bookmar"
                    width={35}
                    height={35}
                  />
              </CommentImg>
              <h3>Abby Swhatson </h3>
          </CommentUser>
          <div className='star'>  <Image
            src={'/assets/svgs/StarIcon.svg'}
            alt="article image"
            width={31}
            height={31}
          /> 5,0</div>
      </CommentUserBox>
        <p>From lino cutting to surfing to children’s mental health, their hobbies and interests range far and wide. They are passionate about turning your everyday moments into memories and bringing you inspiring ideas to have fun with your family.</p>
        <CommentAction>
           <DayBlock>2 days ago</DayBlock>
           <Reply>
            <label>1 liked </label> 
            <Image
                  src={'/assets/svgs/like.svg'}
                  alt="article image"
                  width={24}
                  height={24}
              />
            </Reply>
         </CommentAction>
      </CommentBox> */}
      <ShowMore>
          <LinkBlock href={'#'}>See more comments</LinkBlock>
      </ShowMore>
      <LeaveComment>
        <StyledInput placeholder={'Leave a comment'} name={name} type={type} />
          <Button
          content=""
          type="submit"
          disabled={false}
          loading={false}
        >
          <Image
            src="/assets/svgs/send.svg"
            alt="location icon"
            className="bookmar"
            width={20}
            height={20}
          />

        </Button>
      </LeaveComment>
    </ArticlesComment>
  );
};

export default comment;
