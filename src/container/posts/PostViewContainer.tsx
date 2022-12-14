import { useEffect } from 'react';
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
  const { userId, post, postError, loading } = useAppSelector(
    ({ posts, users }) => ({
      userId: users.userInfo?.id,
      post: posts.post,
      postError: posts.error,
      loading: posts.loading,
    }),
  );

  useEffect(() => {
    dispatch(fetchPostById({ postId: Number(postId) }));
    return () => {
      dispatch(postsAction.initPostField());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(postsAction.setUpdateWriteField(post));
    navigate('/write');
  };

  const onRemove = async () => {
    try {
      dispatch(removePostById({ id: Number(postId) }));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const isOwnPost = (userId?: number, postUserId?: number) =>
    userId === postUserId;

  const actionButton = isOwnPost(userId, post?.userId) ? (
    <PostActionButton onEdit={onEdit} onRemove={onRemove} />
  ) : (
    <div />
  );

  return (
    <PostView
      post={post}
      error={postError}
      loading={loading}
      actionButton={actionButton}
    />
  );
};

export default PostViewContainer;
