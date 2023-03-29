import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import client from '../../lib/client';
import storage from '../../lib/storage';

interface ValidationErrors {
  status: number;
  message: string | null | undefined;
}

export interface UserSignUpRequest {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface UserSignUpResponse {}

export const signupUser = createAsyncThunk<
  UserSignUpResponse,
  UserSignUpRequest,
  {
    rejectValue: ValidationErrors;
  }
>('auth/signup', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post<UserSignUpResponse>(
      `/api/auth/signup`,
      params,
    );
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export interface UserSignInRequest {
  email: string;
  password: string;
}

export interface UserSignInResponse {
  id: number;
  email: string;
  username: string;
  accessToken: string;
  refreshToken: number;
}

export const signinUser = createAsyncThunk<
  UserSignInResponse,
  UserSignInRequest,
  {
    rejectValue: ValidationErrors;
  }
>('auth/signin', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post<UserSignInResponse>(
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
    const response = await client.post(`/api/auth/signout`, params);
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

export interface UserProfileRequest {
  accessToken: string;
}

export interface UserProfileResponse {
  id: number;
  email: string;
  username: string;
  accessToken: string;
}

export const getUserDetails = createAsyncThunk<
  UserProfileResponse,
  UserProfileRequest,
  {
    rejectValue: ValidationErrors;
  }
>('users/profile', async (params, { rejectWithValue }) => {
  try {
    const response = await client.get<UserProfileResponse>(`/api/users/check`);
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
