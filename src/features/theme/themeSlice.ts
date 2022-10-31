import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create } from 'domain';
import storage from '../../lib/storage';

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
      storage.setItem('theme', 'dark');
      state.theme = 'dark';
    },
    enableLightMode(state) {
      storage.setItem('theme', 'light');
      state.theme = 'light';
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
