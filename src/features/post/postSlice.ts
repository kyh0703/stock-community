import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/post';
import { fetchPostById } from './postAPI';

export interface PostState {
  loading: boolean;
  post: Post | null;
  error?: string | null;
}

const initialState: PostState = {
  loading: false,
  post: null,
  error: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPostById.fulfilled, (state, { payload: post }) => {
      state.loading = false;
      state.post = post;
      state.error = '';
    });
    builder.addCase(fetchPostById.rejected, (state, { error }) => {
      state.loading = false;
      state.post = null;
      state.error = error.message;
    });
  },
});

export default postSlice.reducer;
