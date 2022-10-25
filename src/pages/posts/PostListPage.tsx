import React from 'react';
import Button from '../../components/common/Button';
import HeaderContainer from '../../container/common/HeaderContainer';
import PostListContainer from '../../container/posts/PostListContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <Button color="gray">테스트버튼입니다</Button>
    </>
  );
};

export default PostListPage;
