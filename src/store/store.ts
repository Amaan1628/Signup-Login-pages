import { configureStore } from '@reduxjs/toolkit';
import sendOTP from "./slice";
import loggedIn from "./slice";

export const store = configureStore({
  reducer: {
    otp: sendOTP,
    authButton: loggedIn
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch