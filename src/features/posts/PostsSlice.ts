import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { write } from 'fs';
import { Post } from '../../types/post';
import { createPostById } from './postsAPI';
import { create } from 'domain';
import {
  fetchPostById,
  fetchPosts,
  updatePostById,
  removePostById,
} from './postsAPI';

interface PostsState {
  write: {
    title: string;
    body: string;
    tags?: string[];
  };
  list: {
    loading: boolean;
    error?: string | null;
    data: Post[] | null;
    lastPage: number;
  };
  post: Post | null;
  postError?: string | null;
}

const initialState: PostsState = {
  write: {
    title: '',
    body: '',
    tags: [],
  },
  list: {
    loading: false,
    error: null,
    data: null,
    lastPage: 1,
  },
  post: null,
  postError: null,
};

export interface InputPayload {
  key: 'body' | 'title';
  value: string;
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    initWriteFiled: (state) => {
      state.write.title = '';
      state.write.body = '';
    },
    changeWriteField: (
      state,
      { payload: { key, value } }: PayloadAction<InputPayload>,
    ) => ({
      ...state,
      write: {
        ...state.write,
        [key]: value,
      },
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(createPostById.pending, (state) => {
      state.post = null;
      state.postError = null;
    });
    builder.addCase(createPostById.fulfilled, (state, { payload: post }) => {
      state.post = post;
    });
    builder.addCase(createPostById.rejected, (state, { error }) => {
      state.postError = error.message;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.list.loading = true;
      state.list.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload: posts }) => {
      state.list.loading = false;
      state.list.data = posts;
      state.list.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, { payload: error }) => {
      state.list.loading = false;
      state.list.error = null;
    });
    builder.addCase(fetchPostById.fulfilled, (state, { payload: post }) => {
      state.post = post;
      state.postError = null;
    });
    builder.addCase(fetchPostById.rejected, (state, { error }) => {
      state.postError = error.message;
    });
    builder.addCase(updatePostById.fulfilled, (state, { payload: post }) => {
      state.post = post;
      state.postError = '';
    });
    builder.addCase(updatePostById.rejected, (state, { error }) => {
      state.postError = error.message;
    });
    builder.addCase(removePostById.fulfilled, (state, { payload: post }) => {
      state.post = null;
      state.postError = '';
    });
    builder.addCase(removePostById.rejected, (state, { error }) => {
      state.postError = error.message;
    });
  },
});

export const postsAction = postsSlice.actions;
export default postsSlice.reducer;
