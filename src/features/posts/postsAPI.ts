import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../lib/client';
import { Post } from './postSlice';
import { AxiosError } from 'axios';

interface ValidationErrors {
  status: number;
  message: string | null | undefined;
}

export interface PostsListRequest {
  tag: string | null;
  page: number | null;
  username?: string;
}

export interface PostsListResponse {
  posts: Post[] | null;
  lastPage: number;
}

export const fetchPosts = createAsyncThunk<
  PostsListResponse,
  PostsListRequest,
  {
    rejectValue: ValidationErrors;
  }
>('posts/list', async (params, { rejectWithValue }) => {
  try {
    const response = await client.get<{ posts: Post[] }>(`/api/posts/`, {
      params,
    });
    return {
      posts: response.data.posts,
      lastPage: Number(response.headers['last-page']),
    } as PostsListResponse;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export interface PostsFetchRequest {
  postId: number;
}

export interface PostsFetchResponse {
  post: Post;
}

export const fetchPostById = createAsyncThunk<
  PostsFetchResponse,
  PostsFetchRequest,
  {
    rejectValue: ValidationErrors;
  }
>('posts/fetchById', async (params, { rejectWithValue }) => {
  try {
    const response = await client.get<Post>(`/api/posts/${params.postId}`);
    return {
      post: response.data,
    };
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

interface PostCreateRequest {
  title: string;
  body: string;
  tags?: string[];
}

export const createPostById = createAsyncThunk(
  'posts/create',
  async (params: PostCreateRequest) => {
    const response = await client.post(`/api/posts/write`, {
      params,
    });
    return response.data;
  },
);

interface PostUpdateRequest {
  id: string;
  title: string;
  body: string;
  tags: string[];
}

export const updatePostById = createAsyncThunk(
  'posts/updateById',
  async ({ id, title, body, tags }: PostUpdateRequest) => {
    const response = await client.put(`/api/posts/${id}`, {
      title,
      body,
      tags,
    });
    return response.data;
  },
);

export const removePostById = createAsyncThunk(
  'posts/removeById',
  async (id: number) => {
    const response = await client.delete(`/api/posts/${id}`);
    return response.data;
  },
);
