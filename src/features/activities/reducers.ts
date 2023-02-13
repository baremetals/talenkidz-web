import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListingState } from './activitySpec';

export const initialState: IListingState = {
  activities: [],
  activitiesLength: 0,
  hasMore: false,
  total: 0,
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setActivities: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        activities: action.payload.activities,
        activitiesLength: action.payload.activitiesLength,
        total: action.payload.total,
      };
    },
    addActivities: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        activities: action.payload.activities,
        activityLength: state.activities.length,
        hasMore:
          (state.activitiesLength as number) >= (state.total as number)
            ? false
            : true,
      };
    },
    setFilteredActivities: (state) => {
      return {
        ...state,
      };
    },
  },
});

export const { setFilteredActivities, setActivities, addActivities } =
  activitySlice.actions;

export default activitySlice.reducer;
