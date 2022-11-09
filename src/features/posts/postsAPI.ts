import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../lib/client';
import { Post } from './postSlice';

const API_HOST = 'http://localhost:8000';

export interface PostListRequest {
  tag: string | null;
  page: number | null;
  username?: string;
}

export interface PostListResponse {
  posts: Post[] | null;
  lastPage: number;
}

export const fetchPosts = createAsyncThunk<PostListResponse, PostListRequest>(
  'posts/fetch',
  async (fields) => {
    try {
      const response = await client.get<Post[]>(`/api/posts`, {
        params: { fields },
      });
      const listResponse: PostListResponse = {
        posts: response.data,
        lastPage: Number(response.headers['last-page']),
      };
      return listResponse;
    } catch (err) {
      throw err;
    }
  },
);

export const fetchPostById = createAsyncThunk(
  'posts/fetchById',
  async (userId: number) => {
    const response = await client.get(`/api/posts/${userId}`);
    return response.data;
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
    const response = await client.post(`/api/posts/write`, {
      params,
    });
    return response.data;
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
  async (userId: number) => {
    const response = await client.delete(`/api/posts/${userId}`);
    return response.data.json();
  },
);
