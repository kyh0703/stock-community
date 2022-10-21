import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_HOST = 'http://localhost:8000';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await axios.get(`${API_HOST}/api/posts`);
  return await response.data;
});

export const fetchPostById = createAsyncThunk(
  'posts/fetchById',
  async (userId: number) => {
    const response = await axios.get(`${API_HOST}/api/posts/${userId}`);
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
    const response = await axios.post(`${API_HOST}/api/posts/write`, {
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
    const response = await axios.put(`${API_HOST}/api/posts/${id}`, {
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
    const response = await axios.delete(`${API_HOST}/api/posts/${userId}`);
    return await response.data.json();
  },
);
