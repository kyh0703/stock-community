import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';
import { PostItem, ValidationError } from '../types';

export interface FetchPostsRequestDto {
  tag: string | null;
  page: number | null;
  username?: string;
}

export interface FetchPostsResponseDto {
  posts: PostItem[] | null;
  lastPage: number;
}

const fetchPosts = async (
  params: FetchPostsRequestDto,
): Promise<FetchPostsResponseDto> => {
  const response = await client.post(`/api/posts`, params);
  return {
    posts: response.data.posts,
    lastPage: Number(response.headers['last-page']),
  } as FetchPostsResponseDto;
};

export const fetchPosList = createAsyncThunk<
  FetchPostsRequestDto,
  FetchPostsResponseDto,
  {
    rejectValue: ValidationError;
  }
>('posts/list', async (params, { rejectWithValue }) => {
  try {
    return fetchPosts(params);
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
