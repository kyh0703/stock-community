import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Post } from '../../features/posts/postSlice';
import palette from '../../lib/styles/palette';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { id, title, body } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@test/${id}`}>{title}</Link>
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
    border-top: 1px solid ${palette.owlRed};
  }
  h2 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    &:hover {
      color: ${(props) => props.theme.bodyContentHoverColor};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

export default PostItem;
