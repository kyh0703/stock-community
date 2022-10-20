import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { fetchPosts } from '../../features/posts/postsAPI';
import PostList from '../../components/posts/PostList';

const PostListContainer = () => {
  const { posts, loading, error } = useAppSelector(({ posts }) => ({
    posts: posts.posts,
    loading: posts.loading,
    error: posts.error,
  }));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return <PostList posts={posts} loading={loading} error={error} />;
};

export default PostListContainer;
