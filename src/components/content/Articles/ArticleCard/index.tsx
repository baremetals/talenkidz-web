import Image from 'next/image';
import Link from 'next/link';
import {
  CategoryBtn,
  ArticleImageColumn,
  ArticleBlurb,
  ArticleInfo,
  Date,
  Time,
  AuthorBlock,
  ArticleImageBlock,
} from './styles';

import Button from 'components/users/Auth/Button';
import {
  CardWrapper,
  IconBlock,
  Datetime,
  AuthorImg,
  AuthorWrap,
} from '../styles';
import { IArticleCard } from 'src/interfaces';

const ArticleCard = ({
  authorImg,
  authorName,
  articleTitle,
  ArticleIntro,
  ArticleImage,
  readingTime,
  createdAt,
  category,
  saveArticle,
  bookedMarked,
  slug,
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
          {!bookedMarked && (
            <Image
              src="/assets/svgs/bookmar.svg"
              alt="bookmark icon"
              className="bookmar"
              width={25}
              height={25}
              onClick={saveArticle}
            />
          )}
        </AuthorBlock>
        <Link passHref href={`/articles/${category}/${slug}`}>
          <h3>{articleTitle}</h3>
        </Link>

        <ArticleBlurb>{ArticleIntro}</ArticleBlurb>
        <Datetime>
          <Date>{createdAt}</Date>
          <span></span>
          <Time>{readingTime} read</Time>
          <Link passHref href={`/articles/${category}`}>
            <CategoryBtn>
              <Button
                content={category as string}
                type="button"
                disabled={false}
                loading={false}
              />
            </CategoryBtn>
          </Link>
        </Datetime>
      </ArticleInfo>
      <ArticleImageColumn>
        <ArticleImageBlock>
          <Link passHref href={`/articles/${category}/${slug}`}>
            <Image
              src={ArticleImage || '/assets/images/kid.png'}
              alt="article image"
              className="bookmar"
              width={166}
              height={166}
            />
          </Link>
        </ArticleImageBlock>
      </ArticleImageColumn>
    </CardWrapper>
  );
};

export default ArticleCard;
