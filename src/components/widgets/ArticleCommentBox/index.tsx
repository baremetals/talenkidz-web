import Button from 'components/users/Auth/Button';
import Image from 'next/image';
import {StyledInput, LeaveComment, CommentImg, CommentUser, DayBlock, Reply, CommentAction, ArticlesComment,CommentBox } from './styles';

const comment = ({ type, name, ...props }: any) => {
  return (
    <ArticlesComment>
      <h2>Comments </h2>
      <CommentBox>
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
        <p>From lino cutting to surfing to children’s mental health, their hobbies and interests range far and wide. They are passionate about turning your everyday moments into memories and bringing you inspiring ideas to have fun with your family.</p>
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
