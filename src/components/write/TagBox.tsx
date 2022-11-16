import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

interface TagBoxProps {
  tags: string[];
  onChangeTags: (nextTags: string[]) => void;
}

const TagBox = ({ tags, onChangeTags }: TagBoxProps) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState<string[]>([]);

  const insertTag = useCallback((tag: string) => {
    if (!tag) return;
    if (localTags.includes(tag)) return;
    const nextTags = [...localTags, tag];
    setLocalTags(nextTags);
  }, []);

  const onRemove = useCallback(
    (tag: string) => {
      const nextTags = localTags.filter((t) => t === tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput('');
    },
    [input, insertTag],
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          type="text"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray2};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray8};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form``;

interface TagItemProps {
  tag: string;
  onRemove: (tag: string) => void;
}

const TagItem = React.memo(({ tag, onRemove }: TagItemProps) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray6};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

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

export default TagBox;
