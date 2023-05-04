import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from 'components/widgets/Tooltip';
import { cutTextToLength } from 'src/utils';

import BookMarkIcon from 'components/widgets/BookMarkIcon';
import { IArticleCard } from 'src/interfaces';
import {
  AuthorImg,
  AuthorWrap,
  CardWrapper,
  Datetime,
  IconBlock,
} from '../styles';
import { CardAuthorBlock, CardInfoWrap, Date, Time } from './styles';

const SmallACard = ({
  id,
  authorImg,
  authorName,
  articleTitle,
  articleImage,
  readingTime,
  createdAt,
  slug,
  category,
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
            userName={authorName as string}
            userImage={authorImg as string}
            date={createdAt as string}
            readingTimeOrPrice={readingTime as string}
            category={category as string}
            type={'article'}
          />
        </CardAuthorBlock>
        <Link passHref href={`/articles/${category}/${slug}`}>
          <h3 data-tooltip-id="my-tooltip" data-tooltip-content={articleTitle}>
            {cutTextToLength(articleTitle, 18)}
          </h3>
        </Link>
        <Tooltip />
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
