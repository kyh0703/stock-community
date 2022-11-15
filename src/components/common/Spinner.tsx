import React from 'react';
import styled, { keyframes } from 'styled-components';
import palette from '../../lib/styles/palette';

interface SpinnerProps {
  message?: string;
}

const Spinner = ({ message }: SpinnerProps) => {
  return (
    <SpinnerBlock>
      <SpinnerItem />
      {message && <SpinnerText>{message}</SpinnerText>}
    </SpinnerBlock>
  );
};

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
`;

const SpinnerItem = styled.div`
  position: relative;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  border: 1px solid ${palette.owlMagenta};
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

const SpinnerText = styled.em`
  color: ${(props) => props.theme.bodyContentColor};
  position: absolute;
  letter-spacing: 1.2px;
`;

export default Spinner;
