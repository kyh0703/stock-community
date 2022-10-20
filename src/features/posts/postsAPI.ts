import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../../types/post';

const API_HOST = 'http://localhost:8000';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await axios.get('http://localhost:8000/api/posts');
  const data = await response.data;
  return (await response.data) as Post[];
});
