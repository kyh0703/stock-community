import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Post } from '../../types/post';

const PostItem = (post: Post) => {
  const { id, title, body, tags, publish_at } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@asdfadsf/${id}`}>{title}</Link>
      </h2>
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid blue;
  }
  h2 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    &:hover {
      color: white;
    }
  }
  p {
    margin-top: 2rem;
  }
`;

export default PostItem;
