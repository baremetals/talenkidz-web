import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { cutTextToLength } from 'src/utils';

import {
  ArticleBlurb,
  ArticleImageBlock,
  ArticleImageColumn,
  ArticleInfo,
  AuthorBlock,
  CategoryBtn,
  Date,
  Time,
} from './styles';

import Button from 'components/users/Auth/Button';
import BookMarkIcon from 'components/widgets/BookMarkIcon';
import { IArticleCard } from 'src/interfaces';
import {
  AuthorImg,
  AuthorWrap,
  CardWrapper,
  Datetime,
  IconBlock,
} from '../styles';

const ArticleCard = ({
  id,
  authorImg,
  authorName,
  articleTitle,
  articleIntro,
  articleImage,
  readingTime,
  createdAt,
  category,
  slug,
}: IArticleCard) => {
  return (
    <CardWrapper className={'kidsRow'}>
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
          <BookMarkIcon
            id={id}
            title={articleTitle as string}
            slug={slug as string}
            image={articleImage as string}
            width={25}
            height={25}
            userName={authorName as string}
            userImage={authorImg as string}
            date={createdAt as string}
            readingTimeOrPrice={readingTime as string}
            blurb={articleIntro as string}
            category={category as string}
            type={'article'}
          />
          {/* <div
            className={bookedMarked ? 'active' : 'inactive'}
            // onClick={handleClick}
          >
            {bookedMarked ? (
              <div className="bookmarkActive">
                <Image
                  src="/assets/svgs/bookmark-active.svg"
                  alt="bookmark icon"
                  width={25}
                  height={25}
                  onClick={saveArticle}
                />
              </div>
            ) : (
              <div className="bookmark">
                <Image
                  src="/assets/svgs/bookmar.svg"
                  alt="bookmark icon"
                  width={25}
                  height={25}
                  onClick={saveArticle}
                />
              </div>
            )}
          </div> */}
        </AuthorBlock>
        <Link passHref href={`/articles/${category}/${slug}`}>
          <h3>{cutTextToLength(articleTitle as string, 18)}</h3>
        </Link>

        <ArticleBlurb>
          {cutTextToLength(articleIntro as string, 80)}
        </ArticleBlurb>
        <Datetime>
          <Date>{dayjs(createdAt).format('MMM D')}</Date>
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
        <Link passHref href={`/articles/${category}/${slug}`}>
          <ArticleImageBlock>
            <Image
              src={articleImage || '/assets/images/kid.png'}
              alt="article image"
              className="bookmar"
              width={166}
              height={166}
            />
          </ArticleImageBlock>
        </Link>
      </ArticleImageColumn>
    </CardWrapper>
  );
};

export default ArticleCard;
