import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/users/LoginPage';
import RegisterPage from './pages/users/Register';
import PostWritePage from './pages/posts/PostWritePage';
import PostListPage from './pages/posts/PostListPage';
import PostPage from './pages/posts/PostPage';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
