import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './authAPI';

export interface AuthState {
  register: {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    email: string;
    password: string;
  };
  auth: null;
  authError?: string | null;
}

const initialState: AuthState = {
  register: {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    email: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
