import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPostById } from './postsAPI';
import {
  fetchPostById,
  fetchPosts,
  updatePostById,
  removePostById,
} from './postsAPI';

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
}

interface PostsState {
  loading: boolean;
  error: string | null | undefined;
  success: boolean;
  post: Post | null;
  write: {
    title: string;
    body: string;
    tags: string[];
    id: number;
  };
  list: {
    posts: Post[] | null;
    lastPage: number;
  };
}

const initialState: PostsState = {
  loading: false,
  error: null,
  success: false,
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

export interface InputPayload {
  key: 'body' | 'title' | 'tags';
  value: string | string[];
}

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
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(createPostById.fulfilled, (state, { payload: post }) => {
      state.loading = false;
      state.success = true;
      state.post = post;
    });
    builder.addCase(createPostById.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload: posts }) => {
      state.loading = false;
      state.list.posts = posts.posts;
      state.list.lastPage = posts.lastPage;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, { payload: error }) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchPostById.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPostById.fulfilled, (state, { payload: post }) => {
      state.loading = false;
      state.post = post.post;
    });
    builder.addCase(fetchPostById.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.error.message;
    });
    builder.addCase(updatePostById.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });
    builder.addCase(updatePostById.fulfilled, (state, { payload: post }) => {
      state.loading = false;
      state.success = true;
      state.post = post;
      state.error = '';
    });
    builder.addCase(updatePostById.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
    builder.addCase(removePostById.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removePostById.fulfilled, (state, { payload: post }) => {
      state.loading = false;
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
