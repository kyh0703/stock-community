import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import darkTheme from '@/features/theme/types/dark';
import lightTheme from '@/features/theme/types/light';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>{children}</Router>
    </ThemeProvider>
  );
};
