import { configureStore } from '@reduxjs/toolkit';
import themeProducer from '../features/theme/themeSlice';
import postReducer from '../features/post/postSlice';
import postsReducer from '../features/posts/PostsSlice';
import userReducer from '../features/user/userSlice';

// configure
export const store = configureStore({
  reducer: {
    theme: themeProducer,
    post: postReducer,
    posts: postsReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
