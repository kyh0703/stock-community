import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import client from '@/lib/client';
import storage from '@/lib/storage';

interface ValidationErrors {
  status: number;
  message: string | null | undefined;
}

export interface AuthSigninRequest {
  email: string;
  password: string;
}

export interface AuthSigninResponse {
  userId: number;
  email: string;
  username: string;
  tokenType: string;
  accessToken: string;
  accessExpire: number;
  refreshToken: string;
  refreshExpire: number;
}

export const signinUser = createAsyncThunk<
  AuthSigninResponse,
  AuthSigninRequest,
  {
    rejectValue: ValidationErrors;
  }
>('auth/signin', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post<AuthSigninResponse>(
      `/api/auth/signin`,
      params,
    );
    const { accessToken, refreshToken } = response.data;
    storage.setItem('access_token', accessToken);
    storage.setItem('refresh_token', refreshToken);
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    storage.removeItem('access_token');
    storage.removeItem('refresh_token');
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const signoutUser = createAsyncThunk<
  null,
  undefined,
  {
    rejectValue: ValidationErrors;
  }
>('auth/signout', async (params, { rejectWithValue }) => {
  try {
    storage.removeItem('access_token');
    return null;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
