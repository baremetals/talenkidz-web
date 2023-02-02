export interface AuthUser {
  logo: string | undefined;
  id?: number;
  firebaseUserId?: string;
  username?: string;
  fullName?: string;
  avatar?: string;
  backgroundImg?: string;
  userType?: string;
  bio?: string;
  mailinglist?: boolean;
  membership?: string;
  firebasePassword?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  gender?: string;
  pronoun?: string;
  createdAt?: string;
  updatedAt?: string;
  orgId?: string;
  organisation?: [Object];
}


export interface Comment {
  id: string;
  body: string;
  user: AuthUser;
  createdOn: Date;
  post: Post;
}

export interface Post {
  id: string;
  views: number;
  title: string;
  body: string;
  user: AuthUser;
  points: number;
  createdOn: Date;
  lastModifiedOn: Date;
  threadItems: Array<Comment>;
}

export interface IArticleCard {
  authorImg: string | undefined;
  authorName: string | undefined;
  articleTitle: string | undefined;
  slug: string | undefined;
  readingTime: string | undefined;
  createdAt: string | undefined;
  bookedMarked: boolean;
  saveArticle: () => void;
  category?: string;
  ArticleImage?: string | undefined;
  ArticleIntro?: string | undefined;
  className?: string | undefined;
}