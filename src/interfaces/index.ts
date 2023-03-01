import { Entities, GQDocument } from 'src/types';

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
  orgName?: string;
  website?: string;
  orgType?: string;
  stripeCustomerId: string;
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
  id: string;
  authorImg: string | undefined;
  authorName: string | undefined;
  articleTitle: string | undefined;
  slug: string | undefined;
  readingTime: string | undefined;
  createdAt: string | undefined;
  bookedMarked?: boolean;
  saveArticle?: () => void;
  category?: string;
  articleImage?: string;
  articleIntro?: string;
  className?: string;
}

export interface ICategory {
  entityDocument: GQDocument;
}

export interface ISearch {
  entities: Entities[];
}

export interface IActivityCard {
  id: string;
  hostName: string | undefined;
  hostImage: string | undefined;
  title: string;
  slug: string | undefined;
  location: string | undefined;
  venue: string | undefined;
  venueName: string | undefined;
  route: string;
  startDate: string;
  starTime: string;
  price: string;
  image: string | undefined;
  userId?: string;
  hostId?: string;
  category?: string;
  // className?: string | undefined;
}

export interface IEventCard {
  hostName: string | undefined;
  title: string;
  location: string | undefined;
  venue: string | undefined;
  venueName: string | undefined;
  route: string;
  starDate: string;
  starTime: string;
  price: string;
  image: string | undefined;
  id?: string;
  className?: string | undefined;
  slug?: string | undefined;
  userId?: string;
  hostId?: string;
  category?: string;
  hostImage?: string;
}