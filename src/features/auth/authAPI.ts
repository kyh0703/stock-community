import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_HOST = 'http://localhost:8000';

export interface ValidationErrors {
  status: number;
  error: string | null | undefined;
}

export interface RegisterUserRequest {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

export interface RegisterUserResponse {}

export const register = <RegisterUserResponse>(fields: RegisterUserRequest) =>
  axios.post<RegisterUserResponse>(`${API_HOST}/api/users/signup`, fields, {
    headers: { 'Content-Type': 'application/json' },
  });

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  email: string;
  accessToken: string;
}
export const login = <LoginUserResponse>(fields: LoginUserRequest) =>
  axios.post<LoginUserResponse>(`${API_HOST}/api/users/login`, fields, {
    headers: { 'Content-Type': 'application/json' },
  });

export const logout = (fields: null) => {
  axios.post(`${API_HOST}/api/users/logout`);
};

export const check = (fields: null) => {
  axios.get(`${API_HOST}/api/users/check`);
};
