import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_HOST = 'http://localhost:8000';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  accessToken: string;
}

export const loginUser = createAsyncThunk(
  'auth/login',
  async (params: LoginRequest) => {
    const response = await axios.post(`${API_HOST}/users/login`, params, {
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.data;
    return data.value as LoginResponse;
  },
);

export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (params: RegisterRequest) => {
    const response = await axios.post(`${API_HOST}/api/users/signup`, params, {
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.data;
    return data.value;
  },
);

export const check = createAsyncThunk('auth/check', async () => {
  const response = await axios.get(`${API_HOST}/api/users/check`);
  const data = await response.data;
  return data.value;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await axios.post(`${API_HOST}/api/users/logout`);
  const data = await response.data;
  return data.value;
});
