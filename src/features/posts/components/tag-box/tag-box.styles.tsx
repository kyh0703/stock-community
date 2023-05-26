import React from 'react';
import styled from 'styled-components';

import palette from '../../../../lib/styles/palette';

export const TagBoxContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray2};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray8};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

export const TagForm = styled.form``;

interface TagListProps {
  tags: string[];
  onRemove: (tag: string) => void;
}

const TagList = React.memo(({ tags, onRemove }: TagListProps) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
