import React from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postsAction } from '../../features/posts/postSlice';
import { createPostById } from '../../features/posts/postsAPI';

const WriteActionButtonContainer = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { title, body, tags, post, postError } = useAppSelector(
    ({ posts }) => ({
      title: posts.write.title,
      body: posts.write.body,
      tags: posts.write.tags,
      post: posts.post,
      postError: posts.error,
    }),
  );

  const onPublish = () => {
    dispatch(createPostById({ title, body, tags }));
  };

  const onCancel = () => {
    navigation(-1);
  };

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonContainer;
