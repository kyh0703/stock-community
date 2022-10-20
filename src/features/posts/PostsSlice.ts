import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/post';
import { fetchPosts } from './postsAPI';

interface PostsState {
  loading: boolean;
  error: string | null;
  posts: Post[] | null;
  lastPage: number;
}

const initialState: PostsState = {
  loading: false,
  posts: null,
  error: null,
  lastPage: 1,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload: posts }) => {
      state.loading = false;
      state.posts = posts;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, { payload: error }) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export default postsSlice.reducer;
