import React from 'react';
import { FaPallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          # ${tag}
        </Link>
      ))}
    </TagsBlock>
  );
};

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan7};
    text-decoration: none;
    margin-right: 0.5rem;
  }
  &:hover {
    color: ${palette.cyan6};
  }
`;
export default Tags;
