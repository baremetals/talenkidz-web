import { ChangeEvent } from 'react';
import {
  ArticleEntity,
  ArticlesDocument,
  EventEntity,
  EventsDocument,
  ListingEntity,
  ListingsDocument,
  FilteredArticlesDocument,
  ResponseCollectionMeta,
  // Article,
  // Listing,
  // Event,
} from 'generated/graphql';

export type Entities = ArticleEntity | EventEntity | ListingEntity;

export type onlineLocationType = {
  '@type': string;
  url: string;
};

export type locationType = {
  '@type': string;
  name: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
};

export type bothLocationType = [onlineLocationType, locationType];

export type FileType = {
  lastModified: any;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
} | null;

export type FormProps = {
  title: string;
  description: string;
  category: string;
  body: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  listImage: File | null;
  name: string;
  street: string;
  town: string;
  postCode: string;
  id: string;
  linkButtonText: string;
  link: string;
  price: number;
  venue: string;
};

export type uploadProps = {
  event: ChangeEvent<HTMLInputElement>;
  setUploadImg: React.Dispatch<React.SetStateAction<File | string>>;
  setDisplayImg: React.Dispatch<React.SetStateAction<string| null>>;
};

export type TBookMark = {
  title: string;
  itemId: string;
  slug: string;
  image: string;
  type: string;
  userName?: string;
  userImage?: string;
  date?: string;
  category?: string;
  readingTimeOrPrice: string;
  time?: string;
  venueName?: string;
  venue?: string;
  blurb?: string;
  location?: string;
};

export type TCategory = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    colour: string;
  };
};

export type TTags = {
  id: string;
  attributes: {
    name: string;
    createdAt: string;
  };
};

export type TGetCats = {
  data: TCategory[];
  total: number;
};

export type TGetTags = {
  data: TTags[];
  total: number;
};

export type GQDocument =
  | typeof ArticlesDocument
  | typeof EventsDocument
  | typeof ListingsDocument
  | typeof FilteredArticlesDocument;

export type TGetArticles = {
  data: {
    articles: {
      data: ArticleEntity[];
      meta: ResponseCollectionMeta;
    };
  };
};

export type TGetActivities = {
  data: {
    listings: {
      data: ListingEntity[];
      meta: ResponseCollectionMeta;
    };
  };
};

export type TFetchActivityState = {
  data: {
    listings: {
      data: ListingEntity[];
      meta: ResponseCollectionMeta;
    };
  };
};

export type TFetchEventState = {
  data: {
    events: {
      data: EventEntity[];
      meta: ResponseCollectionMeta;
    };
  };
};

export type TNotifications = {
  sender: string;
  recipientEmail: string;
  recipientName: string;
  subject: string;
  message: string;

  messageType: string;
  messageImage: string;
  entityType: string;
  entityId: string | number;
  messageLink?: string;
  read?: boolean;
  emailNotificationsOn?: boolean;
  appNotificationsOn?: boolean;
  createdAt?: string;
};

export type TArticleFormProps = {
  title: string;
  blurb: string;
  category: string;
  body: string;
  heroImage: File | null | string;
  readingTime: string;
  keywords: string;
  heroImageId: string;
};

export type TFaq = {
  id: string;
  attributes: {
    question: string;
    answer: string;
    createdAt: string;
  };
};

export type TFeatureSlider = {
  id: string;
  attributes: {
    title: string;
    featureImage: string;
    buttonText: string;
    question: string;
    answer: string;
    createdAt: string;
  };
};