import { createSlice } from '@reduxjs/toolkit';
import { FaMeteor } from 'react-icons/fa';
import storage from '../../lib/storage';
import {
  getUserDetails,
  loginUser,
  logoutUser,
  registerUser,
} from './usersAPI';

const userToken = storage.getItem('userToken')
  ? storage.getItem('userToken')
  : null;

export interface UserInfo {
  id: number;
  email: string;
  username?: string;
}

interface UsersState {
  loading: boolean;
  userInfo: UserInfo | null;
  userToken: {
    token: string;
    expire: number;
  } | null;
  error: string | null | undefined;
  success: boolean;
}

const initialState = {
  loading: false,
  userInfo: null,
  userToken: userToken,
  error: null,
  success: false,
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
      state.userToken = {
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
      state.userToken = null;
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
