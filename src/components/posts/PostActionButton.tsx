import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

interface Props {
  onEdit: () => void;
  onRemove: () => void;
}

const PostActionButton = ({ onEdit, onRemove }: Props) => {
  return <PostActionButtonBlock></PostActionButtonBlock>;
};

const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray6};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray1};
    color: ${palette.cyan7};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

export default PostActionButton;
