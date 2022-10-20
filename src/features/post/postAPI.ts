import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../../types/post';

const API_HOST = 'http://localhost:8000';

export const fetchPostById = createAsyncThunk(
  'posts/fetchById',
  async (userId: number) => {
    const response = await axios({
      baseURL: API_HOST,
      url: `/api/posts/${userId}`,
    });
    return (await response.data.json()) as Post;
  },
);
