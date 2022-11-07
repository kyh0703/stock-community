import { configureStore } from '@reduxjs/toolkit';
import themeProducer from '../features/theme/themeSlice';
import postsReducer from '../features/posts/postSlice';
import usersReducer from '../features/users/usersSlice';

// configure
export const store = configureStore({
  reducer: {
    theme: themeProducer,
    posts: postsReducer,
    users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
