import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';
import storage from '@/lib/storage/storage.lib';

import { ValidationError } from '../types';

const signOut = () => {
  return client.post(`/api/auth/signout`);
};

export const signOutUser = createAsyncThunk<
  null,
  undefined,
  {
    rejectValue: ValidationError;
  }
>('user/signout', async (params, { rejectWithValue }) => {
  try {
    signOut();
    // storage.removeItem('access_token');
    return null;
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
