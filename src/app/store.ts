import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
// @ts-ignore
// import untypedMiddleware from 'untyped-middleware'
import rootReducer, { RootState } from "./rootReducer";



const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
  //     .prepend(
  //       // correctly typed middlewares can just be used
  //       // additionalMiddleware,
  //       // you can also type middlewares manually
  //       untypedMiddleware as Middleware<
  //         (action: Action<'specialAction'>) => number,
  //         RootState
  //       >
  //     )
  //     // prepend and concat calls can be chained
  //     .concat(logger),
});


export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
