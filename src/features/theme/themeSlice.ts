import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create } from 'domain';

export type ThemeState = {
  theme: 'dark' | 'light' | 'default';
  systemTheme: 'dark' | 'light' | 'not-ready';
};

const initialState: ThemeState = {
  theme: 'default',
  systemTheme: 'not-ready',
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
    setSystemTheme(state, action: PayloadAction<'dark' | 'light'>) {
      state.systemTheme = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
