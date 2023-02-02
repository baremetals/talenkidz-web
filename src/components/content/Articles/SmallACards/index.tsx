import Image from 'next/image';
import Link from 'next/link';

import { IArticleCard } from 'src/interfaces';
import {
  CardWrapper,
  IconBlock,
  Datetime,
  AuthorImg,
  AuthorWrap,
} from '../styles';
import { CardInfoWrap, Date, Time, CardAuthorBlock } from './styles';


const SmallACard = ({
  authorImg,
  authorName,
  articleTitle,
  readingTime,
  createdAt,
  bookedMarked,
  saveArticle,
  slug,
  category
}: IArticleCard) => {

  return (
    <CardWrapper>
      <IconBlock>
        <Image
          src="/assets/svgs/menukids.svg"
          alt="menu icon"
          className="cubeImg"
          width={30}
          height={20}
        />
      </IconBlock>
      <CardInfoWrap>
        <CardAuthorBlock>
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
        </CardAuthorBlock>
        <Link passHref href={`/articles/${category}/${slug}`}>
          <h3>{articleTitle}</h3>
        </Link>
        <Datetime>
          <Date>{createdAt}</Date>
          <span></span>
          <Time>{readingTime} read</Time>
        </Datetime>
      </CardInfoWrap>
    </CardWrapper>
  );
};

export default SmallACard;
