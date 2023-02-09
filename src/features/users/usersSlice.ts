import { createSlice } from '@reduxjs/toolkit';
import { FaMeteor } from 'react-icons/fa';
import storage from '../../lib/storage';
import {
  getUserDetails,
  signupUser,
  signinUser,
  signoutUser,
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
        id: auth.id,
        email: auth.email,
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
    // getUserDetail
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
  },
});

export const authActions = usersSlice.actions;
export default usersSlice.reducer;
