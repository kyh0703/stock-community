import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import client from '@/lib/client/client.lib';

import { AuthData, UserData, ValidationError } from '../types';

export interface SignInRequestDto {
  email: string;
  password: string;
}

export interface SignInResponseDto {
  user: UserData;
  auth: AuthData;
}

const signIn = (params: SignInRequestDto): Promise<SignInResponseDto> => {
  return client.post(`/api/auth/signin`, params);
};

export const signInUser = createAsyncThunk<
  SignInResponseDto,
  SignInRequestDto,
  {
    rejectValue: ValidationError;
  }
>('user/signin', async (params, { rejectWithValue }) => {
  try {
    return signIn(params);
    // const { accessToken, refreshToken } = response.data;
    // storage.setItem('access_token', accessToken);
    // storage.setItem('refresh_token', refreshToken);
  } catch (err) {
    let error: AxiosError<ValidationError> = err as any;
    // storage.removeItem('access_token');
    // storage.removeItem('refresh_token');
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
