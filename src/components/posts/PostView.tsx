import React from 'react';
import styled from 'styled-components';
import { Post } from '../../features/posts/postSlice';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Tags from '../common/Tags';

interface PostViewProps {
  post: Post | null;
  error: string | null | undefined;
  loading: boolean;
  actionButton?: JSX.Element;
}

const PostView = ({ post, error, loading, actionButton }: PostViewProps) => {
  if (error) {
    return <PostViewBlock>{error}</PostViewBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, tags, publishAt, userId, username } = post;
  return (
    <PostViewBlock>
      <PostHead>
        <h1>{title}</h1>
        <div>{body}</div>
        <PostContent />
        <Tags tags={tags} />
      </PostHead>
      {actionButton}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewBlock>
  );
};

const PostViewBlock = styled(Responsive)`
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

export default PostView;
