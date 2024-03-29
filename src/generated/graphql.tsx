import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Long: any;
  Time: any;
  Upload: any;
};

export type AboutUs = {
  __typename?: 'AboutUs';
  cloudImage?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstBlock?: Maybe<Scalars['JSON']>;
  firstQuote?: Maybe<Scalars['String']>;
  firstQuoteAuthor?: Maybe<Scalars['String']>;
  fithBlock?: Maybe<Scalars['JSON']>;
  fourthBlock?: Maybe<Scalars['String']>;
  graphImage?: Maybe<Scalars['String']>;
  lastBlock?: Maybe<Scalars['JSON']>;
  mainTitle?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  puzzleImage?: Maybe<Scalars['String']>;
  secondBlock?: Maybe<Scalars['JSON']>;
  secondQuote?: Maybe<Scalars['String']>;
  secondQuoteAuthor?: Maybe<Scalars['String']>;
  spanKey?: Maybe<Scalars['String']>;
  thirdBlock?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutUsEntity = {
  __typename?: 'AboutUsEntity';
  attributes?: Maybe<AboutUs>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutUsEntityResponse = {
  __typename?: 'AboutUsEntityResponse';
  data?: Maybe<AboutUsEntity>;
};

export type AboutUsInput = {
  cloudImage?: InputMaybe<Scalars['String']>;
  firstBlock?: InputMaybe<Scalars['JSON']>;
  firstQuote?: InputMaybe<Scalars['String']>;
  firstQuoteAuthor?: InputMaybe<Scalars['String']>;
  fithBlock?: InputMaybe<Scalars['JSON']>;
  fourthBlock?: InputMaybe<Scalars['String']>;
  graphImage?: InputMaybe<Scalars['String']>;
  lastBlock?: InputMaybe<Scalars['JSON']>;
  mainTitle?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  puzzleImage?: InputMaybe<Scalars['String']>;
  secondBlock?: InputMaybe<Scalars['JSON']>;
  secondQuote?: InputMaybe<Scalars['String']>;
  secondQuoteAuthor?: InputMaybe<Scalars['String']>;
  spanKey?: InputMaybe<Scalars['String']>;
  thirdBlock?: InputMaybe<Scalars['JSON']>;
};

export type Article = {
  __typename?: 'Article';
  SEO?: Maybe<ComponentSeoSeo>;
  author?: Maybe<AuthorEntityResponse>;
  blurb?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creator?: Maybe<UsersPermissionsUserEntityResponse>;
  firebaseId?: Maybe<Scalars['String']>;
  heroImage: UploadFileEntityResponse;
  likes?: Maybe<Array<Maybe<ComponentLikesLikes>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  readingTime?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  totalBookmarks?: Maybe<Scalars['Long']>;
  totalComments?: Maybe<Scalars['Int']>;
  totalLikes?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Long']>;
};


export type ArticleLikesArgs = {
  filters?: InputMaybe<ComponentLikesLikesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  author?: InputMaybe<AuthorFiltersInput>;
  blurb?: InputMaybe<StringFilterInput>;
  body?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  creator?: InputMaybe<UsersPermissionsUserFiltersInput>;
  firebaseId?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  likes?: InputMaybe<ComponentLikesLikesFiltersInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  readingTime?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  totalBookmarks?: InputMaybe<LongFilterInput>;
  totalComments?: InputMaybe<IntFilterInput>;
  totalLikes?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  views?: InputMaybe<LongFilterInput>;
};

export type ArticleInput = {
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  author?: InputMaybe<Scalars['ID']>;
  blurb?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  creator?: InputMaybe<Scalars['ID']>;
  firebaseId?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<Scalars['ID']>;
  likes?: InputMaybe<Array<InputMaybe<ComponentLikesLikesInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  readingTime?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  totalBookmarks?: InputMaybe<Scalars['Long']>;
  totalComments?: InputMaybe<Scalars['Int']>;
  totalLikes?: InputMaybe<Scalars['Int']>;
  views?: InputMaybe<Scalars['Long']>;
};

export type Author = {
  __typename?: 'Author';
  avatar?: Maybe<UploadFileEntityResponse>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthorEntity = {
  __typename?: 'AuthorEntity';
  attributes?: Maybe<Author>;
  id?: Maybe<Scalars['ID']>;
};

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse';
  data?: Maybe<AuthorEntity>;
};

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  data: Array<AuthorEntity>;
  meta: ResponseCollectionMeta;
};

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  jobTitle?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  bio?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  colour?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Long']>;
};


export type CategoryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  colour?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  views?: InputMaybe<LongFilterInput>;
};

export type CategoryInput = {
  colour?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  views?: InputMaybe<Scalars['Long']>;
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type CommentEntity = {
  __typename?: 'CommentEntity';
  attributes?: Maybe<Comment>;
  id?: Maybe<Scalars['ID']>;
};

export type CommentEntityResponse = {
  __typename?: 'CommentEntityResponse';
  data?: Maybe<CommentEntity>;
};

export type CommentEntityResponseCollection = {
  __typename?: 'CommentEntityResponseCollection';
  data: Array<CommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isDisabled?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CommentInput = {
  body?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  users_permissions_user?: InputMaybe<Scalars['ID']>;
};

export type ComponentAddressLocation = {
  __typename?: 'ComponentAddressLocation';
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longtitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
};

export type ComponentAddressLocationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAddressLocationFiltersInput>>>;
  latitude?: InputMaybe<FloatFilterInput>;
  longtitude?: InputMaybe<FloatFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAddressLocationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAddressLocationFiltersInput>>>;
  postCode?: InputMaybe<StringFilterInput>;
  street?: InputMaybe<StringFilterInput>;
  town?: InputMaybe<StringFilterInput>;
};

export type ComponentAddressLocationInput = {
  id?: InputMaybe<Scalars['ID']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longtitude?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  postCode?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  town?: InputMaybe<Scalars['String']>;
};

export type ComponentBookMarksReadingList = {
  __typename?: 'ComponentBookMarksReadingList';
  blurb?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  readingTimeOrPrice?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userImage?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  venue?: Maybe<Scalars['String']>;
  venueName?: Maybe<Scalars['String']>;
};

export type ComponentBookMarksReadingListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBookMarksReadingListFiltersInput>>>;
  blurb?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<StringFilterInput>;
  date?: InputMaybe<StringFilterInput>;
  image?: InputMaybe<StringFilterInput>;
  itemId?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBookMarksReadingListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBookMarksReadingListFiltersInput>>>;
  readingTimeOrPrice?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  time?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  userImage?: InputMaybe<StringFilterInput>;
  userName?: InputMaybe<StringFilterInput>;
  venue?: InputMaybe<StringFilterInput>;
  venueName?: InputMaybe<StringFilterInput>;
};

export type ComponentBookMarksReadingListInput = {
  blurb?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  itemId?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  readingTimeOrPrice?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userImage?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Scalars['String']>;
  venueName?: InputMaybe<Scalars['String']>;
};

export type ComponentLikesLikes = {
  __typename?: 'ComponentLikesLikes';
  id: Scalars['ID'];
  userId: Scalars['Int'];
};

export type ComponentLikesLikesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentLikesLikesFiltersInput>>>;
  not?: InputMaybe<ComponentLikesLikesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLikesLikesFiltersInput>>>;
  userId?: InputMaybe<IntFilterInput>;
};

export type ComponentLikesLikesInput = {
  id?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type ComponentOrganisationOrganisation = {
  __typename?: 'ComponentOrganisationOrganisation';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  organisationType?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type ComponentOrganisationOrganisationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOrganisationOrganisationFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentOrganisationOrganisationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOrganisationOrganisationFiltersInput>>>;
  organisationType?: InputMaybe<StringFilterInput>;
  website?: InputMaybe<StringFilterInput>;
};

export type ComponentOrganisationOrganisationInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  organisationType?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComponentSeoSeo = {
  __typename?: 'ComponentSeoSeo';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentSeoSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  image?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSeoSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSeoSeoInput = {
  author?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CookiePolicy = {
  __typename?: 'CookiePolicy';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CookiePolicyEntity = {
  __typename?: 'CookiePolicyEntity';
  attributes?: Maybe<CookiePolicy>;
  id?: Maybe<Scalars['ID']>;
};

export type CookiePolicyEntityResponse = {
  __typename?: 'CookiePolicyEntityResponse';
  data?: Maybe<CookiePolicyEntity>;
};

export type CookiePolicyInput = {
  content?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Enquiry_Reason {
  Feedback = 'feedback',
  GeneralEnquiry = 'general_enquiry'
}

export enum Enum_Event_Linkbuttontext {
  BuyNow = 'Buy_Now',
  BuyTickets = 'Buy_Tickets',
  LearnMore = 'Learn_More',
  Register = 'Register',
  VisitUs = 'Visit_Us'
}

export enum Enum_Event_Status {
  Cancelled = 'cancelled',
  Disabled = 'disabled',
  Live = 'live',
  Scheduled = 'scheduled'
}

export enum Enum_Event_Venue {
  Both = 'both',
  Location = 'location',
  Online = 'online'
}

export enum Enum_Listing_Linkbuttontext {
  BuyNow = 'Buy_Now',
  BuyTickets = 'Buy_Tickets',
  LearnMore = 'Learn_More',
  Register = 'Register',
  VisitUs = 'Visit_Us'
}

export enum Enum_Listing_Status {
  Cancelled = 'cancelled',
  Disabled = 'disabled',
  Live = 'live',
  Scheduled = 'scheduled'
}

export enum Enum_Listing_Venue {
  Both = 'both',
  Location = 'location',
  Online = 'online'
}

export enum Enum_Product_Type {
  Event = 'event',
  Listing = 'listing',
  Subscription = 'subscription'
}

export enum Enum_Subscription_Paymentoption {
  Month = 'month',
  Year = 'year'
}

export enum Enum_Userspermissionsuser_Membership {
  Partner = 'Partner',
  Basic = 'basic',
  Organisation = 'organisation',
  Premium = 'premium'
}

export enum Enum_Userspermissionsuser_Usertype {
  Organisation = 'organisation',
  Standard = 'standard'
}

export type Enquiry = {
  __typename?: 'Enquiry';
  createdAt?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<Enum_Enquiry_Reason>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EnquiryEntity = {
  __typename?: 'EnquiryEntity';
  attributes?: Maybe<Enquiry>;
  id?: Maybe<Scalars['ID']>;
};

export type EnquiryEntityResponse = {
  __typename?: 'EnquiryEntityResponse';
  data?: Maybe<EnquiryEntity>;
};

export type EnquiryEntityResponseCollection = {
  __typename?: 'EnquiryEntityResponseCollection';
  data: Array<EnquiryEntity>;
  meta: ResponseCollectionMeta;
};

export type EnquiryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EnquiryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EnquiryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EnquiryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reason?: InputMaybe<StringFilterInput>;
  subject?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EnquiryInput = {
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  reason?: InputMaybe<Enum_Enquiry_Reason>;
  subject?: InputMaybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  Location?: Maybe<ComponentAddressLocation>;
  SEO?: Maybe<ComponentSeoSeo>;
  body?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  endTime?: Maybe<Scalars['String']>;
  guests?: Maybe<EventGuestRelationResponseCollection>;
  host?: Maybe<UsersPermissionsUserEntityResponse>;
  link?: Maybe<Scalars['String']>;
  linkButtonText?: Maybe<Enum_Event_Linkbuttontext>;
  listImage?: Maybe<Scalars['String']>;
  order?: Maybe<OrderEntityResponse>;
  price?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  startTime?: Maybe<Scalars['Time']>;
  status?: Maybe<Enum_Event_Status>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  venue?: Maybe<Enum_Event_Venue>;
  views?: Maybe<Scalars['Long']>;
};


export type EventGuestsArgs = {
  filters?: InputMaybe<EventGuestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  attributes?: Maybe<Event>;
  id?: Maybe<Scalars['ID']>;
};

export type EventEntityResponse = {
  __typename?: 'EventEntityResponse';
  data?: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
  __typename?: 'EventEntityResponseCollection';
  data: Array<EventEntity>;
  meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
  Location?: InputMaybe<ComponentAddressLocationFiltersInput>;
  SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  endTime?: InputMaybe<StringFilterInput>;
  guests?: InputMaybe<EventGuestFiltersInput>;
  host?: InputMaybe<UsersPermissionsUserFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  linkButtonText?: InputMaybe<StringFilterInput>;
  listImage?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  order?: InputMaybe<OrderFiltersInput>;
  price?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  startTime?: InputMaybe<TimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  venue?: InputMaybe<StringFilterInput>;
  views?: InputMaybe<LongFilterInput>;
};

export type EventGuest = {
  __typename?: 'EventGuest';
  createdAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<EventEntityResponse>;
  guests?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  totalGuests?: Maybe<Scalars['Long']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type EventGuestGuestsArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EventGuestEntity = {
  __typename?: 'EventGuestEntity';
  attributes?: Maybe<EventGuest>;
  id?: Maybe<Scalars['ID']>;
};

export type EventGuestEntityResponse = {
  __typename?: 'EventGuestEntityResponse';
  data?: Maybe<EventGuestEntity>;
};

export type EventGuestEntityResponseCollection = {
  __typename?: 'EventGuestEntityResponseCollection';
  data: Array<EventGuestEntity>;
  meta: ResponseCollectionMeta;
};

export type EventGuestFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventGuestFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  guests?: InputMaybe<UsersPermissionsUserFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EventGuestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventGuestFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  totalGuests?: InputMaybe<LongFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventGuestInput = {
  event?: InputMaybe<Scalars['ID']>;
  guests?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  totalGuests?: InputMaybe<Scalars['Long']>;
};

export type EventGuestRelationResponseCollection = {
  __typename?: 'EventGuestRelationResponseCollection';
  data: Array<EventGuestEntity>;
};

export type EventInput = {
  Location?: InputMaybe<ComponentAddressLocationInput>;
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  endTime?: InputMaybe<Scalars['String']>;
  guests?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  host?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  linkButtonText?: InputMaybe<Enum_Event_Linkbuttontext>;
  listImage?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
  startTime?: InputMaybe<Scalars['Time']>;
  status?: InputMaybe<Enum_Event_Status>;
  title?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Enum_Event_Venue>;
  views?: InputMaybe<Scalars['Long']>;
};

export type EventRelationResponseCollection = {
  __typename?: 'EventRelationResponseCollection';
  data: Array<EventEntity>;
};

export type Faq = {
  __typename?: 'Faq';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqEntity = {
  __typename?: 'FaqEntity';
  attributes?: Maybe<Faq>;
  id?: Maybe<Scalars['ID']>;
};

export type FaqEntityResponse = {
  __typename?: 'FaqEntityResponse';
  data?: Maybe<FaqEntity>;
};

export type FaqEntityResponseCollection = {
  __typename?: 'FaqEntityResponseCollection';
  data: Array<FaqEntity>;
  meta: ResponseCollectionMeta;
};

export type FaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  question?: InputMaybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = AboutUs | Article | Author | Category | Comment | ComponentAddressLocation | ComponentBookMarksReadingList | ComponentLikesLikes | ComponentOrganisationOrganisation | ComponentSeoSeo | CookiePolicy | Enquiry | Event | EventGuest | Faq | I18NLocale | Listing | ListingGuest | Order | Organisation | Privacy | Product | Review | Subscription | Tag | TermsAndCondition | Timeline | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Listing = {
  __typename?: 'Listing';
  Location?: Maybe<ComponentAddressLocation>;
  SEO?: Maybe<ComponentSeoSeo>;
  body?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  endTime?: Maybe<Scalars['String']>;
  guests?: Maybe<ListingGuestRelationResponseCollection>;
  host?: Maybe<UsersPermissionsUserEntityResponse>;
  link?: Maybe<Scalars['String']>;
  linkButtonText?: Maybe<Enum_Listing_Linkbuttontext>;
  listImage?: Maybe<Scalars['String']>;
  order?: Maybe<OrderEntityResponse>;
  price?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  startTime?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Listing_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  venue?: Maybe<Enum_Listing_Venue>;
  views?: Maybe<Scalars['Long']>;
};


export type ListingGuestsArgs = {
  filters?: InputMaybe<ListingGuestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ListingTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListingEntity = {
  __typename?: 'ListingEntity';
  attributes?: Maybe<Listing>;
  id?: Maybe<Scalars['ID']>;
};

export type ListingEntityResponse = {
  __typename?: 'ListingEntityResponse';
  data?: Maybe<ListingEntity>;
};

export type ListingEntityResponseCollection = {
  __typename?: 'ListingEntityResponseCollection';
  data: Array<ListingEntity>;
  meta: ResponseCollectionMeta;
};

export type ListingFiltersInput = {
  Location?: InputMaybe<ComponentAddressLocationFiltersInput>;
  SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ListingFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  endTime?: InputMaybe<StringFilterInput>;
  guests?: InputMaybe<ListingGuestFiltersInput>;
  host?: InputMaybe<UsersPermissionsUserFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  linkButtonText?: InputMaybe<StringFilterInput>;
  listImage?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ListingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ListingFiltersInput>>>;
  order?: InputMaybe<OrderFiltersInput>;
  price?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  startTime?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  venue?: InputMaybe<StringFilterInput>;
  views?: InputMaybe<LongFilterInput>;
};

export type ListingGuest = {
  __typename?: 'ListingGuest';
  createdAt?: Maybe<Scalars['DateTime']>;
  guest?: Maybe<UsersPermissionsUserEntityResponse>;
  listing?: Maybe<ListingEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  totalGuests?: Maybe<Scalars['Long']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ListingGuestEntity = {
  __typename?: 'ListingGuestEntity';
  attributes?: Maybe<ListingGuest>;
  id?: Maybe<Scalars['ID']>;
};

export type ListingGuestEntityResponse = {
  __typename?: 'ListingGuestEntityResponse';
  data?: Maybe<ListingGuestEntity>;
};

export type ListingGuestEntityResponseCollection = {
  __typename?: 'ListingGuestEntityResponseCollection';
  data: Array<ListingGuestEntity>;
  meta: ResponseCollectionMeta;
};

export type ListingGuestFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ListingGuestFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  guest?: InputMaybe<UsersPermissionsUserFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  listing?: InputMaybe<ListingFiltersInput>;
  not?: InputMaybe<ListingGuestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ListingGuestFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  totalGuests?: InputMaybe<LongFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ListingGuestInput = {
  guest?: InputMaybe<Scalars['ID']>;
  listing?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  totalGuests?: InputMaybe<Scalars['Long']>;
};

export type ListingGuestRelationResponseCollection = {
  __typename?: 'ListingGuestRelationResponseCollection';
  data: Array<ListingGuestEntity>;
};

export type ListingInput = {
  Location?: InputMaybe<ComponentAddressLocationInput>;
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  body?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Date']>;
  endTime?: InputMaybe<Scalars['String']>;
  guests?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  host?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  linkButtonText?: InputMaybe<Enum_Listing_Linkbuttontext>;
  listImage?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
  startTime?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Listing_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Enum_Listing_Venue>;
  views?: InputMaybe<Scalars['Long']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createAuthor?: Maybe<AuthorEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createComment?: Maybe<CommentEntityResponse>;
  createEnquiry?: Maybe<EnquiryEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  createEventGuest?: Maybe<EventGuestEntityResponse>;
  createFaq?: Maybe<FaqEntityResponse>;
  createListing?: Maybe<ListingEntityResponse>;
  createListingGuest?: Maybe<ListingGuestEntityResponse>;
  createOrder?: Maybe<OrderEntityResponse>;
  createOrganisation?: Maybe<OrganisationEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createReview?: Maybe<ReviewEntityResponse>;
  createSubscription?: Maybe<SubscriptionEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTimeline?: Maybe<TimelineEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAboutUs?: Maybe<AboutUsEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteAuthor?: Maybe<AuthorEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteComment?: Maybe<CommentEntityResponse>;
  deleteCookiePolicy?: Maybe<CookiePolicyEntityResponse>;
  deleteEnquiry?: Maybe<EnquiryEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteEventGuest?: Maybe<EventGuestEntityResponse>;
  deleteFaq?: Maybe<FaqEntityResponse>;
  deleteListing?: Maybe<ListingEntityResponse>;
  deleteListingGuest?: Maybe<ListingGuestEntityResponse>;
  deleteOrder?: Maybe<OrderEntityResponse>;
  deleteOrganisation?: Maybe<OrganisationEntityResponse>;
  deletePrivacy?: Maybe<PrivacyEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteReview?: Maybe<ReviewEntityResponse>;
  deleteSubscription?: Maybe<SubscriptionEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTermsAndCondition?: Maybe<TermsAndConditionEntityResponse>;
  deleteTimeline?: Maybe<TimelineEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutUs?: Maybe<AboutUsEntityResponse>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateAuthor?: Maybe<AuthorEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateComment?: Maybe<CommentEntityResponse>;
  updateCookiePolicy?: Maybe<CookiePolicyEntityResponse>;
  updateEnquiry?: Maybe<EnquiryEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateEventGuest?: Maybe<EventGuestEntityResponse>;
  updateFaq?: Maybe<FaqEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateListing?: Maybe<ListingEntityResponse>;
  updateListingGuest?: Maybe<ListingGuestEntityResponse>;
  updateOrder?: Maybe<OrderEntityResponse>;
  updateOrganisation?: Maybe<OrganisationEntityResponse>;
  updatePrivacy?: Maybe<PrivacyEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateReview?: Maybe<ReviewEntityResponse>;
  updateSubscription?: Maybe<SubscriptionEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateTermsAndCondition?: Maybe<TermsAndConditionEntityResponse>;
  updateTimeline?: Maybe<TimelineEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreateEnquiryArgs = {
  data: EnquiryInput;
};


export type MutationCreateEventArgs = {
  data: EventInput;
};


export type MutationCreateEventGuestArgs = {
  data: EventGuestInput;
};


export type MutationCreateFaqArgs = {
  data: FaqInput;
};


export type MutationCreateListingArgs = {
  data: ListingInput;
};


export type MutationCreateListingGuestArgs = {
  data: ListingGuestInput;
};


export type MutationCreateOrderArgs = {
  data: OrderInput;
};


export type MutationCreateOrganisationArgs = {
  data: OrganisationInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewInput;
};


export type MutationCreateSubscriptionArgs = {
  data: SubscriptionInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateTimelineArgs = {
  data: TimelineInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEnquiryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEventGuestArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFaqArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteListingArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteListingGuestArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrganisationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSubscriptionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTimelineArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutUsArgs = {
  data: AboutUsInput;
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  id: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  id: Scalars['ID'];
};


export type MutationUpdateCookiePolicyArgs = {
  data: CookiePolicyInput;
};


export type MutationUpdateEnquiryArgs = {
  data: EnquiryInput;
  id: Scalars['ID'];
};


export type MutationUpdateEventArgs = {
  data: EventInput;
  id: Scalars['ID'];
};


export type MutationUpdateEventGuestArgs = {
  data: EventGuestInput;
  id: Scalars['ID'];
};


export type MutationUpdateFaqArgs = {
  data: FaqInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateListingArgs = {
  data: ListingInput;
  id: Scalars['ID'];
};


export type MutationUpdateListingGuestArgs = {
  data: ListingGuestInput;
  id: Scalars['ID'];
};


export type MutationUpdateOrderArgs = {
  data: OrderInput;
  id: Scalars['ID'];
};


export type MutationUpdateOrganisationArgs = {
  data: OrganisationInput;
  id: Scalars['ID'];
};


export type MutationUpdatePrivacyArgs = {
  data: PrivacyInput;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID'];
};


export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars['ID'];
};


export type MutationUpdateSubscriptionArgs = {
  data: SubscriptionInput;
  id: Scalars['ID'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID'];
};


export type MutationUpdateTermsAndConditionArgs = {
  data: TermsAndConditionInput;
};


export type MutationUpdateTimelineArgs = {
  data: TimelineInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<EventEntityResponse>;
  listing?: Maybe<ListingEntityResponse>;
  product?: Maybe<ProductEntityResponse>;
  productType?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Boolean']>;
  stripeId?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  attributes?: Maybe<Order>;
  id?: Maybe<Scalars['ID']>;
};

export type OrderEntityResponse = {
  __typename?: 'OrderEntityResponse';
  data?: Maybe<OrderEntity>;
};

export type OrderEntityResponseCollection = {
  __typename?: 'OrderEntityResponseCollection';
  data: Array<OrderEntity>;
  meta: ResponseCollectionMeta;
};

export type OrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  listing?: InputMaybe<ListingFiltersInput>;
  not?: InputMaybe<OrderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
  productType?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<BooleanFilterInput>;
  stripeId?: InputMaybe<StringFilterInput>;
  total?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type OrderInput = {
  event?: InputMaybe<Scalars['ID']>;
  listing?: InputMaybe<Scalars['ID']>;
  product?: InputMaybe<Scalars['ID']>;
  productType?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Boolean']>;
  stripeId?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Float']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type OrderRelationResponseCollection = {
  __typename?: 'OrderRelationResponseCollection';
  data: Array<OrderEntity>;
};

export type Organisation = {
  __typename?: 'Organisation';
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<EventRelationResponseCollection>;
  fullProfile?: Maybe<Scalars['Boolean']>;
  listing?: Maybe<ListingEntityResponse>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organisationType?: Maybe<Scalars['String']>;
  profile?: Maybe<UsersPermissionsUserEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
};


export type OrganisationEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OrganisationEntity = {
  __typename?: 'OrganisationEntity';
  attributes?: Maybe<Organisation>;
  id?: Maybe<Scalars['ID']>;
};

export type OrganisationEntityResponse = {
  __typename?: 'OrganisationEntityResponse';
  data?: Maybe<OrganisationEntity>;
};

export type OrganisationEntityResponseCollection = {
  __typename?: 'OrganisationEntityResponseCollection';
  data: Array<OrganisationEntity>;
  meta: ResponseCollectionMeta;
};

export type OrganisationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OrganisationFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  fullProfile?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  listing?: InputMaybe<ListingFiltersInput>;
  logo?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<OrganisationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OrganisationFiltersInput>>>;
  organisationType?: InputMaybe<StringFilterInput>;
  profile?: InputMaybe<UsersPermissionsUserFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  website?: InputMaybe<StringFilterInput>;
};

export type OrganisationInput = {
  bio?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  fullProfile?: InputMaybe<Scalars['Boolean']>;
  listing?: InputMaybe<Scalars['ID']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organisationType?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Privacy = {
  __typename?: 'Privacy';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PrivacyEntity = {
  __typename?: 'PrivacyEntity';
  attributes?: Maybe<Privacy>;
  id?: Maybe<Scalars['ID']>;
};

export type PrivacyEntityResponse = {
  __typename?: 'PrivacyEntityResponse';
  data?: Maybe<PrivacyEntity>;
};

export type PrivacyInput = {
  content?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderRelationResponseCollection>;
  price: Scalars['Float'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  type: Enum_Product_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  orders?: InputMaybe<OrderFiltersInput>;
  price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['Float']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Enum_Product_Type>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutUs?: Maybe<AboutUsEntityResponse>;
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  author?: Maybe<AuthorEntityResponse>;
  authors?: Maybe<AuthorEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  comment?: Maybe<CommentEntityResponse>;
  comments?: Maybe<CommentEntityResponseCollection>;
  cookiePolicy?: Maybe<CookiePolicyEntityResponse>;
  enquiries?: Maybe<EnquiryEntityResponseCollection>;
  enquiry?: Maybe<EnquiryEntityResponse>;
  event?: Maybe<EventEntityResponse>;
  eventGuest?: Maybe<EventGuestEntityResponse>;
  eventGuests?: Maybe<EventGuestEntityResponseCollection>;
  events?: Maybe<EventEntityResponseCollection>;
  faq?: Maybe<FaqEntityResponse>;
  faqs?: Maybe<FaqEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  listing?: Maybe<ListingEntityResponse>;
  listingGuest?: Maybe<ListingGuestEntityResponse>;
  listingGuests?: Maybe<ListingGuestEntityResponseCollection>;
  listings?: Maybe<ListingEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  order?: Maybe<OrderEntityResponse>;
  orders?: Maybe<OrderEntityResponseCollection>;
  organisation?: Maybe<OrganisationEntityResponse>;
  organisations?: Maybe<OrganisationEntityResponseCollection>;
  privacy?: Maybe<PrivacyEntityResponse>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  review?: Maybe<ReviewEntityResponse>;
  reviews?: Maybe<ReviewEntityResponseCollection>;
  subscription?: Maybe<SubscriptionEntityResponse>;
  subscriptions?: Maybe<SubscriptionEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  termsAndCondition?: Maybe<TermsAndConditionEntityResponse>;
  timeline?: Maybe<TimelineEntityResponse>;
  timelines?: Maybe<TimelineEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutUsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCookiePolicyArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEnquiriesArgs = {
  filters?: InputMaybe<EnquiryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEnquiryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEventGuestArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEventGuestsArgs = {
  filters?: InputMaybe<EventGuestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFaqArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListingArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryListingGuestArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryListingGuestsArgs = {
  filters?: InputMaybe<ListingGuestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryListingsArgs = {
  filters?: InputMaybe<ListingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrdersArgs = {
  filters?: InputMaybe<OrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOrganisationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOrganisationsArgs = {
  filters?: InputMaybe<OrganisationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPrivacyArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryReviewsArgs = {
  filters?: InputMaybe<ReviewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySubscriptionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySubscriptionsArgs = {
  filters?: InputMaybe<SubscriptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTermsAndConditionArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTimelineArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTimelinesArgs = {
  filters?: InputMaybe<TimelineFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Review = {
  __typename?: 'Review';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReviewEntity = {
  __typename?: 'ReviewEntity';
  attributes?: Maybe<Review>;
  id?: Maybe<Scalars['ID']>;
};

export type ReviewEntityResponse = {
  __typename?: 'ReviewEntityResponse';
  data?: Maybe<ReviewEntity>;
};

export type ReviewEntityResponseCollection = {
  __typename?: 'ReviewEntityResponseCollection';
  data: Array<ReviewEntity>;
  meta: ResponseCollectionMeta;
};

export type ReviewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewInput = {
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  paymentOption: Enum_Subscription_Paymentoption;
  paymentconfirmed?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type SubscriptionEntity = {
  __typename?: 'SubscriptionEntity';
  attributes?: Maybe<Subscription>;
  id?: Maybe<Scalars['ID']>;
};

export type SubscriptionEntityResponse = {
  __typename?: 'SubscriptionEntityResponse';
  data?: Maybe<SubscriptionEntity>;
};

export type SubscriptionEntityResponseCollection = {
  __typename?: 'SubscriptionEntityResponseCollection';
  data: Array<SubscriptionEntity>;
  meta: ResponseCollectionMeta;
};

export type SubscriptionFiltersInput = {
  active?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SubscriptionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SubscriptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SubscriptionFiltersInput>>>;
  paymentOption?: InputMaybe<StringFilterInput>;
  paymentconfirmed?: InputMaybe<BooleanFilterInput>;
  price?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stripeSubscriptionId?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type SubscriptionInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  paymentOption?: InputMaybe<Enum_Subscription_Paymentoption>;
  paymentconfirmed?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Float']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type Tag = {
  __typename?: 'Tag';
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  listing?: Maybe<ListingEntityResponse>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  listing?: InputMaybe<ListingFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  category?: InputMaybe<Scalars['ID']>;
  listing?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type TermsAndCondition = {
  __typename?: 'TermsAndCondition';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TermsAndConditionEntity = {
  __typename?: 'TermsAndConditionEntity';
  attributes?: Maybe<TermsAndCondition>;
  id?: Maybe<Scalars['ID']>;
};

export type TermsAndConditionEntityResponse = {
  __typename?: 'TermsAndConditionEntityResponse';
  data?: Maybe<TermsAndConditionEntity>;
};

export type TermsAndConditionInput = {
  content?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  eqi?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type Timeline = {
  __typename?: 'Timeline';
  createdAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<EventEntityResponse>;
  listing?: Maybe<ListingEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type TimelineEntity = {
  __typename?: 'TimelineEntity';
  attributes?: Maybe<Timeline>;
  id?: Maybe<Scalars['ID']>;
};

export type TimelineEntityResponse = {
  __typename?: 'TimelineEntityResponse';
  data?: Maybe<TimelineEntity>;
};

export type TimelineEntityResponseCollection = {
  __typename?: 'TimelineEntityResponseCollection';
  data: Array<TimelineEntity>;
  meta: ResponseCollectionMeta;
};

export type TimelineFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TimelineFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  listing?: InputMaybe<ListingFiltersInput>;
  not?: InputMaybe<TimelineFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TimelineFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type TimelineInput = {
  event?: InputMaybe<Scalars['ID']>;
  listing?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  avatar?: Maybe<Scalars['String']>;
  backgroundImg?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  bookmarklist?: Maybe<Array<Maybe<ComponentBookMarksReadingList>>>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firebasePassword?: Maybe<Scalars['String']>;
  firebaseUserId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  mailinglist?: Maybe<Scalars['Boolean']>;
  membership?: Maybe<Enum_Userspermissionsuser_Membership>;
  order?: Maybe<OrderEntityResponse>;
  organisation?: Maybe<ComponentOrganisationOrganisation>;
  pronoun?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  subscription?: Maybe<SubscriptionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userType: Enum_Userspermissionsuser_Usertype;
  username: Scalars['String'];
};


export type UsersPermissionsUserBookmarklistArgs = {
  filters?: InputMaybe<ComponentBookMarksReadingListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  DateOfBirth?: InputMaybe<DateFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  avatar?: InputMaybe<StringFilterInput>;
  backgroundImg?: InputMaybe<StringFilterInput>;
  bio?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  bookmarklist?: InputMaybe<ComponentBookMarksReadingListFiltersInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firebasePassword?: InputMaybe<StringFilterInput>;
  firebaseUserId?: InputMaybe<StringFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  gender?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mailinglist?: InputMaybe<BooleanFilterInput>;
  membership?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  order?: InputMaybe<OrderFiltersInput>;
  organisation?: InputMaybe<ComponentOrganisationOrganisationFiltersInput>;
  password?: InputMaybe<StringFilterInput>;
  pronoun?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  stripeCustomerId?: InputMaybe<StringFilterInput>;
  subscription?: InputMaybe<SubscriptionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  userType?: InputMaybe<StringFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  DateOfBirth?: InputMaybe<Scalars['Date']>;
  avatar?: InputMaybe<Scalars['String']>;
  backgroundImg?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  bookmarklist?: InputMaybe<Array<InputMaybe<ComponentBookMarksReadingListInput>>>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firebasePassword?: InputMaybe<Scalars['String']>;
  firebaseUserId?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  mailinglist?: InputMaybe<Scalars['Boolean']>;
  membership?: InputMaybe<Enum_Userspermissionsuser_Membership>;
  order?: InputMaybe<Scalars['ID']>;
  organisation?: InputMaybe<ComponentOrganisationOrganisationInput>;
  password?: InputMaybe<Scalars['String']>;
  pronoun?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  subscription?: InputMaybe<Scalars['ID']>;
  userType?: InputMaybe<Enum_Userspermissionsuser_Usertype>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type ArticleQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
}>;


export type ArticleQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', body: string, title: string, slug: string, totalComments?: number | null, totalLikes?: number | null, views?: any | null, totalBookmarks?: any | null, firebaseId?: string | null, readingTime?: string | null, blurb?: string | null, updatedAt?: any | null, heroImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, creator?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', avatar?: string | null, bio?: string | null, backgroundImg?: string | null, fullName?: string | null, username: string } | null } | null } | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', fullName?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null, SEO?: { __typename?: 'ComponentSeoSeo', id: string, title?: string | null, description?: string | null, url?: string | null, image?: string | null, type?: string | null, locale?: string | null, author?: string | null, keywords?: string | null } | null, likes?: Array<{ __typename?: 'ComponentLikesLikes', id: string, userId: number } | null> | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name?: string | null, slug?: string | null } | null } | null } | null } | null }> } | null };

export type FilteredArticlesQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type FilteredArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', body: string, title: string, slug: string, blurb?: string | null, totalComments?: number | null, totalLikes?: number | null, views?: any | null, totalBookmarks?: any | null, readingTime?: string | null, createdAt?: any | null, updatedAt?: any | null, heroImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, creator?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', avatar?: string | null, bio?: string | null, backgroundImg?: string | null, fullName?: string | null, username: string } | null } | null } | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', fullName?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null } | null } | null } | null, likes?: Array<{ __typename?: 'ComponentLikesLikes', id: string, userId: number } | null> | null, SEO?: { __typename?: 'ComponentSeoSeo', keywords?: string | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type ArticlesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', body: string, title: string, slug: string, blurb?: string | null, readingTime?: string | null, totalComments?: number | null, totalLikes?: number | null, views?: any | null, totalBookmarks?: any | null, createdAt?: any | null, updatedAt?: any | null, heroImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, creator?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', avatar?: string | null, bio?: string | null, backgroundImg?: string | null, fullName?: string | null, username: string } | null } | null } | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', fullName?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null } | null } | null } | null, likes?: Array<{ __typename?: 'ComponentLikesLikes', id: string, userId: number } | null> | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type CategoriesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null, name?: string | null, colour?: string | null } | null }> } | null };

export type EventQueryVariables = Exact<{
  filters?: InputMaybe<EventFiltersInput>;
}>;


export type EventQuery = { __typename?: 'Query', events?: { __typename?: 'EventEntityResponseCollection', data: Array<{ __typename?: 'EventEntity', id?: string | null, attributes?: { __typename?: 'Event', title?: string | null, slug?: string | null, description?: string | null, body?: string | null, startDate?: any | null, endDate?: any | null, startTime?: any | null, endTime?: string | null, price?: string | null, status?: Enum_Event_Status | null, venue?: Enum_Event_Venue | null, link?: string | null, linkButtonText?: Enum_Event_Linkbuttontext | null, listImage?: string | null, createdAt?: any | null, updatedAt?: any | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null, name?: string | null } | null } | null } | null, host?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: string | null, organisation?: { __typename?: 'ComponentOrganisationOrganisation', name?: string | null, organisationType?: string | null, website?: string | null } | null } | null } | null } | null, Location?: { __typename?: 'ComponentAddressLocation', id: string, name?: string | null, street?: string | null, town?: string | null, postCode?: string | null, longtitude?: number | null, latitude?: number | null } | null, SEO?: { __typename?: 'ComponentSeoSeo', id: string, title?: string | null, description?: string | null, url?: string | null, image?: string | null, type?: string | null, locale?: string | null, author?: string | null, keywords?: string | null } | null } | null }> } | null };

export type FilteredEventsQueryVariables = Exact<{
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type FilteredEventsQuery = { __typename?: 'Query', events?: { __typename?: 'EventEntityResponseCollection', data: Array<{ __typename?: 'EventEntity', id?: string | null, attributes?: { __typename?: 'Event', title?: string | null, slug?: string | null, description?: string | null, body?: string | null, startDate?: any | null, endDate?: any | null, startTime?: any | null, endTime?: string | null, price?: string | null, status?: Enum_Event_Status | null, venue?: Enum_Event_Venue | null, link?: string | null, listImage?: string | null, createdAt?: any | null, updatedAt?: any | null, host?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: string | null, organisation?: { __typename?: 'ComponentOrganisationOrganisation', name?: string | null, organisationType?: string | null, website?: string | null } | null } | null } | null } | null, Location?: { __typename?: 'ComponentAddressLocation', name?: string | null, town?: string | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type EventsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type EventsQuery = { __typename?: 'Query', events?: { __typename?: 'EventEntityResponseCollection', data: Array<{ __typename?: 'EventEntity', id?: string | null, attributes?: { __typename?: 'Event', title?: string | null, slug?: string | null, description?: string | null, body?: string | null, startDate?: any | null, endDate?: any | null, startTime?: any | null, endTime?: string | null, price?: string | null, status?: Enum_Event_Status | null, venue?: Enum_Event_Venue | null, link?: string | null, listImage?: string | null, createdAt?: any | null, updatedAt?: any | null, host?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: string | null, organisation?: { __typename?: 'ComponentOrganisationOrganisation', name?: string | null, organisationType?: string | null, website?: string | null } | null } | null } | null } | null, Location?: { __typename?: 'ComponentAddressLocation', name?: string | null, town?: string | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type FilteredListingsQueryVariables = Exact<{
  filters?: InputMaybe<ListingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type FilteredListingsQuery = { __typename?: 'Query', listings?: { __typename?: 'ListingEntityResponseCollection', data: Array<{ __typename?: 'ListingEntity', id?: string | null, attributes?: { __typename?: 'Listing', title?: string | null, description?: string | null, startDate?: any | null, endDate?: any | null, slug?: string | null, startTime?: string | null, endTime?: string | null, price?: string | null, status?: Enum_Listing_Status | null, venue?: Enum_Listing_Venue | null, link?: string | null, listImage?: string | null, createdAt?: any | null, updatedAt?: any | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null } | null } | null } | null, Location?: { __typename?: 'ComponentAddressLocation', name?: string | null, town?: string | null } | null, host?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: string | null, organisation?: { __typename?: 'ComponentOrganisationOrganisation', name?: string | null, organisationType?: string | null, website?: string | null } | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type ListingsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ListingsQuery = { __typename?: 'Query', listings?: { __typename?: 'ListingEntityResponseCollection', data: Array<{ __typename?: 'ListingEntity', id?: string | null, attributes?: { __typename?: 'Listing', title?: string | null, description?: string | null, startDate?: any | null, endDate?: any | null, slug?: string | null, startTime?: string | null, endTime?: string | null, price?: string | null, status?: Enum_Listing_Status | null, venue?: Enum_Listing_Venue | null, link?: string | null, listImage?: string | null, createdAt?: any | null, updatedAt?: any | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null } | null } | null } | null, Location?: { __typename?: 'ComponentAddressLocation', name?: string | null, town?: string | null } | null, host?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: string | null, organisation?: { __typename?: 'ComponentOrganisationOrganisation', name?: string | null, organisationType?: string | null, website?: string | null } | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type ListQueryVariables = Exact<{
  filters?: InputMaybe<ListingFiltersInput>;
}>;


export type ListQuery = { __typename?: 'Query', listings?: { __typename?: 'ListingEntityResponseCollection', data: Array<{ __typename?: 'ListingEntity', id?: string | null, attributes?: { __typename?: 'Listing', title?: string | null, description?: string | null, body?: string | null, startDate?: any | null, endDate?: any | null, slug?: string | null, createdAt?: any | null, updatedAt?: any | null, startTime?: string | null, endTime?: string | null, price?: string | null, status?: Enum_Listing_Status | null, venue?: Enum_Listing_Venue | null, link?: string | null, linkButtonText?: Enum_Listing_Linkbuttontext | null, listImage?: string | null, SEO?: { __typename?: 'ComponentSeoSeo', id: string, title?: string | null, description?: string | null, url?: string | null, image?: string | null, type?: string | null, locale?: string | null, author?: string | null, keywords?: string | null } | null, host?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: string | null, organisation?: { __typename?: 'ComponentOrganisationOrganisation', name?: string | null, organisationType?: string | null, website?: string | null } | null } | null } | null } | null, Location?: { __typename?: 'ComponentAddressLocation', id: string, name?: string | null, street?: string | null, town?: string | null, postCode?: string | null, longtitude?: number | null, latitude?: number | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name?: string | null, slug?: string | null } | null } | null } | null } | null }> } | null };

export type UserEventsQueryVariables = Exact<{
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type UserEventsQuery = { __typename?: 'Query', events?: { __typename?: 'EventEntityResponseCollection', data: Array<{ __typename?: 'EventEntity', id?: string | null, attributes?: { __typename?: 'Event', title?: string | null, slug?: string | null, description?: string | null, updatedAt?: any | null, startDate?: any | null, listImage?: string | null, Location?: { __typename?: 'ComponentAddressLocation', id: string, town?: string | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null, colour?: string | null } | null } | null } | null } | null }> } | null };

export type UserListingsQueryVariables = Exact<{
  filters?: InputMaybe<ListingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type UserListingsQuery = { __typename?: 'Query', listings?: { __typename?: 'ListingEntityResponseCollection', data: Array<{ __typename?: 'ListingEntity', id?: string | null, attributes?: { __typename?: 'Listing', title?: string | null, description?: string | null, startDate?: any | null, slug?: string | null, listImage?: string | null, updatedAt?: any | null, Location?: { __typename?: 'ComponentAddressLocation', id: string, town?: string | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', slug?: string | null, colour?: string | null } | null } | null } | null } | null }> } | null };

export type OrgQueryVariables = Exact<{
  filters?: InputMaybe<OrganisationFiltersInput>;
}>;


export type OrgQuery = { __typename?: 'Query', organisations?: { __typename?: 'OrganisationEntityResponseCollection', data: Array<{ __typename?: 'OrganisationEntity', id?: string | null, attributes?: { __typename?: 'Organisation', name?: string | null, slug?: string | null, logo?: string | null, fullProfile?: boolean | null, createdAt?: any | null, bio?: string | null, organisationType?: string | null, website?: string | null, profile?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, fullName?: string | null, email: string, avatar?: string | null, backgroundImg?: string | null, userType: Enum_Userspermissionsuser_Usertype, createdAt?: any | null } | null } | null } | null } | null }> } | null };

export type TagsQueryVariables = Exact<{
  filters?: InputMaybe<TagFiltersInput>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type TagsQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } }, data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', createdAt?: any | null, name?: string | null } | null }> } | null };

export type UsersBookMarksQueryVariables = Exact<{
  usersPermissionsUserId?: InputMaybe<Scalars['ID']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type UsersBookMarksQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', bookmarklist?: Array<{ __typename?: 'ComponentBookMarksReadingList', blurb?: string | null, category?: string | null, id: string, date?: string | null, image?: string | null, itemId?: string | null, location?: string | null, readingTimeOrPrice?: string | null, slug?: string | null, time?: string | null, title?: string | null, type?: string | null, userImage?: string | null, userName?: string | null, venue?: string | null, venueName?: string | null } | null> | null } | null } | null } | null };

export type UserQueryVariables = Exact<{
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
}>;


export type UserQuery = { __typename?: 'Query', usersPermissionsUsers?: { __typename?: 'UsersPermissionsUserEntityResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', bio?: string | null, username: string, email: string, fullName?: string | null, avatar?: string | null, backgroundImg?: string | null, pronoun?: string | null, gender?: string | null, createdAt?: any | null, userType: Enum_Userspermissionsuser_Usertype } | null }> } | null };

export type MeQueryVariables = Exact<{
  usersPermissionsUserId?: InputMaybe<Scalars['ID']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  pagination?: InputMaybe<PaginationArg>;
  filters?: InputMaybe<ComponentBookMarksReadingListFiltersInput>;
}>;


export type MeQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', avatar?: string | null, backgroundImg?: string | null, bio?: string | null, createdAt?: any | null, email: string, firebasePassword?: string | null, firebaseUserId?: string | null, fullName?: string | null, gender?: string | null, mailinglist?: boolean | null, membership?: Enum_Userspermissionsuser_Membership | null, pronoun?: string | null, provider?: string | null, userType: Enum_Userspermissionsuser_Usertype, username: string, stripeCustomerId?: string | null, organisation?: { __typename?: 'ComponentOrganisationOrganisation', name?: string | null, organisationType?: string | null, website?: string | null } | null, subscription?: { __typename?: 'SubscriptionEntityResponse', data?: { __typename?: 'SubscriptionEntity', id?: string | null, attributes?: { __typename?: 'Subscription', stripeSubscriptionId?: string | null } | null } | null } | null, bookmarklist?: Array<{ __typename?: 'ComponentBookMarksReadingList', itemId?: string | null, id: string, image?: string | null, slug?: string | null, title?: string | null, type?: string | null, category?: string | null, userImage?: string | null, userName?: string | null, date?: string | null, time?: string | null, readingTimeOrPrice?: string | null, venueName?: string | null, venue?: string | null, blurb?: string | null } | null> | null } | null } | null } | null };


export const ArticleDocument = gql`
    query Article($filters: ArticleFiltersInput) {
  articles(filters: $filters) {
    data {
      id
      attributes {
        body
        title
        slug
        totalComments
        totalLikes
        views
        totalBookmarks
        firebaseId
        readingTime
        heroImage {
          data {
            attributes {
              url
            }
            id
          }
        }
        creator {
          data {
            id
            attributes {
              avatar
              bio
              backgroundImg
              fullName
              username
            }
          }
        }
        author {
          data {
            id
            attributes {
              fullName
              avatar {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        SEO {
          id
          title
          description
          url
          image
          type
          locale
          author
          keywords
        }
        likes {
          id
          userId
        }
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
        blurb
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useArticleQuery(baseOptions?: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const FilteredArticlesDocument = gql`
    query FilteredArticles($filters: ArticleFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  articles(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        body
        title
        slug
        blurb
        totalComments
        totalLikes
        views
        totalBookmarks
        readingTime
        createdAt
        updatedAt
        heroImage {
          data {
            id
            attributes {
              url
            }
          }
        }
        creator {
          data {
            id
            attributes {
              avatar
              bio
              backgroundImg
              fullName
              username
            }
          }
        }
        author {
          data {
            id
            attributes {
              fullName
              avatar {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        category {
          data {
            id
            attributes {
              slug
            }
          }
        }
        likes {
          id
          userId
        }
        SEO {
          keywords
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useFilteredArticlesQuery__
 *
 * To run a query within a React component, call `useFilteredArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilteredArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilteredArticlesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFilteredArticlesQuery(baseOptions?: Apollo.QueryHookOptions<FilteredArticlesQuery, FilteredArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilteredArticlesQuery, FilteredArticlesQueryVariables>(FilteredArticlesDocument, options);
      }
export function useFilteredArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilteredArticlesQuery, FilteredArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilteredArticlesQuery, FilteredArticlesQueryVariables>(FilteredArticlesDocument, options);
        }
export type FilteredArticlesQueryHookResult = ReturnType<typeof useFilteredArticlesQuery>;
export type FilteredArticlesLazyQueryHookResult = ReturnType<typeof useFilteredArticlesLazyQuery>;
export type FilteredArticlesQueryResult = Apollo.QueryResult<FilteredArticlesQuery, FilteredArticlesQueryVariables>;
export const ArticlesDocument = gql`
    query Articles($pagination: PaginationArg, $sort: [String]) {
  articles(pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        body
        title
        slug
        blurb
        readingTime
        totalComments
        totalLikes
        views
        totalBookmarks
        heroImage {
          data {
            id
            attributes {
              url
            }
          }
        }
        creator {
          data {
            id
            attributes {
              avatar
              bio
              backgroundImg
              fullName
              username
            }
          }
        }
        author {
          data {
            id
            attributes {
              fullName
              avatar {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        createdAt
        updatedAt
        category {
          data {
            id
            attributes {
              slug
            }
          }
        }
        likes {
          id
          userId
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($pagination: PaginationArg, $sort: [String]) {
  categories(pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        slug
        name
        colour
      }
    }
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const EventDocument = gql`
    query Event($filters: EventFiltersInput) {
  events(filters: $filters) {
    data {
      id
      attributes {
        title
        slug
        description
        body
        startDate
        endDate
        startTime
        endTime
        price
        status
        venue
        link
        linkButtonText
        listImage
        createdAt
        updatedAt
        category {
          data {
            id
            attributes {
              slug
              name
            }
          }
        }
        host {
          data {
            id
            attributes {
              username
              avatar
              organisation {
                name
                organisationType
                website
              }
            }
          }
        }
        Location {
          id
          name
          street
          town
          postCode
          longtitude
          latitude
        }
        SEO {
          id
          title
          description
          url
          image
          type
          locale
          author
          keywords
        }
      }
    }
  }
}
    `;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useEventQuery(baseOptions?: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options);
      }
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options);
        }
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const FilteredEventsDocument = gql`
    query FilteredEvents($filters: EventFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  events(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        title
        slug
        description
        body
        startDate
        endDate
        startTime
        endTime
        price
        status
        venue
        link
        listImage
        createdAt
        updatedAt
        host {
          data {
            id
            attributes {
              username
              avatar
              organisation {
                name
                organisationType
                website
              }
            }
          }
        }
        Location {
          name
          town
        }
        category {
          data {
            id
            attributes {
              slug
            }
          }
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useFilteredEventsQuery__
 *
 * To run a query within a React component, call `useFilteredEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilteredEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilteredEventsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFilteredEventsQuery(baseOptions?: Apollo.QueryHookOptions<FilteredEventsQuery, FilteredEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilteredEventsQuery, FilteredEventsQueryVariables>(FilteredEventsDocument, options);
      }
export function useFilteredEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilteredEventsQuery, FilteredEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilteredEventsQuery, FilteredEventsQueryVariables>(FilteredEventsDocument, options);
        }
export type FilteredEventsQueryHookResult = ReturnType<typeof useFilteredEventsQuery>;
export type FilteredEventsLazyQueryHookResult = ReturnType<typeof useFilteredEventsLazyQuery>;
export type FilteredEventsQueryResult = Apollo.QueryResult<FilteredEventsQuery, FilteredEventsQueryVariables>;
export const EventsDocument = gql`
    query Events($pagination: PaginationArg, $sort: [String]) {
  events(pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        title
        slug
        description
        body
        startDate
        endDate
        startTime
        endTime
        price
        status
        venue
        link
        listImage
        createdAt
        updatedAt
        host {
          data {
            id
            attributes {
              username
              avatar
              organisation {
                name
                organisationType
                website
              }
            }
          }
        }
        Location {
          name
          town
        }
        category {
          data {
            id
            attributes {
              slug
            }
          }
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const FilteredListingsDocument = gql`
    query FilteredListings($filters: ListingFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  listings(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        title
        description
        startDate
        endDate
        slug
        startTime
        endTime
        price
        status
        venue
        link
        listImage
        createdAt
        updatedAt
        category {
          data {
            id
            attributes {
              slug
            }
          }
        }
        Location {
          name
          town
        }
        host {
          data {
            id
            attributes {
              username
              avatar
              organisation {
                name
                organisationType
                website
              }
            }
          }
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useFilteredListingsQuery__
 *
 * To run a query within a React component, call `useFilteredListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilteredListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilteredListingsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFilteredListingsQuery(baseOptions?: Apollo.QueryHookOptions<FilteredListingsQuery, FilteredListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilteredListingsQuery, FilteredListingsQueryVariables>(FilteredListingsDocument, options);
      }
export function useFilteredListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilteredListingsQuery, FilteredListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilteredListingsQuery, FilteredListingsQueryVariables>(FilteredListingsDocument, options);
        }
export type FilteredListingsQueryHookResult = ReturnType<typeof useFilteredListingsQuery>;
export type FilteredListingsLazyQueryHookResult = ReturnType<typeof useFilteredListingsLazyQuery>;
export type FilteredListingsQueryResult = Apollo.QueryResult<FilteredListingsQuery, FilteredListingsQueryVariables>;
export const ListingsDocument = gql`
    query Listings($pagination: PaginationArg, $sort: [String]) {
  listings(pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        title
        description
        startDate
        endDate
        slug
        startTime
        endTime
        price
        status
        venue
        link
        listImage
        createdAt
        updatedAt
        category {
          data {
            id
            attributes {
              slug
            }
          }
        }
        Location {
          name
          town
        }
        host {
          data {
            id
            attributes {
              username
              avatar
              organisation {
                name
                organisationType
                website
              }
            }
          }
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useListingsQuery__
 *
 * To run a query within a React component, call `useListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListingsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useListingsQuery(baseOptions?: Apollo.QueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, options);
      }
export function useListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, options);
        }
export type ListingsQueryHookResult = ReturnType<typeof useListingsQuery>;
export type ListingsLazyQueryHookResult = ReturnType<typeof useListingsLazyQuery>;
export type ListingsQueryResult = Apollo.QueryResult<ListingsQuery, ListingsQueryVariables>;
export const ListDocument = gql`
    query List($filters: ListingFiltersInput) {
  listings(filters: $filters) {
    data {
      id
      attributes {
        title
        description
        body
        startDate
        endDate
        slug
        createdAt
        updatedAt
        startTime
        endTime
        price
        status
        venue
        link
        linkButtonText
        listImage
        SEO {
          id
          title
          description
          url
          image
          type
          locale
          author
          keywords
        }
        host {
          data {
            id
            attributes {
              username
              avatar
              organisation {
                name
                organisationType
                website
              }
            }
          }
        }
        Location {
          id
          name
          street
          town
          postCode
          longtitude
          latitude
        }
        category {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useListQuery__
 *
 * To run a query within a React component, call `useListQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useListQuery(baseOptions?: Apollo.QueryHookOptions<ListQuery, ListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListQuery, ListQueryVariables>(ListDocument, options);
      }
export function useListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListQuery, ListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListQuery, ListQueryVariables>(ListDocument, options);
        }
export type ListQueryHookResult = ReturnType<typeof useListQuery>;
export type ListLazyQueryHookResult = ReturnType<typeof useListLazyQuery>;
export type ListQueryResult = Apollo.QueryResult<ListQuery, ListQueryVariables>;
export const UserEventsDocument = gql`
    query UserEvents($filters: EventFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  events(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        title
        slug
        description
        updatedAt
        startDate
        listImage
        Location {
          id
          town
        }
        category {
          data {
            id
            attributes {
              slug
              colour
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserEventsQuery__
 *
 * To run a query within a React component, call `useUserEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserEventsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useUserEventsQuery(baseOptions?: Apollo.QueryHookOptions<UserEventsQuery, UserEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserEventsQuery, UserEventsQueryVariables>(UserEventsDocument, options);
      }
export function useUserEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserEventsQuery, UserEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserEventsQuery, UserEventsQueryVariables>(UserEventsDocument, options);
        }
export type UserEventsQueryHookResult = ReturnType<typeof useUserEventsQuery>;
export type UserEventsLazyQueryHookResult = ReturnType<typeof useUserEventsLazyQuery>;
export type UserEventsQueryResult = Apollo.QueryResult<UserEventsQuery, UserEventsQueryVariables>;
export const UserListingsDocument = gql`
    query UserListings($filters: ListingFiltersInput, $pagination: PaginationArg, $sort: [String]) {
  listings(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        title
        description
        Location {
          id
          town
        }
        startDate
        slug
        listImage
        updatedAt
        category {
          data {
            id
            attributes {
              slug
              colour
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserListingsQuery__
 *
 * To run a query within a React component, call `useUserListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListingsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useUserListingsQuery(baseOptions?: Apollo.QueryHookOptions<UserListingsQuery, UserListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserListingsQuery, UserListingsQueryVariables>(UserListingsDocument, options);
      }
export function useUserListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListingsQuery, UserListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserListingsQuery, UserListingsQueryVariables>(UserListingsDocument, options);
        }
export type UserListingsQueryHookResult = ReturnType<typeof useUserListingsQuery>;
export type UserListingsLazyQueryHookResult = ReturnType<typeof useUserListingsLazyQuery>;
export type UserListingsQueryResult = Apollo.QueryResult<UserListingsQuery, UserListingsQueryVariables>;
export const OrgDocument = gql`
    query Org($filters: OrganisationFiltersInput) {
  organisations(filters: $filters) {
    data {
      id
      attributes {
        name
        slug
        logo
        fullProfile
        createdAt
        bio
        organisationType
        website
        profile {
          data {
            id
            attributes {
              username
              fullName
              email
              avatar
              backgroundImg
              userType
              createdAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useOrgQuery__
 *
 * To run a query within a React component, call `useOrgQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrgQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useOrgQuery(baseOptions?: Apollo.QueryHookOptions<OrgQuery, OrgQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrgQuery, OrgQueryVariables>(OrgDocument, options);
      }
export function useOrgLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrgQuery, OrgQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrgQuery, OrgQueryVariables>(OrgDocument, options);
        }
export type OrgQueryHookResult = ReturnType<typeof useOrgQuery>;
export type OrgLazyQueryHookResult = ReturnType<typeof useOrgLazyQuery>;
export type OrgQueryResult = Apollo.QueryResult<OrgQuery, OrgQueryVariables>;
export const TagsDocument = gql`
    query Tags($filters: TagFiltersInput, $sort: [String], $pagination: PaginationArg) {
  tags(filters: $filters, sort: $sort, pagination: $pagination) {
    meta {
      pagination {
        total
      }
    }
    data {
      id
      attributes {
        createdAt
        name
      }
    }
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const UsersBookMarksDocument = gql`
    query UsersBookMarks($usersPermissionsUserId: ID, $pagination: PaginationArg, $sort: [String]) {
  usersPermissionsUser(id: $usersPermissionsUserId) {
    data {
      attributes {
        bookmarklist(pagination: $pagination, sort: $sort) {
          blurb
          category
          id
          date
          image
          itemId
          location
          readingTimeOrPrice
          slug
          time
          title
          type
          userImage
          userName
          venue
          venueName
        }
      }
    }
  }
}
    `;

/**
 * __useUsersBookMarksQuery__
 *
 * To run a query within a React component, call `useUsersBookMarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersBookMarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersBookMarksQuery({
 *   variables: {
 *      usersPermissionsUserId: // value for 'usersPermissionsUserId'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useUsersBookMarksQuery(baseOptions?: Apollo.QueryHookOptions<UsersBookMarksQuery, UsersBookMarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersBookMarksQuery, UsersBookMarksQueryVariables>(UsersBookMarksDocument, options);
      }
export function useUsersBookMarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersBookMarksQuery, UsersBookMarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersBookMarksQuery, UsersBookMarksQueryVariables>(UsersBookMarksDocument, options);
        }
export type UsersBookMarksQueryHookResult = ReturnType<typeof useUsersBookMarksQuery>;
export type UsersBookMarksLazyQueryHookResult = ReturnType<typeof useUsersBookMarksLazyQuery>;
export type UsersBookMarksQueryResult = Apollo.QueryResult<UsersBookMarksQuery, UsersBookMarksQueryVariables>;
export const UserDocument = gql`
    query User($filters: UsersPermissionsUserFiltersInput) {
  usersPermissionsUsers(filters: $filters) {
    data {
      id
      attributes {
        bio
        username
        email
        fullName
        avatar
        backgroundImg
        pronoun
        gender
        createdAt
        userType
      }
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const MeDocument = gql`
    query Me($usersPermissionsUserId: ID, $sort: [String], $pagination: PaginationArg, $filters: ComponentBookMarksReadingListFiltersInput) {
  usersPermissionsUser(id: $usersPermissionsUserId) {
    data {
      id
      attributes {
        avatar
        backgroundImg
        bio
        createdAt
        email
        firebasePassword
        firebaseUserId
        fullName
        gender
        mailinglist
        membership
        pronoun
        provider
        userType
        username
        stripeCustomerId
        organisation {
          name
          organisationType
          website
        }
        subscription {
          data {
            id
            attributes {
              stripeSubscriptionId
            }
          }
        }
        bookmarklist(sort: $sort, pagination: $pagination, filters: $filters) {
          itemId
          id
          image
          slug
          title
          type
          category
          userImage
          userName
          date
          time
          readingTimeOrPrice
          venueName
          venue
          blurb
        }
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      usersPermissionsUserId: // value for 'usersPermissionsUserId'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;