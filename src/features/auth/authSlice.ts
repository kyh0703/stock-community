import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  register: {
    email: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    email: string;
    password: string;
  };
  auth: null;
  authError: null;
}

const initialState: AuthState = {
  register: {
    email: '',
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
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
