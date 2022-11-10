import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPostById, removePostById } from '../../features/posts/postsAPI';
import { postsAction } from '../../features/posts/postSlice';
import PostDetail from '../../components/posts/PostDetail';

const PostDetailContainer = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { post, error, loading } = useAppSelector(({ posts }) => ({
    post: posts.post,
    error: posts.error,
    loading: posts.loading,
  }));

  useEffect(() => {
    dispatch(fetchPostById(Number(postId)));
    return () => {
      dispatch(postsAction.initPostField());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    navigate('/write');
  };

  const onRemove = async () => {
    dispatch(removePostById(Number(postId)));
  };

  return <PostDetail post={post} error={error} loading={loading} />;
};

export default PostDetailContainer;
