import { EventEntity } from 'generated/graphql';

export interface IEventState {
  events: EventEntity[];
  eventsLength?: number;
  hasMore?: boolean;
  total?: number;
}

export interface IArticleAction {
  type: string;
  payload: IEventState;
}
