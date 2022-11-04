import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../lib/client';
import { Post } from './postsSlice';

const API_HOST = 'http://localhost:8000';

export interface PostListRequest {
  tag: string | null;
  page: number | null;
  username?: string;
}

export interface PostListResponse {
  lastPage: number;
  posts: Post[];
}

export const fetchPosts = createAsyncThunk<PostListResponse, PostListRequest>(
  'posts/fetch',
  async (fields) => {
    try {
      const response = await client.get(`${API_HOST}/api/posts`, {
        params: { fields },
      });
      return await response.data;
    } catch (err) {
      throw err;
    }
  },
);

export const fetchPostById = createAsyncThunk(
  'posts/fetchById',
  async (userId: number) => {
    const response = await client.get(`${API_HOST}/api/posts/${userId}`);
    return await response.data;
  },
);

interface CreatePostParams {
  title: string;
  body: string;
  tags?: string[];
}

export const createPostById = createAsyncThunk(
  'posts/create',
  async (params: CreatePostParams) => {
    const response = await client.post(`${API_HOST}/api/posts/write`, {
      params,
    });
    return await response.data;
  },
);

interface UpdatePostParams {
  id: string;
  title: string;
  body: string;
  tags: string[];
}

export const updatePostById = createAsyncThunk(
  'posts/updateById',
  async ({ id, title, body, tags }: UpdatePostParams) => {
    const response = await client.put(`${API_HOST}/api/posts/${id}`, {
      title,
      body,
      tags,
    });
    return await response.data;
  },
);

export const removePostById = createAsyncThunk(
  'posts/removeById',
  async (userId: number) => {
    const response = await client.delete(`${API_HOST}/api/posts/${userId}`);
    return await response.data.json();
  },
);
