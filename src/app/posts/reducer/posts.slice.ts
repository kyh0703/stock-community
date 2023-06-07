import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createPostById } from '../api/posts.api';
import {
  fetchPostById,
  fetchPosts,
  updatePostById,
  removePostById,
} from '../api/posts.api';
import { PostItem } from '../types';

export interface InputPayload {
  key: 'body' | 'title' | 'tags';
  value: string | string[];
}

type PostsState = {
  isLoading: boolean;
  error: string | null | undefined;
  post: PostItem | null;
  write: {
    title: string;
    body: string;
    tags: string[];
    id: number;
  };
  list: {
    posts: PostItem[] | null;
    lastPage: number;
  };
};

const initialState: PostsState = {
  isLoading: false,
  error: null,
  post: null,
  write: {
    title: '',
    body: '',
    tags: [],
    id: 0,
  },
  list: {
    posts: null,
    lastPage: 1,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    initWriteFiled: (state) => {
      state.write.title = '';
      state.write.body = '';
      state.write.tags = [];
    },
    setUpdateWriteField: (state, { payload: { title, body, tags, id } }) => {
      state.write.title = title;
      state.write.body = body;
      state.write.tags = tags;
      state.write.id = id;
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
    initPostField: (state) => {
      state.post = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPostById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createPostById.fulfilled, (state, { payload: post }) => {
      state.isLoading = false;
      state.post = post;
    });
    builder.addCase(createPostById.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload: posts }) => {
      state.isLoading = false;
      state.list.posts = posts.posts;
      state.list.lastPage = posts.lastPage;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchPostById.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPostById.fulfilled, (state, { payload: post }) => {
      state.isLoading = false;
      state.post = post.post;
    });
    builder.addCase(fetchPostById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(updatePostById.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updatePostById.fulfilled, (state, { payload: post }) => {
      state.isLoading = false;
      state.post = post;
      state.error = '';
    });
    builder.addCase(updatePostById.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(removePostById.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(removePostById.fulfilled, (state, { payload: post }) => {
      state.isLoading = false;
      state.post = null;
      state.error = null;
    });
    builder.addCase(removePostById.rejected, (state, { error }) => {
      state.error = error.message;
    });
  },
});

export const postsAction = postsSlice.actions;
export default postsSlice.reducer;
