import {
  CategoryBtn,
  ArticleImageColumn,
  ArticleBlurb,
  ArticleImageBlock,
  CardWrapper,
  IconBlock,
  ArticleInfo,
  Datetime,
  Date,
  Time,
  AuthorBlock,
  AuthorWrap,
  AuthorImg,
} from './styles';
import Image from 'next/image';
import Button from 'components/users/Auth/Button';


interface IArticleCard {
  authorImg: string | undefined;
  authorName: string | undefined;
  articleTitle: string | undefined;
  ArticleIntro: string | undefined;
  ArticleImage: string | undefined;
  readingTime: string | undefined;
  createdAt: string | undefined;
  category: string;
  className?: string | undefined;
}

const ArticleCard = ({
  authorImg,
  authorName,
  articleTitle,
  ArticleIntro,
  ArticleImage,
  readingTime,
  createdAt,
  category,
  ...props
}: IArticleCard) => {
  return (
    <CardWrapper {...props}>
      <IconBlock>
        <Image
          src="/assets/svgs/menukids.svg"
          alt="menu icon"
          className="cubeImg"
          width={30}
          height={20}
        />
      </IconBlock>
      <ArticleInfo>
        <AuthorBlock>
          <AuthorWrap>
            <AuthorImg>
              <Image
                src={authorImg || '/assets/images/kid.png'}
                alt="author image"
                className="bookmar"
                width={140}
                height={140}
              />
            </AuthorImg>
            <p>{authorName}</p>
          </AuthorWrap>
          <Image
            src="/assets/svgs/bookmar.svg"
            alt="location icon"
            className="bookmar"
            width={25}
            height={25}
          />
        </AuthorBlock>
        <h3>{articleTitle}</h3>
        <ArticleBlurb>{ArticleIntro}</ArticleBlurb>
        <Datetime>
          <Date>{createdAt}</Date>
          <span></span>
          <Time>{readingTime} read</Time>
          <CategoryBtn>
            <Button
              content={category}
              type="submit"
              disabled={false}
              loading={false}
            ></Button>
          </CategoryBtn>
        </Datetime>
      </ArticleInfo>
      <ArticleImageColumn>
        <ArticleImageBlock>
          <Image
            src={ArticleImage || '/assets/images/kid.png'}
            alt="article image"
            className="bookmar"
            width={166}
            height={166}
          />
        </ArticleImageBlock>
      </ArticleImageColumn>
    </CardWrapper>
  );
};

export default ArticleCard;
