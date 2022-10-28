import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { access } from 'fs';
import { loginUser, registerUser } from './authAPI';

export interface AuthState {
  auth: {
    email: string;
    accessToken: string;
  } | null;
  authError?: string | null | undefined;
}

const initialState: AuthState = {
  auth: {
    email: '',
    accessToken: '',
  },
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, { payload: auth }) => {
      state.auth = null;
      state.authError = null;
    });
    builder.addCase(registerUser.rejected, (state, { error }) => {
      state.authError = error.message;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.auth = payload;
      state.authError = null;
    });
    builder.addCase(loginUser.rejected, (state, { error }) => {
      state.authError = error.message;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
