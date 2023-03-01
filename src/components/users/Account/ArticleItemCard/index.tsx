import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { cutTextToLength } from 'src/utils';
import { IArticleCard } from 'src/interfaces';
import Comment from 'public/assets/icons/Comment';
import DragIcon from 'public/assets/icons/DragIcon';
import FavouriteInactive from 'public/assets/icons/FavouriteInactive';
import Heart from 'public/assets/icons/Heart';
import Pencil from 'public/assets/icons/Pencil';

import {
  ArticleCard,
  ArticleEditButton,
  ArticleImg,
  ArticleOption,
  AuthorImg,
  AuthorName,
} from './styles';

interface IArticleItemCard extends IArticleCard {
  totalLikes: number;
  totalComments: number;
  totalBookmarks: number;
  userId: string;
  creatorId: string;
}

const ArticleItemCard: React.FC<IArticleItemCard> = ({
  authorImg,
  authorName,
  articleTitle,
  articleIntro,
  articleImage,
  readingTime,
  createdAt,
  category,
  slug,
  totalLikes,
  totalComments,
  totalBookmarks,
  userId,
  creatorId,
}) => {
  return (
    <ArticleCard>
      <DragIcon className="drag-icon" />
      <div className="article-primary">
        <div className="article-profile">
          <AuthorImg
            src={authorImg || './assets/images/avatar.png'}
            alt="user avatar"
          />
          <AuthorName>{authorName}</AuthorName>
        </div>
        <Link passHref href={`/articles/${category}/${slug}`}>
          <h3>{cutTextToLength(articleTitle, 18)}</h3>
        </Link>

        <p>{cutTextToLength(articleIntro as string, 80)}</p>
        <div className="article-footer">
          <div className="article-publish">
            <span className="article-date">
              {dayjs(createdAt).format('MMM D')}
            </span>
            <span className="article-divider" />
            <span className="article-date">{readingTime} read</span>
          </div>
          <div className="article-status">{category}</div>
        </div>
      </div>

      <div className="article-seconary">
        <ArticleImg
          src={articleImage || './assets/images/article-media.png'}
          alt="article media"
        />
        <div className="article-actions">
          {userId === creatorId ? <ArticleEditButton>
            Edit <Pencil />
          </ArticleEditButton>: null}
          

          <div className="article-options">
            <ArticleOption>
              {totalLikes} likes <Heart className="like-icon" />
            </ArticleOption>
            <ArticleOption>
              {totalComments} com <Comment className="comment-icon" />
            </ArticleOption>
            <ArticleOption>
              {totalBookmarks} saving{' '}
              <FavouriteInactive className="save-icon" />
            </ArticleOption>
          </div>
        </div>
      </div>
    </ArticleCard>
  );
};

export default ArticleItemCard;