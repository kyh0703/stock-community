import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/users/LoginPage';
import RegisterPage from './pages/users/Register';
import PostWritePage from './pages/posts/PostWritePage';
import PostListPage from './pages/posts/PostListPage';
import PostPage from './pages/posts/PostPage';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import { useAppSelector, useAppDispatch } from './app/hooks';
import GlobalStyle from './GlobalStyles';

function App() {
  const { theme } = useAppSelector(({ theme }) => ({
    theme: theme.theme,
  }));
  const dispatch = useAppDispatch();

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/write" element={<PostWritePage />} />
          <Route path="/@:username">
            <Route index element={<PostListPage />} />
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
