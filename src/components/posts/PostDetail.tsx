import React from 'react';
import styled from 'styled-components';
import { Post } from '../../features/posts/postSlice';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Tags from '../common/Tags';

interface PostDetailProps {
  post: Post | null;
  error: string | null | undefined;
  loading: boolean;
}

const PostDetail = ({ post, error, loading }: PostDetailProps) => {
  if (error) {
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, publishAt, tags } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
      </PostHead>
      <div>{body}</div>
      <PostContent />
      <Tags tags={tags} />
    </PostViewerBlock>
  );
};

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray2};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray8};
`;

export default PostDetail;
