import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './authAPI';

export interface AuthState {
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    username: string;
    password: string;
  };
  auth: null;
  authError?: string | null;
}

const initialState: AuthState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, { payload: auth }) => {
      state.auth = auth;
      state.authError = null;
    },
    registerFailure: (state, { payload: authError }) => {
      state.authError = authError;
    },
    LoginSuccess: (state, { payload: auth }) => {
      state.auth = auth;
      state.authError = null;
    },
    LoginFailure: (state, { payload: authError }) => {
      state.authError = authError;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, { payload: auth }) => {
      state.auth = auth;
      state.authError = null;
    });
    builder.addCase(register.rejected, (state, { error }) => {
      state.authError = error.message;
    });
    builder.addCase(login.fulfilled, (state, { payload: auth }) => {
      state.auth = auth;
      state.authError = null;
    });
    builder.addCase(login.rejected, (state, { error }) => {
      state.authError = error.message;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
