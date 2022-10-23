import { configureStore } from '@reduxjs/toolkit';
import themeProducer from '../features/theme/themeSlice';
import postsReducer from '../features/posts/PostsSlice';
import userReducer from '../features/user/userSlice';
import authReducer from '../features/auth/authSlice';

// configure
export const store = configureStore({
  reducer: {
    theme: themeProducer,
    posts: postsReducer,
    auth: authReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
