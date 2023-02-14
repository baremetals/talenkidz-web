import Comment from 'public/assets/icons/Comment';
import DragIcon from 'public/assets/icons/DragIcon';
import FavouriteInactive from 'public/assets/icons/FavouriteInactive';
import Heart from 'public/assets/icons/Heart';
import Pencil from 'public/assets/icons/Pencil';
import React from 'react';
import { ArticleCard, ArticleEditButton, ArticleImg, ArticleOption, AuthorImg, AuthorName } from './styles';

const Article = () => {
  return (
    <ArticleCard>
      <DragIcon className='drag-icon' />
      <div className="article-primary">
        <div className="article-profile">
          <AuthorImg src="./assets/images/avatar.png" alt="user avatar" />
          <AuthorName>Ally Blackmay</AuthorName>
        </div>
        <h1>Raise good Humans</h1>
        <p>What I learned when my kids said college wasn’t for them</p>
        <div className="article-footer">
          <div className="article-publish">
            <span className="article-date">Mar 8</span>
            <span className="article-divider" />
            <span className="article-date">9 min read</span>
          </div>
          <div className="article-status">Upbringing</div>
        </div>
      </div>

      <div className="article-seconary">
        <ArticleImg src="./assets/images/article-media.png" alt="article media" />
        <div className='article-actions'>
          <ArticleEditButton>Edit <Pencil /></ArticleEditButton>

          <div className='article-options'>
            <ArticleOption>1050 likes <Heart className="like-icon" /></ArticleOption>
            <ArticleOption>52 com <Comment className="comment-icon" /></ArticleOption>
            <ArticleOption>32 saving <FavouriteInactive className="save-icon" /></ArticleOption>
          </div>
        </div>
      </div>
    </ArticleCard>
  );
};

export default Article;
