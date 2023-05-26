import { Routes, Route } from 'react-router-dom';
import PostListPage from './PostListPage';
import PostWritePage from './PostWritePage';

function PostsPage() {
  return (
    <Routes>
      <Route index element={<PostListPage />} />
      <Route path="write" element={<PostWritePage />} />
    </Routes>
  );
}

export default PostsPage;
