import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_HOST = 'http://localhost:8000';

export interface LoginUserParams {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async (params: LoginUserParams) => {
    const response = await axios.post(`${API_HOST}/users/login`, { params });
    const data = await response.data;
    return data.value;
  },
);

export interface RegisterUserParams {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
}

export const register = createAsyncThunk(
  'auth/register',
  async (params: RegisterUserParams) => {
    const response = await axios.post(`${API_HOST}/api/users/signup`, {
      params,
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
