import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create } from 'domain';

export type ThemeState = {
  theme: 'dark' | 'light';
};

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    enableDarkMode(state) {
      state.theme = 'dark';
    },
    enableLightMode(state) {
      state.theme = 'light';
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
