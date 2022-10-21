import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { fetchPosts } from '../../features/posts/postsAPI';
import PostList from '../../components/posts/PostList';

const PostListContainer = () => {
  const { posts, loading, error } = useAppSelector(({ posts }) => ({
    posts: posts.list.data,
    loading: posts.list.loading,
    error: posts.list.error,
  }));
  const dispatch = useAppDispatch();

  // loading posts data
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return <PostList posts={posts} loading={loading} error={error} />;
};

export default PostListContainer;
