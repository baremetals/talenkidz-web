import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { cutTextToLength } from 'src/utils';

import { IArticleCard } from 'src/interfaces';
import {
  CardWrapper,
  IconBlock,
  Datetime,
  AuthorImg,
  AuthorWrap,
} from '../styles';
import { CardInfoWrap, Date, Time, CardAuthorBlock } from './styles';
import BookMarkIcon from 'components/widgets/BookMarkIcon';


const SmallACard = ({
  id,
  authorImg,
  authorName,
  articleTitle,
  articleImage,
  readingTime,
  createdAt,
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
          <BookMarkIcon
            id={id as string}
            title={articleTitle as string}
            slug={slug as string}
            image={articleImage as string}
            width={25}
            height={25}
          />
        </CardAuthorBlock>
        <Link passHref href={`/articles/${category}/${slug}`}>
          <h3>{cutTextToLength(articleTitle, 18)}</h3>
        </Link>
        <Datetime>
          <Date>{dayjs(createdAt).format('MMM D')}</Date>
          <span></span>
          <Time>{readingTime} read</Time>
        </Datetime>
      </CardInfoWrap>
    </CardWrapper>
  );
};

export default SmallACard;
