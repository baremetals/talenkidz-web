import styled from 'styled-components';

export const ArticleCard = styled.div`
  width: 100%;
  background: #f1faff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  padding: 24px 12px 24px 18px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  .article-primary {
    margin-right: 40px;
    flex: 1;

    @media (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 40px;
      width: 100%;
    }

    h3 {
      font-weight: 600;
      font-size: 30px;
      letter-spacing: -0.01em;
      color: #39007E;
      text-transform: capitalize;
      margin-bottom: 16px;
    }

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #574e62;
    }
  }

  .article-profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .article-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
  }

  .article-publish {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .article-date {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 2, 31, 0.9);
  }

  .article-divider {
    width: 10px;
    height: 10px;
    background: rgba(57, 0, 126, 0.2);
    border-radius: 50%;
  }

  .article-status {
    min-height: 24px;
    background: rgba(57, 0, 126, 0.2);
    border-radius: 20px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    padding: 4px 14px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.01em;
    color: rgba(57, 0, 126, 0.59);
  }

  .article-seconary {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .article-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .article-options {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .drag-icon {
    margin-right: 20px;
  }
`;

export const AuthorImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const ArticleImg = styled.img`
  width: 147px;
  height: 160px;
  background: #7495a5;
  box-shadow: 40px 0px 40px rgba(0, 0, 0, 0.02);
  object-fit: cover;
  object-position: top center;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 50%;
  margin-right: 20px;
`;

export const ArticleEditButton = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  height: 30px;
  border: 1px solid #39007e;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #0f021f;

  &:hover {
    background: transparent;
    color: #0f021f;
  }

  svg {
    margin-left: 7px;
    width: 10px;
    height: 10px;
  }
`;

export const AuthorName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #0f021f;
`;

export const ArticleOption = styled.button`
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  color: #0f021f;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    background: transparent;
    color: #0f021f;
  }

  .like-icon,
  .comment-icon {
    width: 20px;
    height: 20px;
    margin-left: 4px;
  }

  .save-icon {
    width: 20px;
    height: 21.12px;
    margin-left: 4px;
  }
`;
