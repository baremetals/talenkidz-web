import Button from 'components/users/Auth/Button';
import CommentBoxs from 'components/widgets/ArticleCommentBox/CommentBox';
import Image from 'next/image';
import {
  StyledInput,
  LeaveComment,
  ArticlesComment,
  ShowMore,
  LinkBlock,
} from './styles';

const comment = ({ type, name, ...props }: any) => {
  return (
    <ArticlesComment>
      <h2>Comments </h2>
      <CommentBoxs />
      <ShowMore>
        <LinkBlock href={'#'}>See more comments</LinkBlock>
      </ShowMore>
      <LeaveComment>
        <StyledInput placeholder={'Leave a comment'} name={name} type={type} />
        <Button content="" type="submit" disabled={false} loading={false}>
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
