import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authAPI';

export interface AuthState {
  auth: null;
  authError?: string | null;
}

const initialState: AuthState = {
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, { payload: auth }) => {
      state.auth = auth;
      state.authError = null;
    });
    builder.addCase(registerUser.rejected, (state, { error }) => {
      state.authError = error.message;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload: auth }) => {
      state.auth = auth;
      state.authError = null;
    });
    builder.addCase(loginUser.rejected, (state, { error }) => {
      state.authError = error.message;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
