import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPostById, removePostById } from '../../features/posts/postsAPI';
import { postsAction } from '../../features/posts/postSlice';
import PostView from '../../components/posts/PostView';
import PostActionButton from '../../components/posts/PostActionButton';

const PostViewContainer = () => {
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
    try {
      await dispatch(removePostById(Number(postId)));
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostView
      post={post}
      error={error}
      loading={loading}
      actionButton={<PostActionButton onEdit={onEdit} onRemove={onRemove} />}
    />
  );
};

export default PostViewContainer;
