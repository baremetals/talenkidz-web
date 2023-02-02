import { combineReducers } from "@reduxjs/toolkit";
import  authReducer  from "../features/auth/reducers"
import uiReducer from "../features/ui/reducers";
import modalReducer from '../features/modal/reducers';
import searchReducer from '../features/search/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  modal: modalReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;