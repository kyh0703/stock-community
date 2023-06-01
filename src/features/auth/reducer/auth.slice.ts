import { createSlice } from '@reduxjs/toolkit';
import { FaMeteor } from 'react-icons/fa';
import storage from '../../../lib/storage';
import { signupUser, signinUser, signoutUser } from '../api/auth.api';

const userAuth = storage.getItem('userToken')
  ? storage.getItem('userToken')
  : null;

export interface UserInfo {
  id: number;
  email: string;
  username?: string;
}

interface UsersState {
  loading: boolean;
  error: string | null | undefined;
  success: boolean;
  userInfo: UserInfo | null;
}

const initialState = {
  loading: false,
  error: null,
  success: false,
  userInfo: null,
  userAuth: userAuth,
} as UsersState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // signup
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signupUser.fulfilled, (state, { payload: auth }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    });
    // signin
    builder.addCase(signinUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signinUser.fulfilled, (state, { payload: auth }) => {
      state.loading = false;
      state.userInfo = {
        email: auth.email,
        id: auth.userId,
        username: auth.username,
      };
    });
    builder.addCase(signinUser.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    });
    // signout
    builder.addCase(signoutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signoutUser.fulfilled, (state) => {
      state.loading = false;
      state.userInfo = null;
    });
    builder.addCase(signoutUser.rejected, (state, action) => {
      state.loading = false;
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
