import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface WriteActionButtonsProps {
  onPublish: () => void;
  onCancel: () => void;
}

const WriteActionButtons = ({
  onPublish,
  onCancel,
}: WriteActionButtonsProps) => {
  return (
    <WriteActionButtonsBlock>
      <Button onClick={onPublish}>포스트</Button>
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
