import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
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

export interface UserRegisterResponse {
  accessToken: string;
}

export const registerUser = createAsyncThunk<
  UserRegisterResponse,
  UserRegisterRequest,
  {
    rejectValue: ValidationErrors;
  }
>('users/register', async (fields, { rejectWithValue }) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await axios.post<UserRegisterResponse>(
      `${API_HOST}/api/users/register`,
      fields,
      config,
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
  accessTokenExpire: number;
}

export const loginUser = createAsyncThunk<
  UserLoginResponse,
  UserLoginRequest,
  {
    rejectValue: ValidationErrors;
  }
>('users/login', async (fields, { rejectWithValue }) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await axios.post<UserLoginResponse>(
      `${API_HOST}/api/users/login`,
      fields,
      config,
    );

    const { accessToken, accessTokenExpire } = response.data;
    storage.setItem('userToken', {
      accessToken,
      accessTokenExpire,
    });
    return response.data;
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
>('users/profile', async (fields, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${fields.accessToken}`,
      },
    };

    const response = await axios.get<UserProfileResponse>(
      `${API_HOST}/api/users/check`,
      config,
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

export const logoutUser = createAsyncThunk<
  null,
  null,
  {
    rejectValue: ValidationErrors;
  }
>('users/logout', async (params, { rejectWithValue }) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await axios.post(`${API_HOST}/api/users/logout`);
    return null;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
