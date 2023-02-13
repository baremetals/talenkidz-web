import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEventState } from './eventSpec';

export const initialState: IEventState = {
  events: [],
  eventsLength: 0,
  hasMore: false,
  total: 0,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        events: action.payload.events,
        eventsLength: action.payload.eventsLength,
        total: action.payload.total,
      };
    },
    addEvents: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        events: action.payload.events,
        articlesLength: state.events.length,
        hasMore:
          (state.eventsLength as number) >= (state.total as number)
            ? false
            : true,
      };
    },
    setFilteredEvents: (state) => {
      return {
        ...state,
      };
    },
  },
});

export const { setFilteredEvents, setEvents, addEvents } = eventSlice.actions;

export default eventSlice.reducer;
