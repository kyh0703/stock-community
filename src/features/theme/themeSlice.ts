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
      localStorage.setItem('theme', 'dark');
      state.theme = 'dark';
    },
    enableLightMode(state) {
      localStorage.setItem('theme', 'light');
      state.theme = 'light';
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
