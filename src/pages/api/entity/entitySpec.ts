import {
  ListingsQueryResult,
  ArticlesQueryResult,
  EventsQueryResult,
} from 'generated/graphql';
import { GQDocument } from 'src/types';

export type entityQueryResult =
  | ArticlesQueryResult
  | EventsQueryResult
  | ListingsQueryResult;

export type EntityData = {
  data?: entityQueryResult;
  err?: any;
};

export type ReqBody<F = any> = {
  start: number;
  limit: number;
  sort: string;
  gQDocument: GQDocument;
  filterBy?: F;
};

export type TReqBody = {

}
