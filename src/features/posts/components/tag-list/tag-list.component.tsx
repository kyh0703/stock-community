import React from 'react';

import TagItem from '../tag-item/tag-item.component';

import { TagListWrap } from './tag-list.styles';

interface TagListProps {
  tags: string[];
  onRemove: (tag: string) => void;
}

const TagList = React.memo(({ tags, onRemove }: TagListProps) => (
  <TagListWrap>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListWrap>
));

export default TagList;
