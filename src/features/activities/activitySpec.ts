import { ListingEntity } from 'generated/graphql';

export interface IListingState {
  activities: ListingEntity[];
  activitiesLength?: number;
  hasMore?: boolean;
  total?: number;
}

export interface IListingAction {
  type: string;
  payload: IListingState;
}
