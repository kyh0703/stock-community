import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postsAction } from '../../features/posts/postSlice';
import { createPostById, updatePostById } from '../../features/posts/postsAPI';

const WriteActionButtonContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { postId, title, body, tags, post, postError } = useAppSelector(
    ({ posts }) => ({
      postId: posts.write.id,
      title: posts.write.title,
      body: posts.write.body,
      tags: posts.write.tags,
      post: posts.post,
      postError: posts.error,
    }),
  );

  const onPublish = () => {
    // postId가 존재하면 이미 생성된 포스트
    if (postId) {
      console.log('update');
      dispatch(updatePostById({ id: postId, title, body, tags }));
      return;
    }

    // postId가 없으면 신규로 생성되어야 될 포스트
    console.log('insert tb');
    dispatch(createPostById({ title, body, tags }));
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    // 성공
    if (post) {
    }
    // 실패
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!postId}
    />
  );
};

export default WriteActionButtonContainer;
