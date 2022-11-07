import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import PostList from '../../components/posts/PostList';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchPosts } from '../../features/posts/postsAPI';

const PostListContainer = () => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const { posts, loading, error } = useAppSelector(({ posts }) => ({
    posts: posts.list.posts,
    loading: posts.list.loading,
    error: posts.list.error,
  }));
  const dispatch = useAppDispatch();

  // loading posts data
  useEffect(() => {
    const tag = searchParams.get('tag');
    const page = Number(searchParams.get('page')) || 1;
    dispatch(fetchPosts({ tag, page }));
  }, [dispatch]);

  return <PostList posts={posts} loading={loading} error={error} />;
};

export default PostListContainer;
