import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import githubReducer from "./domain/github/github.reducer";

const reducer = combineReducers({
  github: githubReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
