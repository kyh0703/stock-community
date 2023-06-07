import { createSlice } from '@reduxjs/toolkit';

import { signUpUser, signInUser, signOutUser } from '@/app/auth/api/index';

import { UserData, AuthData } from '../types';

type UsersState = {
  isLoading: boolean;
  error: Error | null;
  userInfo: UserData | null;
  authInfo: AuthData | null;
};

const initialState = {
  isLoading: false,
  error: null,
  userInfo: null,
  authInfo: null,
} as UsersState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, { payload: auth }) => {
        state.isLoading = false;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message;
        }
      });
    builder
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, { payload: auth }) => {
        state.isLoading = false;
        state.userInfo = auth.user;
        state.authInfo = auth.auth;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message;
        }
      });
    builder
      .addCase(signOutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.userInfo = null;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
