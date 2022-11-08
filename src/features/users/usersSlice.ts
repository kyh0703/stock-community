import { createSlice } from '@reduxjs/toolkit';
import { FaMeteor } from 'react-icons/fa';
import storage from '../../lib/storage';
import {
  getUserDetails,
  loginUser,
  logoutUser,
  registerUser,
} from './usersAPI';

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
  userAuth: {
    token: string;
    expire: number;
  } | null;
}

const initialState = {
  loading: false,
  error: null,
  success: false,
  userInfo: null,
  userAuth: userAuth,
} as UsersState;

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload: auth }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload: auth }) => {
      state.loading = false;
      state.userInfo = {
        id: auth.id,
        email: auth.email,
        username: auth.username,
      };
      state.userAuth = {
        token: auth.accessToken,
        expire: auth.accessTokenExpire,
      };
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUserDetails.fulfilled, (state, { payload: auth }) => {
      state.loading = false;
      state.userInfo = auth;
    });
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.userInfo = null;
      state.userAuth = null;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export const authActions = usersSlice.actions;
export default usersSlice.reducer;
