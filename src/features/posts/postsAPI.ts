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
  tags: string[];
}

interface PostCreateResponse {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
}

export const createPostById = createAsyncThunk<
  PostCreateResponse,
  PostCreateRequest,
  {
    rejectValue: ValidationErrors;
  }
>('posts/create', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post<PostCreateResponse>(`/api/posts/write`, {
      params,
    });
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

interface PostUpdateRequest {
  id: number;
  title: string;
  body: string;
  tags: string[];
}

interface PostUpdateResponse {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
}

export const updatePostById = createAsyncThunk<
  PostUpdateResponse,
  PostUpdateRequest,
  {
    rejectValue: ValidationErrors;
  }
>('posts/updateById', async (params, { rejectWithValue }) => {
  try {
    const response = await client.patch<PostUpdateResponse>(`/api/posts`, {
      params,
    });
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

interface PostDeleteRequest {
  id: number;
}

interface PostDeleteResponse {
  id: number;
}

export const removePostById = createAsyncThunk<
  PostDeleteResponse,
  PostDeleteRequest,
  {
    rejectValue: ValidationErrors;
  }
>('posts/removeById', async (params, { rejectWithValue }) => {
  try {
    const response = await client.delete<PostDeleteResponse>(`/api/posts`, {
      params,
    });
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
