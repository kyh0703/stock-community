import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import { useAppSelector, useAppDispatch } from './app/hooks';
import GlobalStyle from './GlobalStyles';
import { themeActions } from './features/theme/themeSlice';
import { useEffect } from 'react';
import SignUpPage from './pages/auth/SignUpPage';
import SignInPage from './pages/auth/SignInPage';
import Header from './components/common/Header';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/home/NotFoundPage';

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
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
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
