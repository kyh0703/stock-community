import React from 'react';
import styled from 'styled-components';

type ColorType =
  | 'teal'
  | 'gray'
  | 'darkGray'
  | 'lightGray'
  | 'transparent'
  | 'red';

type ButtonSize = 'medium' | 'large';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  color?: ColorType;
}

const Button: React.FC<ButtonProps> = () => {
  return <div></div>;
};

const ButtonBlock = styled.button<{
  color: ColorType;
  size: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

export default Button;
