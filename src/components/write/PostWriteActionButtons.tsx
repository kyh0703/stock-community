import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface WriteActionButtonsProps {
  onCancel: () => void;
}

const WriteActionButtons = ({ onCancel }: WriteActionButtonsProps) => {
  return (
    <WriteActionButtonsBlock>
      <Button>포스트</Button>
      <Button onClick={onCancel}>취소</Button>
    </WriteActionButtonsBlock>
  );
};

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

export default WriteActionButtons;
