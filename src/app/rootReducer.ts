import { combineReducers } from "@reduxjs/toolkit";
import  authReducer  from "../features/auth/reducers"
import uiReducer from "../features/ui/reducers";
import modalReducer from '../features/modal/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;