import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Axios, AxiosError } from 'axios';
import {
  check,
  login,
  LoginUserRequest,
  LoginUserResponse,
  logout,
  register,
  RegisterUserRequest,
  RegisterUserResponse,
  ValidationErrors,
} from './authAPI';

export const registerUser = createAsyncThunk<
  RegisterUserResponse,
  RegisterUserRequest,
  {
    rejectValue: ValidationErrors;
  }
>('auth/register', async (fields, { rejectWithValue }) => {
  try {
    const response = await register<RegisterUserResponse>(fields);
    return response.data;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const loginUser = createAsyncThunk<
  LoginUserResponse,
  LoginUserRequest,
  {
    rejectValue: ValidationErrors;
  }
>('auth/login', async (fields, { rejectWithValue }) => {
  try {
    const response = await login<LoginUserResponse>(fields);
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
>('auth/logout', async (params, { rejectWithValue }) => {
  try {
    const response = await logout(params);
    return null;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const checkUser = createAsyncThunk<
  null,
  null,
  {
    rejectValue: ValidationErrors;
  }
>('auth/check', async (params, { rejectWithValue }) => {
  try {
    const response = await check(params);
    return null;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

interface AuthState {
  auth: {
    email: string;
    accessToken: string;
  } | null;
  authError: string | null | undefined;
}

const initialState = {
  auth: {
    email: '',
    accessToken: '',
  },
  authError: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, { payload: auth }) => {
      state.auth = null;
      state.authError = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      if (action.payload) {
        state.authError = action.payload.error;
      } else {
        state.authError = action.error.message;
      }
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.auth = payload;
      state.authError = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.payload) {
        state.authError = action.payload.error;
      } else {
        state.authError = action.error.message;
      }
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
