import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { UserData, ValidationError } from '../types';

export type SignUpRequestDto = {
  email: string;
  username: string;
  password: string;
};

const signUp = (params: SignUpRequestDto): Promise<UserData> => {
  return client.post(`/api/auth/signup`, params);
};

export const signUpUser = createAsyncThunk<
  UserData,
  SignUpRequestDto,
  {
    rejectValue: ValidationError;
  }
>('user/signup', async (params, { rejectWithValue }) => {
  try {
    return signUp(params);
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
