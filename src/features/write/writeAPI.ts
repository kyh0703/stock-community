import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../posts/postSlice';

const API_HOST = 'http://localhost:8000';

export const updatePostById = createAsyncThunk(
  'posts/updateById',
  async ({ id, title, body, tags }: Post) => {
    const response = await axios.patch(`/api/posts/${id}`, {
      title,
      body,
      tags,
    });
    return (await response.data.json()) as Post;
  },
);
