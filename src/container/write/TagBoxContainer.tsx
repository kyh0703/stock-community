import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import TagBox from '../../components/write/TagBox';
import { postsAction } from '../../features/posts/postSlice';

const TagBoxContainer = () => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector(({ posts }) => ({
    tags: posts.write.tags,
  }));

  const onChangeTags = (nextTags: string[]) => {
    dispatch(postsAction.changeWriteField({ key: 'tags', value: nextTags }));
  };

  return <TagBox tags={tags} onChangeTags={onChangeTags}></TagBox>;
};

export default TagBoxContainer;
