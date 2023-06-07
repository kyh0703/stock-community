import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { PostItem, ValidationError } from '../types';

export type FetChPostRequestDTO {
  postId: number;
}

export type FetchPostResponseDTO {
  post: PostItem;
}

const fetchPost = (
  params: FetChPostRequestDTO,
): Promise<FetchPostResponseDTO> => {
  return client.post(`/api/posts/${params.postId}`);
};

export const fetchPostById = createAsyncThunk<
  FetChPostRequestDTO,
  FetchPostResponseDTO,
  {
    rejectValue: ValidationError;
  }
>('posts/fetchById', async (params, { rejectWithValue }) => {
  try {
    return fetchPost(params);
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
