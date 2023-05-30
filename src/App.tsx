import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';

import { useAppSelector, useAppDispatch } from './app/hooks';
import { themeActions } from './features/theme/themeSlice';
import SignUpPage from './pages/auth/SignUpPage';
import SignInPage from './pages/auth/SignInPage';
import Header from '@features/ui/layouts/header/header.component';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/home/NotFoundPage';
import PostsPage from './pages/posts/PostsPage';
import GlobalStyle from './global.styles';

function App() {
  const { theme } = useAppSelector(({ theme }) => ({
    theme: theme.theme,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme');
    if (!saveTheme) return;

    if (saveTheme === 'dark') {
      dispatch(themeActions.enableDarkMode());
    } else {
      dispatch(themeActions.enableLightMode());
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="auth/*" />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="posts/*" element={<PostsPage />} />
          {/* <Route path="post">
            <Route path="write" element={<PostWritePage />} />
            <Route path="/@:username">
              <Route index element={<PostListPage />} />
              <Route path=":postId" element={<PostViewPage />} />
            </Route>
          </Route> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
