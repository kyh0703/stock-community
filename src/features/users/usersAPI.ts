import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { string, ValidationError } from 'yup';
import client from '../../lib/client';
import storage from '../../lib/storage';

const API_HOST = 'http://localhost:8000';

export interface ValidationErrors {
  status: number;
  message: string | null | undefined;
}

export interface UserRegisterRequest {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface UserRegisterResponse {}

export const registerUser = createAsyncThunk<
  UserRegisterResponse,
  UserRegisterRequest,
  {
    rejectValue: ValidationErrors;
  }
>('users/register', async (fields, { rejectWithValue }) => {
  try {
    const response = await client.post<UserRegisterResponse>(
      `/api/users/register`,
      fields,
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

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  id: number;
  email: string;
  username: string;
  accessToken: string;
  refreshToken: number;
}

export const loginUser = createAsyncThunk<
  UserLoginResponse,
  UserLoginRequest,
  {
    rejectValue: ValidationErrors;
  }
>('users/login', async (fields, { rejectWithValue }) => {
  try {
    const response = await client.post<UserLoginResponse>(
      `/api/users/login`,
      fields,
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
>('users/profile', async (fields, { rejectWithValue }) => {
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

export const logoutUser = createAsyncThunk<
  null,
  undefined,
  {
    rejectValue: ValidationErrors;
  }
>('users/logout', async (params, { rejectWithValue }) => {
  try {
    const response = await client.post(`/api/users/logout`, params);
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
