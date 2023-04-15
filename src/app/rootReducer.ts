import { combineReducers } from "@reduxjs/toolkit";
import  authReducer  from "../features/auth/reducers"
import uiReducer from "../features/ui/reducers";
import modalReducer from '../features/modal/reducers';
import searchReducer from '../features/search/reducers';
import articleReducer from '../features/articles/reducers';
import eventReducer from '../features/events/reducers';
import activityReducer from '../features/activities/reducers';
import categoryReducer from '../features/category/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  modal: modalReducer,
  search: searchReducer,
  article: articleReducer,
  event: eventReducer,
  activity: activityReducer,
  category: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;